
<template>
<nav class="nav">
	<div class="">
    <div class="dropdown">
  <button class=" dropdown-toggle select link color-main  " style="       text-decoration: none;
    color: rgb(12, 1, 39);
    border-radius: 23%;
    font-weight: 700;
    padding: 22% 23px;" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Home
  </button>

		<div class="dropdown-menu"  aria-labelledby="dropdownMenu2"> 
		 <button class="dropdown-item" type="button" style="width:100%; margin-bottom:5%;"><router-link to="/AddResturant" style="    text-decoration: none;
    color: #0c0127;
    font-weight: 700;">Add Resturant</router-link></button>
    <button class="dropdown-item" type="button" style="width:100%"><router-link to="/UpdateResturant" style="    text-decoration: none;
    color: #0c0127;
    font-weight: 700;">Update Resturant</router-link></button>
		</div>
	</div>
  </div>
	<div class="logo">
		<svg width="24" height="24" viewBox="0 0 24 24">
			<path d="M18.6,6.62C17.16,6.62 15.8,7.18 14.83,8.15L7.8,14.39C7.16,15.03 6.31,15.38 5.4,15.38C3.53,15.38 2,13.87 2,12C2,10.13 3.53,8.62 5.4,8.62C6.31,8.62 7.16,8.97 7.84,9.65L8.97,10.65L10.5,9.31L9.22,8.2C8.2,7.18 6.84,6.62 5.4,6.62C2.42,6.62 0,9.04 0,12C0,14.96 2.42,17.38 5.4,17.38C6.84,17.38 8.2,16.82 9.17,15.85L16.2,9.61C16.84,8.97 17.69,8.62 18.6,8.62C20.47,8.62 22,10.13 22,12C22,13.87 20.47,15.38 18.6,15.38C17.7,15.38 16.84,15.03 16.16,14.35L15,13.34L13.5,14.68L14.78,15.8C15.8,16.81 17.15,17.37 18.6,17.37C21.58,17.37 24,14.96 24,12C24,9 21.58,6.62 18.6,6.62Z"></path>
		</svg>
	</div>
	<div class="logout">
		<button @click="logout">Logout</button>
	</div>
</nav>

</template>

<script>

export default {
  name: "Header",
  
 methods: {
    logout () {
    // localStorage.removeItem("user-info")
    localStorage.clear();
    this.$router.push('/login')
  }
  },
 
 }


</script>

<style scoped>
@charset "UTF-8";
@import url("https://fonts.googleapis.com/css?family=DM+Sans&display=swap");
body {
  background: #f8f8f8;
  padding: 0;
  margin: 0;
  font-family: DM Sans;
}

.nav {
  display: flex;
  padding: 2rem 0.8rem;
  background: white;
  justify-content: space-between;
  align-items: center;
}
.nav .select {
  position: relative;
}
.nav .select a {
  padding: 8px 16px;
  width: 150px;
  border: none;
  border-radius: 10px;
  text-decoration: none;
  background: rgba(0, 0, 0, 0.05);
  color: #1e0e62;
  font-weight: 600;
  font-size: 16px;
  display: block;
  transition: all 0.25s;
}
.nav .select a:before {
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "";
  position: absolute;
  right: 10px;
  top: 10px;
  color: #1e0e62;
}
.nav .select .dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  padding: 8px 16px;
  background: white;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) -3px 3px 6px, rgba(0, 0, 0, 0.055) -20px 20px 55px, rgba(255, 255, 255, 0.6) -2px 2px 2px 1px inset, rgba(255, 255, 255, 0.4) 2px 2px 3px 0px inset, rgba(0, 0, 0, 0.05) 1px 1px 2px 0px inset;
  display: none;
  transition: 0.25s opacity;
}
.nav .select .dropdown-menu.active {
  display: block;
}
.nav .select .dropdown-menu div {
  margin-bottom: 1em;
  font-weight: 600;
  color: #1e0e62;
  cursor: pointer;
  padding: 16px;
  border-bottom: 2px solid #1e0e6269;
}
.nav .logo {
  height: 80px;
  width: 80px;
  text-align: center;
  position: relative;
}
.nav .logo svg {
  height: 80px;
  width: 80px;
}
.nav .logout {
  position: relative;
}
.nav .logout button {
  display: inline-block;
  height: 40px;
  padding: 0 15px;
  user-select: none;
  background: none;
  border: 2px solid #ebeaed;
  line-height: 36px;
  color: #1e0e62;
  font-size: 16px;
  vertical-align: top;
  border-radius: 50px;
  font-weight: 600;
  text-align: center;
  background: transparent;
  transition: 0.25s all;
  cursor: pointer;
}
.nav .logout button:focus {
  outline: none;
}
.nav .logout button:hover {
  border-color: #1e0e62;
}
</style>
