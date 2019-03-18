// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "A van drives away with a truck load of gems",
            choices: [
                {
                    text: "Follow the van",
                    nextLevel: "abandoned_road",
                },

                {
                    text: "Keep on moving",
                    nextLevel: "tv",
                },
            ]
        },

        abandoned_road: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "Stall them!",
            choices: [
                {
                    text: "play possum in the road",
                    nextLevel: "start",
                },
            ]
        },
            distraction: {
                background_image:"",
                music: "",
                message: "Stall them!",
                choices: [
                    {
                      text: "",
                      nextLevel: "",
                    },
                ]
            },

        tv: {
            message: "NEWS FLASH: JEWEL SMUGGLERS AT LARGE! who could've seen this coming?!...",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        
        dark_road: {
            message: "it was dark outside... they didn't have their headlights on.",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "start",
                },  
            ]
        },
    }
};
