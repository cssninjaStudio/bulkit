# Bulkit | Landing pages SaaS Kit

[![cssninja-discord](https://img.shields.io/discord/785473098069311510?label=join%20us%20on%20discord&color=6944EC)](https://go.cssninja.io/discord)

## 👍 Features

The template is built with Sass and Gulp build system with these features:

- Handlebars HTML templates with Panini– Panini is a super simple flat file generator for use with Gulp. It compiles a series of HTML pages using a common layout. These pages can also include HTML partials, external Handlebars helpers, or external data as JSON.
- Sass compilation, prefixing with Autoprefixer, and JavaScript concatenation
- Built-in BrowserSync server - Will automatically reload your page when files are changed. It also live-injects CSS changes when you save a Sass file. This task runs continuously. Defaults to localhost.
- For production builds - CSS compression, JavaScript compression, Image compression and more..

### Requirements

To use this template, your computer needs:

- Node.js (>= 16.x.x) is used to run the build processes. https://nodejs.org/en/download/
- Test: run `node -v` in the terminal

## 👌 Usage

1. enable pnpm with corepack

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

> _corepack is installed with Node.js from **v16.13.x**, if your version is below, install it with: `npm install -g corepack`, or upgrade Node.js_

2. Install depedencies

```bash
pnpm install
```

3. To start development server

```bash
pnpm dev
```

## 💡 What to do next ?

Our online documentation is a great place to learn how to use Bulkit.
We try to keep it mostly up to date, so you can always find the latest information.

> We also have a great [discord community](https://go.cssninja.io/discord) where you can ask questions and show your work.

### [Bulkit on docs.cssninja.io](https://docs.cssninja.io/bulkit?utm_source=readme)

- [Getting started](https://docs.cssninja.io/bulkit/documentation/getting-started.html?utm_source=readme)
- [Template structure](https://docs.cssninja.io/bulkit/documentation/template-structure.html?utm_source=readme)
- [Working with Gulp](https://docs.cssninja.io/bulkit/documentation/working-with-gulp.html?utm_source=readme)
- [Theming](https://docs.cssninja.io/bulkit/documentation/theming.html?utm_source=readme)
- [Css reference](https://docs.cssninja.io/bulkit/documentation/css-reference.html?utm_source=readme)
- [Js reference](https://docs.cssninja.io/bulkit/documentation/js-reference.html?utm_source=readme)

### Additional Resources:

- [Sass: Syntactically Awesome Style Sheets](http://sass-lang.com/)
- [Bulma](https://bulma.io/)
- [Handlebars](http://handlebarsjs.com/)
- [Panini](https://github.com/zurb/panini)
- [Gulp](https://gulpjs.org/getting-started)

## 🍔 Issues

If you've found an issue or a bug, you can report it in the issues section of this repository. Please try to follow these simple guidelines to report your issue:

- Issue definition
- Expected behaviour
- Actual behaviour
- steps to reproduce
- Already tried fixes (if relevant)
