# Lifestyle is freedom / Образ жизни - свобода   

The longread for the site is [Realnoe Vremya](https://realnoevremya.ru).

Лонгрид для сайта Реальное время. https://realnoevremya.ru

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start
```
## pm2

```bash
# start
$ pm2 start npm -n "Livestyle" -- run start

# restart
$ yarn run build
$ pm2 restart Livestyle

# to see log
$ pm2 logs Livestyle
```
