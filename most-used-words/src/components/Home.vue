<template>
  <!-- fluid é para o componente ocupar a tela inteira !-->
  <v-container fluid>
    <div class="pills">
      <Pill v-for="word in groupedWords" v-bind:key="word.name"
      :name="word.name" :amount="word.amount"/>
    </div>
  </v-container>
</template>

<script>
import Pill from "./Pill";

export default {
  components: { Pill },
  data: function() {
    return {
      groupedWords: [
        { name: "i", amount: 1234 },
        { name: "you", amount: 900 },
        { name: "he", amount: 853 }
      ]
    };
  }
};
</script>

<style>
</style>