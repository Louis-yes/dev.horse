const date = new Date()
console.log(date.getDay())
const comic = {
        "date": date.getFullYear() + "-" + (date.getMonth() + 1).toString().padStart(2,"0") + "-" + date.getDate().toString().padStart(2,"0"),
        "title": "",
        "path": "",
        "desc": "",
        "data": {
            "panels": [
                {
                    "img": "panel_01.png",
                    "alt": "A cowboy riding left to right, smoking. The sun is up and there are birds in the sky",
                    "text": "I am wading \n through the mire",
                    "x": "302",
                    "y": "810",
                    "hovertext": ""
                },
                {
                    "img": "panel_02.png",
                    "alt": "A cowboy riding right to left, smoking. The moon is up and there are stars in the sky",
                    "text": "of happiness \n and good feelings",
                    "x": "782",
                    "y": "810",
                    "hovertext": ""
                }
            ]
        },
        "transforms": [
            {
                "x": 0,
                "y": 0,
                "font": "30px Helvetica"
            },
            {
                "x": "245",
                "y": "-30",
                "font": "32px Helvetica"
            },
            {
                "x": "-245",
                "y": "-30",
                "font": "32px Helvetica"
            }
        ]
    }
export default comic