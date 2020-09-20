/* overwrites any file selected amount of times. It is pretty shitty and probably poorly optimized. After like 1gb it would becoem pretty slow to overwrite. 
Java would be a better language to code this in, but idk how 2 java (yet).

i do not take any responsibility for how this script is used.
*/


const fs = require('fs');
const crypto = require('crypto');
const readline = require('readline');
directory = false;
file = process.argv[2] || undefined;

if (file==undefined) {
  console.error('You must enter a file to delete.');
  console.error('Usage demo: node delete.js filename [amount of overwrites]')
  process.exit(0);
} else if (!fs.existsSync(file)) {
  console.error('No such file was found.');
  process.exit(0);
};

amount = process.argv[3] || 1000;

function overWriteFile(file, filesize) {
  i++;
  rbytes = crypto.randomBytes(filesize+1024);
  fs.writeFileSync(file, rbytes);
  console.log('Overwrite number '+i+' completed.');
};
function getFileSizes(files, dir) {
  let filesizes={};
  files.forEach((file)=>{
    let fileinfo = fs.statSync(dir+'/'+file);
    filesizes[file]=fileinfo.size;
  });
  return filesizes;
};

function overWriteDir(sizes, files, filename) {
  i++;
  files.forEach((file)=>{
    if (fs.statSync(filename+'/'+file).isDirectory()) {return;};
    let rbytes = crypto.randomBytes(sizes[file]);
    fs.writeFileSync(filename+'/'+file, rbytes);
    console.log('Overwrite number '+i+' for file '+file+' completed.');
  });
};

i=0;
fileinfo = fs.statSync(file);
filesize = fileinfo.size;

const rl = readline.createInterface({input: process.stdin, output: process.stdout});

if (fileinfo.isDirectory()) {
  directory = true;
  console.log('!WARNING! THIS FILE IS A DIRECTORY !WARNING!');
  console.log('!WARNING! ARE  YOU SURE YOU WOULD LIKE TO DELETE ALL FILES IN THIS DIRECTORY? !WARNING!');
  rl.question('!WARNING! IF YES, THEN PLEASE TYPE '+file+' !WARNING!\n', (confirmation) => {
    if (confirmation == file) {
      let files = fs.readdirSync(file);
      let sizes = getFileSizes(files, file);
      overWriter = setInterval(()=>{
        if (i>amount) {clearInterval(overWriter); console.log('Completed overwrite.'); process.exit(0);};
        overWriteDir(sizes, files, file);
      }, 1);
    } else {
      console.log('You have not typed the filename/confirmed the action. quitting the app.');
      process.exit(0);
    };
  });
} else {
  overWriter = setInterval(()=>{
    if (i>amount) {clearInterval(overWriter); console.log('Completed overwrite.'); process.exit(0);};
    overWriteFile(file, filesize);
  }, 1);
};
