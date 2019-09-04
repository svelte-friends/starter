module.exports = {
	transform: {
		'^.+\\.js$': 'babel-jest',
		'^.+\\.svelte$': 'jest-transform-svelte'
	},
	moduleFileExtensions: ['js', 'svelte'],
	bail: false,
	verbose: true,
	testRegex: "\\.(spec|test).(ts|tsx|js)$",
	setupFilesAfterEnv: [
		'@testing-library/svelte/cleanup-after-each',
		// ... other setup files ...
	],
};
