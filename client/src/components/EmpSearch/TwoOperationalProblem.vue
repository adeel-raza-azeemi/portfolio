<template>
  <div>
    			<h2 id="accordion-flush-heading-2">
				<button type="button"
					class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
					data-accordion-target="#accordion-flush-body-2" aria-expanded="false"
					aria-controls="accordion-flush-body-2">
					<span class="font-bold text-indigo-600">02. The Operational Problem</span>
					<svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="m5 15 7-7 7 7" />
					</svg>
				</button>
			</h2>
			<div id="accordion-flush-body-2" class="hidden" aria-labelledby="accordion-flush-heading-3">
				<div class="py-5 text-body border-b border-default">
					<h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">
						02. The Operational Problem</h1>
					<h2 class="text-4xl font-bold">2.1 Organizational Context</h2>
					<p class="mb-3 text-body">Before the Employee Search MIS was conceived, the organization
						maintained personnel information across multiple independent
						information systems that had evolved over several years. Each system
						had been developed for a specific operational purpose, resulting in
						fragmented employee records distributed across different
						technologies, database engines, and application architectures.</p>
					<p class="mb-3 text-body">The earliest Human Resource Management System (HR MIS) was a
						standalone Microsoft .NET desktop application backed by Microsoft SQL
						Server. This system had served as the organization's primary
						personnel repository for several years and contained historical
						employee records accumulated through routine HR operations.</p>
					<p class="mb-3 text-body">As part of a broader organizational modernization initiative, the
						organization later adopted an Enterprise Resource Planning (ERP)
						solution that integrated Human Resource and Finance operations. The
						ERP became the organization's official operational system for
						employee management, payroll, placement, and financial processing.
						However, migration from the legacy HR system to the ERP was performed
						incrementally rather than as a single cutover, meaning employee
						information temporarily existed in both environments.</p>
					<p class="mb-3 text-body">A third repository existed within the Human Resource Development
						Centre (HRDC), where employee training and staff development
						activities had been maintained independently for many years. Although
						this database was not intended to function as an HR system, it
						nevertheless contained valuable employee information that frequently
						assisted in identifying staff members during migration activities.</p>
					<p class="mb-3 text-body">Consequently, no single repository represented a complete and
						authoritative view of all employees.</p>
					<p class="mb-3 text-body">Instead, personnel information became distributed across three
						independent databases, each describing different aspects of the same
						workforce.</p>
					<hr class="h-px my-8 bg-gray-200 border-0" />

					<h2 class="text-4xl font-bold">2.2 The Search Problem</h2>
					<p class="mb-3 text-body">During ERP migration, Human Resource staff were responsible for
						locating existing employee records before creating or updating
						information within the new ERP.</p>
					<p class="mb-3 text-body">At first glance, this appeared to be a straightforward search
						problem.</p>
					<p class="mb-3 text-body">In practice, it quickly became apparent that locating employees
						was considerably more difficult than anticipated.</p>
					<p class="mb-3 text-body">The ERP's built-in search functionality relied almost entirely on
						exact string matching. Employee names had to be entered exactly as
						stored within the database. Even minor variations—including
						spelling mistakes, omitted middle names, additional spaces,
						punctuation differences, or inconsistent abbreviations—often
						prevented otherwise valid records from being located.</p>
					<p class="mb-3 text-body">This limitation became increasingly problematic because employee
						information had accumulated over many years through different
						operators, departments, and software systems.</p>
					<p class="mb-3 text-body">For example, an employee might appear as:</p>
					<table class="w-full text-sm text-left rtl:text-right text-body">
						<thead class="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
							<tr>
								<th scope="col" class="px-6 py-3 font-bold">
									Stored Record
								</th>
								<th scope="col" class="px-6 py-3 font-bold">
									User Search
								</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-neutral-primary border-b border-default">
								<th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
									Muhammad Ali
								</th>
								<td class="px-6 py-4">
									Muhammad Ali
								</td>
							</tr>
							<tr class="bg-neutral-primary border-b border-default">
								<th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
									M. Ali
								</th>
								<td class="px-6 py-4">
									Muhammad A. Ali
								</td>
							</tr>
							<tr class="bg-neutral-primary border-b border-default">
								<th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
									Abdul Rehman
								</th>
								<td class="px-6 py-4">
									Abdul Rahman
								</td>
							</tr>
						</tbody>
					</table>
					<p class="mb-3 text-body">Although these records referred to the same individual,
						traditional exact matching treated each variation as a completely
						different employee.</p>
					<p class="mb-3 text-body">The problem extended beyond names.</p>
					<p class="mb-3 text-body">National Identity Card (CNIC) numbers occasionally appeared with
						or without separators. Telephone numbers followed inconsistent
						formats. Email addresses changed over time. Historical HR records
						often contained information that differed slightly from the ERP
						despite representing the same employee.</p>
					<p class="mb-3 text-body">As the number of records increased, manually checking multiple
						systems for every employee became increasingly time-consuming.</p>
					<p class="mb-3 text-body">The challenge was therefore not merely searching for
						information—it was determining whether apparently different records
						actually represented the same individual.</p>
					<hr class="h-px my-8 bg-gray-200 border-0" />

					<h2 class="text-4xl font-bold">2.3 Engineering Constraints</h2>
					<p class="mb-3 text-body">Although numerous commercial data integration and identity
						resolution platforms already existed, they were not practical within
						the project's operational environment.</p>
					<p class="mb-3 text-body">The solution had to satisfy several real-world engineering
						constraints.</p>
					<p class="mb-3 text-body"><span class="font-bold text-indigo-600">The production ERP could not be
							modified.</span></p>
					<p class="mb-3 text-body">Because the ERP was a commercial third-party application, altering
						its database schema or internal search mechanisms was not an option.
						Any supporting solution therefore had to operate independently
						without affecting production operations.</p>
					<p class="mb-3 text-body"><span class="font-bold text-indigo-600">Application source code was
							unavailable.</span></p>
					<p class="mb-3 text-body">The ERP vendor did not provide access to the application's source
						code or internal documentation. Consequently, the system had to be
						understood entirely through database inspection and observation of
						application behaviour.</p>
					<p class="mb-3 text-body"><span class="font-bold text-indigo-600">Database documentation was
							absent.</span></p>
					<p class="mb-3 text-body">No entity relationship diagrams, data dictionaries, or schema
						documentation were available. Understanding the data model required
						reverse engineering the database itself.</p>
					<p class="mb-3 text-body"><span class="font-bold text-indigo-600">Multiple database technologies
							were involved.</span></p>
					<p class="mb-3 text-body">Employee information existed across Oracle, Microsoft SQL Server,
						Microsoft Access during migration, Microsoft Excel, and
						MariaDB/MySQL. Each system used different schemas, naming
						conventions, and storage formats.</p>
					<p class="mb-3 text-body"><span class="font-bold text-indigo-600">Resources were limited.</span></p>
					<p class="mb-3 text-body">The project was developed internally without dedicated software
						engineering resources, additional licensing costs, or specialized
						data migration tools. Any proposed solution therefore had to rely
						primarily on open-source technologies that could be maintained
						locally.</p>
					<p class="mb-3 text-body"><span class="font-bold text-indigo-600">Operational continuity was
							essential.</span></p>
					<p class="mb-3 text-body">Human Resource staff continued their daily work throughout the
						migration process. The supporting MIS therefore had to complement
						existing workflows rather than replace them, allowing migration
						activities to proceed without disrupting normal organizational
						operations.</p>
					<p class="mb-3 text-body">These constraints fundamentally influenced every engineering
						decision that followed.</p>
					<p class="mb-3 text-body">Rather than pursuing the theoretically optimal solution, the
						objective became designing the most practical solution within the
						realities of the operational environment.</p>
					<div class="mt-12 pt-6 border-t border-gray-200">
						<h3 class="text-xl font-bold text-gray-900 mb-3">
							Engineering Principle
						</h3>
						<blockquote class="p-4 my-4 border-s-4 border-default bg-neutral-secondary-soft">
							<p class="text-xl italic font-medium leading-relaxed text-heading">
								Engineering excellence is rarely demonstrated by
								designing ideal systems under perfect conditions. More often, it is
								demonstrated by producing reliable, maintainable solutions within
								real organizational constraints.
							</p>
						</blockquote>
					</div>
					<hr class="h-px my-8 bg-gray-200 border-0" />

					<h2 class="text-4xl font-bold">2.4 Design Objectives</h2>
					<p class="mb-3 text-body">The Employee Search MIS was therefore designed with four primary
						objectives.</p>
					<h3 class="text-xl font-bold text-gray-900 mb-3">Objective 1 — Unified Employee Retrieval</h3>
					<p class="mb-3 text-body">Provide a single search interface capable of locating employee
						records across the ERP, legacy HR system, and HRDC databases without
						requiring users to search each repository independently.</p>
					<h3 class="text-xl font-bold text-gray-900 mb-3">Objective 2 — Duplicate Identification</h3>
					<p class="mb-3 text-body">Improve employee identification despite inconsistencies in names,
						spelling, abbreviations, and historical data by combining multiple
						complementary search strategies rather than relying solely on exact
						matching.</p>
					<h3 class="text-xl font-bold text-gray-900 mb-3">Objective 3 — Data Consolidation</h3>
					<p class="mb-3 text-body">Transform heterogeneous personnel information into a unified
						logical representation that could be queried consistently regardless
						of the original data source.</p>
					<h3 class="text-xl font-bold text-gray-900 mb-3">Objective 4 — Migration Support</h3>
					<p class="mb-3 text-body">Assist ERP migration by generating structured datasets that
						simplified bulk insertion of employee information into the ERP,
						reducing repetitive manual data entry while preserving organizational
						consistency.</p>
					<p class="mb-3 text-body">Collectively, these objectives transformed what initially appeared
						to be a simple search utility into a supporting information system
						that addressed search, consolidation, and migration as a single
						engineering problem.</p>

					<h2 id="accordion-flush-heading-3">
						Transition to Part III</h2>
					<p class="mb-3 text-body">With the project objectives clearly established, the next
						challenge was understanding the ERP itself. Because neither
						documentation nor source code was available, identifying where
						employee information actually resided became an engineering problem
						in its own right. The development process therefore began not with
						application programming, but with systematically reverse engineering
						the ERP database to reconstruct its underlying data model.</p>

				</div>
			</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

</script>

<style scoped>

</style>