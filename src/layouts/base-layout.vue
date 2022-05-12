<template>
  <div class="base-layout">
    <!-- TOP NAVIGATION -->
    <top-nav />

    <!-- CONTACT CIRCLE -->
    <contact-circle />

    <!-- NAV CIRCLE -->
    <!-- <nav-circle /> -->

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <!-- FOOTER NAVIGATION -->
    <footer-nav />
  </div>
</template>

<script>
import topNav from "@/components/GlobalComps/top-nav";
import footerNav from "@/components/GlobalComps/footer-nav";

export default {
  name: "baseLayout",

  components: {
    topNav,
    footerNav,
    contactCircle: () =>
      import(
        /* webpackChunkName: "global-comps" */ "@/components/GlobalComps/contact-circle"
      ),
    navCircle: () =>
      import(
        /* webpackChunkName: "global-comps" */ "@/components/GlobalComps/nav-circle"
      ),
  },
};
</script>

<style>
</style>