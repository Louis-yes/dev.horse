import meta from "../components/Meta.js"
import styles from "../components/Styles.js"
import comicDisplay from "../components/ComicDisplay.js"
import navMenu from "../components/NavMenu.js"
import Scripts from "../components/Scripts.js"

export default function(site, comic, comics){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        ${meta({title: comic.title + " | " + site.title})}
        ${styles(site)}
    </head>
    <body>
        ${comicDisplay(comic, comics, site)}
        ${navMenu(site)}
    </body>
    ${Scripts(site)}
    </html>`
}