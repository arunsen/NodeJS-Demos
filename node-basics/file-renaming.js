const fs = require ('fs');

// Rename Files
fs.renameSync ('./notes.txt', './views/notes.txt');

//Rename or Move Directories

fs.renameSync ('./views/ChildDir', './ParentDir');
