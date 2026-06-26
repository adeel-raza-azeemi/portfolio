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
          Three mission-critical systems built for NGO operations, each solving complex organizational challenges at
          scale.
        </p>
        <br />
        <p class="text-xl text-foreground/70 max-w-2xl">
          All projects presented in this portfolio were developed for real operational use within NGO programs and
          organizational departments.

          Because these systems contain sensitive employee information, procurement records, beneficiary data, and
          organizational documents, screenshots have been anonymized and certain workflows are represented through
          diagrams and case studies rather than live demonstrations.
        </p>
      </div>
    </section>

    <!-- Projects -->
    <section class="py-20 md:py-32">
      <div class="container space-y-32">

        <div v-for="(project, index) in projects" :key="project.id"
          :class="[project.layout === 'screenshots' ? 'grid md:grid-cols-2 gap-8  items-start' : 'space-y-8']">
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
                <span v-for="tech in project.technologies" :key="tech"
                  class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mono">
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- My Role -->
            <div class="mb-8">
              <p class="text-sm font-semibold text-primary mb-3">My Role</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="role in project.roles" :key="role"
                  class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mono">
                  {{ role }}
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

            <template v-if="project.layout === 'screenshots'">
              <div>
                <h3
                  v-if="project.workflow.before.length > 0 || project.workflow.after.length > 0 || project.workflow.sources.length > 0"
                  class="paragraph-Heading_20_3">Problem Solved</h3>
                <p v-if="project.workflow.before.length > 0" class="paragraph-Text_20_body">Before:</p>
                <div v-if="project.workflow.before.length > 0"
                  class="section-Sect1 bg-[#f4f4f4] border-none rounded-4xl p-6" id="code-block-viewer">
                  <template v-for="(flow, idx) in project.workflow.before" id="code-block-viewer">
                    <p class="paragraph-P1">{{ flow }}</p>
                    <p v-if="idx < project.workflow.before.length - 1" class="paragraph-Preformatted_20_Text">
                      ↓</p>
                  </template>
                </div>

                <p v-if="project.workflow.after.length > 0" class="paragraph-Text_20_body">
                  <template v-if="project.workflow.before.length === 0">
                    Workflow
                  </template>
                  <template v-else>
                    After:
                  </template>
                </p>
                <div v-if="project.workflow.after.length > 0"
                  class="section-Sect1 bg-[#f4f4f4] border-none rounded-4xl p-6" id="Section1">
                  <template v-for="(flow, idx) in project.workflow.after">
                    <p class="paragraph-P1">{{ flow }}</p>
                    <p v-if="idx < project.workflow.after.length - 1" class="paragraph-Preformatted_20_Text">
                      ↓</p>
                  </template>
                </div>

                <h3 v-if="project.workflow.sources.length > 0" class="paragraph-Heading_20_3">Data Sources</h3>
                <div v-if="project.workflow.sources.length > 0"
                  class="section-Sect1 bg-[#f4f4f4] border-none rounded-4xl p-6" id="Section2">
                  <template v-for="source in project.workflow.sources">
                    <p class="paragraph-P1">{{ source }}</p>
                  </template>
                </div>
              </div>
            </template>
            <!-- <template v-else-if="project.id === 2">
              Workflow + Data Sources + Screenshot  
            </template> -->
            <!-- <template v-else-if="project.id === 3">
              Workflow + Operational Diagram
            </template> -->

          </div>

          <!-- start -->
          <!-- Screenshots -->
          <div v-if="project.layout === 'screenshots'" :class="['space-y-6', index % 2 === 1 ? 'md:col-start-1' : '']">
            <div v-for="(screenshot, screenshotIndex) in project.screenshots" :key="screenshotIndex"
              class="bg-white rounded-lg border border-border overflow-hidden hover:border-accent transition-colors group">
              <!-- Placeholder for screenshot -->
              <div
                class="bg-gradient-to-br from-primary/10 to-accent/10 aspect-video flex items-center justify-center relative overflow-hidden">
                <div class="absolute inset-0 opacity-5" :style="{
                  backgroundImage: 'radial-gradient(circle, #1e3a5f 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }" />

                <div v-if="screenshot.url" class="text-center z-10 px-4">
                  <img width="2432" height="1442" :src="screenshot.url" alt="Product screenshot"
                    class="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0" />
                  <!-- <p class="text-sm text-foreground/60 italic">{{ screenshot.placeholder }}</p> -->
                </div>
                <!-- Content/Storytelling -->
                <div v-else-if="screenshot.content" class="relative z-10">
                  <p class="text-sm text-foreground/70 leading-relaxed italic">{{ screenshot.content }}</p>
                </div>

              </div>


              <!-- Caption -->
              <div class="p-4 bg-white">
                <h4 class="font-bold text-primary mb-2">{{ screenshot.title }}</h4>
                <pre class="text-sm text-foreground/70">{{ screenshot.description }}</pre>
              </div>
            </div>
          </div>
          <div v-else :class="['space-y-6', index % 2 === 1 ? 'md:col-start-1' : '']">
            <!-- workflow and sources -->
            <h3
              v-if="project.workflow.before.length > 0 || project.workflow.after.length > 0 || project.workflow.sources.length > 0"
              class="paragraph-Heading_20_3">Problem Solved</h3>
            <p v-if="project.workflow.before.length > 0" class="paragraph-Text_20_body">Before:</p>
            <div v-if="project.workflow.before.length > 0"
              class="section-Sect1 bg-[#f4f4f4] border-none rounded-4xl p-6" id="code-block-viewer">
              <template v-for="(flow, idx) in project.workflow.before" id="code-block-viewer">
                <p class="paragraph-P1">{{ flow }}</p>
                <p v-if="idx < project.workflow.before.length - 1" class="paragraph-Preformatted_20_Text">
                  ↓</p>
              </template>
            </div>

            <p v-if="project.workflow.after.length > 0" class="paragraph-Text_20_body">
              <template v-if="project.workflow.before.length === 0">
                Workflow
              </template>
              <template v-else>
                After:
              </template>
            </p>
            <div v-if="project.workflow.after.length > 0" class="section-Sect1 bg-[#f4f4f4] border-none rounded-4xl p-6"
              id="Section1">
              <template v-for="(flow, idx) in project.workflow.after">
                <p class="paragraph-P1">{{ flow }}</p>
                <p v-if="idx < project.workflow.after.length - 1" class="paragraph-Preformatted_20_Text">
                  ↓</p>
              </template>
            </div>

            <h3 v-if="project.workflow.sources.length > 0" class="paragraph-Heading_20_3">Data Sources</h3>
            <div v-if="project.workflow.sources.length > 0"
              class="section-Sect1 bg-[#f4f4f4] border-none rounded-4xl p-6" id="Section2">
              <template v-for="source in project.workflow.sources">
                <p class="paragraph-P1">{{ source }}</p>
              </template>
            </div>
            <template v-if="project.layout === 'screenshots'">
              <h3 class="paragraph-Heading_20_3">Screenshots</h3>
              <div v-for="(screenshot, screenshotIndex) in project.screenshots" :key="screenshotIndex"
                class="bg-white rounded-lg border border-border overflow-hidden hover:border-accent transition-colors group">
                <!-- Placeholder for screenshot -->
                <div
                  class="bg-gradient-to-br from-primary/10 to-accent/10 aspect-video flex items-center justify-center relative overflow-hidden">
                  <div class="absolute inset-0 opacity-5" :style="{
                    backgroundImage: 'radial-gradient(circle, #1e3a5f 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }" />

                  <div v-if="screenshot.url" class="text-center z-10 px-4">
                    <img width="2432" height="1442" :src="screenshot.url" alt="Product screenshot"
                      class="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0" />
                    <!-- <p class="text-sm text-foreground/60 italic">{{ screenshot.placeholder }}</p> -->
                  </div>
                  <!-- Content/Storytelling -->
                  <div v-else-if="screenshot.content" class="relative z-10">
                    <p class="text-sm text-foreground/70 leading-relaxed italic">{{ screenshot.content }}</p>
                  </div>

                </div>


                <!-- Caption -->
                <div class="p-4 bg-white">
                  <h4 class="font-bold text-primary mb-2">{{ screenshot.title }}</h4>
                  <pre class="text-sm text-foreground/70">{{ screenshot.description }}</pre>
                </div>
              </div>
            </template>
          </div>
        </div>
        <!-- end -->

      </div>
  </section>

  <!-- CTA Section -->
  <section class="py-20 md:py-32 bg-primary text-white">
    <div class="container text-center">
      <h2 class="text-4xl md:text-5xl font-bold mb-6">Interested in Working Together?</h2>
      <p class="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
        Whether you need a custom MIS solution, system optimization, or technical consultation, I'm ready to help your
        organization succeed.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="mailto:adeel.raza.azeemi@gmail.com">
          <button
            class="bg-accent hover:bg-accent/90 text-primary gap-2 h-12 px-8 text-base rounded-lg font-medium flex items-center transition-colors">
            Send Me an Email
            <ExternalLink class="w-4 h-4" />
          </button>
        </a>
        <RouterLink to="/">
          <button
            class="h-12 px-8 text-base border-2 border-white text-white hover:bg-white/10 rounded-lg font-medium transition-colors">
            Back to Home
          </button>
        </RouterLink>
      </div>
    </div>
  </section>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowLeft, Divide, ExternalLink } from 'lucide-vue-next'

