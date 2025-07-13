import React, { useState } from "react";
import styles from "./Home.module.css";

interface AddNoteModalProps {
  onAdd: (note: string) => void;
  onClose: () => void;
}

export default function AddnoteModal({ onAdd, onClose }: AddNoteModalProps) {
  const [note, setNote] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page refresh
    if (note.trim()) {
      onAdd(note);
      setNote("");
      onClose();
    } else {
      console.log("Can't add empty note");
    }
  };

  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal-content"]}>
        <h2>Add Note</h2>
        <form onSubmit={handleSubmit} className={styles["add-row"]}>
          <input
            type="text"
            placeholder="Enter note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <button type="submit" disabled={!note.trim()}>
            Add
          </button>
          <button
            type="button"
            onClick={onClose}
            className={styles["cancel-btn"]}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
