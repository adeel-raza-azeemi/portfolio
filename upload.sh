#!/bin/bash
#Program: Utility upload files to remote server
#Author: Adeel Raza Azeemi
#It should be executed as a super user

git add .
git commit -m "Correction  $(date +'%Y-%m-%d %I:%M')"
git push

