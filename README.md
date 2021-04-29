# Web Front End Structure

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](http://sahibhuseynov.me)

Before to start development you need to do things below

- Fresh install (just clone repository [![Package Control total downloads](https://img.shields.io/packagecontrol/dt/SwitchDictionary.svg)](https://bitbucket.org/sahibhuseyn1/webpack-front-str) )
- Run  ``` npm install ```
- For development stage run  ``` npm run dev ``` (after run this command to see changes navigate on your browser to ```127.0.0.1:9000 ```)
- For production stage run  ``` npm run prod ```

## Features

- LESS, BEM
- ES6
- CSS Autoprefix
- Auto generated styleguide
- Auto genrate sprite images for   ``` @1x and @2x ```
- Automatically adding font files into LESS file
- Svg icons to font

### Font Face Generator Plugin
Available options to make changes

|Name|Type|Default|Description|
|:--:|:--:|:-----:|:----------|
|**`fontDir`**|`{String}`|`./fonts`|Required - to read files from directory|
|**`outputFile`**|`{String}`|`'./css/utilities/fonts.less'`| Required Allows to generate fonts icluded less file |
|**`template`**|`{String}`|``| Allows to change output file content |

Example Templates
> template:  '@include font-face("' +
'{{font}}", font-files(' +
'"{{font}}.woff", ' +
'"{{font}}.ttf", ' +
'"{{font}}.svg#{{font}}"), ' +
'"{{font}}.eot");'

>  template: '@font-face{ font-family: "' +
'{{font}}"; ' +
'src: url("../../fonts/{{font}}.eot");' +
'src: url("../../fonts/{{font}}.eot") format(\'embedded-opentype\')' +
',url("../../fonts/{{font}}.woff2") format(\'woff2\')' +
',url("../../fonts/{{font}}.woff") format(\'woff\')' +
',url("../../fonts/{{font}}.ttf") format(\'truetype\')' +
',url("../../fonts/{{font}}.svg") format(\'svg\')' +
';' +
'}',

### SVG Icon Generator usage
``` font-icon: url('../../icons/wall-clock.svg');```


### Styleguide Generator usage

Add comments like below to your less file
```
// .colors(@bg, @color)
//
// Applies foreground and background colors.
//
// @bg = #f5f5f5 - Background color.
// @color = #900 - Foreground color.
//
// Style guide: test.mixins.example 
```

### Edit and Updates
You can customize this structure ass you wish.
If there need to change defined variables according to your environment just edit ***configuration/environment.js***.
There are also production and development mode configurations available in configuration folder, don't hesitate to change them.
If you want to add your own ***webpack plugin*** just install this by NPM module, or add into ***webpack-plugins*** directory
