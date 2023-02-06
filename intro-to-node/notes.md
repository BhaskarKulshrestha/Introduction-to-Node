# Intro to Node Js

## command line :

    cd : change directory
    ls : List directory
    mkdir : make directory
    pwd : shows the current directory / path

## <ins>how to run nodejs in hyper terminal</ins>

- just type node file Name to start NodeJs in the hyper terminal 
- To exit just type .exit or ctrl + c two times.

----------------------
# codes

## copyFileSync
    syntax : fs.copyFileSync(src, dest, mode)
<br>

    Parameters: This method accepts three parameters as mentioned above and described below:  

    src: It is a String, Buffer or URL that denotes the source filename to copy.

    dest: It is a String, Buffer or URL that denotes the destination filename that the copy operation would create.

    mode: It is an integer which specifies the behavior of the copy operation. The values can be given predefined constants that have their respective behaviours: 
        fs.constants.COPYFILE_EXCL: This constant specifies that the copy operation would fail if the destination filename already exists.

        fs.constants.COPYFILE_FICLONE: This constant specifies that the copy operation would try to create a copy-on-write reflink. A fallback mechanism is used if the platform does not support copy-on-write.

        fs.constants.COPYFILE_FICLONE_FORCE: This constant specifies that the copy operation would try to create a copy-on-write reflink. The operation would fail if the platform does not support copy-on-write, unlike the previous one.

Example:
```js
const fs=require("fs");
fs.copyFileSync("file.txt","file2.txt");
```
    what happend here?
    if file 2 is not existed node will creae a new file named as file2 on the folder ,

    if it is previously existed then it will overwrite the data present on the file2.

## require:
    Node.js follows the CommonJS module system, and the builtin require function is the easiest way to include modules that exist in separate files. The basic functionality of require is that it reads a JavaScript file, executes the file, and then proceeds to return the exports object
<br>

    To include a module, use the require() function with the name of the module:
```js
    var http = require('http');
```

## npm init
    The “npm init” command will initialize a project and create the package. json file
```js
npm init
```
then it loads :
```js
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (intro-to-node)
version: (1.0.0)
description: This is intro to Node JS project
entry point: (index.js)
test command:
git repository:
keywords:
author: Bhaskar Kulshrestha
license: (ISC)
About to write to C:\Users\Bhaskar Kulshrestha\Desktop\intro-to-node\package.json:

{
  "name": "intro-to-node",
  "version": "1.0.0",
  "description": "This is intro to Node JS project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Bhaskar Kulshrestha",
  "license": "ISC"
}
{
  "name": "intro-to-node",
  "version": "1.0.0",
  "description": "This is intro to Node JS project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Bhaskar Kulshrestha",
  "license": "ISC"
}
```

## To install a module online
    npm install module Name

## use the installed module
```js
var variable name = require('module name');
var another variable=superheroes.funtion to be used();
console.log(another variable)
```