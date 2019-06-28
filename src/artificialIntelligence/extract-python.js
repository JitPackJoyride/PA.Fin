//npm install python-shell
const {PythonShell} = require('python-shell');
var options = {
    args: ['Hi I need to apply for a new bank account']
  };
PythonShell.run('extract1.py', options, function (err, res) {
  if (err) throw err;
  console.log(res);  // 1
});