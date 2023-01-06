new Vue({
    el: '#app',
    data: {
        newTodo: '',
        todos: [],
        uuid: 1,
        error: false,
    },
    methods: {
        addTodo() {
            if (!this.newTodo.trim()){
                this.error = true;
                return;
            }
            this.todos.push({ text: this.newTodo, completed: false, id: this.uuid, });
            this.uuid++;
            this.error = false;
            this.newTodo = '';
            console.log('Todo ajouter !');
        },
        removeTodo(id) {
            const newTodos = this.todos.filter((todo) => {
                return todo.id != id;
            });

            this.todos = newTodos;
            console.log('Todo supprimer !');
        },
    },
    watch: {
        todos: {
            handler() {
                console.log(this.todos);
            },
            deep: true,
        },
    },
});