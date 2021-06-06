import React, { useState } from "react";

export const AddNote = (props) => {
  let style = {
    marginBottom: "20px",
  };

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank.");
    } else {
      props.addNote(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div>
      <div className="wrapper">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
          ADD NOTE
        </h2>
        <div className="relative mb-4">
          <label htmlFor="heading" className="leading-7 text-sm text-gray-600">
            TITLE
          </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            id="title"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="note-text"
            className="leading-7 text-sm text-gray-600"
          >
            DESCRIPTION
          </label>
          <input
            type="text"
            name="content"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            id="content"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button
          className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
          onClick={submit}
          style={style}
        >
          SUBMIT &#8594;
        </button>
      </div>
    </div>
  );
};
