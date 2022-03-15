import meta from "../components/Meta.js"
import styles from "../components/Styles.js"
import navMenu from "../components/NavMenu.js"
import Scripts from "../components/Scripts.js"

/**
 * 
 * @param {title, description, author, colours} site  
 * @param { {meta} , content} page 
 */
export default function templatePage(site, page, comics) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        ${meta({title: page.meta.title + " | " + site.title})}
        ${styles(site)}
    </head>
        <body>
            <header class="header">
                <a href="${site.url}"><img src="${site.url}/assets/title.png"/></a>
            </header>
            <main class="transition-fade">
                <div class="page ${page.meta.title.toLowerCase()}">
                    ${page.content}
                </div>
            </main>
            ${navMenu(site)}
            ${Scripts(site, comics)}
            </body>
    </html>
    `
}