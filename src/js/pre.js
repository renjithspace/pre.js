
(function() {
	this.Pre = function(options = {}) {

		// Default options
		this.el = (options.el) ? options.el : '.pre';
		this.spaces = (options.spaces == undefined) ? true : (options.spaces);
		this.newline = (options.newline == undefined) ? true : (options.newline);

		// Get element
		let element = document.querySelector(this.el);

		// Preserve
		if(element) {
			if(this.newline) {
				let preNewlines = element.innerHTML.replace(/\n/g, '</br>');
				element.innerHTML = preNewlines;
			}

			if(this.spaces) {
				let preSpaces = element.innerHTML.replace(/\s/g, '&nbsp');
				element.innerHTML = preSpaces;
			}
			return;
		}
		
	}
}());