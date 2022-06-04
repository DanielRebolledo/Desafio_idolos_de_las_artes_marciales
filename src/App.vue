<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/peleadores">Peleadores</router-link> |
      <router-link to="/buscador">Buscador</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  data: () => ({
    
  
  }) 
  }
</script>
<style>
  body{
    font-family: Arial, Helvetica, sans-serif;
    list-style: none;
    text-align: center;
}
a{
  text-decoration: none;
}
ul{
  list-style: none;
}
</style>