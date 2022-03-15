function next(comic, comics, site) {
    let i = comics.findIndex(cc => cc.date === comic.date)
    if (i > 0) {
        let path = comics[i - 1].path
        return `
        <a href="${site.url}/${path}" class="next">
            Next
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
        </a>`
    } else {
        return '<div class="empty"></div>'
    }
}

function previous(comic, comics, site) {
    let i = comics.findIndex(cc => cc.date === comic.date)
    if (i < comics.length - 1) {
        let path = comics[i + 1].path
        return `
        <a href="${site.url}/${path}" class="previous">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
            </svg>
            Previous
        </a>`
    } else {
        return '<div class="empty"></div>'
    }
}

function getAltText(comic) {
    return `Panel 1: ${comic.data.panels[0].alt}. Text reads - ${comic.data.panels[0].text}. Panel 2: ${comic.data.panels[1].alt}. Text reads - ${comic.data.panels[1].text}`
}

export default function comicDisplay(comic, comics, site) {
    return `
    <main class="main">
        <section id="comic" class="comic">
            <img class="panel" width="600" height="600" src="${site.url}/${comic.path}/full_square.png" alt="${getAltText(comic)}" title="${comic.data.panels[0].hovertext}"/>
        </section>
        <header class="comic-title">
            "${comic.title}"
        </header>
        <nav id="comic-nav" class="comic-nav" aria-label="comic navigation">
            ${previous(comic, comics, site)}
            ${next(comic, comics, site)}
        </nav>

    </main>`
}