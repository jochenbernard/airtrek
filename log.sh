#!/bin/zsh

open -g /System/Applications/FindMy.app

sleep 1

osascript findMy.scpt

sleep 15

npm run log

osascript -e 'quit app "FindMy"'
