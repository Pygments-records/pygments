#!/bin/bash
export "GIT_COMMIT_SHA=${GIT_COMMIT_SHA:-$(yarn run --silent git:getCommitSHA)}"
export "GIT_COMMIT_REF=${GIT_COMMIT_REF:-$(yarn run --silent git:getCommitRef)}"
export "GIT_COMMIT_TAGS=${GIT_COMMIT_TAGS:-$(yarn run --silent git:getReleasesAndTags)}"

yarn next "$@"