const currentYear = computed(() => new Date().getFullYear())

const projects = ref([
  {
    id: 1,
    title: 'Procurement Management System',
    tagline: 'Procurement, contractor management, and document tracking for NGO operations',
    description: 'A centralized Procurement Management Information System (MIS) developed for NGO operations to manage tenders, contractors, contracts, payments, digital dossiers, and procurement reporting.\n\nThe platform was designed to replace spreadsheet-based tracking and fragmented documentation processes with a single web-based system that provides visibility into procurement activities from tender announcement through contract completion.\n\nThe system includes contractor management, procurement monitoring, payment tracking, digital document repositories, reporting modules, and donor/project level oversight.',
    impact: 'Successfully deployed and used within organizational procurement operations, improving visibility of procurement activities, contractor records, and contract documentation. and improved vendor compliance tracking',
    technologies: ['Laravel', 'Vue.js', 'MariaDB', 'REST APIs'],
    roles: ['Requirements Analysis', 'Database Design', 'Backend Development', 'Frontend Development', 'Deployment', 'Maintenance & Enhancements'],
    features: [
      'Tender Management',
      'Contractor Directory',
      'Contract Monitoring',
      'Payment Tracking',
      'Digital Dossiers',
      'Procurement Reports',
      'Multi-project Support',
      'Search & Filtering',
    ],
    workflow: {
      before: [
      ],
      after: [
        "Tender Creation",
        "Vendor Selection",
        "Contract Award",
        "Payment Tracking",
        "Reporting"
      ],
      sources: [
      ],
    },
    layout: 'screenshots',
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
    title: 'Employee Search & Verification Platform',
    tagline: 'Intelligent staff data consolidation and search',
    description:
      'The organization maintained employee information across three independent systems: ERP, HR, and HRDC. Locating staff records was often difficult because the ERP system relied on exact-match searches and provided no fuzzy search capabilities.' +
      ' ' +
      'To solve this problem, I developed a centralized Employee Search and Verification Platform that consolidated employee information from all available sources into a single searchable interface. ' +
      ' ' +
      'The solution integrated over 5,100 employee records and supported advanced search techniques including exact matching, Soundex phonetic matching, Levenshtein distance calculations, and combined fuzzy search operations. ' +
      ' ' +
      'Users could successfully locate employee records even when names were misspelled, incomplete, or entered using alternative spellings. ' +
      ' ' +
      'The platform also included a data synchronization utility that prepared employee records for bulk ERP import through structured JSON exports and automated mapping of related reference data. ',
    impact: 'Unified search across 5,102 employee records with Unified employee search across 5,102 records from three independent systems while enabling fuzzy matching, duplicate detection, and ERP synchronization workflows., eliminated duplicate staff records, reduced dependency on exact text matching, and automated ERP data synchronization',
    technologies: ['Laravel', 'Vue.js', 'MariaDB', 'SQL Server', 'Soundex Algorithms', 'Levenshtein Distance', 'JSON Integration'],
    features: [
      'Unified search across 5,102 employee records from three sources',
      'Exact, Soundex, and Levenshtein Distance matching algorithms',
      'Consolidated database views merging multiple HR sources',
      'Duplicate detection and resolution',
      'Bulk JSON-based ERP synchronization module',
      'Advanced search with spelling variation tolerance',
    ],
    workflow: {
      title: 'Problem Solved',
      before: [
        "User searches staff member",
        "One spelling mistake",
        "No result"
      ],
      after: [
        "User searches staff member",
        "Fuzzy matching algorithms",
        "Relevant records found"
      ],
      sources: [
        "ERP Records : 908",
        "HR Records : 759",
        "HRDC Records : 3,435",
        "Total Records : 5,102",
      ],
    },
    layout: 'full',
    screenshots: [
      {
        title: 'Advanced Search Interface',
        description: 'Intelligent search supporting multiple matching algorithms for flexible employee lookup',
        content: 'Advanced search interface with multiple matching algorithm options (Exact, Soundex, Levenshtein), search results showing employees with relevance scores, and data source indicators (HRDC/ERP/HR)',
        url: '/images/hr/search.png',
      },
      {
        title: 'Consolidated Employee Database',
        description: 'Unified view of 5,102 employee records integrated from three independent systems',
        content: 'Employee profile showing consolidated information from multiple sources (HRDC, ERP, HR), with data quality indicators, merge history, and source attribution for each field',
        url: '/images/hr/entry.png',
      },
      {
        title: 'Bulk ERP Synchronization',
        description: 'Automated JSON-based import module for missing employee records',
        content: 'Synchronization dashboard showing pending records to be imported, JSON preview of import packages, batch processing status, and reconciliation reports',
        url: '/images/hr/bulk_load.png'
      },
    ],
  },
  {
    id: 3,
    title: 'Emergency Relief Distribution Tracking System',
    tagline: 'Offline-first emergency relief operations management',
    description:
      'Following the 2010 floods in Pakistan, our organization participated in emergency relief operations supported by UNHCR across Peshawar, Nowshera, and Charsadda. The primary challenge was ensuring that Internally Displaced Persons (IDPs) received Non-Food Item (NFI) kits only once while operating from multiple distribution stations with little or no internet connectivity. I developed an offline MIS application that allowed field staff to verify beneficiaries using CNIC numbers before issuing relief items. Once a beneficiary received assistance, the system updated their status to prevent duplicate claims. Each distribution station operated independently throughout the day. Daily MySQL backups from all locations were collected and consolidated into a central reporting database, enabling management and donor representatives to monitor distribution progress and beneficiary coverage. The solution provided accountability, beneficiary verification, and operational reporting during a large-scale emergency response where reliable internet connectivity was unavailable.',
    impact: 'Supported emergency relief operations in 3 districts, Supported emergency relief operations across multiple districts by preventing duplicate distributions and providing consolidated reporting for management and donor oversight., prevented duplicate NFI distribution, and enabled offline operation in low-connectivity environments',
    technologies: ['PHP', 'MySQL', 'HTML/CSS', 'Offline-first Architecture', 'CNIC Verification'],
    features: [
      'Offline-first architecture for low-connectivity environments',
      'CNIC-based beneficiary verification and duplicate prevention',
      'Multi-station independent operation with daily consolidation',
      'Real-time status updates preventing duplicate claims',
      'Centralized reporting database for management oversight',
      'Donor agency reporting and accountability tracking',
    ],
    workflow: {
      title: 'Distribution Workflow',
      before: [
      ],
      after: [
        "Beneficiary Arrives",
        "CNIC Verification",
        "Check Distribution Status",
        "Issue NFI Kit",
        "Update Local Database",
        "Daily Backup Export",
        "Central Consolidation",
        "Management Reporting",
      ],
      sources: [
      ],
    },
    layout: 'full',
    screenshots: [
      {
        title: 'Beneficiary Verification Interface',
        description: 'Field staff CNIC lookup with offline capability and duplicate prevention',
        content: 'CNIC entry form showing beneficiary lookup results, status indicators (Already Received/Not Received), and confirmation interface for NFI kit distribution with timestamp and staff verification',
      },
      {
        title: 'Distribution Station Dashboard',
        description: 'Real-time tracking across three distribution centers with offline synchronization',
        content: 'Dashboard for each distribution station showing daily distribution count, beneficiary verification status, NFI kit inventory, and sync status indicator for offline/online operations',
      },
      {
        title: 'Central Consolidation & Reporting',
        description: 'Management dashboard aggregating data from all distribution stations',
        content: 'Central reporting dashboard showing distribution progress across Peshawar, Nowshera, and Charsadda, beneficiary counts by district, duplicate prevention statistics, and donor agency reports',
      },
    ],
  },

])
</script>

