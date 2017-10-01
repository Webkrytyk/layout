# Frontend boilerplate

Everything-included pack for creating websites provides You with: browser live-reload, easy development and easy building package for production.

Supports:

- CSS as *SASS* (SCSS syntax)
- HTML with *Jade* (aka *Pug*) templates.
- JS **with modules** (using *Rollup*) transpiled from ES6 to older syntax (using *Babel*), *Uglify*'ied during build and validated by *ESLint* (with my own rules) during development.

<!-- TOC -->

- [Frontend boilerplate](#frontend-boilerplate)
    - [Installation](#installation)
    - [Usage](#usage)
        - [Development](#development)
        - [Production](#production)
        - [HTML / Jade (Pug)](#html--jade-pug)
        - [CSS / SASS](#css--sass)
        - [JS](#js)
            - [ESLint](#eslint)
                - [Removing from dev](#removing-from-dev)
                - [Adding to dist](#adding-to-dist)
        - [Public directory](#public-directory)

<!-- /TOC -->

## Installation

Start with cloning repository:

`git clone https://github.com/soanvig/frontend-boilerplate.git your_project_name`

Enter the directory:

`cd your_project_name`

Run [npm](https://www.npmjs.com/get-npm). This is will install all dependencies and processors:

`npm install`

If you don't get any error, it's time to start [usage](#usage).
If you do get errors, then there's problem with installing packages. Google errors.

It may be neccessary to install [Grunt](https://gruntjs.com/):

`sudo npm install -g grunt`

As simple as that. `sudo` is restricted to unix systems, in Windows one may need to run `cmd.exe` with admin privileges. Those are required to install it globally and make `grunt` command available (which is usually required, though if you know your system doesn't require using admin to install scripts globally, you can skip `sudo`).

## Usage

There are three important directories:

- `src` - where most of your app files go.
- `dist` - where builded app goes (everything from here can be copied directly to webserver).
- `public` - see [Public directory](#public-directory).

### Development

To serve with *browsersync*: `grunt dev`

### Production

To build: `grunt dist`.

### HTML / Jade (Pug)

HTML is supported as [Pug](https://pugjs.org/api/getting-started.html) or as `.html` files.

If you want to use Pug, you need to have files with `.pug` extension. If HTML, use `.html` extension.

Every Pug and HTML file under `src` directory will be moved (Pug will be processed into `.html` file) during building preserving its original name **and** tree. It means, that if file is placed deeper in directories tree, new directories will be created, just for that file. It just works out of the box.

Be aware of name conflicts between Pug and HTML files however. In case of conflicts, Pug file will overwrite HTML file during development and building. Presumably.

During development Pug files are accessible as they were processed (with `.html` extension).

**NOTE**: if filename starts with underscore (i.e. `_layout.pug` or `_hidden.html`) it won't show up in `dist` after building, neither as Pug nor HTML. Useful for Pug layouts.

### CSS / SASS

The main file is `main.scss` file. Other files in `scss` directory are just a proposed architecture.

All files should be placed in `src/assets/scss`, and have `.scss` extension (to keep things uniform).

The decision has been made to use SCSS syntax (not SASS syntax), because SCSS syntax can be used also by people who don't know SASS at all. **If you don't know SASS** just write your CSS in `.scss` files and eventually use [@import directive](http://sass-lang.com/guide) to split CSS into multiple files, just as was done in the repository.

### JS

The main file is `main.js` file.

All files should be placed in `src/assets/js`, and have `.js` extension.

As `main.js` is transpiled by rollup and babel, you can use import/export directives in your JS file.

All .js files are checked by *ESLint*.

#### ESLint

ESLint is activated only during dev. All reports are pushed to the console. Keep it visible somewhere. If error is thrown the rollup won't bundle (shouldn't), if it's only warning it will display it, but keep going.

ESLint is **not** activated during dist. I assume user did any dev before actually disting.

##### Removing from dev

Remove `eslint` from rollup dev plugins in `Gruntfile.js`. Its key is: `rollup.dev.options.plugins` and there is `eslint({...})`.

##### Adding to dist

Copy `eslint` plugin from rollup dev plugins (see [Removing from dev](#removing-from-dev)) into dist plugins.

### Public directory

Basicaly no file in public is converted in any way. Files from `public` directory are copied directly into `dist` directory during build (preserving the tree structure). Files from here are available for browser during development from *root* address (starting with `/`).

What should be here? Files, that are not neccessary for application/website itself.
They may be i.e. part of the content (images for articles) - though the website background image should go to `src/assets/images`.

You can find `vendor` directory inside `public`. There should go all files from outsourced solutions (plugins or something like that). This is in fact only a proposal from my side.