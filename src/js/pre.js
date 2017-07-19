
(function() {
	this.Pre = function(options = {}) {

		// Default options
		this.el = (options.el) ? options.el : '.pre';
		this.spaces = (options.spaces == undefined) ? true : (options.spaces);
		this.newline = (options.newline == undefined) ? true : (options.newline);
		
	}
}());