// default options
const defaults = {
	headings: { h: [ 'h', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ] },
	sections: [ 'article', 'aside', 'nav', 'section' ]
};

const tagRangeMatch = /^(\d+)-(\d+)$/;

// plugin
module.exports = ({ headings = defaults.headings, sections = defaults.sections } = {}) => {
	return ast => {
		walk({
			name: 'root',
			content: ast
		}, 1);

		return ast;
	};

	// walk any node and conditionally transform it
	function walk(node, level) {
		// if the node is an element that cannot be transformed
		if (
			Object(node) === node &&
			typeof node.name === 'string' &&
			!Object.keys(headings).some(name => {
				// whether the element is a heading
				const includes = headings[name].includes(node.name.toLowerCase());

				if (includes) {
					if (tagRangeMatch.test(name)) {
						// range of hierarchical tags
						const [ , min, max ] = name.match(tagRangeMatch);

						// range-limited level
						const tagLevel = Math.max(Math.min(level, max), min);

						// update element name with range-limited level
						node.name = `h${tagLevel}`;
					} else {
						// update element name
						node.name = name;

						// update element attrs
						const attrs = node.attrs || (node.attrs = {});

						Object.assign(attrs, {
							role: [ { type: 'text', content: 'heading' } ],
							'aria-level': [ { type: 'text', content: String(level) } ]
						});
					}
				}

				return includes;
			})
		) {
			// increase level if the node is sectioning content
			if (sections.includes(node.name.toLowerCase())) {
				++level; // eslint-disable-line no-param-reassign
			}

			// for each child of the node
			if (Array.isArray(node.content)) {
				const length = node.content.length;

				for (let index = -1; ++index < length;) {
					walk(node.content[index], level);
				}
			}
		}
	}
};
