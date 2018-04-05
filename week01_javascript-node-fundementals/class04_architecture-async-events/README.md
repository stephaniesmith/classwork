# Class 04 Node Architecture, Asynchronous, Events

## Questions and Feedback
* file system command are relative to `cwd` (`pwd`)
    * not the same as `require` which is relative to the file in which it appears
* `mocha -w` hangs on some errors
    * `nodemon`
* ?

## Learning Objectives
* Have a working model of asynchronous programming in NodeJS
* Utilize events and event emitters

## Agenda

### Node.JS Architecture

* What is it?
* Node Event Loop
    * Basic node architecture 101
    * v8 + event-loop + os-lib
    * Thread - actual "thread of execution"
    * Event loop explained
    * JavaScript single threaded event model
* Demo: `event-loop.js`

### Event Emitter pattern

* Subscribe and use an event emitter
* Streams
    * as event emitters:
        * `on`: `data` and `close`
    * `write`
* Files as streams
    * Demo fs.createReadStream()

### Managing asynchronicity

* Some hard rules:
    1. You can't create asynchronicity with just js
    1. If your building functionality on top of asynchronous APIs, 
    then your library must be asynchronous!
    1. If a function or method uses asynchronous activity to complete its work, 
    then that function must have an asynchronous interface (returns a promise)!
* Wrapping with promises
    * `require('util').promisify` for node callbacks
    * `new Promise((resolve, reject) => { /*...*/ })`
* Demo:
    * Evolve `CoolStringifier`
        * "static" methods
	* ~~Mocha `done`~~
		* test parameter
		* Tests function.length
		* if > 0, test is async, 
		* calling done with any non-null argument is failure (matches node callback signature)
    * return a promise!

### Use `nodemon` to run mocha in watch mode

* Demo: `package.json`

### Developer Focus

[link](Focus.md)
