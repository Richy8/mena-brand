import Vue from "vue";

// MIXINS
import { MixinAssets } from "@/mixins/mixin-assets";

// SERVICES
import { $serviceColor as $color } from "@/services/service-color";

Vue.mixin(MixinAssets);

Vue.mixin({
  computed: {
    $color: () => $color,
  },
});

Vue.prototype.$bus = new Vue();
