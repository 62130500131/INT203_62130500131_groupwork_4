const app = {
    data() {
        return {
            tasks: [{url: 'images/1.jpg',info : "Colorado, USA", fav: false , largesize : true},
                    {url: 'images/2.jpg',info : "Kadıköy/İstanbul, Turkey USA", fav: false , largesize : true},
                    {url: 'images/3.jpg',info : "Tre Cime di Lavaredo, Taliansko", fav: false , largesize : true}
                ],
            search: false,
            inputTask: ''
        }
    },
    methods: {
        toggleFav(index){
            this.tasks[index].fav = !this.tasks[index].fav
        },
        toggleSearch(index){
            this.search = !this.search
        },
        toggleLarge(index){
            this.tasks[index].largesize = !this.tasks[index].largesize
        }
        
        
    },
    computed: {
        calculatedPhoto(){
            return this.tasks.length
        },
        calculatedLike(){
            return this.tasks.filter( t => t.fav ).length
        },
        filteredList() {
            return this.tasks.filter(task => {
              return task.info.toLowerCase().includes(this.inputTask.toLowerCase())
            })
          }
    }
}
Vue.createApp(app).mount('#app')