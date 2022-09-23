// -----------------------------What is a Module in Node.js?---------------------------------------------------------

// Consider modules to be the same as JavaScript libraries.
// A set of functions you want to include in your application.

// --------------------------------------Built-in Modules---------------------------------------------------------------
// Node.js has a set of built-in modules which you can use without any further installation.

//------------------------------------- Create Your Own Modules---------------------------------------------------------
        
//You can create your own modules, and easily include them in your applications.

// Create a module that returns the current date and time:

exports.myDateTime = function () {
    return Date();
  };
  
// Use the exports keyword to make properties and methods available outside the module file.



