<template>
  <div class="grid gap-4 grid-cols-4">
    <div v-if="currentPage === 1" :class="disabledStyle">
      <span class="hidden sm:inline">First</span>
      <SingleBack />
    </div>

    <nuxt-link
      v-else
      :to="{ name: 'articles-page-page', params: { page: 1 } }"
      :class="buttonStyles"
    >
      <DoubleBack />
      <span class="hidden sm:inline">First</span>
    </nuxt-link>

    <div v-if="currentPage === 1" :class="disabledStyle">
      <span class="hidden sm:inline">Prev</span>
      <SingleBack />
    </div>

    <nuxt-link
      v-else
      :to="{ name: 'articles-page-page', params: { page: prevPage } }"
      :class="buttonStyles"
    >
      <SingleBack />
      <span class="hidden sm:inline">Prev</span>
    </nuxt-link>

    <div v-if="currentPage === totalPages" :class="disabledStyle">
      <span class="hidden sm:inline">Next</span>
      <SingleFwd />
    </div>

    <nuxt-link
      v-else
      :to="{ name: 'articles-page-page', params: { page: nextPage } }"
      :class="buttonStyles"
    >
      <span class="hidden sm:inline">Next</span>
      <SingleFwd />
    </nuxt-link>

    <div v-if="currentPage === totalPages" :class="disabledStyle">
      <span class="hidden sm:inline">Last</span>
      <DoubleFwd />
    </div>

    <nuxt-link
      v-else
      :to="{ name: 'articles-page-page', params: { page: totalPages } }"
      :class="buttonStyles"
    >
      <span class="hidden sm:inline">Last</span>
      <DoubleFwd />
    </nuxt-link>
  </div>
</template>

<script>
import DoubleFwd from '@/components/svg/DoubleFwd';
import DoubleBack from '@/components/svg/DoubleBack';
import SingleFwd from '@/components/svg/SingleFwd';
import SingleBack from '@/components/svg/SingleBack';

export default {
  name: 'Pagination',
  components: {
    DoubleFwd,
    DoubleBack,
    SingleFwd,
    SingleBack,
  },
  props: {
    total: {
      type: Number,
      default: 0,
    },
    perPage: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    buttonStyles() {
      return 'border rounded px-4 py-1 text-sm bg-white flex justify-center items-center sm:uppercase hover:bg-blue-500 hover:text-white transform duration-500 ease-in-out';
    },
    disabledStyle() {
      return 'border rounded px-4 py-1 text-sm bg-white flex justify-center items-center sm:uppercase text-gray-300';
    },
    totalPages() {
      return Math.ceil(this.total / this.perPage);
    },
    currentPage() {
      return parseInt(this.$route.params.page) || 1;
    },
    prevPage() {
      return this.currentPage > 1 ? this.currentPage - 1 : 1;
    },
    nextPage() {
      return this.currentPage < this.totalPages
        ? this.currentPage + 1
        : this.totalPages;
    },
  },
};
</script>
