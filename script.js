const editor = document.getElementById('editor');

document.getElementById('cut').addEventListener('click', () => document.execCommand('cut'));
document.getElementById('copy').addEventListener('click', () => document.execCommand('copy'));
document.getElementById('paste').addEventListener('click', () => document.execCommand('paste'));
document.getElementById('highlight').addEventListener('click', () => highlightText());
document.getElementById('undo').addEventListener('click', () => document.execCommand('undo'));
document.getElementById('redo').addEventListener('click', () => document.execCommand('redo'));
document.getElementById('save').addEventListener('click', () => saveDocument());
document.getElementById('open').addEventListener('click', () => openDocument());
document.getElementById('find').addEventListener('click', () => findText());
document.getElementById('replace').addEventListener('click', () => replaceText());
document.getElementById('bold').addEventListener('click', () => document.execCommand('bold'));
document.getElementById('italic').addEventListener('click', () => document.execCommand('italic'));
document.getElementById('underline').addEventListener('click', () => document.execCommand('underline'));
document.getElementById('biggerFont').addEventListener('click', () => changeFontSize(1));
document.getElementById('smallerFont').addEventListener('click', () => changeFontSize(-1));

function highlightText() {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const span = document.createElement('span');
    span.style.backgroundColor = 'yellow';
    range.surroundContents(span);
}

function saveDocument() {
    // TODO
}

function openDocument() {
    // TODO
}

function findText() {
    // TODO

function replaceText() {
    // TODO
}

function changeFontSize(value) {
    document.execCommand('fontSize', false, value);
}
