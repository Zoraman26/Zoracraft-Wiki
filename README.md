# Zoracraft-Wiki
### Tiddlywiki + Node.js edition

-----
# Local dev server

## Steps for starting to edit and/or develop the wiki:

0. Install node.js if `node` is not present in terminal. [See guide next section.](#install-and-manage-nodejs)

1. Clone repository: `git clone https://github.com/Zoraman26/ZoraCraft.git`

2. Install [TiddlyWiki](https://tiddlywiki.com/): `npm install -g tiddlywiki`

3. Launch TiddlyWiki node.js server on localhost: `tiddlywiki wikifolder --listen` Choose port by adding ` port=####` 

4. Open browser to TiddlyWiki instance. Default location: http://127.0.0.1:8080/

-----

## Prerequisites

### Install and manage node.js 

If you do not already have node.js installed, it is recommended to do so using [nvm](https://github.com/nvm-sh/nvm#intro), the node version manager: 

1. Install [nvm](https://github.com/nvm-sh/nvm#install--update-script) using **one** of these commands:

cURL: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`

Wget: `wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`

2. Install latest node.js LTS version: `nvm install 16`

3. Check that node is available from the command line: `node -v`

### You're done!

If you'd prefer to install and manage node.js manually, have at it: https://nodejs.org/en/



-----

## References and guides

### TiddlyWiki + Node.js
* https://tiddlywiki.com/#Installing%20TiddlyWiki%20on%20Node.js
* https://tiddlywiki.com/#WebServer
* https://tiddlywiki.com/#TiddlyWiki%20on%20Node.js
* https://tiddlywiki.com/#Scripts%20for%20TiddlyWiki%20on%20Node.js


### TiddlyWiki Core
* https://tiddlywiki.com/#TiddlerFiles
* https://tiddlywiki.com/#TiddlyWikiFolders
* https://tiddlywiki.com/#Using%20the%20read-only%20single%20tiddler%20view

### Optimizations
####   Greatly reduce image file size
* https://avif.io/
