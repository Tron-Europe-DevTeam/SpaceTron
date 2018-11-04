// create object preload
var preload = function(spacetron){}
// define preload prototype
preload.prototype = {
 	 	// onPreload
	 	preload: function(){
			// load background image
			this.game.load.image( "background", "./inc/img/menu_background.png" );
		},
		// onCreate
		create: function(){
			// start state -> menu
			this.game.state.start("menu");
	}
}
