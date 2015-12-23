#!/bin/bash
for filename in $(find . -iname "*.html"); do
  iconv -f WINDOWS-1250 -t UTF-8 "$filename" > tmpfile
  mv tmpfile "$filename"
done
