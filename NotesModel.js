const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated
const NoteSchema = new mongoose.Schema({
  noteTitle: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  noteDescription: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  priority: {
    type: String,
    lowercase: true,
    enum: ['low', 'medium','high'],
    default:'low'
    // validate(value) {
    //   if (value !== this.enum) throw new Error("oooooooooooooooooooooooo.");
    // }
  },
  dateAdded :{
      type:Date,
      //default: Date.now,


  },
  dateUpdated: {
    type: Date,
//     default: Date.now,
//     validate: [
//         function (value) {
//             return this.startdate <= value;
//         }
//     ]
 }
});

const Note = mongoose.model("Note", NoteSchema);
module.exports = Note;