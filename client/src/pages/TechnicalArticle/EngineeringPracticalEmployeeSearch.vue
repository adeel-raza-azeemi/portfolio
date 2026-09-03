<template>
  <main class="article-page min-h-screen bg-slate-50 py-8 sm:py-12 lg:py-16">
    <div class="article-container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <article class="article-card overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_70px_-35px_rgba(15,23,42,0.35)]">
        <header class="article-hero border-b border-slate-200 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-14">
          <div class="max-w-4xl">
            <div class="mb-5 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-200">
              <span>Software Engineering</span>
              <span class="text-slate-500">•</span>
              <span>Case Study</span>
            </div>

            <h1 class="article-title text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Engineering Practical Employee Search Systems in Resource-Constrained Organizations
            </h1>
            <p class="article-subtitle mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              A Case Study in Reverse Engineering, Data Consolidation, and Multi-Strategy Record Retrieval
            </p>

            <div class="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-300">
              <span class="font-medium text-white">Adeel Raza Azeemi</span>
              <span class="hidden sm:inline">•</span>
              <time datetime="2026-07">Published: July 2026</time>
              <span class="hidden sm:inline">•</span>
              <span>Reading time: ~25 minutes</span>
            </div>

            <div class="mt-5 flex flex-wrap gap-2">
              <span v-for="tag in tags" :key="tag" class="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-slate-200">
                {{ tag }}
              </span>
            </div>
          </div>
        </header>

        <section class="article-intro border-b border-slate-200 bg-slate-50/80 px-6 py-7 sm:px-10 lg:px-14">
          <div class="max-w-4xl">
            <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p class="text-sm font-semibold text-indigo-700">A practical engineering case study</p>
                <p class="mt-1 text-sm leading-6 text-slate-600">
                  Ten sections trace the problem from legacy data discovery through search design and engineering decisions.
                </p>
              </div>
              <div class="flex flex-wrap gap-2">
                <button type="button" class="article-control" @click="expandAll">Expand all</button>
                <button type="button" class="article-control" @click="collapseAll">Collapse all</button>
                <button type="button" class="article-control article-control-primary" @click="printArticle">Print / PDF</button>
              </div>
            </div>
          </div>
        </section>

        <nav class="article-toc border-b border-slate-200 px-6 py-7 sm:px-10 lg:px-14" aria-label="Article sections">
          <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            <button
              v-for="section in sections"
              :key="section.id"
              type="button"
              class="toc-item"
              @click="openSection(section.id)"
            >
              <span class="toc-number">{{ section.number }}</span>
              <span class="text-left">{{ section.title }}</span>
            </button>
          </div>
        </nav>

        <div id="accordion-flush" class="article-sections" data-accordion="collapse">
          <OneIntroduction />
          <TwoOperationalProblem />
          <ThreeReverseEngineering />
          <FourDataConsolidation />
          <FiveUnifiedSearchModel />
          <SixSearchStrategyDesign />
          <SevenEngineeringDecisions />
          <EightSystemEvaluation />
          <NineLessonsLearned />
          <TenConclusion />
        </div>

        <footer class="border-t border-slate-200 bg-slate-50 px-6 py-7 sm:px-10 lg:px-14">
          <div class="flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <span>Engineering Practical Employee Search Systems</span>
            <button type="button" class="font-semibold text-indigo-700 hover:text-indigo-900" @click="scrollTop">
              Back to top ↑
            </button>
          </div>
        </footer>
      </article>
    </div>
  </main>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import OneIntroduction from '../../components/EmpSearch/OneIntroduction.vue'
import TwoOperationalProblem from '../../components/EmpSearch/TwoOperationalProblem.vue'
import ThreeReverseEngineering from '../../components/EmpSearch/ThreeReverseEngineering.vue'
import FourDataConsolidation from '../../components/EmpSearch/FourDataConsolidation.vue'
import FiveUnifiedSearchModel from '../../components/EmpSearch/fiveUnifiedSearchModel.vue'
import SixSearchStrategyDesign from '../../components/EmpSearch/SixSearchStrategyDesign.vue'
import SevenEngineeringDecisions from '../../components/EmpSearch/SevenEngineeringDecisions.vue'
import EightSystemEvaluation from '../../components/EmpSearch/EightSystemEvaluation.vue'
import NineLessonsLearned from '../../components/EmpSearch/NineLessonsLearned.vue'
import TenConclusion from '../../components/EmpSearch/TenConclusion.vue'

