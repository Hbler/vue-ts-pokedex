<template>
  <header>
    <h1>Pokédex</h1>
  </header>
</template>

<script lang="ts">
export default {
  name: "PokeHeader",
  props: {
    title: String,
    showAddTask: Boolean,
  },
};
</script>

<style scoped lang="scss">
header {
  padding: 0.5rem 0;
  background-color: #ef5350;

  h1 {
    color: #feca1b;
    border-bottom: 2px solid #feca1b;
  }
}
</style>
