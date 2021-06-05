import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { AddNote } from "./components/AddNote";
import { Notes } from "./components/Notes";
import { Footer } from "./components/Footer";
import "./components/styles/App.css";
import "./components/styles/tailwind.css";

function App() {
  let initNote;
  if (localStorage.getItem("notes") === null) {
    initNote = [];
  } else {
    initNote = JSON.parse(localStorage.getItem("notes"));
  }

  const onDelete = (note) => {
    setNotes(
      notes.filter((e) => {
        return e !== note;
      })
    );
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  const addNote = (title, desc) => {
    let sno;
    if (notes.length === 0) {
      sno = 0;
    } else {
      sno = notes[notes.length - 1].sno + 1;
    }
    const myNote = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setNotes([...notes, myNote]);
  };

  const [notes, setNotes] = useState(initNote);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <Header />
      <AddNote addNote={addNote} />
      <Notes notes={notes} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
