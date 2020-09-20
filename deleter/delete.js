/* overwrites any file selected amount of times. It is pretty shitty and probably poorly optimized. After like 1gb it would becoem pretty slow to overwrite. 
Java would be a better language to code this in, but idk how 2 java (yet).

i do not take any responsibility for how this script is used.
*/


const fs = require('fs');
const crypto = require('crypto');

file = process.argv[2] || undefined;

if (file==undefined) {
  console.error('You must enter a file to delete.');
  console.error('Usage demo: node delete.js filename [amount of overwrites]')
  process.exit(0);
} else if (!fs.existsSync(file)) {
  console.error('No such file was found.');
  process.exit(0);
};
i=0;
filesize = fs.statSync(file).size;
function overWriteFile(file, filesize) {
  i++;
  rbytes = crypto.randomBytes(filesize+1024);
  fs.writeFileSync(file, rbytes);
  console.log('Overwrite number '+i+' completed.');
};

amount = process.argv[3] || 1000

overWriter = setInterval(()=>{
if (i>amount) {clearInterval(overWriter); console.log('Completed overwrite.'); process.exit(0);};
overWriteFile(file, filesize);
}, 1);
