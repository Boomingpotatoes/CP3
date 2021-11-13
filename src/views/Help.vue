<template>
<div>
  <div class="wrapper">
      <h1>Help</h1>
        </div>
      <h3>Do you need help? You've come to the right place!</h3>
      <h2>It seems as though you're stuck on question</h2>
      <h1>{{getPuzzleOn()}}</h1>
      <h2>Hint: {{getPuzzleHint()}}</h2>

</div>
</template>
<script>
export default {
  name: 'Help',
  methods: {
    getPuzzleOn (){
      return this.$root.$data.puzzleOn;
    },
    getPuzzleHint () {
      return this.$root.$data.hint;
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
h1 {
  color: #d40000;
}
h2 {
  color: #d40000;
}
h3 {
  color: #d40000;
}
</style>
