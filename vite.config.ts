import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    build: {
        // Logos must be part of the render-blocking stylesheet so they don't pop in after first paint
        assetsInlineLimit: (filePath) => filePath.includes('/src/logos/') || undefined,
        rolldownOptions: {
            input: ['index.html', 'pledge.html'],
        },
    },
})
