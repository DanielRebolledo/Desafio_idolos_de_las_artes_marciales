<template>
  <div style="margin-top: 48px">
    <div v-if="peleador">
     <h2>Nombre: {{ peleador.nombre }}</h2>
      <h4>Id: {{ $route.params.id }}</h4>
      <img :src="peleador.imgSrc" alt="" width="400px" height="400px" />
    </div>

    <div v-if="!peleador">
      <h1>No se pudo encontrar el peleador</h1>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    peleador: { nombre: "", imgSrc: "" },
  }),
  created() {
    fetch("/peleadores.json")
      .then((response) => response.json())
      .then((peleadores) => {
        this.peleador =
          peleadores.find(
            (peleador) => peleador.id === this.$route.params.id
          ) || null;
      });
  },
};
</script>

<style></style>
