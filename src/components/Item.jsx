import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import "./Item.scss";

const Item = ({ id, category, description, deleteItem, setUpdate }) => {
  return (
    <Card className="item-container">
      <CardBody>
        <CardTitle tag="h5">{category}</CardTitle>
        <CardText>{description}</CardText>
        <div className="action-container">
          <Button className="edit-button" color="warning" onClick={() => setUpdate(id)}>Edit</Button>
          <Button color="danger" onClick={() => deleteItem({ variables: { id } })}>Delete</Button>
        </div>
      </CardBody>
    </Card>
  )
};

export default Item;