import React from "react";
import { Note } from "./Note";

export const Notes = (props) => {
  return (
    <div className="notes-group">
      {props.notes.length === 0 ? (
        <div className="card">
          <div className="card-body">No notes to display.</div>
        </div>
      ) : (
        props.notes.map((note) => {
          return <Note note={note} key={note.sno} onDelete={props.onDelete} />;
        })
      )}
    </div>
  );
};
