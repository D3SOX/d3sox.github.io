import { readFileSync } from 'node:fs'
import { defineConfig, type Plugin } from 'vite'
import tailwindcss from '@tailwindcss/vite'

const spritePath = new URL('./src/icons.svg', import.meta.url)

// Inline the icon sprite so `<use href="#id">` renders on first paint instead of waiting for a separate request
function inlineIconSprite(): Plugin {
    return {
        name: 'inline-icon-sprite',
        configureServer(server) {
            server.watcher.add(spritePath.pathname)
        },
        handleHotUpdate({ file, server }) {
            if (file === spritePath.pathname) server.ws.send({ type: 'full-reload' })
        },
        transformIndexHtml(html) {
            const used = new Set([...html.matchAll(/<use href="#([^"]+)"/g)].map(m => m[1]))
            const sprite = readFileSync(spritePath, 'utf8')
                .replace(/<symbol id="([^"]+)"[\s\S]*?<\/symbol>\n?/g, (symbol, id) => used.has(id) ? symbol : '')
                .replace('<svg ', '<svg aria-hidden="true" width="0" height="0" style="position:absolute" ')
                .trim()
            return html.replace(/<body([^>]*)>/, `<body$1>\n${sprite}`)
        },
    }
}

export default defineConfig({
    plugins: [
        tailwindcss(),
        inlineIconSprite(),
    ],
    build: {
        rolldownOptions: {
            input: ['index.html', 'pledge.html'],
        },
    },
})
