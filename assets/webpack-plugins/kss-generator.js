var kss = require('kss')
const environment = require('../configuration/environment')


class kssGenerator{
    constructor() {
        this.stylguide = {
            source: [
                'css'
            ],
            destination: 'styleguide',
            css: [
                environment.paths.serveFrom+'/assets/css/design.css',
            ],
            js: [
                environment.paths.source+'/javascripts/used/*'
            ],
            homepage: 'homepage.md',
            title: environment.app.name
        }

        this.options = {
            markdown: false
        };
    }
    apply(compiler) {
        kss(this.stylguide)
    }

}

module.exports = kssGenerator;
