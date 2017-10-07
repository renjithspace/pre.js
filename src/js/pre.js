
(function() {
	this.Pre = function() {

		// Default options
		this.options = {
			el: '.pre',
			spaces: false,
			newlines: true,
		};

		// Replace default options with arguments
		if (arguments.length && typeof arguments[0] === 'object') {
			optionsReplacer(this.options, arguments[0]);
		}

		// Default options replacer
		function optionsReplacer(options, args) {
			for (let arg in args) {
				if ( options.hasOwnProperty(arg) ) {
					options[arg] = args[arg];
				}
			}
		}

		// Get element
		let element = document.querySelector(this.options.el);

		// Preserve
		if(element) {
			if(this.options.newlines) {
				let preNewlines = element.innerHTML.replace(/\n/g, '</br>');
				element.innerHTML = preNewlines;
			}

			if(this.options.spaces) {
				let preSpaces = element.innerHTML.replace(/\s/g, '&nbsp');
				element.innerHTML = preSpaces;
			}
			return;
		}
	}
}());
