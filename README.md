# Introduction-to-Node

docs link : https://nodejs.dev/en/learn/

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
---------------------------------------------
# WORKING ON EXPRESS JS

## basic command lines:
- mkdir : to make new directory
- touch file.js : creates a file of .js 
- code. : to open vs code with the same / current directory
- cd : change directory

## intro to express js

    firstly install the npm with command 

```.js
npm init to install basic packages
```

```.js
 npm install express : to install the express
```
```.js
npm install express --no-save :

To install Express temporarily and not add it to the dependencies list:
```
## express()
    var express = require('express')
    var app = express()

    Creates an Express application. The express() function is a top-level function exported by the express module

```
const express = require('express')
const app = express()
const port = 3000

what we did here ?
- the express module is called and combined with the keyword express.
- then express() is called which detailed above.
- then the localhost is calling the server at port 3000
```

#### NOTE : localhost:3000/ : here '/' reresents the home page or root of the website .

## get()
    app.get( path, callback )

    path: It is the path for which the middleware function is being called. 
 
    callback: They can be a middleware function or series/array of middleware functions. 

- the get() is used when the browser get's in touch with our server and make a request then what should happen

## send()

    res.send( [body] )

    Parameter: This function accepts a single parameter body that describe the body which is to be sent in the response.

    Returns: It returns an Object.

- The res.send() function basically sends the HTTP response. The body parameter can be a String or a Buffer object or an object or an Array.


#### example:
    app.get('/', (req, res) => {
    res.send('Hello World!')
    })

- the get() will b called on home / root.
- the corrosponding req i.e request will be generated by the get() , all information that is generated by the server.
- and the req is request that we want to do after the request is initiated.

-----
    /about , /contact 

these are called as  ***Route***  that helps us to navigate to the page .

## Nodemon

    nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

to install nodemon:
    
    npm install -g nodemon 

## res.sendFile(path [, options] [, fn])

    res.sendFile()

Transfers the file at the given path. Sets the Content-Type response HTTP header field based on the filename’s extension. Unless the root option is set in the options object, path must be an absolute path to the file.

--- Example ------

    const express = require('express')
    const app = express()
    const port = 3000

    app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html")
    })

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })

Here we are sending /index.html to the server as a whole file 

## __dirname()

    __dirname is an environment variable that tells you the absolute path of the directory containing the currently executing file.

output :

    C:\Users\B\Desktop\calculator

## app.post()

    app.post("/" , function(req,res){
    res.send('Thanks for posting !')
    })


" Post method facilitates you to send large amount of data because data is send in the body. Post method is secure because data is not visible in URL bar but it is not used as popularly as GET method. On the other hand GET method is more efficient and used more than POST. "

## npm body-parser

To install:

    npm install body-parser


Express body-parser is an npm module used to process data sent in an HTTP request body. It provides four express middleware for parsing JSON, Text, URL-encoded, and raw data sets over an HTTP request body. Before the target controller receives an incoming request, these middleware routines handle it.

What Is Body-parser?
- Body-parser parses is an HTTP request body that usually helps when you need to know more than just the URL being hit.
- Specifically in the context of a POST, PATCH, or PUT HTTP request where the information you want is contained in the body.
- Using body-parser allows you to access req.body from within routes and use that data.
For example: To create a user in a database.  


![](https://www.simplilearn.com/ice9/free_resources_article_thumb/Body_Parser_In_ExpressJS_1.png)


    app.use(bodyparser.urlencoded({extended:true}))

- it allows us to post nested ojects
- bodyparser : parse the HTTP request that we get
- urlencoded : we get access to form data 

#### ***for example :***
**Code :** 
``
    console.log(req.body.num2);
``
#### output

    { num1: '1', num2: '2', submit: '' }


# Extra Stuff

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


