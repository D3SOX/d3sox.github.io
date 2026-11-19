import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    build: {
        rolldownOptions: {
            input: ['index.html', 'pledge.html'],
        },
    },
})
