export function applyShake(el) {
    el.classList.add('shake');
    setTimeout(() => el.classList.remove('shake'), 500);
}
