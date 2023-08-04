import React, { useState } from "react";
import "./Note.css";

const Note = () => {
  let [dataArray, setdataArray] = useState([]);
  let [note, setNote] = useState("");

  let handleinputChange = (e) => {
    setNote(e.target.value);
    console.log(note);
  };
  let handleAdd = () => {
    let newNote = {
      note,
      id: Math.random(),
    };
    return setdataArray((prev) => {
      return [...prev, newNote];
    });
  };
  let handleDelete = (id) => {
    let updatedArray = dataArray.filter((prev) => {
      return prev.id !== id;
    });
    setdataArray(updatedArray);
  };
  return (
    <div className="appContainer">
      <div className="container">
        <h1 className="headingTitle">Note</h1>
        <div className="inputWrapper">
          <input
            className="inputBox"
            onChange={handleinputChange}
            placeholder="Enter the note"
            type="text"
          />
          <button value={note} onClick={handleAdd} className="deleteBtn">
            Add
          </button>
        </div>
        <div className="listingItems">
          <ul>
            {dataArray.map((item) => {
              return (
                <li>
                  {item.note}
                  <button
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Note;
