import React, { useEffect, useRef } from 'react'

const Canvas = props => {
    const { comic, src, panels, transform} = props
    const canvasRef = useRef(null)
    let img;

    function drawComic(ctx) {
        if (!comic.data) return
        let p = panels || comic.data.panels;
        p.forEach(pp => {
            pp.text.split("\n ").forEach((ee,i) => {
                console.log(i, pp.x, pp.y, transform.x)
                ctx.fillText(ee.trim(), Number(pp.x) + Number(transform.x), Number(pp.y)+ Number(transform.y) + i*32)
            })
        })
    }

    const draw = (ctx, img) => {
        ctx.drawImage(img, 0, 0)
        ctx.fillStyle = "#E51D2B";
        ctx.font = transform.font || '30px Helvetica';
        ctx.textAlign = "center";
        drawComic(ctx);
    }


    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        if (!img) {
            img = new Image();
            img.onload = () => {draw(context, img)};
            img.src = src;
        } else {
            draw(context, img)
        }
    }, [draw]);

    return <canvas width = "1080"
    height = "1080"
    ref = { canvasRef } {...props }
    />
}

export default Canvas