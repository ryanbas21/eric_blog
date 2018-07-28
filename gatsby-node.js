const { forEach, split, toLower, join, compose } = require('ramda');
const path = require('path');
const slash = require('slash');

exports.createPages = ({ graphql, boundActionCreators }) => {
	const { createPage } = boundActionCreators;
	return new Promise((resolve, reject) => {
		graphql(`
			{
				allMarkdownRemark {
					edges {
						node {
							html
							frontmatter {
								path
								title
								date
								tags

							}
						}
					}
				}
			}
		`).then((result) => {
			const productTemplate = path.resolve(`src/templates/template.tsx`);
			forEach(({ node }) => {
				createPage({
					path: node.frontmatter.path,
					component: slash(productTemplate)
				});
			}, result.data.allMarkdownRemark.edges);
			resolve();
		});
	});
};
