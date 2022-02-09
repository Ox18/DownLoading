/**
 * @author lnferno
 * @email xander.scorpio@gmail.com
 * @create date 2022-01-08 19:11:15
 * @modify date 2022-01-08 19:11:15
 * @desc Program that downloads images of avatars.
 * Made with 💛 by lnferno | 2015 - 2022
 */

var Application = require("./util/App");

var filenames = ["miramo_fg.jpg"];

Application
    .instance()
    .setPath("https://dragonbound.net/static/images/maps/?")
    .setFilenames(filenames)
    .run();




