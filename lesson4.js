var fs = require('fs');
var numLines = undefined;
function countLines(callback) {
    fs.readFile(process.argv[2], 'utf8', function doneReading(err, fileContents) {
    numLines = (fileContents.split('\n').length - 1);
    callback();
    })
}

function logNumLines() {
    console.log(numLines);
}

countLines(logNumLines)
