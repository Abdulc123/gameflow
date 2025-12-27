import RoomItem from "../components/RoomItem";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

export default function Lobby() {
  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-start pt-5">
      <Card className="w-100" style={{ maxWidth: 800 }} border="dark">
        <Card.Header>
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-semibold">Available Roooms</span>
            <Button>Create Room</Button>
          </div>
        </Card.Header>

        <div style={{ maxHeight: 500, overflowY: "auto" }}>
          <ListGroup variant="flush">
            <RoomItem
              icon="🎲"
              name="Poker Room"
              code="AB123"
              maxCapacity={4}
            />
            <RoomItem icon="🎲" name="Poker Fun" code="AB123" maxCapacity={4} />
            <RoomItem icon="🎲" name="Poker Fun" code="AB123" maxCapacity={8} />
            <RoomItem icon="🎲" name="Poker Fun" code="AB123" maxCapacity={8} />
          </ListGroup>
        </div>
      </Card>
    </div>
  );
}
