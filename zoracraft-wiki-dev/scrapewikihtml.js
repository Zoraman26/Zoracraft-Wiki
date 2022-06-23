/*
	Renders an HTML file for every TiddlyWiki page [excludes settings pages]
	Optimization is WIP
*/

const http = require('http');
const path = require('path');
const { readdir } = require('fs');
const { writeFile } = require('fs/promises');

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
		.filter((checkPageSkip) => { return !skippingTiddlersSet.has(checkPageSkip) })
		.forEach(function(page) {
    		let pageTitle = page.replace('.tid', '');
    		let path = encodeURI(`/${pageTitle}`);
    		try {
    			http.get({ hostname: 'localhost', port: port, path: path}, (response) => {
	   				writeFile(`./html/${pageTitle}.html`, response);
    			});
			} catch (error) {
  				console.error(error);
			}
		})
	}
});