import { omit } from 'lodash';

export const getTasks = () => new Promise((res) => {
    const lstasks = window.localStorage.getItem('tasks');

    const tasks = JSON.parse(lstasks);
    console.log('tasks', tasks)
    setTimeout(res(tasks), 3000);
    // res(tasks);
})

export const postTask = (task) => new Promise((res) => {
    const lstasks = window.localStorage.getItem('tasks');
    const tasks = JSON.parse(lstasks);
    const newtasks = {...tasks, [task.id]: task}
    window.localStorage.setItem('tasks', JSON.stringify(newtasks));
    setTimeout(res(newtasks), 3000);
    // res(newtasks);
})

export const deleteTask = (id) => new Promise((res) => {
    const lstasks = window.localStorage.getItem('tasks');
    const tasks = JSON.parse(lstasks);
    const newtasks = omit(tasks, id)
    window.localStorage.setItem('tasks', JSON.stringify(newtasks));
    setTimeout(res(newtasks), 3000);
    // res(newtasks);
})
