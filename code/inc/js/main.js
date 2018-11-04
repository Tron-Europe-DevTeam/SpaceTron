// Mainfunction
function init() {
	// create object spacetron
	var spacetron = new Phaser.Game(
								800, // width
								600, // height
								Phaser.CANVAS, // renderer
								"spacetron" // name
	);
	// preload images
	spacetron.state.add( "preload", preload );
		// load menu lib
	spacetron.state.add( "menu", menu );
  // load game lib
	spacetron.state.add( "game",  game);
	// start with menu
	spacetron.state.start( "menu" );
};
