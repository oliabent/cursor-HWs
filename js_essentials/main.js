
var Uname = prompt('What is you name?', );
if ( Uname ) {
    var town = prompt ( " Hi, " + Uname + ". What town of Ukraine would you like to visit next year?" , );
}
if ( town ) {
    alert ( Uname + " would like to visit " + town +" next year! Click \"ok\" to see the map of Ukraine!" );
}
else {
    alert ( " Sorry, You didn't write anything. Click \"OK\" to see the map of Ukraine!");
}