import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

interface JoinRoomModalProps {
  roomName: string;
  isRoomFull: boolean;
  handleJoin: (playerName: string) => void;
}

export default function JoinRoomModal({
  roomName,
  isRoomFull,
  handleJoin,
}: JoinRoomModalProps) {
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const canSumbit = playerName.trim().length > 0;

  function handleSumbit() {
    if (!canSumbit) return;
    handleJoin(playerName.trim());
    setPlayerName(""); // Clears textbox input
    setShowJoinModal(false);
  }

  return (
    <>
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
          <Modal.Title>Join: {roomName}</Modal.Title>
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
          <Button variant="primary" onClick={() => handleSumbit()}>
            Join
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
