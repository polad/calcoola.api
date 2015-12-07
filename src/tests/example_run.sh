#! /bin/bash

echo "Running tests..."

TESTS_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
BASE_DIR=$TESTS_DIR/../../..

BASE_DIR=$BASE_DIR SAUCE_USERNAME='xxx' SAUCE_ACCESS_KEY='xxx' $BASE_DIR/node_modules/.bin/intern-client config=$TESTS_DIR/intern
