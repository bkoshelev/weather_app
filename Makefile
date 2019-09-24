lint:
	npx prettier --write src/**/*.{js,jsx,ts,tsx}
	npx stylelint src/**/*.{js,jsx,ts,tsx} --fix -f verbose
	npx eslint -c .eslintrc.js src/**/*.{js,jsx,ts,tsx} --fix 
build:
	npx webpack --config webpack.config.js --mode production