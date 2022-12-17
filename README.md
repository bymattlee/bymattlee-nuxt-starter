![ByMattLee Nuxt Starter Screenshot](http://hosted.bymattlee.com/github/bymattlee-nuxt-starter-screenshot.png)

# ByMattLee Nuxt Starter

A starter boilerplate powered by [Vue](https://vuejs.org/), [Nuxt](https://nuxtjs.org/), [Sanity](https://www.sanity.io/) and [Tailwind CSS](https://tailwindcss.com/).

[VIEW DEMO](https://bymattlee-nuxt-starter.netlify.app/)

---

## Installation

##### 1. Install Node >=16.17.1 LTS: <https://nodejs.org/>

##### 2. Install Yarn

```
$ npm i -g yarn
```

##### 3. Install all dependencies

```
$ yarn
```

---

## Configuration

In `nuxt.config.js`, update Sanity options and environment URLs for project compilation.

---

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

---

## General Features

- Utilizes Nuxt's 'static' mode to generate HTML files for every page
- Data is coming from the Sanity Cloud API. This pairs perfectly with the [ByMattLee Sanity Studio Starter](https://github.com/bymattlee/bymattlee-sanity-studio-starter)
- Features Tailwind CSS with PurgeCSS for production builds
- Includes RSS feed, robots.txt, sitemap.xml generation

---

## Tailwind CSS Notes

- All Tailwind settings can be found in `./tailwind.config.js`
- Most styles should be written as utility classes in the template markup but custom SCSS can be used for unique properties and/or magic numbers
- Utilize the [`@apply`](https://tailwindcss.com/docs/functions-and-directives#apply) directive when writing custom SCSS for efficiency:

```scss
svg {
  @apply inline-block fill-current;
}
```

- Tailwind settings can be accessed with the [`theme()`](https://tailwindcss.com/docs/functions-and-directives#theme) function:

```scss
.button {
  animation-duration: theme('transitionDuration.normal');
}
```

- Media queries can be used with the shorthand `screen()` function:

```scss
.button {
  margin-right: 2.8rem;
  @screen sm {
    margin-right: 4.2rem;
  }
}
```

---

## Contact

- Matt Lee - `@bymattlee` on most platforms
- Visit my website at [bymattlee.com](https://bymattlee.com)

[![Twitter Follow](https://img.shields.io/twitter/follow/bymattlee?style=social)](https://twitter.com/bymattlee)
