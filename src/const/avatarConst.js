/**
 * @author lnferno
 * @email xander.scorpio@gmail.com
 * @create date 2022-01-08 19:11:15
 * @modify date 2022-01-08 19:11:15
 * @desc Program that downloads images of avatars.
 * Made with 💛 by lnferno | 2015 - 2022
 */

const AVATAR_CONST = {
    CODE: {
        ID: 0,
        NUMBER: 1,
        TYPE: 2,
        GENDER: 3,
        FILENAME: 4,
        NAME: 5,
        PROPERTIES: 6,
        ANIMATION: 7,
        VISIBLE: 8
    },
    GENDER: {
        MALE: 0,
        FEMALE: 1,
        ALL: 2
    },
    TYPE: {
        HEAD: 0,
        BODY: 1,
        GLASS: 2,
        FLAG: 3,
        BACKGROUND: 4,
        FOREGROUND: 5,
        EXITEM: 6
    },
    NOTE: {
        EMPTY: 0,
        NEW: 1,
        ON_SALE: 2,
        SPECIAL_GIFT: 3,
        GM_ONLY: 4,
        ONLY_JUN_20: 5,
        CUSTOM: 6,
        GM_GIFT: 7,
        LIMITED_TIME: 8,
        UNKNOWN: 9 // ??
    }
}

module.exports = AVATAR_CONST