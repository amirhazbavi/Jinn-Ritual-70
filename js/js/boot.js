import { dom } from './dom.js';

export function bootSequence(onComplete) {
    const bootLines = dom.bootSection.querySelectorAll('.boot-line');
    let finished = 0;
    const total = bootLines.length;

    bootLines.forEach((line, index) => {
        setTimeout(() => {
            line.style.opacity = '1';
            finished++;
            if (finished === total) {
                setTimeout(() => {
                    dom.bootSection.classList.add('hidden');
                    onComplete();
                }, 500);
            }
        }, index * 500);
    });
}
