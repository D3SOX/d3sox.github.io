import 'virtual:windi.css'
import './style.scss'
import 'jetbrains-mono/scss/jetbrains-mono.scss';

import Iconify from '@iconify/iconify';
Iconify.scan();

const tooltips = document.querySelectorAll('.tooltip');

for (const tooltip of Array.from(tooltips)) {
    const text = tooltip.firstElementChild!.innerHTML;
    tooltip.addEventListener('click', async () => {
        await navigator.clipboard.writeText(text);
    });
}
