#!/bin/bash

PROJECT=$1
TAG=$2

if [ -z $PROJECT ] 
then
  echo "<project> missing"
  echo "Usage: ${0} <project> <tag>"
  exit 1
fi

if [ -z $TAG ] 
then
  echo "<tag> missing"
  echo "Usage: ${0} <project> <tag>"
  exit 1
fi

set -xe

# remove "development" in constants.js
sed -i "s/env = 'development'/env = ''/g" ./src/assets/js/utilities/constants.js

# remove photos
rm -rf ./src/assets/img/avatars
rm -rf ./src/assets/img/demo

# build without demo artifacts
yarn build

# zip sources template-${PROJECT}-${TAG}.zip
zip -r .release/template-${PROJECT}-${TAG}.zip . \
  -x "*.zip" \
  -x "*.log" \
  -x "node_modules/*" \
  -x ".release/*" \
  -x ".git/*" \
  -x ".github/*" \
  -x "docker-compose.yml"

# zip preview ${PROJECT}-preview.zip
zip -j .release/${PROJECT}-preview.zip \
  .release/${PROJECT}-preview.png

# top level zip release-${PROJECT}-${TAG}.zip 
zip -j .release/release-${PROJECT}-${TAG}.zip \
  .release/template-${PROJECT}-${TAG}.zip \
  .release/${PROJECT}-preview.zip \
  .release/${PROJECT}-thumb.png

# remove artifacts
rm -rf .release/${PROJECT}-preview.zip .release/template-${PROJECT}-${TAG}.zip

# revert ./src changes
git checkout ./src