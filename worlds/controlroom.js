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
                name: "/control room glb.glb",
                dataLocation: "30G5Gt1PXyWKyU14QAzV1Ohl5ozdDoxkgAssta9uQC30WEREQEMKHx9WWVxVQx5FQx5TQl9BRVVEHllfH0UfSmVER2B_SnZFf2MBe1lXfWpZBQMJSHZ0dwgAAh9ZXx5TQl9BRVVEHl1ZU0JfRlVCQ1UeXF9TUVxUVUZUVVZRRVxEH3xlaFt2alMJRUVzdVZIBkkIRXFzV1gCWFdldnpgVVN0ZnFYBgRfSURnRlMfVFFEUR9SQFh7ZmYEB1FhBgddBQAHWXZ9fh1_clhIY29SXnJ8fWlvSXlEVH55WUlp",
                dataScale: [3.31934038024111905, 3.31934038024111905, 3.31934038024111905],
                fileName: "/control room glb.glb",
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
        //         translation: [8.948295530289732, -0.011999999254941773, -5.148970873032047],
        //         rotation: [0, -0.6413362256690263, 0, 0.7672599596255548],
        //         layers: ["pointer"],
        //         name: "/control room glb.glb",
        //         dataLocation: "30G5Gt1PXyWKyU14QAzV1Ohl5ozdDoxkgAssta9uQC30WEREQEMKHx9WWVxVQx5FQx5TQl9BRVVEHllfH0UfSmVER2B_SnZFf2MBe1lXfWpZBQMJSHZ0dwgAAh9ZXx5TQl9BRVVEHl1ZU0JfRlVCQ1UeXF9TUVxUVUZUVVZRRVxEH3xlaFt2alMJRUVzdVZIBkkIRXFzV1gCWFdldnpgVVN0ZnFYBgRfSURnRlMfVFFEUR9SQFh7ZmYEB1FhBgddBQAHWXZ9fh1_clhIY29SXnJ8fWlvSXlEVH55WUlp",
        //         dataScale: [0.31934038024111905, 0.31934038024111905, 0.31934038024111905],
        //         fileName: "/control room glb.glb",
        //         modelType: "glb",
        //         shadow: true,
        //         singleSided: true,
        //         type: "3d",
        //     }
        // },
        {
            card: {
                translation: [0.1889979248872211, -2.1440477261730306, 11.766396555277085],
                scale: [1.8552690124858748, 1.8552690124858748, 1.8552690124858748],
                rotation: [0, 0.019060579056278358, 0, -0.9998183306611453],
                layers: ["pointer"],
                behaviorModules: ["ReplaceWorld"],
                name: "/gate glb.glb",
                dataLocation: "3cNeisH6Kbi3kX28biStHH8ESVeSE8vnV-qBjwhbTbMMCxcXExBZTEwFCg8GEE0WEE0AEQwSFgYXTQoMTBZMGTYXFDMsGSUWLDBSKAoELjkKVlBaGyUnJFtTUUwKDE0AEQwSFgYXTQ4KABEMFQYREAZNDwwAAg8HBhUHBgUCFg8XTBoVWlJXUjEXEiUKEwBXVAwnEAIIUxoUVSRTVA8KAVFTNRA8Oy5aERIuUVdMBwIXAkwWKQEGFhUzCCYgVhYLLQIMDyglJDAhMAYTECIUMisWWzMUCgYOKxRaFyE2",
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
        // {
        //     card: {
        //         translation: [0.782132752381596, -1.8717448299612007, -10.97610274975624],
        //         scale: [0.7568584241693452, 0.7568584241693452, 0.7568584241693452],
        //         rotation: [0, 0.9411436286069209, 0, 0.3380069087054258],
        //         layers: ["pointer"],
        //         name: "/gate glb.glb",
        //         dataLocation: "3N1bJyVRuGGGa_sGpC9qD0zcZZXKSV5srX4urIPhfStoJjo6Pj10YWEoJyIrPWA7PWAtPCE_Oys6YCchYTthNBs6OR4BNAg7AR1_BScpAxQne313NggKCXZ-fGEnIWAtPCE_Oys6YCMnLTwhOCs8PStgIiEtLyIqKzgqKygvOyI6YS0UeXYrd3gFDDY4OjR6CxQvID8XPQ0IChZ-CTkRHjodOSglOxo8PzwFJi1hKi86L2EdfSoRITYnIiwtOnkYCBQ0eD4qB3YMCiQFPykAISI-AT82KQojY3sWHxgh",
        //         dataScale: [36.94713610124053, 36.94713610124053, 36.94713610124053],
        //         fileName: "/gate glb.glb",
        //         modelType: "glb",
        //         behaviorModules: ["ReplaceWorld"],
        //         replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
        //         replaceWorldTargetURL: "?world=reception",
        //         shadow: true,
        //         singleSided: true,
        //         type: "3d",

        //     }
        // },

    ];
}
