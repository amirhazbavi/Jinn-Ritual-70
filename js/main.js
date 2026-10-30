import { dom } from './dom.js';
import { startButtonHandler } from './events/startButton.js';
import { bootSequence } from './boot.js';

// Boot sequence then show ritual panel
bootSequence(() => {
    dom.ritualPanel.classList.remove('hidden');
});

dom.startBtn.addEventListener('click', startButtonHandler);
