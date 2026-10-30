import { dom } from './dom.js';
import { formatStep } from './utils/format.js';
import { scrollToBottom } from './utils/scroll.js';

export function renderStep(step) {
    const p = document.createElement('p');
    p.textContent = formatStep(step.ru, step.zh);
    dom.outputDiv.appendChild(p);
    scrollToBottom(dom.outputDiv);
}

export function clearOutput() {
    dom.outputDiv.innerHTML = '';
}

export function showOutput() {
    dom.outputDiv.classList.remove('hidden');
}

export function hidePanel() {
    dom.ritualPanel.classList.add('hidden');
}

export function showPanel() {
    dom.ritualPanel.classList.remove('hidden');
}
