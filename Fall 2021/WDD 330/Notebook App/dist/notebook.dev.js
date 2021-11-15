"use strict";

var _NotesAPI = _interopRequireDefault(require("NotesAPI.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_NotesAPI["default"].saveNote({
  title: "New Note",
  body: "I am a new note"
});

console.log(_NotesAPI["default"].getAllNotes());