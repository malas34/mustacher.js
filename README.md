<a name="mustacher"></a>
# Mustacher

[![Built with Grunt][grunt-img]](http://gruntjs.com/) [![MIT License][license-img]][license-url] [![NPM version][npm-version-img]][npm-url] [![NPM downloads][npm-downloads-img]][npm-url] [![Build Status][travis-img]][travis-url] [![Coverage Status][coverall-img]][coverall-url]

> Handlebars template (.tpl, .hbs) Helpers!


<a name="exposed-helpers"></a>
## Exposed helpers

### $include

```html
<div class="part">
    {{$include 'relative/to/root/path/to/template'}}
</div>
```

### #repeat

```html
<ul>
    {{#repeat 4}}
    <li class="{{class}}">
        <a href="" alt="{{count}} of {{of}}">item </a>
        <ul>
        {{#repeat}}
            <li class="{{#if @first}}first{{/if}}">
                <span>sub item {{@../index}}/{{@index}}</span>
            </li>
        {{/repeat}}
        </ul>
    </li>
    {{/repeat}}
</ul>
```

### $Timestamp

```html
<img src="my/file.png?{{$timestamp}}" alt="" title="">
```

### $livereload

```html
<div id="footer">
    {{$livereload 1337}}
</div>
```

### $random

```html
<span>
    <b>{{$random 1 31}}</b>
    <strong>>Juanary</strong>
    <em>1970</em>
</span>
```

```html
<span>{{$random 0 1 true}}</span>
```


### #And

```html
{{#and true false...}}
<span>fail</span>
{{else}}
<span>success</span>
{{/and}}
```

### #Or

```html
{{#or true false ...}}
<span>success</span>
{{else}}
<span>fail</span>
{{/and}}
```

### #Equal

```html
{{#equal 'toto' 'blague'}}
<span>fail</span>
{{else}}
<span>success</span>
{{/and}}
```


<a name="the-mustacher-task"></a>
## The "mustacher" task

<a name="install"></a>
#### Install

```shell
npm install mustacher --save-dev
```

<a name="task"></a>
#### Task

> In your project's Gruntfile, add a section named `mustacher` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    mustacher: {
        options:{
            partials:{
                ext:'.hbs',
                src:'partials/'
            }
        },
        compile: {
            options:{
                context:{
                    any: 'to be touched by @root.context.any'
                    inside: 'a template'
                }
            },
            files: [{
                src: 'templates/index.tpl',
                dest: 'html/index.html'
            }, {
                src: 'templates/head.tpl',
                dest: 'html/head.html'
            }]
        }
    },
});
```

> Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('mustacher');
```

<a name="requirements"></a>
## Requirements

##### [Handlebars](http://handlebarsjs.com) `^2.0.0`

Handlebars provides the power necessary to let you build semantic templates effectively with no frustration.

Handlebars is largely compatible with Mustache templates. In most cases it is possible to swap out Mustache with Handlebars and continue using your current templates.

##### [Lo-Dash](https://lodash.com) `^2.4.1`

A utility library delivering consistency, customization, performance, & extras.

##### [Q](http://documentup.com/kriskowal/q/) `^1.1.1`

A tool for making and composing asynchronous promises in JavaScript

##### [Grunt](http://gruntjs.com/) `~0.4.5`

If you haven't used Grunt before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:


[grunt-img]: https://cdn.gruntjs.com/builtwith.png

[license-img]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: LICENSE-MIT

[coverall-url]: https://coveralls.io/r/sixertoy/grunt-mustacher
[coverall-img]: https://img.shields.io/coveralls/sixertoy/grunt-mustacher.svg?style=flat-square

[npm-url]: https://npmjs.org/package/grunt-mustacher
[npm-version-img]: http://img.shields.io/npm/v/grunt-mustacher.svg?style=flat-square
[npm-downloads-img]: http://img.shields.io/npm/dm/grunt-mustacher.svg?style=flat-square

[travis-url]: https://travis-ci.org/sixertoy/grunt-mustacher
[travis-img]: http://img.shields.io/travis/sixertoy/grunt-mustacher.svg?style=flat-square
