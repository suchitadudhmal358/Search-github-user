import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const MyCard = ({ details }) => {
  return (
    <Card>
      <CardBody className="text-center">
        <img
          height="150"
          width="150"
          className="rounded-circle img-thumbnail border-danger"
          src={details.picture?.large}
          alt=""
        />
        <CardTitle className="text-primary">
          <h1>
            <span className="me-2">{details.name?.title}</span>
            <span className="me-2">{details.name?.first}</span>
            <span>{details.name?.last}</span>
          </h1>
        </CardTitle>
        <CardText>
          <p>
            <FaMapMarkedAlt /> {details.location?.city}
          </p>
          <p>
            <FaEnvelope /> {details.email}
          </p>
          <p>
            <FaPhone /> {details.phone}
          </p>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default MyCard;
