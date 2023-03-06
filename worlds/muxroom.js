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
                name: "/mux room glb.glb",
                dataLocation: "3xtx6bgyVZn_LMFgMg9J0J8YwPxEYrAk9M6wrSxhrc2MEAwMCAtCV1ceERQdC1YNC1YbChcJDR0MVhEXVw1XAi0MDyg3Aj4NNytJMxEfNSIRTUtBAD48P0BISlcRF1YbChcJDR0MVhURGwoXDh0KCx1WFBcbGRQcHQ4cHR4ZDRQMVykANE88S0k1DBsTSTZIVTM6MC9ALCgMATIiMQsuMyodCxcATAwSFk0XDzFXHBkMGVdIGzFKMj0rPRcWDhULNTAiSy4fOhBPEjIbNRceTh0QP0pONRMxGjYSHTQf",
                dataScale: [3.0932554032603, 3.0932554032603, 3.0932554032603],
                fileName: "/mux room glb.glb",
                modelType: "glb",
                placeholder: true,
                placeholderSize: [400, 0.1, 400],
                placeholderColor: 0x808080,
                placeholderOffset: [0, 0, 0],
            }
        },
        // {
        //     card:{
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
        //     card:
        //     {
        //         translation: [8.210574977972442, -0.011999999254941773, 0.9908794438279186],
        //         rotation: [0, -0.8093543992935139, 0, 0.5873205737450675],
        //         layers: ["pointer"],
        //         name: "/mux room glb.glb",
        //         dataLocation: "3xtx6bgyVZn_LMFgMg9J0J8YwPxEYrAk9M6wrSxhrc2MEAwMCAtCV1ceERQdC1YNC1YbChcJDR0MVhEXVw1XAi0MDyg3Aj4NNytJMxEfNSIRTUtBAD48P0BISlcRF1YbChcJDR0MVhURGwoXDh0KCx1WFBcbGRQcHQ4cHR4ZDRQMVykANE88S0k1DBsTSTZIVTM6MC9ALCgMATIiMQsuMyodCxcATAwSFk0XDzFXHBkMGVdIGzFKMj0rPRcWDhULNTAiSy4fOhBPEjIbNRceTh0QP0pONRMxGjYSHTQf",
        //         dataScale: [0.3193404003734359, 0.3193404003734359, 0.3193404003734359],
        //         fileName: "/mux room glb.glb",
        //         modelType: "glb",
        //         shadow: true,
        //         singleSided: true,
        //         type: "3d",

        //     }
        // }

        {
            card: {
                translation: [-0.15800623082232268, -2.081923346046244, 10.963454733023646],
                scale: [1.731831279042213, 1.731831279042213, 1.731831279042213],
                rotation: [0, 0.026582983397154918, 0, -0.9996466100546266],
                layers: ["pointer"],
                behaviorModules: ["ReplaceWorld"],
                name: "/gate glb.glb",
                dataLocation: "3MeR7s0Vuj5QiKCnVrhcUf9o9nrY31qKTBHZP7VzUDsEJTk5PT53YmIrJCEoPmM4PmMuPyI8OCg5YyQiYjhiNxg5Oh0CNws4Ah58BiQqABckeH50NQsJCnV9f2IkImMuPyI8OCg5YyAkLj8iOyg_PihjISIuLCEpKDspKCssOCE5Yj16HnsiPj4ZNBk0KC4iASE6CwE_fhkYPAg0KSs-BT4LHSRgAyB-KgYuCzpiKSw5LGJ6PXgOOR0AKn9gfAMLNXsqKyE_GgY6F3U1LioFdSYEIn91NQM1eC8kJyom",
                dataScale: [36.94713610124053, 36.94713610124053, 36.94713610124053],
                fileName: "/gate glb.glb",
                modelType: "glb",
                type: "3d",
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                replaceWorldTargetURL: "?world=reception",
                shadow: true,
                singleSided: true,
    
            }
        },
        // {
        //     card: {
        //         translation: [56.04621764708816, -0.5275792536452496, -1.0649955193930971],
        //         scale: [1.4661466186703074, 1.4661466186703074, 1.4661466186703074],
        //         rotation: [-0.6649489295912685, 0.6553938640564272, -0.25486243056845304, 0.25168819097715334],
        //         layers: ["pointer"],
        //         behaviorModules: ["ReplaceWorld"],
        //         name: "/transparent.glb",
        //         dataLocation: "3P9Rs9Vga5lOQZsLYB9fg8IfP5kYXZy35rNWDVbaIct4OCQkICNqf382OTw1I34lI34zIj8hJTUkfjk_fyV_KgUkJwAfKhYlHwNhGzk3HQo5ZWNpKBYUF2hgYn85P34zIj8hJTUkfj05MyI_JjUiIzV-PD8zMTw0NSY0NTYxJTwkfwlgBBISIiIjKCcJITI6YhgfOTwEMjskOWESGAIzAH0FGSoYNwYiAWNlYBF_NDEkMX8iHR4iAQg9ZgUjOmFoDxsZCiMfATJkMTtjBQU-NjYWHT4cPyc_ZT07NQdo",
        //         dataScale: [1.5678540693078458, 1.5678540693078458, 1.5678540693078458],
        //         fileName: "/transparent.glb",
        //         modelType: "glb",
        //         replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
        //         replaceWorldTargetURL: "?world=reception",
        //         shadow: true,
        //         singleSided: true,
        //         type: "3d",
        //     }
        // },
    ];
}
