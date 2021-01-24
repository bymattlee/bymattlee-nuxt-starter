![ByMattLee Nuxt Starter Screenshot](http://hosted.bymattlee.com/github/bymattlee-nuxt-starter-screenshot.png)

# ByMattLee Nuxt Starter
A starter boilerplate powered by [Vue](https://vuejs.org/), [Nuxt](https://nuxtjs.org/), [Sanity](https://www.sanity.io/) and [Tailwind CSS](https://tailwindcss.com/).

[VIEW DEMO](https://bymattlee-nuxt-starter.netlify.app/)

## Installation
##### 1. Install Node >=12.18.0: <https://nodejs.org/>
##### 2. Install Yarn
```
$ npm i -g yarn
```
##### 3. Install all dependencies
```
$ yarn
```

## Configuration
In `nuxt.config.js`, update Sanity options and environment URLs for project compilation.

## Use
##### Serve With Hot Reload
```
$ yarn dev
```
##### Build For Production
```
$ yarn build
```
##### Build Static Files
```
$ yarn generate
```
##### Launch Server
```
$ yarn start
```

## General Features
* Utilizes Nuxt's 'static' mode to generate HTML files for every page
* Data is coming from the Sanity Cloud API. This pairs perfectly with the [ByMattLee Sanity Starter CMS](https://github.com/bymattlee/bymattlee-sanity-studio-starter)
* Features Tailwind CSS with PurgeCSS for production builds
* Includes RSS feed, robots.txt, sitemap.xml generation
