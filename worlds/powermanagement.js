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
                rotation: [0, 0, 0, 1],
                name: "/power management roomblend glb.glb",
                dataLocation: "3K54d72wwoiUpGEdrDYEMMN__MtYAbJNYORvrS4SaPNUIz8_OzhxZGQtIicuOGU-OGUoOSQ6Pi4_ZSIkZD5kMR4_PBsEMQ0-BBh6ACIsBhEifnhyMw0PDHN7eWQiJGUoOSQ6Pi4_ZSYiKDkkPS45OC5lJyQoKicvLj0vLi0qPic_ZH0lFB4GEQcIOxMMLThyKREMCS0ZDQhyIgF9LnMcPnkuHx95A34YGSIyJyxkLyo_KmQZCCp-Lj0JEi0jMjMkERRzBT5-AjskMwIeIBMqDgAYDHoELBp6BAMvLwks",
                dataScale: [3.016285755060983984, 3.016285755060983984, 3.016285755060983984],
                fileName: "/power management roomblend glb.glb",
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
        {
            card: {
                translation: [0.017340602874265976, -2.2062188484248715, 10.824625901439726],
                scale: [2.356718578078481, 2.356718578078481, 2.356718578078481],
                rotation: [0.0014816440416945595, 0.0013505124370309304, -0.002135462264219092, -0.9999957103148038],
                layers: ["pointer"],
                name: "/gate glb.glb",
                dataLocation: "3_F4eL3ejYThzXtlU8G6W6xc0gE6q_-YLBH-1CtFO-zkR1tbX1wVAABJRkNKXAFaXAFMXUBeWkpbAUZAAFoAVXpbWH9gVWlaYHweZEZIYnVGGhwWV2lraBcfHQBGQAFMXUBeWkpbAUJGTF1AWUpdXEoBQ0BMTkNLSllLSklOWkNbAHkbbUhdZ2x5QVpnYHtkeFcXZlxZXmtDG2sWZ3lJd0lMSH5HbBsfSkxDFkQAS05bTgAYV0EYSk5ObWsbZxdGVxh-dUFMeXcYeFlkfU5qehdiR2geYXdiTExsYUdA",
                dataScale: [36.94713610124053, 36.94713610124053, 36.94713610124053],
                fileName: "/gate glb.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
                behaviorModules: ["ReplaceWorld"],
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                replaceWorldTargetURL: "?world=reception",
            }
        },
        // {
        //     card: {
        //         translation: [0, 0, -6],
        //         rotation: [0, 0, 0, 1],
        //         layers: ["pointer"],
        //         name: "/power management roomblend glb.glb",
        //         dataLocation: "3K54d72wwoiUpGEdrDYEMMN__MtYAbJNYORvrS4SaPNUIz8_OzhxZGQtIicuOGU-OGUoOSQ6Pi4_ZSIkZD5kMR4_PBsEMQ0-BBh6ACIsBhEifnhyMw0PDHN7eWQiJGUoOSQ6Pi4_ZSYiKDkkPS45OC5lJyQoKicvLj0vLi0qPic_ZH0lFB4GEQcIOxMMLThyKREMCS0ZDQhyIgF9LnMcPnkuHx95A34YGSIyJyxkLyo_KmQZCCp-Lj0JEi0jMjMkERRzBT5-AjskMwIeIBMqDgAYDHoELBp6BAMvLwks",
        //         dataScale: [0.016285755060983984, 0.016285755060983984, 0.016285755060983984],
        //         fileName: "/power management roomblend glb.glb",
        //         modelType: "glb",
        //         shadow: true,
        //         singleSided: true,
        //         type: "3d",

        //     }
        // },

    ];
}
