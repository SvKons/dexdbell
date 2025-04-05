'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.tabs__button');
    const panels = document.querySelectorAll('.tabs__panel');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('tabs__button_active'));
            button.classList.add('tabs__button_active');

            panels.forEach(panel => panel.classList.remove('tabs__panel_active'));
            document.getElementById(button.dataset.tab).classList.add('tabs__panel_active');
        });
    });
});
