import React, { useState } from "react";
import "./Note.css";
import { MdDelete } from "react-icons/Md";
import { PiNotePencilBold } from "react-icons/pi";

const Note = () => {
  let [dataArray, setdataArray] = useState([]);
  let [note, setNote] = useState("");

  let handleinputChange = (e) => {
    setNote(e.target.value);
    console.log(note);
  };
  let handleAdd = () => {
    if (note === "") {
      return;
    }
    let newNote = {
      note,
      id: Math.random(),
    };
    if (note === " ") {
      return;
    }
    setdataArray((prev) => {
      return [...prev, newNote];
    });
    setNote("");
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
        <h1 className="headingTitle">To Do List</h1>
        <div className="inputWrapper">
          <input
            className="inputBox"
            onChange={handleinputChange}
            placeholder="Enter the note"
            type="text"
            value={note}
          />
          <button value={note} onClick={handleAdd} className="addBtn">
            Add
          </button>
        </div>
        <div className="listingItemsWrapper">
          <ul className="listingItems">
            {dataArray.map((item) => {
              return (
                <li className="listedItems">
                  <div className="itemWrapper">{item?.note}</div>
                  <PiNotePencilBold className="editNote" />
                  <button
                    className="deleteBtn"
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    <MdDelete className="deleteIcon" />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="footer">
        <h3>Powered by Abishkar dhenga</h3>
      </div>
    </div>
  );
};

export default Note;
