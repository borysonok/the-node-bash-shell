const fs = require('fs');

function PWD() {
  const currDir = process.cwd();
  process.stdout.write(currDir);
  process.stdout.write('\nprompt > ');
}

function DATE() {
  const dt = Date.now();
  console.log("dt = ", dt);
  //process.stdout.write(Date.prototype.getDate());
  process.stdout.write('\nprompt > ');
}

function LS() {
  fs.readdir('.', function(err, files) {
    if (err) throw err;
    files.forEach(function (file) {
      process.stdout.write(file.toString() + "\n");
    });
    process.stdout.write("prompt > ");
  });

}

exports.pwd = PWD;
exports.date = DATE;
exports.ls = LS;
