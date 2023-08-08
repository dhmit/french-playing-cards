#!/bin/bash
#
# See https://github.com/dhmit/french-playing-cards/pull/3
# for notes on how this site is deployed.
#

echo 'Run as sudo'

# exit this script if any command returns a non-zero exit code
set -e

cd /home/playing-cards
GIT_SSH_COMMAND="ssh -i /root/.ssh/id_rsa" git pull

echo 'Building frontend'
npm ci
npm run build

cd ./backend

python manage.py collectstatic --noinput

systemctl restart gunicorn
