import { createContext, useEffect, useState } from "react";

export const noteContext = createContext(null);

export default function ContextProvider(props) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchedData = fetchFromLocal();
    if (fetchedData) {
      setNotes(fetchedData);
    } else {
      setNotes([]);
    }
  }, []);

  useEffect(() => {
    saveToLocal(notes)
  }, [notes]);

  const addNote = (newNote) => {
    setNotes((prev) => [newNote, ...prev]);
  };

  const delNote = (idx) => {
    setNotes((prev) => {
      const temp = [...prev];
      temp.splice(idx, 1);
      return temp;
    });
  };

  const saveToLocal = (notes) => {
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  const fetchFromLocal = () => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      return JSON.parse(storedNotes);
    }
    return [];
  };

  const val = { notes, addNote, delNote };

  return (
    <noteContext.Provider value={val}>{props.children}</noteContext.Provider>
  );
}
