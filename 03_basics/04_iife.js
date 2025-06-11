//  IMMEDIATELY Invoked Function Expression  (IIFE) => the function whos execute immediately/

(function coffe (){
    console.log(`DB CONNECTED`);
})();   
//wrapped inside the parenthesis  => also this save from the pollution happening outside the global variable.

(function chai() {
    console.log(`DB connected`);   
}) ();

(function ayush() {
    console.log("IIFE DONE");
}) ();
//  some more examples included will discuss later
// done