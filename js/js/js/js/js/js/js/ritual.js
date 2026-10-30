import { state } from './state.js';
import { steps } from './steps/index.js';
import { renderStep, clearOutput, showOutput, hidePanel } from './render.js';
import { dom } from './dom.js';
import { config } from './config.js';
import { applyShake } from './effects/shake.js';
import { applyFlicker } from './effects/flicker.js';

export function startRitual() {
    resetRitual();
    state.running = true;
    dom.startBtn.disabled = true;
    dom.startBtn.textContent = 'РИТУАЛ ИДЁТ... / 仪式进行中...';
    dom.statusMessage.textContent = 'РИТУАЛ НАЧАТ. НЕ ОТВОДИТЕ ВЗГЛЯД. // 仪式开始。不要移开视线。';
    showOutput();
    hidePanel();

    state.intervalId = setInterval(() => {
        if (state.currentStep >= steps.length) {
            clearInterval(state.intervalId);
            state.running = false;
            dom.startBtn.disabled = false;
            dom.startBtn.textContent = 'НАЧАТЬ ЗАНОВО / 重新开始';
            dom.startBtn.dataset.text = 'НАЧАТЬ ЗАНОВО / 重新开始';
            applyFlicker(dom.terminalWindow);
            return;
        }

        renderStep(steps[state.currentStep]);

        // Trigger shake at critical step
        if (state.currentStep === config.shakeThreshold) {
            applyShake(dom.terminalWindow);
        }

        // Flicker after halfway point
        if (state.currentStep >= 3) {
            applyFlicker(dom.terminalWindow);
        }

        state.currentStep++;
    }, config.stepInterval);
}

export function resetRitual() {
    clearInterval(state.intervalId);
    state.currentStep = 0;
    state.running = false;
    clearOutput();
    dom.startBtn.disabled = false;
    dom.startBtn.textContent = 'НАЧАТЬ РИТУАЛ / 开始仪式';
    dom.startBtn.dataset.text = 'НАЧАТЬ РИТУАЛ / 开始仪式';
    dom.terminalWindow.classList.remove('flicker', 'shake');
}
