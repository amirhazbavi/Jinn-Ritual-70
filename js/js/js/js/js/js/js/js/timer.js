export function createTimer(callback, interval) {
    return setInterval(callback, interval);
}

export function clearTimer(id) {
    clearInterval(id);
}
