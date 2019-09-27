<template>
    <div>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand disabled>Herolo Weather Task</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
    <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
         <b-navbar-brand  href="/#/" right ><b-button variant="primary">Home</b-button></b-navbar-brand>
        <b-navbar-brand  href="/#/Favorites" right ><b-button variant="primary">Favorites</b-button></b-navbar-brand>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<style scoped>
.border {
    border-width:5px;
    padding: 5px;
     border-bottom-right-radius: 50px 20px;
     border-bottom-left-radius: 50px 20px;
}
</style>