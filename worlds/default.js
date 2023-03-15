// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
    Constants.AvatarNames = ["newwhite"];

    /* Alternatively, you can specify a card spec for an avatar,
       instead of a string for the partical file name, to create your own avatar.
       You can add behaviorModules here. Also, if the system detects a behavior module
       named AvatarEventHandler, that is automatically installed to the avatar.
        {
            type: "3d",
            modelType: "glb",
            name: "rabbit",
            dataLocation: "./assets/avatars/newwhite.zip",
            dataRotation: [0, Math.PI, 0],
            dataScale: [0.3, 0.3, 0.3],
        }
    */

    Constants.UserBehaviorDirectory = "behaviors/default";
    Constants.UserBehaviorModules = [
        "csmLights.js",
        "urlLink.js",
        "replaceWorld.js",
        "popup.js"
    ];

    Constants.DefaultCards = [
        {
            card: {
                name: "world model",
                layers: ["walk"],
                type: "3d",
                singleSided: true,
                shadow: true,
                translation: [0, -1.7, 0],
                rotation: [0, 0, 0, 1],
                name: "/fencing glb.glb",
                dataLocation: "3De-uuRbqgRwAfmXKRPgyla2gSN8rAvMBUoU7hMja68YLDAwNDd-a2siLSghN2oxN2onNis1MSEwai0razFrPhEwMxQLPgIxCxd1Dy0jCR4tcXd9PAIAA3x0dmstK2onNis1MSEwaiktJzYrMiE2NyFqKCsnJSggITIgISIlMSgwawoiLHEDfXdyMgYOLXwvfHMFHnNxEBY9ACYmPnERJiE-NR4eMi53fDUoJRFrICUwJWsTKxAOCTIAFHExFyY1fSEuL3xwAS09FS4oDB12BWkDKx0SNHYKDzcpCxMv",
                dataScale: [110.1022624608, 110.1022624608, 110.1022624608],
                fileName: "/fencing glb.glb",
                modelType: "glb",
                placeholder: true,
                placeholderSize: [400, 0.1, 400],
                placeholderColor: 0x808080,
                placeholderOffset: [0, 0, 0],
            }
        },
        {
            card: {
                name: "light",
                layers: ["light"],
                type: "lighting",
                behaviorModules: ["Light"],
                dataLocation: "3OF2-s4U1ZOJduGATmLEIXo1iTkQHd5ZBknKgL5SvqpQJzs7Pzx1YGApJiMqPGE6PGEsPSA-Oio7YSYgYDpgCCsZLTYjBjwOJB4sDRcrfAg3Ljk2OBoEGBYWfWAmIGEsPSA-Oio7YSImLD0gOSo9PCpgPwB9AAIIISx8YiYneScqKyQaIisNLHkaGT8YKg56JQwQfHstPiNiGQ49e2ArLjsuYCMBPgMiCQt3OQskGhcleSp9HQIIfXseHgo7EAo9CB48FRwpegsCLH4OIwY",
                fileName: "/abandoned_parking_4k.jpg",
                dataType: "jpg",
            }
        },
        {
            card: {
                translation: [-7.0190447278987245, -1.7254786614859574, -24.93703191205553],
                scale: [5.847053442245466, 5.847053442245466, 5.847053442245466],
                rotation: [0, 0, 0, 1],
                layers: ["pointer", "walk"],
                name: "/Building glb 1.glb",
                dataLocation: "3X8QKLdkkhOCpikM4Nsd406ZtYmhwhwoYg9DUyV-opqcMCwsKCtid3c-MTQ9K3YtK3Y7KjcpLT0sdjE3dy13Ig0sLwgXIh4tFwtpEzE_FQIxbWthIB4cH2BoancxN3Y7KjcpLT0sdjUxOyo3Lj0qKz12NDc7OTQ8PS48PT45LTQsd2geb2sOEWwXHRsxbC0cYAExLQo8FzU1ITpgLgAUPgc6Dw0JKgoAH20AaTd3PDksOXcuOzwNdS8QazoaMjMydQAcGisNMGBsET0rKWkfNzAfMnUWKxJpDyodDygN",
                dataScale: [17.21860974474125, 17.21860974474125, 17.21860974474125],
                fileName: "/Building glb 1.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",

            }
        },
        {
            card: {
                translation: [-7.195595619466183, -1.9026332077896082, -12.958162949480787],
                scale: [1.1515578491694043, 1.1515578491694043, 1.1515578491694043],
                rotation: [-0.0022577005160621423, 0.9994784453952842, 0.002565262322578757, -0.032111670897384245],
                layers: ["pointer"],
                behaviorModules: ["ReplaceWorld"],
                name: "/gate glb.glb",
                dataLocation: "3N1bJyVRuGGGa_sGpC9qD0zcZZXKSV5srX4urIPhfStoJjo6Pj10YWEoJyIrPWA7PWAtPCE_Oys6YCchYTthNBs6OR4BNAg7AR1_BScpAxQne313NggKCXZ-fGEnIWAtPCE_Oys6YCMnLTwhOCs8PStgIiEtLyIqKzgqKygvOyI6YS0UeXYrd3gFDDY4OjR6CxQvID8XPQ0IChZ-CTkRHjodOSglOxo8PzwFJi1hKi86L2EdfSoRITYnIiwtOnkYCBQ0eD4qB3YMCiQFPykAISI-AT82KQojY3sWHxgh",
                dataScale: [36.94713610124053, 36.94713610124053, 36.94713610124053],
                fileName: "/gate glb.glb",
                modelType: "glb",
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                replaceWorldTargetURL: "?world=reception",
                shadow: true,
                singleSided: true,
                type: "3d",


            }
        },
        {
            card: {
                translation: [21.455400970972285, -1.1892729960863369, -34.82069218952528],
                scale: [0.922594815075871, 0.922594815075871, 0.922594815075871],
                rotation: [0, 0, 0, 1],
                layers: ["pointer", "walk"],
                name: "/genset glb.glb",
                dataLocation: "3lYZCbMJGiTrKVtFxQe8-nH5vrN4WRXuxJ5Yhn8QfkOgBBgYHB9WQ0MKBQAJH0IZH0IPHgMdGQkYQgUDQxlDFjkYGzwjFioZIz9dJwULITYFWV9VFCooK1RcXkMFA0IPHgMdGQkYQgEFDx4DGgkeHwlCAAMPDQAICRoICQoNGQAYQ0EOPjZbJDxfVQsYOVgUNgUDXTwLNRhdNRlYHj0hQQgGXgleWlUbOw4pODlDCA0YDUNYOAFUDV1bFiM9HyAvHQlYFVUpPRVeHxouPCVbKgpUKBYvCwYUAlUKIlVY",
                dataScale: [1.2120217359760301, 1.2120217359760301, 1.2120217359760301],
                fileName: "/genset glb.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",


            }
        },
        {
            card: {
                translation: [21.495477710570157, -1.1892729960863369, -31.351417486024978],
                scale: [0.922594815075871, 0.922594815075871, 0.922594815075871],
                rotation: [0, 0, 0, 1],
                layers: ["pointer", "walk"],
                name: "/genset glb.glb",
                dataLocation: "3lYZCbMJGiTrKVtFxQe8-nH5vrN4WRXuxJ5Yhn8QfkOgBBgYHB9WQ0MKBQAJH0IZH0IPHgMdGQkYQgUDQxlDFjkYGzwjFioZIz9dJwULITYFWV9VFCooK1RcXkMFA0IPHgMdGQkYQgEFDx4DGgkeHwlCAAMPDQAICRoICQoNGQAYQ0EOPjZbJDxfVQsYOVgUNgUDXTwLNRhdNRlYHj0hQQgGXgleWlUbOw4pODlDCA0YDUNYOAFUDV1bFiM9HyAvHQlYFVUpPRVeHxouPCVbKgpUKBYvCwYUAlUKIlVY",
                dataScale: [1.2120217359760301, 1.2120217359760301, 1.2120217359760301],
                fileName: "/genset glb.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",

            }
        },
        {
            card: {
                translation: [21.54473866589609, -1.1892729960863369, -28.68817494127406],
                scale: [0.922594815075871, 0.922594815075871, 0.922594815075871],
                rotation: [0, 0, 0, 1],
                layers: ["pointer", "walk"],
                name: "/genset glb.glb",
                dataLocation: "3lYZCbMJGiTrKVtFxQe8-nH5vrN4WRXuxJ5Yhn8QfkOgBBgYHB9WQ0MKBQAJH0IZH0IPHgMdGQkYQgUDQxlDFjkYGzwjFioZIz9dJwULITYFWV9VFCooK1RcXkMFA0IPHgMdGQkYQgEFDx4DGgkeHwlCAAMPDQAICRoICQoNGQAYQ0EOPjZbJDxfVQsYOVgUNgUDXTwLNRhdNRlYHj0hQQgGXgleWlUbOw4pODlDCA0YDUNYOAFUDV1bFiM9HyAvHQlYFVUpPRVeHxouPCVbKgpUKBYvCwYUAlUKIlVY",
                dataScale: [1.2120217359760301, 1.2120217359760301, 1.2120217359760301],
                fileName: "/genset glb.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",

            }
        },
        {
            card: {
                translation: [21.525827251452995, -1.1892729960863369, -25.796740752779034],
                scale: [0.922594815075871, 0.922594815075871, 0.922594815075871],
                rotation: [0, 0, 0, 1],
                layers: ["pointer", "walk"],
                name: "/genset glb.glb",
                dataLocation: "3lYZCbMJGiTrKVtFxQe8-nH5vrN4WRXuxJ5Yhn8QfkOgBBgYHB9WQ0MKBQAJH0IZH0IPHgMdGQkYQgUDQxlDFjkYGzwjFioZIz9dJwULITYFWV9VFCooK1RcXkMFA0IPHgMdGQkYQgEFDx4DGgkeHwlCAAMPDQAICRoICQoNGQAYQ0EOPjZbJDxfVQsYOVgUNgUDXTwLNRhdNRlYHj0hQQgGXgleWlUbOw4pODlDCA0YDUNYOAFUDV1bFiM9HyAvHQlYFVUpPRVeHxouPCVbKgpUKBYvCwYUAlUKIlVY",
                dataScale: [1.2120217359760301, 1.2120217359760301, 1.2120217359760301],
                fileName: "/genset glb.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",

            }
        },
        {
            card: {
                translation: [21.659918326330057, -1.1892729960863369, -22.933793016801975],
                scale: [0.922594815075871, 0.922594815075871, 0.922594815075871],
                rotation: [0, 0, 0, 1],
                layers: ["pointer", "walk"],
                name: "/genset glb.glb",
                dataLocation: "3lYZCbMJGiTrKVtFxQe8-nH5vrN4WRXuxJ5Yhn8QfkOgBBgYHB9WQ0MKBQAJH0IZH0IPHgMdGQkYQgUDQxlDFjkYGzwjFioZIz9dJwULITYFWV9VFCooK1RcXkMFA0IPHgMdGQkYQgEFDx4DGgkeHwlCAAMPDQAICRoICQoNGQAYQ0EOPjZbJDxfVQsYOVgUNgUDXTwLNRhdNRlYHj0hQQgGXgleWlUbOw4pODlDCA0YDUNYOAFUDV1bFiM9HyAvHQlYFVUpPRVeHxouPCVbKgpUKBYvCwYUAlUKIlVY",
                dataScale: [1.2120217359760301, 1.2120217359760301, 1.2120217359760301],
                fileName: "/genset glb.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
                behaviorModules: ["Popup"], 

            }
        },
        {
            card: {
                translation: [15.553709936712654, -1.7159265311363021, -32.65446693648686],
                scale: [0.8929580455569662, 0.8929580455569662, 0.8929580455569662],
                rotation: [0, 0, 0, 1],
                layers: ["pointer", "walk"],
                name: "/transformer glb.glb",
                dataLocation: "3PqNiwOaJZ2F0J5ZgrMna-ZDF1Cg76LebzLzFouZNyJAOCQkICNqf382OTw1I34lI34zIj8hJTUkfjk_fyV_KgUkJwAfKhYlHwNhGzk3HQo5ZWNpKBYUF2hgYn85P34zIj8hJTUkfj05MyI_JjUiIzV-PD8zMTw0NSY0NTYxJTwkfzMPHDY8ACcUEgUzZGg0ACo9GRQGZRIpIx9lKjJmaB9jA2FpCmUjAyA6Fz9_NDEkMX8IBBkiHjphIQAIaDV9ASpifTsZHhM-FWY_Aj9laTIqHDo6ZWQoGgkDGR87",
                dataScale: [48.46312429144301, 48.46312429144301, 48.46312429144301],
                fileName: "/transformer glb.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",

            }
        },
        {
            card: {
                translation: [15.440692276558654, -1.7159265311363021, -29.921511030156],
                scale: [0.8929580455569662, 0.8929580455569662, 0.8929580455569662],
                rotation: [0, 0, 0, 1],
                layers: ["pointer", "walk"],
                name: "/transformer glb.glb",
                dataLocation: "3PqNiwOaJZ2F0J5ZgrMna-ZDF1Cg76LebzLzFouZNyJAOCQkICNqf382OTw1I34lI34zIj8hJTUkfjk_fyV_KgUkJwAfKhYlHwNhGzk3HQo5ZWNpKBYUF2hgYn85P34zIj8hJTUkfj05MyI_JjUiIzV-PD8zMTw0NSY0NTYxJTwkfzMPHDY8ACcUEgUzZGg0ACo9GRQGZRIpIx9lKjJmaB9jA2FpCmUjAyA6Fz9_NDEkMX8IBBkiHjphIQAIaDV9ASpifTsZHhM-FWY_Aj9laTIqHDo6ZWQoGgkDGR87",
                dataScale: [48.46312429144301, 48.46312429144301, 48.46312429144301],
                fileName: "/transformer glb.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",


            }
        }
    ];
}
