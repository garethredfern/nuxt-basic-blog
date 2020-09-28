<template>
  <header class="bg-black text-white px-4 py-2">
    <div class="container mx-auto p-4">
      <div class="flex justify-between items-center">
        <h1 class="uppercase font-bold">
          <a href="/" class="hover:no-underline">Nuxt Basic Blog</a>
        </h1>
        <div class="flex">
          <a
            href="/articles/rss.xml"
            target="_blank"
            class="hover:no-underline mx-2"
          >
            <RSS />
          </a>
          <a href="" target="_blank" class="hover:no-underline mx-2">
            <Twitter />
          </a>
          <a href="" target="_blank" class="hover:no-underline mx-2">
            <Github />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import RSS from '@/components/svg/RSS';
import Github from '@/components/svg/Github';
import Twitter from '@/components/svg/Twitter';

export default {
  name: 'Header',
  components: { Twitter, Github, RSS },
};
</script>
