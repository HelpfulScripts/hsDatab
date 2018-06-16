#!/bin/bash

cp -R docs ../
git checkout gh-pages
cp ../docs/src/* ./src 
cp ../docs/data/* ./data
rm -R ../docs
git commit -a -m 'docs update'
git push
git checkout master
