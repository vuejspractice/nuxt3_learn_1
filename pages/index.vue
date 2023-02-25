import TestComp from '~~/components/TestComp.vue';

<template>
  <v-row>
    <v-col cols="12" class="d-flex justify-center align-center w-full h-full">
      <Card />
      <RecouncileNotification />
    </v-col>
  </v-row>
</template>
<script lang="ts">
export default {
  head() {
    return {
      title: "Welcome to NUXT3 Pinia",
    };
  },
};
</script>
