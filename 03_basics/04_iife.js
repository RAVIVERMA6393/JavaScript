// IIFE - Immediately invoked function expressions

(function chai() {
    console.log('DB connected');
})();

( (name) => {
    console.log(`DV CONNECTED two ${name}`); 
})("Hitesh");