const tags = ['#Database Engineering', '#Information Retrieval', '#ERP', '#MySQL']
const sections = [
  { id: 1, number: '01', title: 'Introduction' },
  { id: 2, number: '02', title: 'The Operational Problem' },
  { id: 3, number: '03', title: 'Reverse Engineering the Legacy ERP' },
  { id: 4, number: '04', title: 'Data Consolidation Architecture' },
  { id: 5, number: '05', title: 'Unified Search Model' },
  { id: 6, number: '06', title: 'Search Algorithms' },
  { id: 7, number: '07', title: 'Engineering Decisions' },
  { id: 8, number: '08', title: 'System Evaluation' },
  { id: 9, number: '09', title: 'Lessons Learned' },
  { id: 10, number: '10', title: 'Conclusion' },
]

const root = ref(null)
let cleanup = null

function bodies() {
  return [...document.querySelectorAll('#accordion-flush > div > [id^="accordion-flush-body-"]')]
}

function setBody(body, open) {
  body.classList.toggle('hidden', !open)
  const heading = body.previousElementSibling
  const button = heading?.querySelector('button')
  if (button) button.setAttribute('aria-expanded', String(open))
}

function expandAll() {
  bodies().forEach(body => setBody(body, true))
}

function collapseAll() {
  bodies().forEach(body => setBody(body, false))
}

function openSection(id) {
  const body = document.getElementById(`accordion-flush-body-${id}`)
  if (!body) return
  setBody(body, true)
  body.previousElementSibling?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function printArticle() {
  expandAll()
  window.setTimeout(() => window.print(), 80)
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  root.value = document.getElementById('accordion-flush')
  if (!root.value) return

  // Keep the existing section components, but make their accordion behaviour
  // local and predictable instead of depending on a global accordion script.
  root.value.querySelectorAll(':scope > div > h2 > button').forEach(button => {
    const handler = event => {
      event.preventDefault()
      event.stopImmediatePropagation()
      const targetId = button.getAttribute('data-accordion-target')
      const body = targetId ? document.querySelector(targetId) : null
      if (body) setBody(body, body.classList.contains('hidden'))
    }
    button.addEventListener('click', handler, true)
    if (!cleanup) cleanup = []
    cleanup.push(() => button.removeEventListener('click', handler, true))
  })

  // The first section is open on first visit; the rest remain compact.
  const all = bodies()
  all.forEach((body, index) => setBody(body, index === 0))
})

onBeforeUnmount(() => cleanup?.forEach(fn => fn()))
</script>

<style scoped>
.article-page {
  color: #172033;
}

.article-card {
  isolation: isolate;
}

.article-control {
  border: 1px solid #d7deea;
  border-radius: 0.65rem;
  background: #fff;
  padding: 0.55rem 0.85rem;
  font-size: 0.8rem;
  font-weight: 700;
  color: #334155;
  transition: all 0.15s ease;
}

.article-control:hover {
  border-color: #a5b4fc;
  color: #3730a3;
  transform: translateY(-1px);
}

.article-control-primary {
  border-color: #4f46e5;
  background: #4f46e5;
  color: #fff;
}

.article-control-primary:hover {
  color: #fff;
  background: #4338ca;
}

.toc-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-height: 3.25rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.85rem;
  background: #fff;
  padding: 0.75rem 0.9rem;
  font-size: 0.86rem;
  font-weight: 650;
  color: #334155;
  transition: all 0.15s ease;
}

.toc-item:hover {
  border-color: #c7d2fe;
  background: #f8faff;
  color: #3730a3;
  transform: translateY(-1px);
}

.toc-number {
  display: inline-flex;
  width: 2rem;
  height: 2rem;
  flex: 0 0 2rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.55rem;
  background: #eef2ff;
  color: #4338ca;
  font-size: 0.72rem;
  font-weight: 800;
}

/* Article typography. These selectors intentionally target the existing
   section components so the content can be improved without rewriting all
   ten chapters at once. */
.article-sections :deep(> div > h2) {
  position: sticky;
  top: 0;
  z-index: 10;
  margin: 0;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(10px);
}

.article-sections :deep(> div > h2 button) {
  min-height: 4rem;
  padding: 0.95rem 1.5rem;
  color: #1e293b;
  letter-spacing: -0.01em;
}

