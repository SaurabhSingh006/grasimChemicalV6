const form = document.querySelector('.form');
const acknowBtn = document.querySelector('.nav-acknow');
const undertakingBtn = document.querySelector('.nav-under');
const undertakingContain = document.querySelector('.undertaking');

const turnOverYes = document.querySelector('#turnOverYes');
const turnOverNo = document.querySelector('#turnOverNo');
const showTurnOverYes = document.querySelector('.showTurnOverYes');
const showTurnOverNo = document.querySelector('.showTurnOverNo');
const showTurnOver2 = document.querySelector('.gridMix');

const panLinkedYes = document.querySelector('#panLinkedYes');
const panLinkedNo = document.querySelector('#panLinkedNo');

const showPanYes = document.querySelector('.showPanYes');
const showNoteYes = document.querySelector('.showNoteYes');
const showNoteNo = document.querySelector('.showNoteNo');

const acknow1Yes = document.querySelector('#acknow1Yes');
const acknow1No = document.querySelector('#acknow1No');
const acknow2Yes = document.querySelector('#acknow2Yes');
const acknow2No = document.querySelector('#acknow2No');

const showAcknow1Yes = document.querySelector('.showAcknow1Yes');
const showAcknow2Yes = document.querySelector('.showAcknow2Yes');

const tdsYes = document.querySelector('#tdsYes');
const tdsNo = document.querySelector('#tdsNo');


acknowBtn.addEventListener('click', function() {
    acknowBtn.classList.add('active');
    undertakingBtn.classList.remove('active');

    form.classList.remove('hiddenField');
    undertakingContain.classList.add('hiddenField');
});
undertakingBtn.addEventListener('click', function() {
    acknowBtn.classList.remove('active');
    undertakingBtn.classList.add('active');

    undertakingContain.classList.remove('hiddenField');
    form.classList.add('hiddenField');
});

turnOverYes.addEventListener('click', function() {
    showTurnOverYes.classList.remove('hiddenField');
    showTurnOverNo.classList.add('hiddenField');

    showTurnOver2.classList.remove('hiddenField');
});
turnOverNo.addEventListener('click', function() {
    showTurnOverNo.classList.remove('hiddenField');
    showTurnOverYes.classList.add('hiddenField');

    showTurnOver2.classList.add('hiddenField');
});

panLinkedYes.addEventListener('click', function() {
    showPanYes.classList.remove('notVisible');

    showNoteYes.classList.remove('hiddenField');
    showNoteNo.classList.add('hiddenField');
});
panLinkedNo.addEventListener('click', function() {
    showPanYes.classList.add('notVisible');

    showNoteNo.classList.remove('hiddenField');
    showNoteYes.classList.add('hiddenField');
});

acknow1Yes.addEventListener('click', function() {
    showAcknow1Yes.classList.remove('hiddenField');
});
acknow1No.addEventListener('click', function() {
    showAcknow1Yes.classList.add('hiddenField');
});

acknow2Yes.addEventListener('click', function() {
    showAcknow2Yes.classList.remove('hiddenField');
});
acknow2No.addEventListener('click', function() {
    showAcknow2Yes.classList.add('hiddenField');
});

tdsYes.addEventListener('click', function() {
    showTurnOver2.classList.remove('hiddenField');
});
tdsNo.addEventListener('click', function() {
    showTurnOver2.classList.add('hiddenField');
});