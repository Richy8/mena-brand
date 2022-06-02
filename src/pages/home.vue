<template>
  <div class="home-page w-100">
    <!-- HERO SECTION -->
    <header-hero-section />

    <!-- FEATURES SECTION -->
    <div class="features-section">
      <div class="container py-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem fugit
        explicabo dicta rem aut corrupti quisquam architecto iste iure maiores
        ratione officia molestias nisi unde modi, praesentium tempore at nam.
        Natus quisquam molestias ea officiis, neque, dolor maxime doloremque
        illum culpa esse placeat provident nesciunt eum nihil sunt, repellendus
        laboriosam animi officia quaerat eligendi. Corporis, id eum. Sunt saepe
        nesciunt rerum, officiis deserunt error dicta delectus et molestias quod
        dolores in, eius harum magni dolorum alias veritatis hic neque iste
        dignissimos. Corporis numquam laudantium eaque, corrupti accusamus
        excepturi, aspernatur placeat dignissimos aut ad porro necessitatibus
        enim culpa suscipit velit debitis laboriosam reprehenderit vel officia
        atque! Dolorum illum soluta eveniet aspernatur vero similique ea
        pariatur quis suscipit enim nulla rerum, esse ullam accusantium officiis
        nam quisquam et quos tenetur fugiat facere omnis molestias nemo quas?
        Ducimus ipsa, itaque magni necessitatibus eaque deserunt nesciunt
        consequuntur numquam ipsam amet maxime cum sit omnis excepturi iusto
        corrupti quisquam perferendis laboriosam. Odio excepturi, itaque
        delectus natus laudantium similique inventore incidunt molestias
        temporibus iste, veritatis debitis exercitationem provident ab magnam
        dolores vitae doloribus ipsa fugiat quibusdam qui. Error laborum beatae,
        facere excepturi iste corporis ad possimus nihil nisi. Sit animi fuga
        blanditiis nesciunt, praesentium cumque molestiae obcaecati, optio
        veritatis totam dolorem asperiores est quas assumenda placeat quod
        fugiat velit explicabo facere reiciendis magni voluptate facilis error!
        Minima molestiae, nulla sequi nobis asperiores cumque eligendi optio
        quasi vero perspiciatis, rerum mollitia provident, itaque nostrum labore
        voluptates atque saepe earum repellat natus sint maiores ut ipsa
        impedit? Quisquam dignissimos nostrum officia, perferendis dicta dolor
        rerum quo aspernatur at atque iusto possimus, est delectus eos.
        Voluptate quasi molestias, nam atque iure minus porro reprehenderit
        praesentium labore minima adipisci doloremque exercitationem soluta
        ipsa. Nisi quam quia est, corrupti molestias consequuntur laborum
        laboriosam explicabo libero, odio esse voluptatibus vero, dolorum
        beatae!
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

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
</style>
