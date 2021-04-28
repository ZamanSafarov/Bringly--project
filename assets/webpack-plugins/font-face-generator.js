var _ = require('underscore');
var path = require('path');
var fs = require('fs');
var grunt = require('grunt')


class FontFaceGenerator{
    constructor(options) {
        this.options = options;
        this.fontFiles = [];
        this.uniqFontFiles = [];
        this.contents = '';
    }
    apply(compiler) {

        fs.readdirSync(process.cwd() +'/'+this.options.fontDir, function (err,files){
            files.forEach(function (file) {
                if (file.indexOf('-webfont') !== -1){
                    var workingFile = path.resolve(file);
                    console.log(workingFile)
                    fs.rename(workingFile, workingFile.replace('-webfont', '', function (err) {
                        if (err) throw err;
                    }))
                }
            })
        });

        let self = this

        grunt.file.recurse(process.cwd()+'/'+this.options.fontDir, function (abspath, rootdir, subdir, filename) {
            if (filename.indexOf(self.options.removeFromFile) !== -1) {

                grunt.log.writeln('>>Renaming ' + filename);

                var workingFile = path.resolve(process.cwd() + '/' + self.options.fontDir + '/' + filename);

                fs.renameSync(workingFile, workingFile.replace('-webfont', ''), function(err) {
                    if (err) throw err;
                });
                filename = filename.replace(self.options.removeFromFile, '');
            }


            var processFile = filename.substring(0, filename.lastIndexOf('.'));

            self.fontFiles.push(processFile);

        })

        this.uniqFontFiles = _.uniq(this.fontFiles).filter(function (el) {
            if (el)
                return el;
        })

        this.uniqFontFiles.forEach(function (el) {

            _.templateSettings ={
                interpolate: /\{\{(.+?)\}\}/g
            }

            var template = _.template(self.options.template);
            self.contents += template({font:el}) + grunt.util.linefeed

        })

        grunt.file.write(self.options.outputFile,self.contents)
    }

}

module.exports = FontFaceGenerator;
