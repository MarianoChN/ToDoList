import './styles.css';

import{ Todo ,TodoList } from './classes/index.js';
import { createTodoHtml } from './js/components';


export const todoList = new TodoList();



todoList.todos.forEach( createTodoHtml ); //todo => createTodoHtml( todo ) === createTodoHtml //solo si es un solo argumento

console.log( 'todos' ,todoList.todos );

// const task  = new Todo('JuanJuanitoJuan');
// todoList.newTodo( task );


// console.log( todoList );

// createTodoHtml( task );


// localStorage.setItem('my-key' ,'cock');
// sessionStorage.setItem('my-key' ,'cock');

// setTimeout(()=>{
//     sessionStorage.removeItem('my-key');
// },2000)