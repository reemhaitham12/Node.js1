// ! 1- Write a function that prints the full path of the current file. (1 Grade)
// ! Input: (No input) Output: /path/to/current/file.js
function PrintPath(){
    const path =require("node:path")
    console.log(__filename);
}
PrintPath();

// ! 2- Write a function that takes a file path and returns its file extension. (1 Grade)
// ! Input: /path/to/file.txt Output: .txt
function PrintFile(filePath){
    console.log(filePath.slice(filePath.lastIndexOf('.')));
}
const filePath = '/path/to/file.txt';
PrintFile(filePath);

// ! 3- Write a function that checks if a given path is absolute. (1 Grade)
// ! Input: /path/to/file.txt Output: true
// ! Input: file.txt Output: false
const path =require("node:path")
function CheckPath(filePath){
    console.log(path.isAbsolute(filePath))
}
CheckPath('/path/to/file.txt');
CheckPath('file.txt');

// ! 4- Write a function that joins two paths. (1 Grade)
// ! Input: /folder1, folder2/file.txt Output: /folder1/folder2/file.txt
const path1 =require("node:path")
function JoinPath(filePath1,filePath2){
    console.log(path1.join(filePath1,filePath2));
}
JoinPath('/folder1', 'folder2/file.txt');


// ! 5- Write a function that demonstrates the difference between path.parse and
// ! path.format. The function should take a file path as input, parse it, log the parsed
// ! object to the console, then reformat it and log the formatted path to the console. (2Grades)
// ! Input: /path/to/file.txt
// ! Output:
// ! • Parsed object: { root: '/', dir: '/path/to', base: 'file.txt', ext: '.txt', name: 'file' }
// ! • Formatted path: /path/to/file.txt

const path2=require("node:path");
function demon(filePath){
    const ParsePath=path2.parse(filePath);
    console.log("Parsed object: ",ParsePath);
    const FormatPath=path2.format(ParsePath);
    console.log("Format object:",FormatPath);
}
demon('/path/to/file.txt');

// ! 6- Write a function that deletes a file. (1 Grade)
// ! Input: Path to the file /path/to/file.txt Output: The file is deleted. No explicit output.
const fs =require("fs");
function DeleteFile(filePath){
    fs.unlink(filePath,(err)=>{
        err ? console.log(err):console.log("The file is deleted.");
    })
}
DeleteFile('./data.txt');

// ! 7- Write a function that creates a folder. (1 Grade)
// ! Input: Path to the folder /path/to/newFolder
// ! Output: The folder is created. No explicit output.
function CreateFolder(filePath){
    fs.mkdirSync(filePath,{recursive:true});
}
CreateFolder('./path/to/newFolder');

// ! 8- Write a function that creates a custom event and listens for. Trigger the event with a message. (2 Grades)
// ! Input: Event: greet, Message: Hello Event!
// ! Output: The event is triggered and the message Hello Event! is logged.
const EventEmitter = require('events');
function createEvent(eventName, message) {
    const eventEmitter = new EventEmitter();
    eventEmitter.on(eventName, (msg) => {
        console.log(msg);
    });
    eventEmitter.emit(eventName, message);
}
createEvent('greet', 'Hello Event!');


// ! 
