<template>
  <header>
    <div class="container">
      <!-- GRID LINES -->
      <grid-lines />

      <!-- BACKGROUND TEXT -->
      <header-bg-text />

      <!-- CIRCLE ANIMATION -->
      <circle-animation />

      <!-- HEADER FOOTER CONTACTS -->
      <header-contact />

      <!-- HEADER COPY TEXT -->
      <header-copy />
    </div>

    <!-- SOCIAL ICON LIST -->
    <header-socials />
  </header>
</template>

<script>
export default {
  name: "headerHeroSection",

  components: {
    gridLines: () =>
      import(
        /*webpackChunkName: "global-comps"*/ "@/components/GlobalComps/grid-lines"
      ),
    headerSocials: () =>
      import(
        /*webpackChunkName: "home-comps"*/ "@/components/HomeComps/header-socials"
      ),
    headerContact: () =>
      import(
        /*webpackChunkName: "home-comps"*/ "@/components/HomeComps/header-contact"
      ),
    headerBgText: () =>
      import(
        /*webpackChunkName: "home-comps"*/ "@/components/HomeComps/header-bg-text"
      ),
    headerCopy: () =>
      import(
        /*webpackChunkName: "home-comps"*/ "@/components/HomeComps/header-copy"
      ),
    circleAnimation: () =>
      import(
        /*webpackChunkName: "home-comps"*/ "@/components/HomeComps/circle-animation"
      ),
  },
};
</script>

<style lang="scss" scoped>
header {
  background: $brand-sharp-grey;
  padding-top: toRem(120);
  height: 100vh;
}
</style>