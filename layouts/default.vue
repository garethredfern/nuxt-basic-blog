<template>
  <div>
    <Header />
    <main class="bg-gray-100 pt-5">
      <div class="container mx-auto p-4">
        <Nuxt />
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'HomePage',
  components: {
    Header,
    Footer,
  },
};
</script>
