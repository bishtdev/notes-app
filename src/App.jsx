import { useContext, useState } from "react";
import "./App.css";
import Notes from "./components/Notes";
import { noteContext } from "./context/noteContext";

function App() {
  const [showCard, setShowCard] = useState(false);
  const [newText, setNewText] = useState("");

  const { notes, addNote } = useContext(noteContext);

  const renderNotes = () => {
    return notes.map((note, idx) => (
      <Notes key={idx} text={note.text} date={note.date} id={idx} />
    ));
  };

  const handleAdd = () => {
    const newNote = {
      text: newText, // Use newText instead of text
      date: new Date().toLocaleDateString() // Format date properly
    };
    addNote(newNote);
    setNewText(""); // Clear the textarea after adding the note
    setShowCard(false); // Hide the card after adding the note
  };

  return (
    <div className="app">
      <div className="sidebar">
        <h3>NotePal</h3>
        <button className="btn" onClick={() => setShowCard(!showCard)}>
          +
        </button>
      </div>
      <div className="content">
        <h1>Notes</h1>
        <div className="notes-container">

          {showCard && (
            <div className="new-note note">
              <textarea
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                rows={20}
                cols={50}
              ></textarea>
              <button className="btn" onClick={handleAdd}>Add</button>
            </div>
          )}

          {renderNotes()}

        </div>
      </div>
    </div>
  );
}

export default App;
