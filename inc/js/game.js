// create object game
var game = function(spacetron){
}
// define game prototype
game.prototype = {
  // onPreload
  preload: function(){
    // load menu lib
    spacetron.state.add( "level1", level1 );
	},
  // onCreate
  create: function(){
    // start state -> level1
    this.game.state.start("level1");
	},
}
