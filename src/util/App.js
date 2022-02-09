const download = require('image-downloader')
var ModelLib = require("./ModelLib");
var { MESSAGE, DEST } = require("../const/anyOtherConst");


var schema = {
    interval: null,
    path: "",
    filenames: [],
    pointer: 0
}

class Application extends ModelLib{
   constructor(){
       super(schema)
   }

   setPath(path){
        this.path = path;
        return this;
   }

   setFilenames(filenames){
        this.filenames = filenames;
        return this;
   }

   run(){
        this.interval = setInterval(()=>{
            if(this.pointer < this.filenames.length){
                const params = this.filenames[this.pointer];
                const url = this.mergeParamsToPath(params, this.path);

                download.image({ url, dest: DEST.SAVE_AVATAR })
                .then(()=> {
                    console.log("Success: " + url);
                })
                .catch(err => {
                    console.log("Error: " + url);
                    console.log(err.message);
                });
            }else{
                console.log(MESSAGE.END);
                clearInterval(this.interval);
            }
            this.pointer++;
        }, 1000);
   }

   mergeParamsToPath(params, path){
       if(typeof params === "string"){
           return path.replace("?", params);
       }else{
              var str = "";
              for(var key in params){
                str += key + "=" + params[key] + "&";
              }
              return path + str.substring(0, str.length - 1);
       }
   }

   static instance(){
       return new Application();
   }
}

module.exports = Application;