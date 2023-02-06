#!/bin/sh

open -g /System/Applications/FindMy.app

sleep 1

osascript findMy.scpt

sleep 7

npm run log

osascript -e 'quit app "FindMy"'
