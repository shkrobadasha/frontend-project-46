install: 
	npm ci

publish:
	npm publish --dry-run

gendiff:
	node bin/gendiff.jsu

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

publish:
	npm publish

.PHONY: test