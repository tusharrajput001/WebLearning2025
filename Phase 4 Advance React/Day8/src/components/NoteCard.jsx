// components/NoteCard.jsx
import useNotes from "../hooks/useNotes";

export default function NoteCard({ note }) {
  const { deleteNote } = useNotes();

  return (
    <div className="note-card">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={() => deleteNote(note.id)}>Delete</button>
    </div>
  );
}
