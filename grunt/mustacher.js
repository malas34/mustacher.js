/*jslint indent: 4 */
/*global module */
module.exports = {
    options: {
        partials: {
            src: 'examples/templates/'
        }
    },
    compile: {
        files: [{
            src: 'examples/templates/index.tpl',
            dest: 'examples/html/index.html'
        }]
    }
};
/*
all: {
    options:{
        partials: 'examples/partials/'
    },
    files: [{
        expand: true,
        cwd: 'examples/templates/', // relative src path
        src: '*.tpl',
        dest: 'examples/html',
        ext: '.html', // compiled file extension
        extDot: 'first', // Extensions in filenames begin after the first dot
        flatten: true // Remove all path parts from generated dest paths.
    }]
},
*/