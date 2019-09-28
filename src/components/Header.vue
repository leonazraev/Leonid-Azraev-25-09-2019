<template>
  <div>
    <b-navbar toggleable="lg" type="dark" :variant="colorTheme">
      <b-navbar-brand disabled>Herolo Weather Task</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-brand>
            <b-form-checkbox v-model="CelFar" @input="changeCF" switch size="lg" class="pad">Cel/Far</b-form-checkbox>
          </b-navbar-brand>
          <b-navbar-brand>
            <b-form-checkbox  v-model="Theme" @input="changeTheme" switch size="lg" class="pad">Light/Dark Theme</b-form-checkbox>
          </b-navbar-brand>
          <b-navbar-brand href="/#/" right>
            <b-button :variant="colorTheme">Home</b-button>
          </b-navbar-brand>
          <b-navbar-brand href="/#/Favorites" right>
            <b-button :variant="colorTheme">Favorites</b-button>
          </b-navbar-brand>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Theme: true,
      CelFar: true
    };
  },
  methods: {
    changeTheme() {
      this.$store.dispatch("setThemeChange");
    },
    changeCF() {
      this.$store.dispatch("setCelFar");
    }
  },
  computed: {
    colorTheme() {
      return this.$store.getters.themeChange;
    }
  }
};
</script>
<style scoped>
.pad {
  padding: 3px;
}
</style>