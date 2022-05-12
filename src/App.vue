<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <!-- CURSOR STATE -->
    <cursor-state />

    <!-- PORTAL TARGET -->
    <portal-target name="modal-target"> </portal-target>
  </div>
</template>

<script>
import cursorState from "@/components/GlobalComps/cursor-state";

export default {
  name: "app",

  components: {
    cursorState,
  },

  mounted() {
    this.$color.setPageBackgroundColor("#eaeaea");
  },
};
</script>

<style lang="scss">
body {
  cursor: none;
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.225s ease;
}
.fade-leave-active {
  transition: opacity 0.225s ease;
  opacity: 0;
}
</style>
