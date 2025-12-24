import Card from "react-bootstrap/Card";

interface GameCardProps {
  title: string;
  description: string;
  imageSource: string;
  onClick: () => void;
}

function GameCard({ title, description, imageSource, onClick }: GameCardProps) {
  return (
    <Card
      border="dark"
      style={{ width: "18rem", cursor: "pointer" }}
      className="game-card shadow-p m-2"
      onClick={onClick}
    >
      <Card.Img variant="top" src={imageSource} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default GameCard;
