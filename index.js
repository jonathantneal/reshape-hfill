// default options
const defaults = {
	headings: {
		h: ['h', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']
	},
	sections: ['article', 'aside', 'nav', 'section']
};

// plugin
module.exports = ({ headings = defaults.headings, sections = defaults.sections } = {}) => {
	return (ast) => {
		walk(
			{
				name: 'root',
				content: ast
			},
			1
		);

		return ast;
	};

	// walk node
	function walk(node, level) {
		// if the node is an element
		if (Object(node) === node && typeof node.name === 'string') {
			if (
				Object.keys(headings).some(
					(name) => {
						// whether element is a heading
						const includes = headings[name].includes(node.name.toLowerCase());

						if (includes) {
							// update element name
							node.name = name;

							// update element attrs
							const attrs = node.attrs || (node.attrs = {});

							Object.assign(
								attrs,
								{
									role: [
										{
											type: 'text',
											content: 'heading'
										}
									],
									'aria-level': [
										{
											type: 'text',
											content: String(level)
										}
									]
								}
							);
						}

						return includes;
					}
				)
			) {
				// do nothing else to headings and continue
			} else {
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
	}
};
