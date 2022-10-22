<template>
  <section class="container">
    <form @submit="onSubmit">
      <input
        type="text"
        name="pokeName"
        v-model="pokeName"
        placeholder="Digite o nome de um Pokémon"
      />
      <BtnComp :text="'Buscar'" type="submit" />
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BtnComp from "./Button.vue";

export default defineComponent({
  name: "SearchBar",
  data() {
    return {
      pokeName: "",
    };
  },
  components: {
    BtnComp,
  },
  methods: {
    onSubmit(e: Event) {
      e.preventDefault();
      this.$emit("search_pokeName", this.pokeName);
    },
  },
});
</script>

<style scoped lang="scss">
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  width: 100%;
  height: 10vh;
  padding: 2rem 0;

  @include flex-center();

  background-color: #ef535070;

  form {
    width: 60%;

    gap: 1rem;
    @include flex-center();

    input {
      width: 60%;
      padding: 1rem 0.5rem 0.5rem;

      color: #2c3e50;
      font-size: 1.2rem;

      border: none;
      border-bottom: 4px solid #ef5350;

      &::placeholder {
        color: #2c3e50;
        font-size: 1.2rem;
      }
    }
  }
}
</style>
