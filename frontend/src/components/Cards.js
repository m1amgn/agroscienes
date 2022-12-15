import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <div className="cards-container">
      <Card>
        <Card.Body>
          <Card.Title>Калькулятор удобрений</Card.Title>
          <Card.Text>
            Калькулятор удобрений поможет рассчитать необходимое количество
            элементов питания растений в зависимости от планируемой урожайности
            и условий вегетации.
          </Card.Text>
          <Button variant="dark">
            <Link to="/elementsform">Перейти</Link>
          </Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Калькулятор баковых смесей</Card.Title>
          <Card.Text>
            Калькулятор баковых смесей поможет подобрать оптимальную композицию
            стабилизаторов для предотвращения образования осадка в баковых
            смесях.
          </Card.Text>
          <Button variant="dark">
            <Link to="/tankform">Перейти</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
