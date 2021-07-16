<template>
<Header />
    <h1> Hello user, Welcom to UpdateResturant page </h1>
</template>

<script>
import Header from './Header.vue'
export default {
    name:'UpdateResturant',
    components:{
      Header
    },
    mounted()
  {
    let user= localStorage.getItem('user-info');
    if(!user)
    {
      this.$router.push({ path: '/signup' })
    }
  }
}
</script>

<style scoped>
body h1{
  text-align: center;
}
</style>