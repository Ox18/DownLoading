/**
 * @author lnferno
 * @email xander.scorpio@gmail.com
 * @create date 2022-01-08 19:11:15
 * @modify date 2022-01-08 19:11:15
 * @desc Program that downloads images of avatars.
 * Made with 💛 by lnferno | 2015 - 2022
 */

class SuperParam{
    constructor(str){
        this.str = str;
    }

    setParam(key, value){
        this.str = this.str.replace(key, value);
    }

    get(){
        return this.str;
    }

    print(){
        console.log(this.str);
    }
}

module.exports = SuperParam;