<template>
  <footer class="bg-black text-white">
    <div class="container mx-auto p-4 text-center">
      <small>&copy; {{ new Date().getFullYear() }} {{ siteName }}</small>
    </div>
  </footer>
</template>

<script>
import global from '@/utils/global';

export default {
  name: 'Footer',
  computed: {
    siteName() {
      return global.siteName;
    },
  },
};
</script>
