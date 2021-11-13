<template>
<div class="wrapper">
  <div class="puzzles">
    <div class="product" v-for="puzzle in puzzles" :key="puzzle.id">
      <div class="info">
        <h1>{{puzzle.content}}</h1>
      </div>
      <div class="secretText">
        <p>{{puzzle.secretText}}</p>
      </div>
      <div v-if="puzzle.secretText">
        <p class="secretText"><a @click="nextPuzzle(puzzle.id)">Click Me!</a></p>
      </div>
      <div v-if="puzzle.button">
        <div class="button2" v-if="puzzle.button2">
          <button @click="onClickB(puzzle.id)">
            {{puzzle.button}}
          </button>
        </div>
        <div class="button1" v-else>
          <button @click="nextPuzzle(puzzle.id)">
            {{puzzle.button}}
          </button>
        </div>
      </div>
      <div class="textInput" v-if="puzzle.textInput">
        <form @submit="checkPassword">
          <input v-model="password">
        </form>

      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'PuzzleList',
  props: {
    puzzles: Array
  },
  data() {
    return {
      password: '',
    }
  },
  methods:{
    onClickB(id){
      this.$root.$data.clicks += 1;
      console.log(this.$root.$data.clicks);
      if(this.$root.$data.clicks === 13){
        this.nextPuzzle(id)
      }
    },
    nextPuzzle(id){
      if(id != this.$root.$data.currId){
        this.$root.$data.currId = id;
        this.$root.$data.used = false;
        this.$root.$data.nextPuzzle();
      }
    },
    checkPassword(e){
      e.preventDefault()
      if(this.password === 'LUKE'){
        this.nextPuzzle(5);
      }
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.puzzles {
  margin-top: 20px;
  display: flex;
    flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 700px;
}


.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.secretText {
  color: white;
}

.info h1 {
  font-size: 16px;
  color: #d40000;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

.button1 button {
  height: 50px;
  background: #424242;
  color: black;
  border: none;
}

.button2 button {
  height: 50px;
  background: white;
  color: black;
  border: none;
}
.secretText {
  color: black;
}
.auto {
  margin-left: auto;
}

</style>
