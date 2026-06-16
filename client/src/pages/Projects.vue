<template>
  <div class="min-h-screen bg-background">
    <!-- Navigation -->
    <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div class="container py-4 flex items-center justify-between">
        <RouterLink to="/" class="flex items-center gap-2 hover:opacity-70 transition-opacity">
          <ArrowLeft class="w-5 h-5 text-primary" />
          <span class="font-bold text-lg text-primary">Adeel Raza</span>
        </RouterLink>
        <RouterLink to="/" class="text-sm font-medium text-foreground hover:text-accent transition-colors">
          Back to Home
        </RouterLink>
      </div>
    </nav>

    <!-- Header -->
    <section class="py-16 md:py-24 bg-white border-b border-border">
      <div class="container">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-1 h-12 bg-accent rounded-full" />
          <h1 class="text-4xl md:text-5xl font-bold text-primary">Featured Projects</h1>
        </div>
        <p class="text-xl text-foreground/70 max-w-2xl">
          Three mission-critical systems built for NGO operations, each solving complex organizational challenges at scale.
        </p>
      </div>
    </section>

    <!-- Projects -->
    <section class="py-20 md:py-32">
      <div class="container space-y-32">
        <div v-for="(project, index) in projects" :key="project.id" :class="['grid md:grid-cols-2 gap-12 items-start', index % 2 === 1 ? 'md:flex-row-reverse' : '']">
          <!-- Content -->
          <div :class="[index % 2 === 1 ? 'md:col-start-2' : '']">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-1 h-10 bg-accent rounded-full" />
              <span class="text-sm font-bold text-accent tracking-wide uppercase">Project {{ project.id }}</span>
            </div>

            <h2 class="text-3xl md:text-4xl font-bold text-primary mb-3">{{ project.title }}</h2>
            <p class="text-lg text-accent font-semibold mb-6">{{ project.tagline }}</p>

            <p class="text-lg text-foreground/80 mb-8 leading-relaxed">{{ project.description }}</p>

            <!-- Impact -->
            <div class="bg-primary/5 border-l-4 border-accent rounded-r-lg p-6 mb-8">
              <p class="text-sm font-semibold text-accent mb-2">Impact</p>
              <p class="text-foreground font-semibold">{{ project.impact }}</p>
            </div>

            <!-- Technologies -->
            <div class="mb-8">
              <p class="text-sm font-semibold text-primary mb-3">Technologies</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in project.technologies" :key="tech" class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mono">
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Features -->
            <div>
              <p class="text-sm font-semibold text-primary mb-4">Key Features</p>
              <ul class="space-y-2">
                <li v-for="feature in project.features" :key="feature" class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span class="text-foreground/80">{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Screenshots -->
          <div :class="['space-y-6', index % 2 === 1 ? 'md:col-start-1' : '']">
            <div v-for="(screenshot, screenshotIndex) in project.screenshots" :key="screenshotIndex" class="bg-white rounded-lg border border-border overflow-hidden hover:border-accent transition-colors group">
              <!-- Placeholder for screenshot -->
              <div class="bg-gradient-to-br from-primary/10 to-accent/10 aspect-video flex items-center justify-center relative overflow-hidden">
                <div class="absolute inset-0 opacity-5" :style="{
                  backgroundImage: 'radial-gradient(circle, #1e3a5f 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }" />
                <div class="text-center z-10 px-4">
                  <img width="2432" height="1442" :src="screenshot.url" alt="Product screenshot"
              class="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0" />
                  <!-- <p class="text-sm text-foreground/60 italic">{{ screenshot.placeholder }}</p> -->
                </div>
              </div>

              <!-- Caption -->
              <div class="p-4 bg-white">
                <h4 class="font-bold text-primary mb-2">{{ screenshot.title }}</h4>
                <p class="text-sm text-foreground/70">{{ screenshot.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 md:py-32 bg-primary text-white">
      <div class="container text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">Interested in Working Together?</h2>
        <p class="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Whether you need a custom MIS solution, system optimization, or technical consultation, I'm ready to help your organization succeed.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:adeel.raza.azeemi@gmail.com">
            <button class="bg-accent hover:bg-accent/90 text-primary gap-2 h-12 px-8 text-base rounded-lg font-medium flex items-center transition-colors">
              Send Me an Email
              <ExternalLink class="w-4 h-4" />
            </button>
          </a>
          <RouterLink to="/">
            <button class="h-12 px-8 text-base border-2 border-white text-white hover:bg-white/10 rounded-lg font-medium transition-colors">
              Back to Home
            </button>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-primary text-white py-8">
      <div class="container flex items-center justify-between">
        <p class="text-white/70">© {{ currentYear }} Adeel Raza. All rights reserved.</p>
        <p class="text-white/70">Designed & Built with precision</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowLeft, ExternalLink } from 'lucide-vue-next'

const currentYear = computed(() => new Date().getFullYear())

const projects = ref([
  {
    id: 1,
    title: 'Procurement Management System',
    tagline: 'Enterprise-grade procurement workflow automation',
    description:
      'A comprehensive procurement management system built for NGO operations managing thousands of vendors and purchase requests. The system streamlines the entire procurement lifecycle from requisition to payment, with multi-level approvals, vendor management, and detailed financial reporting.',
    impact: 'Reduced procurement cycle time by 60% and improved vendor compliance tracking',
    technologies: ['Laravel', 'Vue.js', 'MariaDB', 'REST APIs'],
    features: [
      'Dashboard with real-time procurement metrics',
      'Vendor management and performance tracking',
      'Multi-level approval workflows',
      'Purchase request automation',
      'Financial reporting and analytics',
      'Audit trail and compliance tracking',
    ],
    screenshots: [
      {
        title: 'Dashboard Overview',
        description: 'Real-time procurement metrics and KPI tracking with visual analytics',
        placeholder: 'Dashboard showing procurement pipeline, vendor performance, and budget allocation',
        url: '/images/procurement/dashboard.png',
      },
      {
        title: 'Vendor Management',
        description: 'Comprehensive vendor database with performance ratings and compliance history',
        placeholder: 'Vendor list with ratings, contact information, and transaction history',
        url: '/images/procurement/vendors.png',
      },
      {
        title: 'Purchase Approval Workflow',
        description: 'Multi-level approval system with role-based access and audit trails',
        placeholder: 'Approval workflow interface showing pending requests and approval status',
        url: '/images/procurement/approval.jpeg',
      },
    ],
  },
  {
    id: 2,
    title: 'HR Information Search & Verification System',
    tagline: 'Intelligent staff data consolidation and search',
    description:
      'An advanced HR system designed to solve the critical challenge of managing fragmented employee data across multiple organizational systems. Using fuzzy matching algorithms, the system consolidates duplicate records, enables intelligent staff search, and provides a single source of truth for HR operations.',
    impact: 'Consolidated 5,000+ staff records with 99.2% accuracy, eliminating duplicate payments and improving HR efficiency',
    technologies: ['Laravel', 'Vue.js', 'MariaDB', 'Fuzzy Matching Algorithms'],
    features: [
      'Intelligent data consolidation with fuzzy matching',
      'Advanced staff search and profile management',
      'Duplicate detection and resolution',
      'Staff verification workflows',
      'Profile consolidation dashboard',
      'Data quality reporting and analytics',
    ],
    screenshots: [
      {
        title: 'Staff Search Interface',
        description: 'Powerful search with fuzzy matching to find staff across consolidated database',
        placeholder: 'Search interface with filters, results showing matched staff profiles',
        url: '/images/hr/search.png',
      },
      /* {
        title: 'Duplicate Detection Dashboard',
        description: 'Automated detection of duplicate records with merge recommendations',
        placeholder: 'Dashboard showing potential duplicates with similarity scores and merge options',
        url: '/images/hr/duplicates.jpeg',
      }, */
      {
        title: 'Profile Consolidation',
        description: 'Unified staff profile combining data from multiple sources',
        placeholder: 'Consolidated staff profile showing all information from integrated sources',
        url: '/images/hr/entry.png',
      },
    ],
  },
  {
    id: 3,
    title: 'Relief Distribution Tracking System',
    tagline: 'Real-time emergency relief operations management',
    description:
      'A system built during the Pakistan flood emergency to track distribution of relief materials (NFI - Non-Food Items) to beneficiaries across multiple districts. The system enables field teams to register beneficiaries, record distributions, and generate real-time reports for coordination and accountability.',
    impact: 'Coordinated relief distribution to 58,204+ beneficiaries across 3 districts with real-time tracking and accountability',
    technologies: ['PHP', 'JQuery', 'MySQL', 'Real-time Sync'],
    features: [
      'Beneficiary registration and verification',
      'NFI distribution tracking',
      'Real-time synchronization for offline operations',
      'District-level reporting and summaries',
      'Beneficiary feedback and verification',
      'Distribution analytics and impact metrics',
    ],
    screenshots: [
      {
        title: 'Beneficiary Registration',
        description: 'Mobile-optimized form for rapid beneficiary registration in field conditions',
        placeholder: 'Registration form with family details, contact information, and verification',
        url: '/images/relief/registration.jpeg',
      } /* ,
      {
        title: 'Distribution Tracking',
        description: 'Real-time tracking of NFI distribution with offline capability',
        placeholder: 'Distribution interface showing items distributed, quantities, and beneficiary confirmation',
        url: '/images/relief/tracking.jpeg',
      },
      {
        title: 'District Reporting Dashboard',
        description: 'Aggregated reporting showing distribution progress across districts',
        placeholder: 'Dashboard with district maps, distribution statistics, and beneficiary counts',
        url: '/images/relief/dashboard.jpeg',
      }, */
    ],
  },
])
</script>
