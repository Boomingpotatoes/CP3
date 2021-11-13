<template>
<div>
  <div class="wrapper">
    <div class="search">
      <h1>Puzzles</h1>
    </div>
  </div>
<br>
<br>
<p>Welcome to the game...</p>
    <div class= "form">
      <button @click="start()">Click here to start</button>
    </div>

  <PuzzleList :puzzles="puzzles" />
</div>
</template>

<script>
import PuzzleList from "../components/Puzzles.vue"
export default {
  name: 'Play',
  components: {
    PuzzleList
  },
  data() {
    return {
    }
  },
  computed: {
    puzzles() {
      return this.$root.$data.puzzles;
    }
  },
  methods: {
    start(){
      this.$root.$data.nextPuzzle();
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
 button {
  height: 50px;
  background: black;
  color: white;
  border: none;
}
h1 {
  color: #d40000;
}
p {
  color: #d40000;
}
</style>
