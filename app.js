const newTodo = (title) => {
  return {
    id: generateUniqueBase16String(),
    text: title,
    isDone: false,
    createdAt: new Date(),
    formattedCreatedAt: formatDate(createdAt),
    completedAt: undefined,
    formattedCompletedAt: undefined,
  };
};

const completeTodo = (id, listOfTodos) => {
    const todo = listOfTodos.find(todo => todo.id === id);
    
  return {
    ...todo,
    completedAt: new Date(),
    formattedCompletedAt: formatDate(new Date()),
    isDone: true,
  };
};

const formatDate = (d) => {
  return dayjs(d).format("MM/DD/YYYY");
};

const generateUniqueBase16String = () => {
    const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
    return uint32.toString(16);
} 
const todos = {
    data() {
        return {
            text: '',
            currentTodos: [],
            archivedTodos: [],
        },
    },
    methods: {
        addNewTodo () {
            const todo = this.text;
            const todoObj = newTodo(todo);
            this.text = '';
            this.currentTodos.push(todoObj);
            // add to local storage
            localStorage.setItem('currentTodos', this.currentTodos);
        },
        completeTodo() {

        }
    }

}

Vue.createApp(todos).mount('#app');