<style>
.paragraph-Heading_20_3 {
  font-size: 14pt;
  margin-bottom: 0.0835in;
  margin-top: 0.0972in;
  font-family: 'Liberation Serif';
  writing-mode: horizontal-tb;
  direction: ltr;
  font-weight: bold;
}

.paragraph-P1 {
  font-size: 10pt;
  margin-bottom: 0in;
  margin-top: 0in;
  font-family: 'Liberation Mono';
  writing-mode: horizontal-tb;
  direction: ltr;
  margin-left: 0in;
  margin-right: 0in;
  text-indent: 0in;
}

.paragraph-P2 {
  font-size: 10pt;
  margin-bottom: 0.1965in;
  margin-top: 0in;
  font-family: 'Liberation Mono';
  writing-mode: horizontal-tb;
  direction: ltr;
}

.paragraph-Preformatted_20_Text {
  font-size: 10pt;
  font-family: 'Liberation Mono';
  writing-mode: horizontal-tb;
  direction: ltr;
  margin-top: 0in;
  margin-bottom: 0in;
}

.paragraph-Text_20_body {
  font-size: 12pt;
  font-family: 'Liberation Serif';
  writing-mode: horizontal-tb;
  direction: ltr;
  margin-top: 0in;
  margin-bottom: 0.0972in;
  line-height: 115%;
}

.section-Sect1 {
  writing-mode: horizontal-tb;
  direction: ltr;
  margin-left: 0in;
  margin-right: 0in;
}

.text-Source_20_Text {
  font-family: 'Liberation Mono';
}
</style>