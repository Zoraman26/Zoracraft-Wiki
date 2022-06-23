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
    				
    				let htmldata = '';
  					response.setEncoding('utf8');

  					response.on('data', (chunk) => {
    					htmldata += chunk;
  					});

  					response.on('close', () => {
    					htmlstring = htmldata.replace('%24%3A%2Fcore%2Ftemplates%2Fstatic.template.css','template.css');
    					writeFile(`./html/${pageTitle}.html`, htmlstring);
	   					console.log(`Created static .html for ${pageTitle}`);
  					});
  					
    			});
			} catch (error) {
  				console.error(error);
			}
		})
	}
});

function tiddlyFileFilter(file) {
  let ext = path.extname(file);
  return ext === '.tid'
};