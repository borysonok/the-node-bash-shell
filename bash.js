const cmds = require('./commands');

process.stdout.write('my_prompt > ');

process.stdin.on('data', function (data) {
  var cmd = data.toString().trim();
  switch (cmd) {
    case "pwd":
      cmds.pwd();
      break;
    case "date":
      cmds.date();
      break;
    case "ls":
      cmds.ls();
      break;
    default:
      process.stdout.write('Wrong command...');
   }
  //process.stdout.write('You typed: ' + cmd);
  //process.stdout.write('\nprompt > ');
});
