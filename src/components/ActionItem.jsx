import React, { useRef, useState } from 'react';
import { Button, Card, CardBody, Form } from 'reactstrap';
import FormInput from './FormInput';
import "./ActionItem.scss";

const onSubmit = (event, data, action, setUpdate) => {
  event.preventDefault();
  const { category = '', description = '', id } = data;
  console.log(data);
  if (category && description) {
    if (id) {
      action({ variables: { id, input: { description, category } } });
      setUpdate(null);
      return;
    }
    action({ variables: { input: { description, category } } });
  }
};

const handleInputChange = ({ target: { name, value } }, data, setData) => {
  setData({ ...data, [name]: value });
};

const getInitialState = (id, description, category) => {
  if (!id) return {};
  return {
    id,
    category,
    description
  }
};

const ActionItem = ({ action, setUpdate, id, description, category }) => {
  const [data, setData] = useState(getInitialState(id, description, category));
  const formRef = useRef();

  return (
    <Card className="new-item-container">
      <CardBody>
        <Form ref={formRef} onSubmit={event => onSubmit(event, data, action, setUpdate)}>
          <FormInput
            name="Category"
            onChange={event => handleInputChange(event, data, setData)}
            value={data && data.category}
          />
          <FormInput
            name="Description"
            onChange={event => handleInputChange(event, data, setData)}
            value={data && data.description}
          />
          <Button type="submit" color="primary">{!!id ? 'Update' : 'Add'}</Button>
        </Form>
      </CardBody>
    </Card>
  )
};

export default ActionItem;
