// Lesson 1
// To proceed, write a program that prints "i am okay" to standard output
// and "i am so incredibly not okay" to standard error.

// These two are the same as lines 8-9. 
// process.stdout.write("i am okay");
// process.stderr.write("i am so incredibly not okay");

    // console.log("i am okay");
    // console.error("i am so incredibly not okay");

// Lesson 2
// Here's a simple exercise to get you comfortable with using the console
// methods. Replace the comments in the following program with the relevant
// calls to the console API:

    // // scenario.js
    // var fs = require("fs");

    // var peach = function (obj) {
    //   // trace the message "traced"
    //   console.trace('traced');
    //   // dump obj to stdout
    //   console.log(obj);
    // };

    // var bowser = function (callback) {
    //   fs.readFile(process.argv[2], {encoding : "utf8"}, callback);
    // };

    // var koopa = function (error, file) {
    //   // handle error by printing something to stderr
    //   if (error) {
    //     console.error(error, file);
    //   }

    //   peach(JSON.parse(file));
    // };

    // bowser(koopa);

// Lesson 3
// Install jshint (`npm install --global jshint` – maybe with sudo on
// Linux, probably logged in as an administrator on Windows) and use it
// to figure out and fix what's wrong with this program:

    // var today = "today";

    // function timestamp() {
    //   today = Date();
    //   return today;
    // }

    // console.log("date is", timestamp());
    // console.log("today is", today);

// You can start with this config file for jshint:

//     {
//         "node": true,
//         "undef": true
//     }

// Put it in a file named jshintrc, and then run jshint with
// `jshint --config jshintrc <filename.js>`

// BONUS:

// eslint is slightly more stringent than jshint. Depending on your
// solution, there may still be some questionable code lurking in your
// solution. Install eslint (`npm -g i eslint`, same caveats as above)
// against your fixed program and see if it picks up anything else.
// Here's a good starter config file for eslint (again, stick it in
// `eslintrc` and then use it with `eslint --config eslintrc <filename.js>`):

    // {
    //     "env" : {
    //         "node" : true
    //     },
    //     "rules" : {
    //         "strict" : 0
    //     }
    // }

// To run or test your bonus solution, run:

// Lesson 4
// To get your head around using logging for debugging, fix the program
// below. It gets passed a logger (with at least `log.info()` and
// `log.error()` functions defined) and a callback. When things are
// working, `cb` should be called at the end with the value
// --> 2964 <--. Log an object containing the value of value and the
// currently active function *after* each time `value` is assigned or
// changed. Each call should look like this:

//    // "scenario" is the name of the currently executing function
//    log.info({value : value}, "scenario");

// When you figure out what the error is, make a call to log.error()
// indicating what the problem is *before* logging what `value` is at
// that point once you've fixed things:

    // module.exports = scenario;

    // function scenario(log, cb) {

    //   function start() {
    //     process.nextTick(thing);
    //   }

    //   var value = 97;
    //   log.info({value : value}, "scenario");

    //   function foo() {
    //     value *= 13;
    //     log.info({value : value}, "foo");
    //     cb(value);
    //   }

    //   start();

    //   function racer() {
    //     value &= 255;
    //     log.info({value : value}, "racer");
    //     setTimeout(foo, 0);
    //   }

    //   //value = 213;
    //   log.error();
    //   log.info({value : value}, "scenario");

    //   function thing() {
    //     value += 131;
    //     log.info({value : value}, "thing");
    //     process.nextTick(racer);
    //   }
    // }

// As a hint, you should be making 6 logging calls, including the call to
// log.error.

// Using Bunyan to test your solution as you go is pretty easy:

//     var bunyan = require("bunyan");
//     var log = bunyan.createLogger({name: "scenario"});

// Then, when you run your program, pipe the output through the Bunyan CLI:

// node my-scenario-runner.js | bunyan

// Lesson 5 - Traces
//As an example, what happens when you run this program with bad input?

  var readFile = require("fs").readFile;

  module.exports = scenario;

  function scenario(jsonPath, cb) {
    readFile(jsonPath, {encoding : "utf8"}, function (error, contents) {
      cb(error, JSON.parse(contents));
    });
  }

// The challenge here is to figure out how to get a stacktrace that shows
// the bug, and to get the long stacktrace to the verifier by passing the
// Error you get to the callback. You will probably need to use either
// domains or the trycatch module, because a simple try / catch won't
// work. If you don't know domains, read the Node API documentation on
// them, or use this brutally abbreviated primer:

    // var domain = require("domain");

    // function doSomethingDangerousAndAsync(cb) {
    //   // create a new domain
    //   var d = domain.create();

    //   // "handle" the error (OMG DON'T DO THIS IN PRODUCTION CODE)
    //   d.on("error", cb);

    //   // use the domain
    //   d.run(function () {
    //     doDangerousAsyncThing(cb);
    //   });
    // }

