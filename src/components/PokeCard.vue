<template>
  <article
    :style="{ borderColor: pokemon.color.name }"
    :class="{ showInfo: showInfo }"
    @click="showInfo = !showInfo"
  >
    <div class="sprite_name">
      <figure>
        <img :src="pokemon?.sprites?.front_default" :alt="pokemon.name" />
      </figure>
      <h3>
        {{ pokemon.name.slice(0, 1).toUpperCase() + pokemon.name.slice(1) }}
      </h3>
    </div>
    <div v-if="showInfo" class="info">
      <ul class="more_info">
        <li v-if="pokemon.habitat">
          Habitat:
          <span>{{
            pokemon.habitat.name.slice(0, 1).toUpperCase() +
            pokemon.habitat.name.slice(1)
          }}</span>
        </li>
        <li>
          Generation:
          <span>{{
            pokemon.generation.name.split("-").join(" ").toUpperCase()
          }}</span>
        </li>
      </ul>
      <ul class="stats">
        <li>
          HP: <span>{{ pokemon?.stats[0]?.base_stat }}</span>
        </li>
        <li>
          SPD: <span>{{ pokemon?.stats[5]?.base_stat }}</span>
        </li>
        <li>
          ATK: <span>{{ pokemon?.stats[1]?.base_stat }}</span>
        </li>
        <li>
          DEF: <span>{{ pokemon?.stats[2]?.base_stat }}</span>
        </li>
        <li>
          SpATK: <span>{{ pokemon?.stats[3]?.base_stat }}</span>
        </li>
        <li>
          SpDEF: <span>{{ pokemon?.stats[4]?.base_stat }}</span>
        </li>
      </ul>
      <ul class="body">
        <li>
          Height:
          <span>{{ pokemon?.height }}</span>
        </li>
        <li>
          Weight:
          <span>{{ pokemon?.weight }}</span>
        </li>
      </ul>
      <ul class="types">
        <li v-for="elem in pokemon?.types" :key="elem.type.url">
          {{
            elem.type.name.slice(0, 1).toUpperCase() + elem.type.name.slice(1)
          }}
        </li>
      </ul>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PokeCard",
  props: ["pokemon"],
  data() {
    return {
      showInfo: false,
    };
  },
});
</script>

<style scoped lang="scss">
article {
  min-width: 300px;
  padding: 0.8rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  border-left: 3px solid;
  border-radius: 3px;

  background-color: #fff;

  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 3px -1px #3335;
  }

  .sprite_name {
    figure {
      margin: 0;
      min-width: 150px;

      overflow: hidden;

      img {
        width: 70%;
      }
    }

    position: relative;
    z-index: 1;
  }

  @mixin ul-style {
    max-width: 300px;

    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  @mixin flex-space-between {
    display: flex;
    justify-content: space-between;
  }

  .info {
    @include flex-space-between();
    flex-direction: column;
    gap: 0.5rem;
  }
  .stats {
    @include ul-style();

    @include flex-space-between();
    flex-wrap: wrap;

    li {
      width: 45%;
      text-align: left;

      @include flex-space-between();

      font-weight: 700;

      span {
        font-weight: 300;
      }
    }
  }

  .body,
  .types {
    @include ul-style();

    gap: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    li {
      width: 45%;
      font-weight: 700;
    }
  }

  .more_info {
    @include ul-style();

    li {
      @include flex-space-between();

      font-weight: 700;

      span {
        font-weight: 300;
      }
    }

    li:nth-child(2) {
      span {
        font-size: 0.85rem;
      }
    }
  }
}
</style>
