/*
	Renders an HTML file for every TiddlyWiki page [excludes settings pages]
*/

const http = require('http');
const path = require('path');
const { writeFile, readdir } = require('fs');

const { port, directories, skipTiddlers } = require('./config.json');

const skippingTiddlersSet = new Set(skipTiddlers);

function tiddlyFileFilter(file) {
  let ext = path.extname(file);
  return ext === '.tid'
};

readdir(directories.tiddlers, (error, tiddlers) => {
	if (error)
    	console.log(error);
	else {
		tiddlers
		.filter(tiddlyFileFilter)
		.filter((name) => { return !skippingTiddlersSet.has(name) })
		.forEach(function(page) {
    		console.log(page);
			try {
    			http.get({ hostname: 'localhost', port: port, path: '/Zoracraft',}, (response) => {
	   				//writeFile('./html/Zoracraft.html', response);
    			});
			} catch (error) {
  				console.error(error);
			}
		})
	}
});