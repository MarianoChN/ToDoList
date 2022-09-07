
export class Todo {

    static fromJson ( { task ,id ,completed ,created }) {

        const tempTodo = new Todo( task );

        tempTodo.id        = id;
        tempTodo.completed = completed;
        tempTodo.created   = created;

        return tempTodo;

    }

    constructor(task){

        this.task = task;
        
        this.id        = new Date().getTime(); //124143523
        this.completed = false;
        this.created   = new Date();

    }
}