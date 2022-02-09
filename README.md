# FrogSaver - Downloading images has never been easier

## Objective

Download images of sites from an array with simple methods

## Example

```js
var Application = require("./util/App");

var filenames = ["miramo_fg.jpg"];

Application
    .instance()
    .setPath("https://dragonbound.net/static/images/maps/?")
    .setFilenames(filenames)
    .run();

```