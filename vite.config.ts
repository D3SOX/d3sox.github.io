import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

const inlinedDirs = ['/src/icons/', '/src/logos/']

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    build: {
        // Icons and logos must be part of the render-blocking stylesheet so they don't pop in after first paint
        assetsInlineLimit: (filePath) => inlinedDirs.some(dir => filePath.includes(dir)) || undefined,
        rolldownOptions: {
            input: ['index.html', 'pledge.html'],
        },
    },
})
