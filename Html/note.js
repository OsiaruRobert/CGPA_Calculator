const notesContainer = document.getElementById("notesContainer");
const notepad = document.getElementById("notepad");
let notes = JSON.parse(localStorage.getItem("notes")) || [];
let currentNoteIndex = null; // Store the index of the note currently being edited

// Function to display notes
function displayNotes() {
  notesContainer.innerHTML = "";
  notes.forEach((note, index) => {
    const noteDiv = document.createElement("div");
    noteDiv.className = "note";
    noteDiv.innerHTML = note;

    // Create edit button for each note
    const editButton = document.createElement("button");
    editButton.className = "edit-button";
    editButton.innerText = "Edit";
    editButton.onclick = () => loadNoteForEditing(index);

    // Create delete button for each note
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.innerText = "Delete";
    deleteButton.onclick = () => {
      deleteNote(index);
    };

    noteDiv.appendChild(editButton);
    noteDiv.appendChild(deleteButton);
    notesContainer.appendChild(noteDiv);
  });
}

// Load a note into the editor for editing
function loadNoteForEditing(index) {
  currentNoteIndex = index; // Set the index of the note being edited
  notepad.innerHTML = notes[index]; // Load note into the editor
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scrolling
  });
}

// Function to save the note
document.getElementById("saveButton").addEventListener("click", function() {
  const noteContent = notepad.innerHTML;
  if (noteContent.trim() === "") {
    return;
  }

  if (currentNoteIndex !== null) {
    // Editing an existing note
    notes[currentNoteIndex] = noteContent; // Update the existing note
    currentNoteIndex = null; // Reset index
  } else {
    // Saving a new note
    notes.push(noteContent); // Add new note
  }

  localStorage.setItem("notes", JSON.stringify(notes));
  notepad.innerHTML = "Type your notes here..."; // Clear the notepad
  displayNotes(); // Refresh the notes list
  myAlertWork("Note saved!");
});

// Function to delete a note
function deleteNote(index) {
  if (confirm("Are you sure you want to delete this note?")) {
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes(); // Refresh the notes list
  }
}

// Clear all notes
document.getElementById("clearButton").addEventListener("click", function() {
  notepad.innerHTML = "Type your notes here..."; // Clear the notepad
  myAlertWork("notes cleared!");
});

// Initial load of notes
displayNotes();