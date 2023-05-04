import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards-container">
      <Card bg="dark" border="dark" text="light">
        <Card.Body>
          <Card.Title>Nutrient calculator</Card.Title>
          <Card.Text>
            The nutrient calculator will help you calculate the required amount
            of plant nutrients based on the planned yield and vegetative
            conditions.
          </Card.Text>
          <Button variant="outline-secondary">
            <Link to="/elementsform">Try</Link>
          </Button>
        </Card.Body>
      </Card>
      <Card bg="dark" border="dark" text="light">
        <Card.Body>
          <Card.Title>Tankmix calculator</Card.Title>
          <Card.Text>
            The tank mix calculator can select the optimal composition of
            stabilizers to prevent sediment formation in tank mixes.
          </Card.Text>
          <Button variant="outline-secondary">
            <Link to="/tankform">Try</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
