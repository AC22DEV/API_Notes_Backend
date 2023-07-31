const { Schema, model } = require("mongoose");

const noteSchema = new Schema({
  content: String,
  date: Date,
  important: Boolean,
});

noteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
const Note = model("Note", noteSchema);

const note = new Note({
  content: "Esta nota es una prueba",
  date: new Date(),
  important: true,
});

module.exports = Note;
