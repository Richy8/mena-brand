<template>
  <div class="home-page w-100">
    <!-- HERO SECTION -->
    <header-hero-section />

    <!-- FEATURES SECTION -->
    <div class="features-section">
      <div class="container py-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ad
        laudantium illum enim vitae assumenda architecto doloribus cupiditate
        veritatis mollitia vero minima nihil pariatur rem maiores, itaque
        explicabo, perferendis ipsum nulla reiciendis, vel tempora et autem?
        Nihil, ullam porro inventore maiores unde, id accusamus ut autem sint
        soluta eaque sit suscipit mollitia! Laborum vitae ratione exercitationem
        accusamus unde ipsum neque velit facilis dolor consequuntur. Harum
        eveniet debitis, quo dignissimos laboriosam facilis magnam nam,
        perspiciatis asperiores optio similique excepturi et eius officiis!
        Exercitationem quis, iste, rerum ullam veritatis dignissimos nihil
        labore corrupti natus at impedit quam. Totam eos accusamus odio
        temporibus. Cum obcaecati numquam exercitationem voluptas ratione
        laboriosam inventore eos? Quasi, itaque quisquam! Nam aliquid delectus
        sed, a ipsum dicta quis in illo provident ut nostrum eveniet rem
        doloribus ex laudantium ab quod? Totam perspiciatis atque, doloribus
        maxime dolor officia delectus vero ab pariatur ea expedita rem tempore
        nulla reprehenderit mollitia assumenda sapiente ex quia harum?
        Repudiandae dolorem tenetur quae eius consectetur. Velit ex repellendus
        ipsum ut vero facilis natus maiores necessitatibus nemo itaque dicta
        soluta officiis voluptate nisi labore eius quo cum numquam incidunt,
        debitis repudiandae odit. Temporibus reiciendis illum fuga veniam sequi
        deserunt, dicta at delectus tenetur maxime architecto. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Tenetur excepturi pariatur culpa
        sint, deserunt assumenda quaerat? Deserunt enim sit similique,
        reprehenderit, dolorum accusamus cumque impedit doloremque voluptatem
        assumenda quaerat. Repudiandae inventore earum necessitatibus amet quae
        aut non a, esse, fugit ullam et numquam rem dolor dignissimos neque
        voluptates perspiciatis laboriosam officia adipisci ipsum excepturi
        maxime commodi? Reprehenderit tenetur nam optio sint sapiente
        dignissimos itaque inventore quis, accusamus cupiditate nihil voluptas
        voluptate cumque vitae. Obcaecati qui molestias veniam quisquam
        perferendis tenetur rerum voluptatum harum a eveniet! Eligendi, ad
        recusandae repellendus voluptatibus et suscipit fugiat perferendis
        placeat sint molestias neque unde, facilis cum. Similique aut,
        laboriosam, aliquid iste ratione eos, id repellat atque possimus
        corporis sequi nostrum quia magnam iusto! Alias dolorem eveniet maxime
        minima a ratione omnis sequi dolores odit ipsa sunt, vel consectetur,
        non, officiis natus sint delectus. Qui officiis explicabo blanditiis
        voluptatum est beatae sed ducimus ipsum reiciendis architecto illo quis
        odit maxime distinctio doloribus, ipsam ipsa ut vitae minus
        exercitationem placeat? Ipsa minima ad omnis quibusdam accusamus cum
        iusto est saepe? Adipisci nam totam debitis aliquam tempore? Harum
        possimus aliquam assumenda vel quam sit quaerat sunt optio accusamus,
        eius sequi quos illum, fugit unde eum reprehenderit omnis culpa ad
        officiis numquam laboriosam qui saepe aperiam! Cupiditate nemo suscipit
        maiores eius nobis facere a nihil ipsum eveniet tempore harum porro enim
        mollitia sequi ad officia ipsa temporibus adipisci, ducimus perspiciatis
        fugit recusandae. Incidunt, nobis ullam officia deleniti delectus
        ratione harum, commodi repudiandae molestias in error optio a ex! Ipsum
        totam sunt, dignissimos sit voluptates nobis id rerum commodi? Similique
        maiores quis quia adipisci alias veritatis fugit earum. Dolorem cum
        suscipit sapiente magnam, rem delectus, in quasi doloremque quos fugiat
        est numquam pariatur laboriosam nisi sint quia expedita unde voluptas
        mollitia eligendi nostrum assumenda. Fuga, quis. Eos assumenda nemo quas
        officiis impedit facilis. Perferendis necessitatibus, aliquid nostrum
        non quaerat, quidem ut tempora labore quia odit repellendus delectus
        amet, sequi dolorem repudiandae minus sapiente ducimus. Adipisci impedit
        quo recusandae est similique officia praesentium tempore reiciendis
        incidunt unde accusantium excepturi ut voluptates ipsam, modi vel quis
        ea ullam molestias molestiae rerum repellat mollitia maiores libero?
        Tenetur repellat perspiciatis labore laboriosam suscipit nulla beatae
        fugit, voluptatibus dolore ut ipsum mollitia tempora facere
        exercitationem commodi minima saepe obcaecati architecto facilis
        consequuntur sunt impedit odio assumenda. Distinctio laborum debitis eos
        ut facere labore doloremque eaque, provident excepturi enim odio
        consequuntur itaque minima dolores voluptatem quos explicabo molestias
        dolorum! Consequuntur quas porro amet esse recusandae perferendis
        incidunt explicabo! Praesentium neque rerum similique quod. Incidunt
        dolore et in. Animi quia, corporis iste earum voluptatem provident minus
        obcaecati nulla voluptates inventore, minima fugiat illo! Rem doloribus
        deserunt reprehenderit ipsum eaque quibusdam maxime perferendis fugit
        porro nobis soluta dolorem tenetur vel natus explicabo voluptatem ut
        dicta qui similique quos neque molestiae, est nihil consequatur.
        Accusantium voluptas quo dolorum sint quam at officiis soluta fuga
        reiciendis error suscipit consequatur iste ipsa expedita illum eveniet,
        vitae in. Et dolore dignissimos impedit ratione iusto incidunt similique
        cum quaerat odit sapiente, rem fugiat amet tempora culpa, qui libero
      </div>
    </div>

    <!-- CONTACT SECTION -->
    <contact-section />
  </div>
</template>

<script>
export default {
  name: "Home",

  metaInfo: {
    title: "Mena",
    titleTemplate: "%s - Home",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
  },

  components: {
    headerHeroSection: () =>
      import(
        /*webpackChunkName: "home-comps"*/ "@/components/HomeComps/header-hero-section"
      ),
    contactSection: () =>
      import(
        /*webpackChunkName: "home-comps"*/ "@/components/HomeComps/contact-section"
      ),
  },
};
</script>

<style lang="scss" scoped>
.home-page {
}
</style>
