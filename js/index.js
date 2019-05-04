// Group-box part ->

// # Listener declaration

function groupboxListener (evt) {
    let buttons = this.querySelectorAll('input[type="radio"]');

    if (evt.target.getAttribute('type') == 'radio') {
        for (let button of buttons)
            button.checked = false;

        evt.target.checked = true;
    }
}

// # Add listeners loop

let groupboxes = document.querySelectorAll('.group-box');

if (typeof groupboxes != undefined)
    for (let groupbox of groupboxes)
        groupbox.addEventListener('click', groupboxListener);

// Group-box part <-

///////////////////////////////////////

// Combo-box part ->

// # Listener declaration

function comboboxListener (evt) {
    let current = this.querySelector('.current');

    if (evt.target.classList.contains('option'))
        current.textContent = evt.target.textContent;

    this.classList.toggle('combo-box--active');
}

function onOutOfComboboxClick (evt) {
    let parent = evt.target.parentElement;
    let isActive = parent.classList.contains('combo-box--active');

    for (let combobox of comboboxes)
                combobox.classList.remove('combo-box--active');

    if (isActive) parent.classList.add('combo-box--active');
}

// # Add listeners 

let comboboxes = document.querySelectorAll('.combo-box'); 

if (typeof comboboxes != undefined) {
    for (let combobox of comboboxes)
        combobox.addEventListener('click', comboboxListener);

    window.addEventListener('click', onOutOfComboboxClick);
}
    
// Combo-box part <-

///////////////////////////////////////
