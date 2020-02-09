module.exports = {
	roots: ['<rootDir>/src'],
	testURL: 'http://localhost/',
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	},
	testRegex: '((\\.|/)(test|spec))\\.tsx?$',
	moduleNameMapper: {
		'\\.(css|less)$': '<rootDir>/src/utils/style.mock.js'
	},
  globals: {
    __PATH_PREFIX__: ``,
  },
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
