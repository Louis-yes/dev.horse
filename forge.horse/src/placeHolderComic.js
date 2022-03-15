export default {
    date : "",
    title : "",
    path : "",
    desc : "",
    font : "28px Helvetica",
    data : {
        panels : [
            {
                img : "panel_01.png",
                alt : "A cowboy riding left to right, smoking. The sun is up and there are birds in the sky",
                text : "abc",
                x:"302",
                y:"780",
                hovertext : ""
            },
            {
                img : "panel_02.png",
                alt : "A cowboy riding right to left, smoking. The moon is up and there are stars in the sky",
                text : "abc",
                x:"782",
                y:"820",
                hovertext : ""
            }
        ]
    },
    transforms : [
        {
            x: 0, 
            y: 0, 
            font: "30px Helvetica"
        },
        {
            x : "245",
            y : "-30",
            font: "30px Helvetica"
        },
        {
            x : "-245",
            y : "-30",
            font: "30px Helvetica"
        }
    ]
}
