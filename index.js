var fs = require('fs');
var path = require('path');
var child = require("child_process");
var args = process.argv.slice(2);

if (args.length) {
	var root = args[0];
	var currentPath = process.cwd();
	var libs = [];
	
	fs.readdir(root, function(err, items) {
		for (var i = 0; i < items.length; i++) {
			var name = items[i];
			var dir = path.join(currentPath, root + '/' + name);
			
			//console.log(dir);
			
			fs.stat(dir, function (err, stat) {
				//console.log(stat);
				if (stat.isDirectory()) {
					console.log(dir);
				} else {
					console.log(name + ' is not a directory');
				}
			});
		}
	});
} else {
	console.log('usage:');
	console.log('  lju path command arg');
	console.log('    path: directory where libraries are located');
	console.log('    cmd : the command to execute (git,npm,update)');
	console.log('    arg : argument for the specified command');
	console.log('    	- update: this is equal to "npm update" && "git pull,commit,push" && "npm publish"');
	console.log('    	- git: stat,commit,pull,push');
	console.log('    	- npm: update,publish');
}
/*
child.exec("ls -la", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
*/