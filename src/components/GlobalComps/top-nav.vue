<template>
  <nav
    class="base-navigation fixed-top smooth-transition"
    :class="show_overlay && 'show-overlay'"
  >
    <div class="container">
      <div class="wrapper">
        <!-- LOGO SECTION -->
        <div class="logo-section">
          <!-- LOGO IMAGE -->
          <img
            :src="mxStaticImg('mena-light.png', 'logo')"
            alt="mena_brand_logo"
            class="logo-img smooth-transition"
          />
        </div>

        <!-- BRAND NAME -->
        <h2
          class="
            brand-name
            font-weight-700
            brand-light-grey
            stylish-font
            smooth-transition
          "
        >
          MENA
        </h2>

        <!-- MENU SECTION -->
        <div class="menu pointer" ref="menuPane" @click="toggleMenu">
          <div class="line line-one"></div>
          <div class="line line-two"></div>
          <div class="line line-three"></div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "topNav",

  data: () => ({
    show_overlay: false,
  }),

  mounted() {
    window.addEventListener("scroll", this.toggleTopOverlay);
  },

  methods: {
    toggleTopOverlay() {
      this.$nextTick(() => {
        let offTop =
          window.pageYOffset ||
          (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;

        this.show_overlay = offTop > 50 ? true : false;
      });
    },

    toggleMenu() {
      this.$refs.menuPane.classList.toggle("menu-active");
    },
  },
};
</script>

<style lang="scss" scoped>
.base-navigation {
  padding: toRem(25) 0;

  .wrapper {
    @include flex-row-between-nowrap;

    .logo-section {
      .logo-img {
        @include rectangle-shape(60, 41);
      }
    }

    .brand-name {
      position: relative;
      top: toRem(8);
      font-size: toRem(21);
    }

    .menu {
      position: relative;
      @include rectangle-shape(38, 25);

      .line {
        background: $brand-light-grey;
        @include transition(0.35s);
        position: absolute;
        height: toRem(3);
        left: 0;

        &-one {
          width: 75%;
          top: 0;
        }

        &-two {
          width: 100%;
          top: 50%;
        }

        &-three {
          width: 50%;
          top: 100%;
        }
      }

      &-active {
        .line {
          background: $brand-yellow;

          &-one {
            width: 100%;
            transform: rotate(45deg);
            transform-origin: top left;
          }

          &-two {
            width: 0;
            opacity: 0;
          }

          &-three {
            width: 100%;
            transform: rotate(-45deg);
            transform-origin: bottom left;
          }
        }
      }
    }
  }
}

.show-overlay {
  padding: toRem(21) 0;
  background: rgba($brand-sharp-grey, 0.85);
  backdrop-filter: blur(10px);

  .wrapper {
    .logo-section {
      .logo-img {
        @include rectangle-shape(55, 36);
      }
    }

    .brand-name {
      top: toRem(7);
      font-size: toRem(20);
    }

    .menu-section {
      .icon {
        font-size: toRem(24);
      }
    }
  }
}
</style>