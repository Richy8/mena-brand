<template>
  <div>
    <div class="cursor-state cursor"></div>
    <div class="cursor-state-pointer cursor"></div>
  </div>
</template>

<script>
export default {
  name: "cursorState",

  mounted() {
    document.addEventListener("mousemove", (e) => this.moveCursor(e));
  },

  methods: {
    moveCursor(e) {
      let outer_cursor = document.querySelector(".cursor-state");
      let inner_cursor = document.querySelector(".cursor-state-pointer");

      outer_cursor.style.cssText =
        inner_cursor.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px`;
    },
  },
};
</script>

<style lang="scss">
.cursor {
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  border-radius: 50%;
  left: 0;
  top: 0;
}

.cursor-state {
  @include square-shape(36);
  border: toRem(1) solid rgba($brand-faded-grey, 0.65);
  transition: 0.08s;
}

.cursor-state-pointer {
  @include square-shape(8);
  background: $brand-yellow;
}
</style>