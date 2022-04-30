//List modification variables
let tasks = document.querySelectorAll('.list-task');
let taskList = document.querySelector('.list');
const newTask = document.querySelector('.header-input');


//Summary Variables
const left = document.querySelector('.left span');

const all = document.querySelector('.all');
const completed = document.querySelector('.completed');
const active = document.querySelector('.active');

const clear = document.querySelector('.clear');


// Theme Variables

const mode = document.querySelector('.header-container__image');
const dark = document.querySelector('.dark');
const light = document.querySelector('.light');

const summary = document.querySelector('.summary');
const header = document.querySelector('header');
let checks = document.querySelectorAll('.list-task__check');
let checksText = document.querySelectorAll('.list-task__text');



// Functions

function refreshList() {
    let active = 0;
    let completed = 0;
    tasks = document.querySelectorAll('.list-task');
    tasks.forEach(task => {
        task.childNodes[1].classList.contains('checked') ? completed++ : active++;
    });
    left.textContent = `${active}`;
}

function addTask() {
    const htmlLight = `<div class="list-task">
        <div class="list-task__check"><i class="fa-solid fa-check"></i></div>
        <p class="list-task__text">${newTask.value}</p>
      </div>`;
    const htmlDark = `<div class="list-task dark">
    <div class="list-task__check dark"><i class="fa-solid fa-check"></i></div>
    <p class="list-task__text dark">${newTask.value}</p>
  </div>`;
    if (taskList.classList.contains('dark')) {
        taskList.innerHTML += htmlDark;
    } else {
        taskList.innerHTML += htmlLight;
    }
    newTask.value = '';
}


function actualizeTaskStatus() {

    tasks = document.querySelectorAll('.list-task');

    tasks.forEach(task => task.addEventListener('click', () => {
        task.childNodes[1].classList.add('checked');
        task.childNodes[3].style.textDecoration = 'line-through';

        if (taskList.classList.contains('dark')) {
            task.childNodes[3].style.color = '#494c6b';
        } else {
            task.childNodes[3].style.color = '#d1d2da';
        }
        refreshList();
    }))
}

// START

refreshList();
actualizeTaskStatus();


//CREATE TASK


newTask.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
        addTask();
        refreshList();
        actualizeTaskStatus();

    }
})


// SUMMARY

// Display all tasks

all.addEventListener('click', () => {
    tasks.forEach(task => {
        task.style.display = 'flex';
    })
    all.classList.add('menu-active');
    active.classList.remove('menu-active');
    completed.classList.remove('menu-active');
})

// Hide completed tasks

active.addEventListener('click', () => {
    tasks.forEach(task => {
        if ((task.childNodes[1].classList.contains('checked'))) {
            task.style.display = 'none';
        } else {
            task.style.display = 'flex';
        }
    })
    all.classList.remove('menu-active');
    active.classList.add('menu-active');
    completed.classList.remove('menu-active');
})

// Hide active tasks

completed.addEventListener('click', () => {
    tasks.forEach(task => {
        if ((!task.childNodes[1].classList.contains('checked'))) {
            task.style.display = 'none';
        } else {
            task.style.display = 'flex';
        }
    })
    all.classList.remove('menu-active');
    active.classList.remove('menu-active');
    completed.classList.add('menu-active');
})

//Clear completed tasks

clear.addEventListener('click', () => {
    tasks.forEach(task => {
        if ((task.childNodes[1].classList.contains('checked'))) {
            task.remove();
        }
        actualizeTaskStatus();

    })
    refreshList();
})

// THEMES

dark.addEventListener('click', () => {
    tasks = document.querySelectorAll('.list-task');
    checks = document.querySelectorAll('.list-task__check');
    checksText = document.querySelectorAll('.list-task__text');

    dark.style.display = 'none';
    light.style.display = 'block';

    document.body.style.backgroundColor = 'hsl(235, 21%, 11%)';
    header.innerHTML = `<img src="./images/bg-desktop-dark.jpg" alt="dark">`;

    taskList.classList.add('dark');
    newTask.classList.add('dark');

    tasks.forEach(task => task.classList.add('dark'));
    tasks.forEach(task => {
        if (task.childNodes[1].classList.contains('checked')) {
            task.childNodes[3].style.color = '#4d5067';
        } else {
            task.childNodes[3].style.color = '#c8cbe7';
        }
    })
    checks.forEach(check => check.classList.add('dark'));

    summary.classList.add('dark');
    all.classList.add('dark');
    active.classList.add('dark');
    completed.classList.add('dark');
    clear.classList.add('dark');

})

light.addEventListener('click', () => {
    tasks = document.querySelectorAll('.list-task');
    checks = document.querySelectorAll('.list-task__check');
    checksText = document.querySelectorAll('.list-task__text');

    light.style.display = 'none';
    dark.style.display = 'block';

    document.body.style.backgroundColor = '#f2f2f2';
    header.innerHTML = `<img src="./images/bg-desktop-light.jpg" alt="light">`;

    taskList.classList.remove('dark');
    newTask.classList.remove('dark');

    tasks.forEach(task => task.classList.remove('dark'));
    tasks.forEach(task => {
        if (task.childNodes[1].classList.contains('checked')) {
            task.childNodes[3].style.color = '#d1d2da';
        } else {
            task.childNodes[3].style.color = '#494c6b';

        }
    })
    checks.forEach(check => check.classList.remove('dark'));

    summary.classList.remove('dark');
    all.classList.remove('dark');
    active.classList.remove('dark');
    completed.classList.remove('dark');
    clear.classList.remove('dark');

})