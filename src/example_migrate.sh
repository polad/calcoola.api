#! /bin/bash

echo "Migrating database..."

SRC_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
BASE_DIR=$SRC_DIR/..

BASE_DIR=$BASE_DIR DB_HOST='xxx' DB_PORT=000 DB_DATABASE='xxx' $BASE_DIR/node_modules/migrate/bin/migrate -c $SRC_DIR $@
