const apiUrl = "https://jsonplaceholder.typicode.com/todos"

new Vue({
    el: '#app',
    data () {
      return {
        info: []
      }
    },
    mounted () {
        axios
            .get( apiUrl )
            .then( response => (this.info = response.data ))
    },
    filters: {
        incompleted: function (){
            if(this.info.completed == 'false')
            return this.info.completed == 'false'
        }
    }
})