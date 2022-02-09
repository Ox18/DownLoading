/**
 * @author lnferno
 * @email xander.scorpio@gmail.com
 * @create date 2022-01-08 19:11:15
 * @modify date 2022-01-08 19:11:15
 * @desc Program that downloads images of avatars.
 * Made with 💛 by lnferno | 2015 - 2022
 */

var Application = require("./util/App");

var filenames = ["dragonlava.jpg","dragonlava_bg.jpg","space_fg.jpg","space_bg2.jpg","metro_fg.jpg","space_bg.jpg","sea_fg.jpg","sea_bg2.jpg","lionjungle_fg.jpg","forest_bg.jpg","dragon_fg.jpg","xmas_bg2.jpg","cozy_fg.jpg","sky_bg.jpg","dummy_fg.jpg","sea_bg3.jpg","thousandsunny_fg.jpg","thousandsunny_bg.jpg","ground_maya.jpg","balloon_bg.jpg","cave_fg.jpg","xmas_bg.jpg","secret_fg.jpg","sea_bg4.jpg","icecave_fg.jpg","icecave_bg.jpg","treeoflife_fg.jpg","treeoflife_bg.jpg","icefish_fg.jpg","icefish_bg.jpg","soccer_fg.jpg","soccer_bg.jpg","candy_fg.jpg","candy_bg.jpg","monster_fg.jpg","monster_bg.jpg","miramob_fg.jpg","miramo_bg.jpg","nirvanab_fg.jpg","nirvana_bg.jpg","metrob_fg2.jpg","metro_bg.jpg","seab_fg.jpg","sea_bg.jpg","adium2_fg.jpg","adium_bg2.jpg","dragonb_fg.jpg","dragon_bg.jpg","cozy2_fg.jpg","cozy_bg.jpg","dummy2_fg.jpg","dummy_bg2.jpg","starb_fg.jpg","star_bg.jpg","metamineb_fg.jpg","metamine_bg.jpg","loveu_fg.jpg","loveu_bg.jpg","loveu2_fg.jpg","loveu_bg.jpg","lond_fg.jpg","lond_bg.jpg","lond2_fg.jpg","lond_bg.jpg","desert_fg.jpg","desert_bg.jpg","desert2_fg.jpg","desert_bg.jpg","gray_fg.jpg","gray_bg.jpg","gray2_fg.jpg","gray_bg.jpg","jungle_fg.jpg","jungle_bg.jpg","jungle2_fg.jpg","jungle_bg.jpg","myroom_fg.jpg","myroom_bg.jpg","myroomb_fg.jpg","myroom_bg.jpg","dummyc_fg.jpg","dummy_bg2.jpg","adiumc_fg.jpg","adium_bg2.jpg","megamine_fg.jpg","balloon_bg.jpg","minimine_fg.jpg","balloon_bg.jpg","culture_fg.jpg","jungle_bg.jpg","purple_mine_fg.jpg","xmas_bg2.jpg","halloween_fg.jpg","halloween_bg.jpg","clocktower_fg.jpg","clocktower_bg.jpg","clocktowerb_fg.jpg","clocktower_bg.jpg","xmascake.jpg","xmas_bg3.jpg","easter_fg.jpg","easter_bg.jpg","forest_fg.jpg","forest2_bg.jpg","mario_fg.jpg","mario_bg.png","spacemine_fg.jpg","star_bg.jpg","space3_fg.jpg","space3_bg.jpg","toxic_fg.jpg","toxic_bg.jpg","snow_fg.jpg","snow_bg.jpg","miramo_fg.jpg","miramo_bg.jpg","nirvana_fg.jpg","nirvana_bg.jpg","metro_fg.jpg","metro_bg.jpg","sea_fg.jpg","sea_bg.jpg","adium_fg.jpg","adium_bg2.jpg","dragon_fg.jpg","dragon_bg.jpg","cozy_fg.jpg","cozy_bg.jpg","dummy_fg.jpg","dummy_bg2.jpg","star_fg.jpg","star_bg.jpg","metamine_fg.jpg","metamine_bg.jpg","cave_fg.jpg","cave_bg.jpg","secret_fg.jpg","secret_bg.jpg"];

Application
    .instance()
    .setPath("https://dragonbound.net/static/images/maps/?")
    .setFilenames(filenames)
    .run();




