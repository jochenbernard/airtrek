#!/bin/zsh

open -g /System/Applications/FindMy.app

sleep 1

osascript findMy.scpt

sleep 15

/opt/homebrew/bin/node log.js

osascript -e 'quit app "FindMy"'
