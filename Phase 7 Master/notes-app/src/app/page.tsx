"use client";
import React, { useEffect, useState } from "react";
import styles from './Home.module.css';
import AddnoteModal from "./AddnoteModal";

export default function Home() {
  const [notes, setNotes] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(()=>{
    const savedNotes = localStorage.getItem("notes");
    if(savedNotes){
      setNotes(JSON.parse(savedNotes));
    }
  },[])

  const handleAddNote = (note: string) => {
    setNotes((prev) => [...prev, note]);
    const updatedNotes = [...notes, note];
    localStorage.setItem("notes",JSON.stringify(updatedNotes));
  }

  const handleDeleteNote = (indexToDelete: number) => {
    setNotes((prevNotes) =>
      prevNotes.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <div className={styles["notes-wrapper"]}>
      <h1>My Notes</h1>

      <button onClick={() => setIsModalOpen(true)} className={styles["open-modal-btn"]}>
        + New Note
      </button>

      {/* 📃 Notes List */}
      <ul className={styles["notes-list"]}>
        {notes.map((note, index) => (
          <li key={index} className={styles["note-item"]}>
            <span>{`${index + 1}. ${note}`}</span>
            <button onClick={() => handleDeleteNote(index)}>Del</button>
          </li>
        ))}
      </ul>

      {isModalOpen && (
        <AddnoteModal onAdd={handleAddNote} onClose={()=>setIsModalOpen(false)}/>
      )}
    </div>
  );
}
