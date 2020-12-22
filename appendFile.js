const fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello Content!', (err) => {
    if (err) throw err;
    console.log('Saved!');
})

fs.open('mynewfile2.txt', 'w', (err, file) => {
    if (err) throw err;
    console.log('Saved!');
})

fs.writeFile('mynewfile3.txt', 'Hello Content!', (err) => {
    if (err) throw err;
    console.log('Saved!');
})

fs.appendFile('mynewfile1.txt', 'Update Content!', (err) => {
    if (err) throw err;
    console.log('updated');
})

fs.unlink('mynewfile2.txt', (err) => {
    if (err) throw err;
    console.log('File deleted!');
})

fs.writeFile('mynewfile3.txt', 'This is my text!', (err) => {
    if (err) throw err;
    console.log('Replaced!');
})

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', (err) => {
    if (err) throw err;
    console.log('File Renamed!');
})