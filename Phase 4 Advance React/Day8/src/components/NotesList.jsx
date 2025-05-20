// components/NotesList.jsx
import { useState } from "react";
import useNotes from "../hooks/useNotes";
import NoteCard from "./NoteCard";

export default function NotesList() {
  const { notes } = useNotes();
  const [query, setQuery] = useState("");

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(query.toLowerCase()) ||
    note.content.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="notes-container">
      <input
        type="text"
        placeholder="Search notes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-bar"
      />
      <div className="note-grid">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))
        ) : (
          <p>No notes found</p>
        )}
      </div>
    </div>
  );
}
