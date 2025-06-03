import React, { useEffect, useState } from "react";

function Notes() {
  const [notesList, setNotesList] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const lastNotes = localStorage.getItem("notes");
    setNotesList(JSON.parse(lastNotes));
  }, []);

  const handleAddNote = () => {
    if (newNote.trim() !== "") {
      const updatedNotes = [...notesList, newNote];
      setNotesList(updatedNotes);
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      setNewNote("");
    }
  };

  const handleDelete = (indexToDelete) => {
    const updatedNotes = notesList.filter(
      (_, index) => index !== indexToDelete
    );
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setNotesList(updatedNotes);
  };

  const filteredNotes = notesList.filter((note) => 
    note.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <input
        type="text"
        placeholder="search notes"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="add new Note"
        onChange={(e) => setNewNote(e.target.value)}
      />{" "}
      <button onClick={handleAddNote}> Add </button>
      <ul>
        {filteredNotes.map((note, index) => (
          <li key={index}>
            {note} <button onClick={() => handleDelete(index)}>Del</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;
