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
        "replaceWorld.js"
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
                rotation: [0, -0.33407710918227046, 0, 0.9425457469642614],
                name: "/fencing glb.glb",
                dataLocation: "3De-uuRbqgRwAfmXKRPgyla2gSN8rAvMBUoU7hMja68YLDAwNDd-a2siLSghN2oxN2onNis1MSEwai0razFrPhEwMxQLPgIxCxd1Dy0jCR4tcXd9PAIAA3x0dmstK2onNis1MSEwaiktJzYrMiE2NyFqKCsnJSggITIgISIlMSgwawoiLHEDfXdyMgYOLXwvfHMFHnNxEBY9ACYmPnERJiE-NR4eMi53fDUoJRFrICUwJWsTKxAOCTIAFHExFyY1fSEuL3xwAS09FS4oDB12BWkDKx0SNHYKDzcpCxMv",
                dataScale: [75.1022624608, 75.1022624608, 75.1022624608],
                fileName: "/fencing glb.glb",
                modelType: "glb",
                placeholder: true,
                placeholderSize: [400, 0.1, 400],
                placeholderColor: 0x808080,
                placeholderOffset: [0, 0, 0],
            }
        },
        // {
        //     card: {
        //         name: "entrance",
        //         type: "object",
        //         translation: [50.20992018018394, -0.2193180224504948, 6.306555179539628],
        //         rotation: [0, -0.33407710918227046, 0, 0.9425457469642614],
        //         spawn: "default",
        //     }
        // },
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
        // {
        //     card: {
        //         translation: [51.59826178938931, -1.6158449672018451, 3.16396191875493],
        //         scale: [9.232972389250047, 9.232972389250047, 9.232972389250047],
        //         rotation: [0, -0.33407710918227046, 0, 0.9425457469642614],
        //         layers: ["pointer"],
        //         name: "/fencing glb.glb",
        //         dataLocation: "3De-uuRbqgRwAfmXKRPgyla2gSN8rAvMBUoU7hMja68YLDAwNDd-a2siLSghN2oxN2onNis1MSEwai0razFrPhEwMxQLPgIxCxd1Dy0jCR4tcXd9PAIAA3x0dmstK2onNis1MSEwaiktJzYrMiE2NyFqKCsnJSggITIgISIlMSgwawoiLHEDfXdyMgYOLXwvfHMFHnNxEBY9ACYmPnERJiE-NR4eMi53fDUoJRFrICUwJWsTKxAOCTIAFHExFyY1fSEuL3xwAS09FS4oDB12BWkDKx0SNHYKDzcpCxMv",
        //         dataScale: [8.134137014012628, 8.134137014012628, 8.134137014012628],
        //         fileName: "/fencing glb.glb",
        //         modelType: "glb",
        //         shadow: true,
        //         singleSided: true,
        //         type: "3d",

        //     }
        // },
        {
            card: {
                translation: [4.864426492622716, -1.7254786614859574, -15.454262541561445],
                scale: [2.966891747803932, 2.966891747803932, 2.966891747803932],
                rotation: [0, -0.34122040450307417, 0, 0.9399833166342679],
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
                translation: [0.782132752381596, -1.8717448299612007, -10.97610274975624],
                scale: [0.7568584241693452, 0.7568584241693452, 0.7568584241693452],
                rotation: [0, 0.9411436286069209, 0, 0.3380069087054258],
                layers: ["pointer"],
                name: "/gate glb.glb",
                dataLocation: "3N1bJyVRuGGGa_sGpC9qD0zcZZXKSV5srX4urIPhfStoJjo6Pj10YWEoJyIrPWA7PWAtPCE_Oys6YCchYTthNBs6OR4BNAg7AR1_BScpAxQne313NggKCXZ-fGEnIWAtPCE_Oys6YCMnLTwhOCs8PStgIiEtLyIqKzgqKygvOyI6YS0UeXYrd3gFDDY4OjR6CxQvID8XPQ0IChZ-CTkRHjodOSglOxo8PzwFJi1hKi86L2EdfSoRITYnIiwtOnkYCBQ0eD4qB3YMCiQFPykAISI-AT82KQojY3sWHxgh",
                dataScale: [36.94713610124053, 36.94713610124053, 36.94713610124053],
                fileName: "/gate glb.glb",
                modelType: "glb",
                behaviorModules: ["ReplaceWorld"],
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                replaceWorldTargetURL: "?world=reception",
                shadow: true,
                singleSided: true,
                type: "3d",

            }
        },
        {
            card: {
                translation: [27.210444303512546, -1.1892729960863369, -7.899913945329711],
                scale: [0.922594815075871, 0.922594815075871, 0.922594815075871],
                rotation: [0, -0.4032205280274045, 0, 0.9151028389079017],
                layers: ["pointer"],
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
        // {
        //     card: {
        //         translation: [27.210444303512546, -1.400594996465705, -7.899913945329711],
        //         scale: [0.48225136630819493, 0.48225136630819493, 0.48225136630819493],
        //         rotation: [0, -0.4032205280274045, 0, 0.9151028389079017],
        //         layers: ["pointer"],
        //         name: "/genset glb.glb",
        //         dataLocation: "3lYZCbMJGiTrKVtFxQe8-nH5vrN4WRXuxJ5Yhn8QfkOgBBgYHB9WQ0MKBQAJH0IZH0IPHgMdGQkYQgUDQxlDFjkYGzwjFioZIz9dJwULITYFWV9VFCooK1RcXkMFA0IPHgMdGQkYQgEFDx4DGgkeHwlCAAMPDQAICRoICQoNGQAYQ0EOPjZbJDxfVQsYOVgUNgUDXTwLNRhdNRlYHj0hQQgGXgleWlUbOw4pODlDCA0YDUNYOAFUDV1bFiM9HyAvHQlYFVUpPRVeHxouPCVbKgpUKBYvCwYUAlUKIlVY",
        //         dataScale: [1.2120217359760301, 1.2120217359760301, 1.2120217359760301],
        //         fileName: "/genset glb.glb",
        //         modelType: "glb",
        //         shadow: true,
        //         singleSided: true,
        //         type: "3d",

        //     }
        // }

    ];
}
