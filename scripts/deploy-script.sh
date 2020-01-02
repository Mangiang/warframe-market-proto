#!/bin/sh

curl https://cli-assets.heroku.com/install.sh | sh

/usr/local/bin/heroku container:login
/usr/local/bin/heroku container:push web -a warframe-market-proto
/usr/local/bin/heroku container:release web -a warframe-market-proto