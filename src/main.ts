import './style.css'
import 'jetbrains-mono/css/jetbrains-mono.css';

import Iconify from '@iconify/iconify';
Iconify.scan();

const tooltips = document.querySelectorAll('.tooltip');

for (const tooltip of Array.from(tooltips)) {
    const text = tooltip.firstElementChild!.innerHTML;
    tooltip.addEventListener('click', async () => {
        await navigator.clipboard.writeText(text);
    });
}
