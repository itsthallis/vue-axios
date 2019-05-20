
const apiUrl = "https://jsonplaceholder.typicode.com/todos"

var todosIncomplete = {
  props: ['id'],
  data () {
    return {
      info: []
    }
  },
  template: 
      `
      <div class="accordion mt-4" id="afazer">
      <div class="card border-0">

            <div class="card-header" id="headingOne">
                <button class="btn btn-light"
                        type="button"
                        data-toggle="collapse"
                        @click="toggle()">
                        A fazer
                </button>
            </div>
        
            <div :id="id" class="collapse" data-parent="#afazer">
                <div class="card-body">
                    <div class="row">
                        <div v-for="todo in info" v-show="todo.completed == false && todo.userId == 1" class="col-lg-3 col-md-4 mt-4 mb-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Id do Usuário: {{ todo.userId }}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Id do todo: {{ todo.id }}</h6>
                                    <p class="card-text">Título: {{ todo.title }}</p>
                                    <p class="card-text badge badge-secondary">Completo: {{ todo.completed }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>  
        </div>  
      `,
      methods: {
        toggle(){
            $('#'+this.id).collapse('toggle')
        }
      },
      mounted () {
        axios
            .get( apiUrl )
            .then( response => ( this.info = response.data ))
    }

}

var todosComplete = {
    props: ['id'],
    data () {
        return {
            info: []
        }
    },
    template:`
    <div class="accordion mt-4" id="completos">
        <div class="card border-0">

        <div class="card-header" id="headingOne">
            <button class="btn btn-light"
                    type="button"
                    data-toggle="collapse"
                    @click="toggle()">
                    Completos
            </button>
        </div>

        <div :id="id" class="collapse" data-parent="#completos">
            <div class="card-body">
                <div class="row">
                    <div v-for="todo in info" v-show="todo.completed == true && todo.userId == 1" class="col-lg-3 col-md-4 mt-4 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Id do Usuário: {{ todo.userId }}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Id do todo: {{ todo.id }}</h6>
                                <p class="card-text">Título: {{ todo.title }}</p>
                                <p class="card-text badge badge-success">Completo: {{ todo.completed }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  `,
  methods: {
    toggle(){
        $('#'+this.id).collapse('toggle')
    }
  },
  mounted () {
    axios
        .get( apiUrl )
        .then( response => ( this.info = response.data ))

  }
}


new Vue({
    el: '#app',
    components: {
      'todos-incomplete' : todosIncomplete,
      'todos-complete' : todosComplete
    }
})