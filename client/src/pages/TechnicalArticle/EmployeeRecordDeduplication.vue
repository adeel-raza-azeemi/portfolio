<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Employee Records Deduplication</h2>
        <p class="mt-2 text-lg/8 text-gray-600">Learn how to grow your business with our expert advice.</p>
      </div>
      <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
        <article v-for="post in posts" :key="post.id" class="flex max-w-xl flex-col items-start justify-between">
          <div class="flex items-center gap-x-4 text-xs">
            <time :datetime="post.datetime" class="text-gray-500">{{ post.date }}</time>
            <a :href="post.category.href" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ post.category.title }}</a>
          </div>
          <div class="group relative grow">
            <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
              <a :href="post.href">
                <span class="absolute inset-0"></span>
                {{ post.title }}
              </a>
            </h3>
              <div v-html="post.description"></div>
          </div>
          <div class="relative mt-8 flex items-center gap-x-4 justify-self-end">
            <img :src="post.author.imageUrl" alt="" class="size-10 rounded-full bg-gray-50" />
            <div class="text-sm/6">
              <p class="font-semibold text-gray-900">
                <a :href="post.author.href">
                  <span class="absolute inset-0"></span>
                  {{ post.author.name }}
                </a>
              </p>
              <p class="text-gray-600">{{ post.author.role }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>

const posts = [
  {
    id: 1,
    title: 'Searching Employee Records Across Multiple Databases: Why Exact Matching Is Not Enough',
    href: '#',
    description: `<h5>Sections:</h5>
<ol class="list-decimal list-inside space-y-2">
  <li>
    Background
    <ul class="list-disc list-inside pl-4 space-y-2">
      <li>ERP database</li>
      <li>HR database</li>
      <li>HRDC database</li>
    </ul>
    </li>
  <li>The Duplicate Record Problem</li>
  <li>Why Exact Search Fails</li>
  <li>Using SQL LIKE</li>
  <li>Using Soundex</li>
  <li>Building a Multi-Word Soundex Function</li>
  <li>Using Levenshtein Distance</li>
  <li>Using Regular Expressions</li>
  <li>Performance Considerations</li>
  <li>Consolidating Multiple Systems Through Database Views</li>
  <li>Lessons Learned</li>
  <li>Final Architecture</li>
</ol>`,
    date: 'Jun 25, 2026',
    datetime: '2026-06-25',
    category: { title: 'HR', href: '#' },
    author: {
      name: 'Adeel Raza Azeemi',
      role: 'Laravel & Vue Developer',
      href: '#',
      imageUrl:
        '/images/profile.jpeg',
    },
  },
]
</script>