.article-sections :deep(> div > h2 button span) {
  color: #3730a3 !important;
  font-size: 0.95rem;
  letter-spacing: 0.01em;
}

.article-sections :deep(> div > h2 button:hover) {
  background: #f8fafc;
}

.article-sections :deep(> div > h2 svg) {
  color: #64748b;
}

.article-sections :deep(> div > div[id^="accordion-flush-body-"]) {
  border-bottom: 0;
}

.article-sections :deep(> div > div[id^="accordion-flush-body-"] > div) {
  max-width: 920px;
  margin: 0 auto;
  padding: 3rem 1.5rem 4.5rem;
}

.article-sections :deep(h1) {
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: #0f172a !important;
  font-size: clamp(1.75rem, 3vw, 2.55rem) !important;
  line-height: 1.12 !important;
  letter-spacing: -0.035em;
}

.article-sections :deep(h2) {
  color: #172033;
  font-size: clamp(1.3rem, 2vw, 1.75rem) !important;
  line-height: 1.25 !important;
  letter-spacing: -0.02em;
  margin-top: 2.75rem;
  margin-bottom: 0.9rem;
}

.article-sections :deep(h3) {
  color: #334155;
  font-size: 1rem !important;
  line-height: 1.35 !important;
  letter-spacing: 0.01em;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}

.article-sections :deep(h4) {
  color: #475569;
  font-size: 0.95rem !important;
  margin-top: 1.75rem;
  margin-bottom: 0.6rem;
}

.article-sections :deep(p) {
  max-width: 78ch;
  margin-bottom: 1rem;
  color: #475569 !important;
  font-size: 0.98rem;
  line-height: 1.85;
}

.article-sections :deep(li) {
  color: #475569;
  line-height: 1.7;
}

.article-sections :deep(strong) {
  color: #1e293b;
}

.article-sections :deep(code) {
  border-radius: 0.35rem;
  background: #f1f5f9;
  padding: 0.1rem 0.3rem;
  color: #4338ca;
  font-size: 0.88em;
}

.article-sections :deep(blockquote) {
  margin: 1.75rem 0;
  border-left: 3px solid #6366f1;
  border-radius: 0 0.75rem 0.75rem 0;
  background: #f8fafc;
  padding: 1.1rem 1.25rem;
}

.article-sections :deep(blockquote p) {
  margin-bottom: 0.7rem;
  color: #334155 !important;
}

.article-sections :deep(blockquote p:last-child) {
  margin-bottom: 0;
}

.article-sections :deep(hr) {
  margin: 2.5rem 0;
  border-color: #e2e8f0;
}

.article-sections :deep(table) {
  width: 100%;
  margin: 1.5rem 0;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  font-size: 0.9rem;
}

.article-sections :deep(th),
.article-sections :deep(td) {
  border-bottom: 1px solid #e2e8f0;
  padding: 0.7rem 0.8rem;
  text-align: left;
}

.article-sections :deep(th) {
  background: #f8fafc;
  color: #334155;
  font-weight: 750;
}

.article-sections :deep(tr:last-child td) {
  border-bottom: 0;
}

@media (max-width: 640px) {
  .article-sections :deep(> div > div[id^="accordion-flush-body-"] > div) {
    padding: 2rem 1rem 3rem;
  }
}

@media print {
  .article-page {
    background: #fff !important;
    padding: 0 !important;
  }

  .article-container {
    max-width: none !important;
    padding: 0 !important;
  }

  .article-card {
    border: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }

  .article-hero {
    background: #fff !important;
    color: #0f172a !important;
    border-bottom: 2px solid #0f172a !important;
  }

  .article-hero :deep(*) {
    color: #0f172a !important;
  }

  .article-control,
  .article-toc,
  .article-card > footer {
    display: none !important;
  }

  .article-sections :deep(> div > div.hidden) {
    display: block !important;
  }

  .article-sections :deep(> div > h2) {
    position: static;
    background: #fff;
    border-top: 2px solid #cbd5e1;
    page-break-after: avoid;
  }

  .article-sections :deep(> div > h2 button) {
    padding-left: 0;
    min-height: auto;
  }

  .article-sections :deep(> div > h2 svg) {
    display: none;
  }

  .article-sections :deep(> div > div[id^="accordion-flush-body-"] > div) {
    max-width: none;
    padding: 1.25rem 0 2rem;
  }

  .article-sections :deep(hr) {
    margin: 1.5rem 0;
  }
}
</style>
