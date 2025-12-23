import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

interface GameCardProps {
  title: string;
  description: string;
  imageSource: string;
  onClick: () => void;
}

function GameCard({ title, description, imageSource, onClick }: GameCardProps) {
  return (
    <Card border="dark" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageSource} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="light" onClick={onClick}>
          Select
        </Button>
      </Card.Body>
    </Card>
  );
}

export default GameCard;
