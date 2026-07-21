<template>
  <div>
    			<h2 id="accordion-flush-heading-1">
				<button type="button"
					class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
					data-accordion-target="#accordion-flush-body-1" aria-expanded="true"
					aria-controls="accordion-flush-body-1">
					<span class="font-bold text-indigo-600">01. Introduction</span>
					<svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="m5 15 7-7 7 7" />
					</svg>
				</button>
			</h2>
			<div id="accordion-flush-body-1" class="hidden" aria-labelledby="accordion-flush-heading-1">
				<div class="py-5 border-b border-default text-body">
					<h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">Part 1 —
						Introduction</h1>
					<h2 class="text-4xl font-bold">Abstract</h2>
					<p class="mb-3 text-body">Employee information is one of the most valuable assets within any
						organization. As organizations evolve over time, however, employee
						records often become fragmented across multiple information systems.
						New software replaces old software, departments maintain their own
						databases, and data migration projects are frequently constrained by
						limited budgets, incomplete documentation, and operational deadlines.
						The result is an increasingly complex environment where locating a
						single employee record becomes more difficult than it should be.</p>
					<p class="mb-3 text-body">This article presents the design and implementation of an Employee
						Search and Data Consolidation Management Information System (MIS)
						developed during the migration of a legacy Human Resources system to
						a new Enterprise Resource Planning (ERP) platform within a
						non-governmental organization (NGO) in Pakistan.</p>
					<p class="mb-3 text-body">Rather than proposing a new search algorithm, this paper documents
						the engineering decisions required to build a practical solution
						under real-world constraints. The project involved reverse
						engineering an undocumented ERP database, consolidating employee
						information from three independent systems, constructing unified
						database views, and implementing multiple complementary search
						techniques—including SQL pattern matching, phonetic matching,
						regular expressions, and edit-distance algorithms—to improve
						employee retrieval during a large-scale migration effort.</p>
					<p class="mb-3 text-body">The objective was not to identify a single &quot;best&quot; search
						algorithm. Instead, the system was designed around a simple
						engineering observation: different search techniques excel under
						different conditions, and combining their strengths provides a more
						practical solution than relying on any individual method.</p>
					<hr class="h-px my-8 bg-gray-200 border-0" />

					<h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">1.
						Introduction</h1>
					<p class="mb-3 text-body">Software engineering rarely begins with a blank page.</p>
					<p class="mb-3 text-body">Most enterprise software is developed within environments where
						systems already exist, historical decisions cannot easily be changed,
						and operational requirements often outweigh architectural perfection.
						Engineers working in these environments spend as much time
						understanding existing systems as they do writing new code.</p>
					<p class="mb-3 text-body">This project emerged from one such situation.</p>
					<p class="mb-3 text-body">Our organization operated two independent Human Resource systems.
						The first was a legacy HR Management Information System developed
						using Microsoft's technology stack. Later, the organization adopted a
						commercial Enterprise Resource Planning (ERP) solution to centralize
						HR and Finance operations. Although the ERP offered a broader range
						of administrative capabilities, one limitation quickly became
						apparent during data migration: locating employee records was
						unnecessarily difficult.</p>
					<p class="mb-3 text-body">The ERP relied almost exclusively on exact matching. A minor
						spelling variation, an omitted space, or a typographical error was
						often enough to prevent an employee from being found. During
						migration, this introduced a significant operational risk. Staff
						members could unknowingly create duplicate employee records simply
						because an existing record could not be located.</p>
					<p class="mb-3 text-body">The challenge was further complicated by the organization's
						existing data landscape. Employee information existed across three
						independent systems:</p>
					<ul class="max-w-full space-y-1 text-body list-disc list-inside">
						<li>The legacy HR database.</li>
						<li>The new ERP database.</li>
						<li>An internal Human Resource Development Centre (HRDC) database
							containing historical employee information.</li>
					</ul>
					<p class="mb-3 text-body">Collectively, these systems contained more than five thousand
						employee records, each maintained independently over several years.</p>
					<p class="mb-3 text-body">The objective was therefore not simply to build another search
						interface. The goal was to create a practical engineering tool
						capable of searching across multiple heterogeneous data sources while
						tolerating the inconsistencies naturally introduced by human data
						entry.</p>
					<hr class="h-px my-8 bg-gray-200 border-0" />

					<h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">2.
						Engineering Under Constraints
					</h1>
					<div class="mt-12 pt-6 border-t border-gray-200">
						<h3 class="text-xl font-bold text-gray-900 mb-3">
							Engineering Principle
						</h3>
						<blockquote class="p-4 my-4 border-s-4 border-default bg-neutral-secondary-soft">
							<p class="text-xl italic font-medium leading-relaxed text-heading">
								Engineering decisions are always shaped by constraints.
							</p>
						</blockquote>
					</div>

					<p class="mb-3 text-body">Unlike large commercial software companies, many NGOs operate with
						limited budgets and must carefully prioritize where resources are
						invested. Purchasing additional commercial software simply to support
						an internal migration project was neither practical nor necessary.</p>
					<p class="mb-3 text-body">For this reason, the project was deliberately built using
						open-source technologies wherever possible.</p>
					<p class="mb-3 text-body">Although the ERP itself relied on proprietary
						technologies—including Oracle Database, Microsoft SQL Server, and a
						Microsoft-based application stack—the supporting MIS was developed
						using PHP and MariaDB. This choice was driven less by
						database performance and more by portability, accessibility, and
						long-term maintainability.</p>
					<p class="mb-3 text-body">Open-source software offered several practical advantages.</p>
					<p class="mb-3 text-body">First, it eliminated licensing costs for internal support tools.</p>
					<p class="mb-3 text-body">Second, it aligned naturally with Linux-based deployment
						environments already familiar within the organization.</p>
					<p class="mb-3 text-body">Finally, the development ecosystem surrounding PHP and MySQL
						enabled rapid experimentation without requiring additional commercial
						infrastructure.</p>
					<p class="mb-3 text-body">These constraints influenced nearly every technical decision made
						throughout the project. Rather than attempting to modify the ERP
						itself, the supporting MIS was designed as an independent layer
						capable of extracting, consolidating, and searching employee
						information without interfering with the production ERP environment.</p>
					<p class="mb-3 text-body">This architectural separation ultimately proved to be one of the
						project's greatest strengths.</p>
					<hr class="h-px my-8 bg-gray-200 border-0" />

					<h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">3. The
						Engineering
						Problem</h1>
					<p class="mb-3 text-body">At first glance, searching for an employee appears to be a trivial
						task.</p>
					<p class="mb-3 text-body">In practice, enterprise employee data presents numerous
						challenges:</p>
					<ul class="max-w-full space-y-1 text-body list-disc list-inside">
						<li>Names may be misspelled.</li>
						<li>Employees may use abbreviated names.</li>
						<li>Records may contain inconsistent spacing or punctuation.</li>
						<li>Historical systems often follow different naming conventions.</li>
						<li>Multiple databases may contain slightly different versions of
							the same individual.</li>
					</ul>
					<p class="mb-3 text-body">An exact search succeeds only when the search term precisely
						matches the stored value.</p>
					<p class="mb-3 text-body">Real-world data rarely behaves so conveniently.</p>
					<p class="mb-3 text-body">Consequently, the central engineering question became:</p>
					<blockquote><span class="font-bold text-indigo-600">How can multiple imperfect employee databases be
							searched in a way that maximizes the probability of finding the
							correct person without requiring users to understand the strengths
							and weaknesses of individual search algorithms?</span></blockquote>
					<p class="mb-3 text-body">This question guided every design decision discussed throughout
						the remainder of this paper.</p>
				</div>
			</div>
  </div>
</template>

<script setup>
// import { ref } from 'vue';

</script>

<style scoped>

</style>