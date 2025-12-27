import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Collapse from "react-bootstrap/Collapse";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";

interface RoomItemProps {
  icon: string;
  name: string;
  code: string;
  maxCapacity: number;
}

export default function Room({ icon, name, code, maxCapacity }: RoomItemProps) {
  const [currentCapacity, setCurrentCapacity] = useState(0);
  const [playerName, setPlayerName] = useState("");
  const [players, setPlayers] = useState<string[]>([]);
  const [showPlayers, setShowPlayers] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);

  const isRoomFull = currentCapacity >= maxCapacity;

  return (
    <ListGroup.Item className="d-flex align-items-center">
      <div className="d-flex align-items-center gap-3 flex-grow-1">
        <span className="fs-5">{icon}</span>

        <div>
          <div className="fw-semibold">{name}</div>
          <small>Code: {code}</small>
          <Button
            variant="light"
            size="sm"
            className="p-0 text-muted d-flex"
            onClick={() => setShowPlayers((prev) => !prev)}
          >
            Players
            <span>{showPlayers ? <BsChevronUp /> : <BsChevronDown />}</span>
          </Button>

          <Collapse in={showPlayers}>
            <div>
              <ListGroup className="list-group-horizontal">
                {players.map((player) => (
                  <ListGroup.Item key={player}>{player}</ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </Collapse>
        </div>
      </div>

      <span className="text-muted me-3">
        {currentCapacity} / {maxCapacity}
      </span>

      <Button
        variant={`${isRoomFull ? "danger" : "success"}`}
        size="sm"
        disabled={isRoomFull}
        onClick={() => setShowJoinModal(true)}
      >
        Join
      </Button>

      <Modal
        show={showJoinModal}
        onHide={() => setShowJoinModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Join: {name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Label>Enter Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              autoFocus
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
            ></Form.Control>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowJoinModal(false)}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setShowJoinModal(false);
              setCurrentCapacity((prev) => prev + 1);
              setPlayers((prev) => [...prev, playerName]);
              setPlayerName(""); // Clears textbox input
            }}
          >
            Join
          </Button>
        </Modal.Footer>
      </Modal>
    </ListGroup.Item>
  );
}
