import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'

Vue.config.productionTip = false

let data = {
  listPuzzles: mock,
  puzzles: [],
  puzzleOn: 0,
  used: false,
  clicks: 0,
  currId: 0,
  hint: "You need to have started the puzzles to get your first hint.",
  nextPuzzle(){
    if(!this.used){
      this.puzzles.push({
        id: this.listPuzzles.at(this.puzzleOn).id,
        content: this.listPuzzles.at(this.puzzleOn).content,
        secretText:this.listPuzzles.at(this.puzzleOn).secretText,
        button:this.listPuzzles.at(this.puzzleOn).button,
        button2:this.listPuzzles.at(this.puzzleOn).button2,
        textInput:this.listPuzzles.at(this.puzzleOn).textInput
      });
      this.puzzleOn+= 1;
      this.used = true;
      this.hint = this.listPuzzles.at(this.puzzleOn - 1).hint;
    }
  }
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
