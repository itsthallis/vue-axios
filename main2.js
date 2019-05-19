const apiUrl = "https://jsonplaceholder.typicode.com/todos"

new Vue({
    el: '#app',
    data () {
      return {
        info: []
      }
    },
    methods: {
        todosIncompleted () {
            this.info.filter( todo => todo.completed == false )
        }
    },
    mounted () {
        axios
            .get( apiUrl )
            .then( response => ( this.info = response.data ) )

        this.todosIncompleted()
    }
})
