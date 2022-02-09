/**
 * @author lnferno
 * @email xander.scorpio@gmail.com
 * @create date 2022-01-08 19:11:15
 * @modify date 2022-01-08 19:11:15
 * @desc Program that downloads images of avatars.
 * Made with 💛 by lnferno | 2015 - 2022
 */


module.exports = {
    APPLY_PARAM: {
        ROUTE_DOWNLOAD: "https://dragonbound.net/static/images/ava/:filename.png",
        COUNT_AVATAR: "Find :count avatars",
        DOWNLOADED_AVATAR: "✅ Downloaded :count avatars",
        ERROR_AVATAR: "❌ Error :count avatars",
        FIND_ERROR_AVATAR: "❌ Error -> uri: :uri - message: :message",
        FIND_SUCCESS_AVATAR: "✅ Success -> [:pointer/:limit] uri: :uri",
    },
    PARAM: {
        ROUTE_DOWNLOAD: ":filename",
        COUNT_AVATAR: ":count",
        DOWNLOADED_AVATAR: ":count",
        ERROR_AVATAR: ":count",
        URI: ":uri",
        POINTER: ":pointer",
        LIMIT: ":limit",
    },
    DEST: {
        SAVE_AVATAR: "./images"
    },
    MESSAGE: {
        START: "✨ Start downloading avatars",
        END: "✨ Done downloading avatars",
    }
}