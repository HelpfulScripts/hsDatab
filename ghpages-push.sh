#!/bin/bash

cp -r docs ../
git checkout gh-pages
cp ../docs/src/* ./src 
cp ../docs/data/* ./data
git commit -a -m 'docs update'
git push
git checkout master
