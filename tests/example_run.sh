#! /bin/bash

echo "Running tests..."

SAUCE_USERNAME='xxx' SAUCE_ACCESS_KEY='xxx' node node_modules/intern/runner.js config=tests/intern
