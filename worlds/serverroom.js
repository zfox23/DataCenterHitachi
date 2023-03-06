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
                name: "/Server room glb 2.glb",
                dataLocation: "3lywps3zTiEr3zyLubLMgGrHT9TsZ4UmyTcZp7wc9oEkBBgYHB9WQ0MKBQAJH0IZH0IPHgMdGQkYQgUDQxlDFjkYGzwjFioZIz9dJwULITYFWV9VFCooK1RcXkMFA0IPHgMdGQkYQgEFDx4DGgkeHwlCAAMPDQAICRoICQoNGQAYQwcCPyk2OiczPSUcVFoiIjVbMwYmC1xBIR1BIVkCKAIfJAYdLhUjGyhdJA9DCA0YDUNdWAYCCDsbGDY8IA5fDyA0GDg-KRgaJx0VCjUoHSpcHwEkBFpdICcuKCop",
                dataScale: [2.7553075691637, 2.7553075691637, 2.7553075691637],
                fileName: "/Server room glb 2.glb",
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
                name: "entrance",
                type: "object",
                translation: [0.3999393470396542, -0.011999999254941773, 3.5912566817627924],
                rotation: [0, 0.018439352097582195, 0, -0.9998299806938286],
                spawn: "default",
            }
        },
        {
            card: {
                translation: [0.4235695108929586, -2.016143490451517, 9.821650220604239],
                scale: [1.4940086522845848, 1.4940086522845848, 1.4940086522845848],
                rotation: [0, 0.007180106733356478, 0, -0.9999742227014142],
                layers: ["pointer"],
                name: "/gate glb.glb",
                behaviorModules: ["ReplaceWorld"],
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                replaceWorldTargetURL: "?world=reception",
                dataLocation: "3j_B4DizScYKnBIfFlyBidAz8bgVmShUJNHW-mQuT8FMAh4eGhlQRUUMAwYPGUQfGUQJGAUbHw8eRAMFRR9FED8eHTolECwfJTlbIQMNJzADX1lTEiwuLVJaWEUDBUQJGAUbHw8eRAcDCRgFHA8YGQ9EBgUJCwYODxwODwwLHwYeRQQyKQgoD1s-PjtZE0ciOSZcECgcMC8NKBoYMz0-ARsyKEcdKzAMLAAGH1pFDgseC0UlHAscOhM5PQ4rPiM5Px8gAD0ANSIMGB4fDg4vOwc4XgkZITwkITsgAloF",
                dataScale: [36.94713610124053, 36.94713610124053, 36.94713610124053],
                fileName: "/gate glb.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",

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
