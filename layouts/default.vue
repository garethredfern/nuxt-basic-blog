<template>
  <div>
    <Header />
    <main class="container mx-auto p-4">
      <Nuxt />
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
