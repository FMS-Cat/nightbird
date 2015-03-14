Nightbird.Node = function( _nightbird, _file ){

	var node = this;

	node.nightbird = _nightbird;

	node.canvas = document.createElement( 'canvas' );
	node.canvas.width = 128;
	node.canvas.height = 128;

	node.active = true;
	node.posX = 32;
	node.posY = 32;
	node.width = 100;
	node.height = 100;

	node.inputs = [];
	node.outputs = [];

};

Nightbird.Node.prototype.move = function( _x, _y ){

	var node = this;

	if( typeof _x == 'number' && typeof _y == 'number' ){
		node.posX = _x;
		node.posY = _y;
	}

	for( var i in node.inputs ){
		node.inputs[i].move( node.posX-10, node.posY+10+10*i );
	}
	for( var i in node.outputs ){
		node.outputs[i].move( node.posX+node.width+10, node.posY+10+10*i );
	}

};

Nightbird.Node.prototype.setSize = function( _w, _h ){

	var node = this;

	node.canvas.width = _w;
	node.canvas.height = _h;

};

Nightbird.Node.prototype.draw = function(){

	var node = this;

	var w = node.width;
	var h = node.height;
	node.nightbird.modularContext.drawImage( node.canvas, node.posX, node.posY, w, h );

	for( var i in node.inputs ){
		node.inputs[i].draw();
	}
	for( var i in node.outputs ){
		node.outputs[i].draw();
	}

};