import React, { useState } from "react";
import "./Note.css";
import { MdDelete } from "react-icons/Md";
import { PiNotePencilBold } from "react-icons/pi";

const Note = () => {
  let [dataArray, setdataArray] = useState([]);
  let [note, setNote] = useState("");
  let [editMode, setEditMode] = useState(false);
  let [editedText, setEditedText] = useState();

  let handleAdd = () => {
    setEditMode(false);
    if (!note) {
      return;
    }
    if (editMode) {
      Update();
      setNote("");
      // setEditMode(null);
      return;
    }
    let newNote = {
      note,
      id: Math.random(),
    };

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

  let handleEdit = (item) => {
    setNote(item.note);
    setEditedText(item);
    setEditMode(true);
  };

  let Update = () => {
    setdataArray((prev) => {
      return prev.map((singleItem) => {
        if (singleItem.id == editedText.id) {
          return { ...singleItem, note: note };
        } else {
          return singleItem;
        }
      });
    });
  };

  return (
    <div className="appContainer">
      <div className="container">
        <h1 className="headingTitle">Notes</h1>
        <div className="inputWrapper">
          <input
            className="inputBox"
            onChange={(e) => {
              setNote(e.target.value);
            }}
            placeholder="Enter the note"
            type="text"
            value={note}
          />
          <button value={note} onClick={handleAdd} className="addBtn">
            {editMode ? "Save" : "Add"}
          </button>
        </div>
        <div className="listingItemsWrapper">
          <ul className="listingItems">
            {dataArray.length == "0" ? (
              <h1>No Notes</h1>
            ) : (
              dataArray.map((item) => {
                return (
                  <li className="listedItems">
                    <div className="itemWrapper">{item?.note}</div>
                    <PiNotePencilBold
                      onClick={() => {
                        handleEdit(item);
                      }}
                      className="editNote"
                    />

                    <MdDelete
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                      className="deleteIcon"
                    />
                  </li>
                );
              })
            )}
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
