const apiUrl = "https://jsonplaceholder.typicode.com/todos"

var vm = new Vue({
    el: '#app',
    data () {
      return {
        info: []
      }
    },
    mounted () {
        axios
            .get( apiUrl )
            .then( response => ( this.info = response.data ))
    }
})