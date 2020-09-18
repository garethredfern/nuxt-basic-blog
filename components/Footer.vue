<template>
  <footer class="bg-gray-100">
    <div class="container mx-auto p-4">
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
