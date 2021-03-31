build:
	daml build
	daml codegen js -o daml.js .daml/dist/*.dar
	#cd ui && yarn install --force --frozen-lockfile
	#cd ui && yarn build
	cd front && yarn install --force --frozen-lockfile
	cd front && yarn build
	
deploy: build
	mkdir -p deploy
	cp .daml/dist/*.dar deploy
	#cd ui && zip -r ../deploy/cosmart.zip build
	cd front && zip -r ../deploy/cosmart-front.zip build

clean:
	rm -rf .daml
	rm -rf daml.js
	rm -rf ui/node_modules
	rm -rf ui/build
	rm -rf front/node_modules
	rm -rf front/build
	rm -rf deploy

start: clean build
	daml start
