#!/bin/sh

USER=leonardganty
HOST=leonardganty.ch
PROJECT_DIR=/home/${USER}/www.leonardganty.ch

# Building on local machine
git checkout main
npm install
rm -rf .next
npm run build

# Pulling source, installing dependencies and removing current build on remote host
ssh ${USER}@${HOST} sh -c "'

source /home/leonardganty/nodevenv/www.leonardganty.ch/14/bin/activate
cd $PROJECT_DIR
git pull
npm install
rm -rf .next

'"

# Uploading build to remote host
scp -r .next ${USER}@${HOST}:${PROJECT_DIR}

# Restarting application on remote host
ssh ${USER}@${HOST} touch ${PROJECT_DIR}/tmp/restart.txt
