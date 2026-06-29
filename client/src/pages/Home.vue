<template>
  <div class="min-h-screen bg-background">

    <!-- Hero Section -->
    <section class="relative py-20 md:py-32 overflow-hidden">
      <div
        class="absolute inset-0 opacity-[0.03]"
        :style="{
          backgroundImage: 'radial-gradient(circle, #1e3a5f 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }"
      />

      <div class="container relative">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div class="flex items-start gap-4 mb-8">
              <div class="w-1 h-16 bg-accent rounded-full" />
              <div>
                <p class="text-accent font-semibold text-sm tracking-wide uppercase">
                  Laravel & Vue Developer
                </p>
              </div>
            </div>

            <h1 class="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Building Mission-Critical Systems
            </h1>

            <p class="text-xl text-foreground/80 mb-8 max-w-2xl leading-relaxed">
              14 years architecting scalable MIS platforms for NGOs. From emergency relief coordination to procurement workflows—I transform organizational complexity into elegant, reliable systems.
            </p>

            <div class="flex flex-col sm:flex-row gap-4">
              <RouterLink to="/projects" class="inline-flex">
                <button class="bg-primary hover:bg-primary/90 text-white gap-2 h-12 px-6 text-base rounded-lg font-medium flex items-center transition-colors">
                  View Projects
                  <ArrowRight class="w-4 h-4" />
                </button>
              </RouterLink>
              <a href="/docs/adeel_resume.png" target="_blank" rel="noopener noreferrer" class="inline-flex">
                <button class="h-12 px-6 text-base border-2 border-primary text-primary hover:bg-primary/5 rounded-lg font-medium flex items-center gap-2 transition-colors">
                  <Download class="w-4 h-4" />
                  Download Resume
                </button>
              </a>
              <a href="#contact" class="inline-flex">
                <button class="h-12 px-6 text-base border-2 border-accent text-accent hover:bg-accent/5 rounded-lg font-medium transition-colors">
                  Get In Touch
                </button>
              </a>
            </div>
          </div>

          <!-- Hero Image -->
          <div class="hidden md:flex justify-center">
            <div class="relative w-full max-w-sm">
              <div class="relative inset-0 bg-gradient-to-br from-accent to-primary opacity-20 rounded-2xl blur-2xl" />
              <img
                src="/images/profile.jpeg"
                alt="Adeel Raza"
                class="relative w-full rounded-2xl shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 md:py-32 bg-white">
      <div class="container">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <!-- About Image -->
          <div class="hidden md:flex justify-center order-2 md:order-1">
            <div class="relative w-full max-w-sm">
              <div class="relative inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl blur-xl" />
              <img
                src="/images/profile.jpeg"
                alt="Adeel Raza"
                class="relative w-full rounded-xl shadow-lg border-2 border-accent/20"
              />
            </div>
          </div>

          <!-- About Text -->
          <div class="order-1 md:order-2">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-1 h-12 bg-accent rounded-full" />
              <h2 class="text-3xl md:text-4xl font-bold text-primary">About Me</h2>
            </div>

            <p class="text-lg text-foreground/80 mb-6 leading-relaxed">
              I'm a full-stack developer specializing in Laravel and Vue.js, with 14 years of experience building mission-critical Management Information Systems (MIS) for NGOs and humanitarian organizations.
            </p>

            <p class="text-lg text-foreground/80 mb-8 leading-relaxed">
              My work spans emergency relief operations, HR information systems, and procurement management—each system designed to handle thousands of concurrent users and complex business logic that keeps organizations running at scale.
            </p>

            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-accent rounded-full" />
                <span class="text-foreground">14 years at SRSP (Sarhad Rural Support Programme)</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-accent rounded-full" />
                <span class="text-foreground">Expert in Laravel, Vue.js, and MariaDB/MySQL</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-accent rounded-full" />
                <span class="text-foreground">Specialized in NGO operations and humanitarian tech</span>
              </div>
            </div>
          </div>

          <div class="space-y-8 order-3 md:order-3">
            <div class="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-8 border border-border">
              <div class="text-4xl font-bold text-primary mb-2 mono">14</div>
              <p class="text-foreground/70">Years of Experience</p>
            </div>

            <div class="bg-gradient-to-br from-accent/5 to-primary/5 rounded-lg p-8 border border-border">
              <div class="text-4xl font-bold text-accent mb-2 mono">3+</div>
              <p class="text-foreground/70">Mission-Critical Systems Built</p>
            </div>

            <div class="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-8 border border-border">
              <div class="text-4xl font-bold text-primary mb-2 mono">1000s</div>
              <p class="text-foreground/70">Concurrent Users Supported</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-20 md:py-32 bg-background">
      <div class="container">
        <div class="flex items-center gap-3 mb-12">
          <div class="w-1 h-12 bg-accent rounded-full" />
          <h2 class="text-3xl md:text-4xl font-bold text-primary">Skills & Expertise</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg p-8 border border-border hover:border-accent transition-colors">
            <h3 class="text-lg font-bold text-primary mb-6">Backend</h3>
            <ul class="space-y-3">
              <li v-for="skill in backendSkills" :key="skill" class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-accent rounded-full" />
                <span class="text-foreground/80">{{ skill }}</span>
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-lg p-8 border border-border hover:border-accent transition-colors">
            <h3 class="text-lg font-bold text-primary mb-6">Frontend</h3>
            <ul class="space-y-3">
              <li v-for="skill in frontendSkills" :key="skill" class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-accent rounded-full" />
                <span class="text-foreground/80">{{ skill }}</span>
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-lg p-8 border border-border hover:border-accent transition-colors">
            <h3 class="text-lg font-bold text-primary mb-6">Systems</h3>
            <ul class="space-y-3">
              <li v-for="skill in systemsSkills" :key="skill" class="flex items-center gap-2">
                <div class="w-1.5 h-1.5 bg-accent rounded-full" />
                <span class="text-foreground/80">{{ skill }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 md:py-32 bg-primary text-white">
      <div class="container text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">Ready to See What I've Built?</h2>
        <p class="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Explore detailed case studies of my three major systems with screenshots, technical details, and real-world impact.
        </p>
        <RouterLink to="/projects">
          <button class="bg-accent hover:bg-accent/90 text-primary gap-2 h-12 px-8 text-base rounded-lg font-medium flex items-center mx-auto transition-colors">
            View All Projects
            <ArrowRight class="w-4 h-4" />
          </button>
        </RouterLink>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 md:py-32 bg-background">
      <div class="container max-w-3xl">
        <div class="flex items-center gap-3 mb-12">
          <div class="w-1 h-12 bg-accent rounded-full" />
          <h2 class="text-3xl md:text-4xl font-bold text-primary">Get In Touch</h2>
        </div>

        <div class="bg-white rounded-lg p-8 md:p-12 border border-border">
          <p class="text-lg text-foreground/80 mb-8">
            Have a project in mind? Need a scalable MIS solution? I'd love to discuss how I can help your organization.
          </p>

          <div class="space-y-6 mb-8">
            <div>
              <p class="text-sm font-semibold text-primary mb-2">Email</p>
              <a
                href="mailto:adeel.raza.azeemi@gmail.com"
                class="text-accent hover:underline text-lg"
              >
                adeel.raza.azeemi@gmail.com
              </a>
            </div>

            <div>
              <p class="text-sm font-semibold text-primary mb-2">Phone</p>
              <a href="tel:+923369017006" class="text-accent hover:underline text-lg">
                +92 336 901 7006
              </a>
            </div>

            <div>
              <p class="text-sm font-semibold text-primary mb-2">Location</p>
              <p class="text-foreground/80">Peshawar, Pakistan</p>
            </div>
          </div>

          <div class="flex gap-4 pt-8 border-t border-border">
            <a
              href="https://github.com/adeel-raza-azeemi"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground/5 text-primary hover:bg-accent hover:text-white transition-colors"
            >
              <Github class="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/adeel-raza-930aa24b/"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground/5 text-primary hover:bg-accent hover:text-white transition-colors"
            >
              <Linkedin class="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://x.com/azeemi_adeel"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground/5 text-primary hover:bg-accent hover:text-white transition-colors"
            >
              <Twitter class="w-5 h-5" />
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowRight, Download, Github, Linkedin, Twitter } from 'lucide-vue-next'

const backendSkills = ref([
  'Laravel',
  'PHP',
  'RESTful APIs',
  'Database Design',
  'Server Architecture'
])

const frontendSkills = ref([
  'Vue.js',
  'JavaScript',
  'Responsive Design',
  'UI/UX Implementation',
  'Performance Optimization'
])

const systemsSkills = ref([
  'MIS Architecture',
  'Procurement Systems',
  'HR Systems',
  'Relief Operations',
  'Data Integration'
])
</script>
