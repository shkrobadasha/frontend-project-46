install: 
	npm ci

publish:
	npm publish --dry-run

gendiff:
	node bin/commander.js

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .


.PHONY: test