# Curriculum Vitae of Philip Schulz-Klingauf

## Features:
* Sass/SCSS
* Handlebars templating
* ES6 minification & bundling
* Live injection/reload with BrowserSync 

## Prerequisites
* `nvm` (NodeJS version manager)
* `pyenv` (python version manager)
* `npx` (NPM package runner)

## Getting Started

Clone the repo:

```sh
git clone https://github.com/pschulzk/pschulzk-cv.git
```
Navigate into cloned project folder:
```sh
cd pschulzk-cv
```
Set correct python version required for npm dependencies:
```sh
pyenv local
```
Set correct NodeJS version required for npm dependencies:
```sh
nvm use
```
Install all dependencies using npm:
```sh
npm ci
```
Run the default Gulp task to get started:
```sh
npx gulp
```

BrowserSync will automagically inject any changes you make to the stylesheets. You can view the website at one of the given access URLs:

```sh
[BS] Access URLs:
 ----------------------------------
       Local: http://localhost:3000
    External: http://10.0.X.XX:3000
 ----------------------------------
```

If you are working within a GitHub repo you can deploy your project, at any time, to a `gh-pages` branch by running:

```sh
gulp deploy
```

## Credits

- Responsive grid from [Skeleton](http://getskeleton.com) by [Dave Gamache](https://github.com/dhg)

