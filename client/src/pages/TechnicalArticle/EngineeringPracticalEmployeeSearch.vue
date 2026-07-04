<template>
	<div
		class="max-w-full mx-auto my-6 p-16 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 transition duration-300 ease-in-out hover:shadow-lg">

		<h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">
			Engineering Practical Employee Search Systems in Resource-Constrained Organizations</h1>
		<h3 class="text-xl font-bold text-gray-900 mb-3">A Case Study in Reverse Engineering, Data
			Consolidation, and Multi-Strategy Record Retrieval</h3>
		<!-- Reading mins etc -->
		<div class="min-w-0 flex-1">
			<h2 class="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Back End Developer
			</h2>
		</div>
		<!-- <hr class="h-px my-8 bg-gray-200 border-0" /> -->
		<!-- Metadata Section -->
		<div class="mt-4 flex flex-wrap items-center gap-y-2 text-sm text-gray-500">
			<!-- Author -->
			<span class="font-medium text-gray-700">Adeel Raza Azeemi</span>
			<span class="mx-2 hidden sm:inline">&middot;</span>
			<!-- Published Date -->
			<time datetime="2026-07">Published: July 2026</time>
			<span class="mx-2">&middot;</span>
			<!-- Reading Time -->
			<span>Reading Time: 25 minutes</span>
			<span class="mx-2">&middot;</span>
			<!-- Category -->
			<div
				class="mt-2 flex items-center text-sm text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md text-xs font-semibold">
				<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
					fill="none" viewBox="0 0 24 24">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						d="M8 8v8m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8-4v6m0-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
				</svg>
				Software Engineering
			</div>
			<div
				class="mt-2 flex items-center text-sm text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md text-xs font-semibold">
				<BriefcaseIcon class="mr-1.5 size-5 shrink-0 text-gray-400" aria-hidden="true" />
				Case Study
			</div>
		</div>

		<!-- Tags Section -->
		<div class="mt-3 flex flex-wrap gap-2">
			<span class="bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full text-xs font-medium">
				#Database Engineering
			</span>
			<span class="bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full text-xs font-medium">
				#Information Retrieval
			</span>
			<span class="bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full text-xs font-medium">
				#ERP
			</span>
			<span class="bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full text-xs font-medium">
				#MySQL
			</span>
		</div>

		<h3 class="text-xl font-bold text-gray-900 mb-3">This article is organized into ten engineering sections. Expand
			any section below to jump directly to that topic.</h3>

		<!-- Article Content Divider -->
		<hr class="mt-6 border-gray-200" />

		<div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-neutral-primary text-heading"
			data-inactive-classes="text-body">
			<!-- 01. Introduction -->
			<h2 id="accordion-flush-heading-1">
				<button type="button"
					class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
					data-accordion-target="#accordion-flush-body-1" aria-expanded="true"
					aria-controls="accordion-flush-body-1">
					<span class="font-bold text-indigo-600">01. Introduction & Background</span>
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

			<!-- 02. The Operational Problem -->
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
					<h3 class="western">Objective 1 — Unified Employee Retrieval</h3>
					<p class="mb-3 text-body">Provide a single search interface capable of locating employee
						records across the ERP, legacy HR system, and HRDC databases without
						requiring users to search each repository independently.</p>
					<h3 class="western">Objective 2 — Duplicate Identification</h3>
					<p class="mb-3 text-body">Improve employee identification despite inconsistencies in names,
						spelling, abbreviations, and historical data by combining multiple
						complementary search strategies rather than relying solely on exact
						matching.</p>
					<h3 class="western">Objective 3 — Data Consolidation</h3>
					<p class="mb-3 text-body">Transform heterogeneous personnel information into a unified
						logical representation that could be queried consistently regardless
						of the original data source.</p>
					<h3 class="western">Objective 4 — Migration Support</h3>
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

			<!-- 03. Reverse Engineering an Undocumented Enterprise Database -->
			<h2 id="accordion-flush-heading-3">
				<button type="button"
					class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
					data-accordion-target="#accordion-flush-body-3" aria-expanded="false"
					aria-controls="accordion-flush-body-3">
					<span class="font-bold text-indigo-600">03. Reverse Engineering a Legacy ERP</span>
					<svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="m5 15 7-7 7 7" />
					</svg>
				</button>
			</h2>
			<div id="accordion-flush-body-3" class="hidden" aria-labelledby="accordion-flush-heading-2">
				<div class="py-5 border-b border-default text-body">
					<h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">
						03. Reverse Engineering the Legacy ERP</h1>
					<div class="mt-12 pt-6 border-t border-gray-200">
						<blockquote class="p-4 my-4 border-s-4 border-default bg-neutral-secondary-soft">
							<p class="text-xl italic font-medium leading-relaxed text-heading">
								<em class="font-bold text-black-600 not-italic">
									&quot;Before data could be consolidated, it first had to be understood.&quot;
								</em>
							</p>
						</blockquote>
					</div>
					<p class="mb-3 text-body">Unlike greenfield software projects, legacy enterprise systems
						rarely provide developers with a complete understanding of their
						internal data model. Documentation may be outdated, source code
						unavailable, and years of incremental modifications often obscure the
						original system architecture. Consequently, understanding an existing
						system frequently becomes the first engineering challenge rather than
						software implementation itself.</p>
					<p class="mb-3 text-body">The Employee Search MIS was developed under exactly these
						conditions.</p>
					<p class="mb-3 text-body">Although the organization had administrative access to the ERP
						database, no documentation described how employee information was
						organized internally. The application source code was unavailable, no
						entity relationship diagrams existed, and no data dictionary
						explained how the Human Resource module interacted with the database.</p>
					<p class="mb-3 text-body">Rather than beginning with software development, the project
						therefore began with a process of systematic reverse engineering.</p>
					<hr class="mt-6 border-gray-200" />

					<h2 class="mt-3 mb-3 text-4xl font-bold">3.1 Initial Exploration</h2>
					<p class="mb-3 text-body">Administrative access to the Oracle database made it possible to
						inspect the database schema directly.</p>
					<p class="mb-3 text-body">The first inspection immediately demonstrated the scale of the
						enterprise application.</p>
					<table class="w-full text-sm text-left rtl:text-right text-body">
						<thead class="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
							<tr class="bg-neutral-primary border-b border-default">
								<th scope="col" class="px-6 py-3 font-medium">Database Object</th>
								<th scope="col" class="px-6 py-3 font-medium">Count</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-neutral-primary border-b border-default">
								<td scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">Tables</td>
								<td scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">685</td>
							</tr>
							<tr class="bg-neutral-primary border-b border-default">
								<td scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">Views</td>
								<td scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">187</td>
							</tr>
							<tr class="bg-neutral-primary border-b border-default">
								<td scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">Non-empty
									Tables</td>
								<td scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">207</td>
							</tr>
							<tr class="bg-neutral-primary border-b border-default">
								<td scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">Empty
									Tables</td>
								<td scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">478</td>
							</tr>
						</tbody>
					</table>
					<p class="mt-3 mb-3 text-body">Although these numbers initially appeared overwhelming, they also
						suggested an important engineering observation.</p>
					<p class="mb-3 text-body">The project did <span class="font-bold text-indigo-600">not</span> require
						understanding the
						entire ERP.</p>
					<p class="mb-3 text-body">It required understanding only the relatively small subset of
						entities responsible for employee management.</p>
					<p class="mb-3 text-body">This realization significantly reduced the scope of the
						investigation.</p>

					<div class="mt-12 pt-6 border-t border-gray-200">
						<h3 class="text-xl font-bold text-gray-900 mb-3">
							Engineering Principle
						</h3>
						<blockquote class="p-4 my-4 border-s-4 border-default bg-neutral-secondary-soft">
							<p class="text-xl italic font-medium leading-relaxed text-heading">
								Reverse engineering should begin by reducing the problem
								space rather than attempting to understand an entire enterprise system simultaneously.
							</p>
						</blockquote>
					</div>

					<hr class="mt-6 border-gray-200" />

					<h2 class="mt-3 mb-3 text-4xl font-bold">3.2 When the Database Becomes the Documentation</h2>
					<p class="mb-3 text-body">Commercial ERP systems typically provide implementation
						documentation describing database relationships, business entities,
						and application architecture.</p>
					<p class="mb-3 text-body">No such documentation was available for this project.</p>
					<p class="mb-3 text-body">Consequently, the database itself became the primary source of
						information.</p>
					<p class="mb-3 text-body">Every table, every column, and every record represented evidence
						from which the application's logical design had to be inferred.</p>
					<p class="mb-3 text-body">Instead of reading technical documentation, the engineering
						process relied upon observation, experimentation, and verification.</p>
					<p class="mb-3 text-body">The database effectively became its own documentation.</p>
					<hr class="mt-6 border-gray-200" />

					<h2 class="mt-3 text-4xl font-bold">3.3 Discovering the Operational Tables</h2>
					<p class="mb-3 text-body">With hundreds of tables available, manually inspecting every
						object would have been impractical.</p>
					<p class="mb-3 text-body">A different strategy was therefore adopted.</p>
					<p class="mb-3 text-body">Rather than beginning with the database, the investigation began
						with the ERP application's user interface.</p>
					<p class="mb-3 text-body">Whenever an employee list or operational screen was displayed, the
						number of records shown by the application was recorded.</p>
					<p class="mb-3 text-body">These values were then compared against the row counts of every
						non-empty database table.</p>
					<p class="mb-3 text-body">Tables containing approximately the same number of records became
						immediate candidates for further investigation.</p>
					<p class="mb-3 text-body">Additional heuristics accelerated the process.</p>
					<p class="mb-3 text-body">Database views were excluded during the initial investigation
						because they represented derived datasets rather than physical
						storage.</p>
					<p class="mb-3 text-body">Fortunately, the ERP followed a relatively consistent naming
						convention in which database views began with the prefix <span
							class="font-bold text-indigo-600">V</span>,
						allowing them to be distinguished quickly from operational tables.</p>
					<p class="mb-3 text-body">Candidate tables were subsequently verified by examining column
						names, sample records, and their correspondence with information
						presented through the ERP interface.</p>
					<p class="mb-3 text-body">Through repeated verification, the operational HR tables gradually
						emerged from the much larger enterprise schema.</p>
					<hr class="mt-6 border-gray-200" />

					<h2 class="text-4xl font-bold">3.4 Reconstructing Relationships</h2>
					<p class="mb-3 text-body">One of the most unexpected discoveries was the apparent absence of
						database-enforced referential integrity.</p>
					<p class="mb-3 text-body">Although employee identifiers clearly linked information across
						multiple tables, the Oracle schema contained virtually no foreign key
						constraints describing these relationships.</p>
					<p class="mb-3 text-body">Instead, the ERP appeared to rely entirely upon the application
						layer to maintain data consistency.</p>
					<p class="mb-3 text-body">As a result, relationships that would normally be discovered
						through database metadata instead had to be reconstructed manually by
						analysing matching identifier values across related tables.</p>
					<p class="mb-3 text-body">This transformed what initially appeared to be a database
						exploration exercise into an exercise in reconstructing the
						underlying data model itself.</p>
					<p class="mb-3 text-body">Understanding the ERP therefore required reasoning about the
						stored data rather than relying upon the database engine to describe
						its own structure.</p>
					<hr class="mt-6 border-gray-200" />

					<h2 class="text-4xl font-bold">3.5 Mining Rather Than Exploring</h2>
					<p class="mb-3 text-body">Looking back, the investigation more closely resembled data mining
						than traditional software development.</p>
					<p class="mb-3 text-body">The objective was never to understand every table contained within
						the ERP.</p>
					<p class="mb-3 text-body">Instead, the objective was to isolate only those entities required
						to support employee identification, placement, and migration.</p>
					<p class="mb-3 text-body">Once those entities had been identified, the remaining hundreds of
						tables became largely irrelevant to the project.</p>
					<p class="mb-3 text-body">Reducing the problem from an enterprise containing hundreds of
						database objects to a comparatively small operational subset
						fundamentally changed the complexity of the engineering effort.</p>
					<p class="mb-3 text-body">Only after this discovery process was complete could data
						consolidation begin.</p>

					<div class="mt-12 pt-6 border-t border-gray-200">
						<h3 class="text-xl font-bold text-gray-900 mb-3">
							Engineering Principle
						</h3>
						<blockquote class="p-4 my-4 border-s-4 border-default bg-neutral-secondary-soft">
							<p class="text-xl italic font-medium leading-relaxed text-heading">
								Reverse engineering is not the process of understanding
								everything. It is the disciplined process of discovering only what is
								necessary to solve the engineering problem at hand.
							</p>
						</blockquote>
					</div>

					<hr class="mt-6 border-gray-200" />
				</div>
			</div>

			<!-- 04. Data Consolidation Architecture -->
			<h2 id="accordion-flush-heading-4">
				<button type="button"
					class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
					data-accordion-target="#accordion-flush-body-4" aria-expanded="false"
					aria-controls="accordion-flush-body-4">
					<span class="font-bold text-indigo-600">04. Data Consolidation Architecture</span>
					<svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="m5 15 7-7 7 7" />
					</svg>
				</button>
			</h2>
			<div id="accordion-flush-body-4" class="hidden" aria-labelledby="accordion-flush-heading-3">
				<div class="py-5 text-body border-b border-default">
					<h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">
						04. Data Consolidation Architecture</h1>
					<div class="mt-12 pt-6 border-t border-gray-200">
						<blockquote class="p-4 my-4 border-s-4 border-default bg-neutral-secondary-soft">
							<p class="text-xl italic font-medium leading-relaxed text-heading">
								<em class="font-bold text-black-600 not-italic">
									&quot;Finding the data solved one problem. Making
									it usable solved another.&quot;</em>
							</p>
						</blockquote>
					</div>
					<p class="mb-3 text-body">Identifying the operational tables represented only the first
						stage of the project.</p>
					<p class="mb-3 text-body">Employee information still remained distributed across multiple
						databases developed using different technologies, naming conventions,
						and application architectures.</p>
					<p class="mb-3 text-body">Before effective searching could be implemented, these
						heterogeneous datasets first had to be transformed into a common
						logical representation.</p>
					<p class="mb-3 text-body">The objective was not merely to migrate data.</p>
					<p class="mb-3 text-body">The objective was to create an architecture in which every search
						algorithm could operate against a consistent information model
						regardless of the original data source.</p>
					<hr class="mt-6 border-gray-200" />

					<h2 class="mt-3 mb-3 text-4xl font-bold">4.1 Migration Strategy</h2>
					<p class="mb-3 text-body">The organization maintained employee information within three
						independent repositories.</p>
					<ul class="max-w-full space-y-1 text-body list-disc list-inside">
						<li><span class="font-bold text-indigo-600">ERP Database</span>
							containing official employee and placement information.
						</li>
						<li><span class="font-bold text-indigo-600">Legacy HR Database</span>
							containing historical personnel records.
						</li>
						<li><span class="font-bold text-indigo-600">HRDC Database</span>
							containing staff development
							and training information.
						</li>
					</ul>
					<p class="mb-3 text-body">Because the helper MIS was developed using Laravel and MariaDB,
						each repository first had to be migrated into a common relational
						environment.</p>
					<p class="mb-3 text-body">The migration process consisted of several controlled stages:</p>
					<ol class="list-decimal list-inside pl-5">
						<li>Export operational ERP tables from
							Oracle.
						</li>
						<li>Import them into Microsoft SQL
							Server.
						</li>
						<li>Transfer the datasets through
							Microsoft Access using ODBC.
						</li>
						<li>Export each table into
							MySQL-compatible format.
						</li>
						<li>Import the converted tables into
							MariaDB.
						</li>
						<li>Import the HR database (originally
							supplied in Excel format) into MariaDB.
						</li>
						<li>Import the HRDC MySQL database without modification.
						</li>
					</ol>
					<p class="mb-3 text-body">Following migration, all three repositories existed within MariaDB
						while remaining logically independent.</p>
					<p class="mb-3 text-body">This arrangement simplified development while preserving the
						original structure of each source system.</p>
					<hr class="mt-6 border-gray-200" />

					<h2 class="mt-3 mb-3 text-4xl font-bold">
						4.2 Standardising the Data Model
					</h2>
					<p class="mb-3 text-body">Although the databases now shared a common database engine, they
						still differed substantially in schema design.</p>
					<p class="mb-3 text-body">Field names varied.</p>
					<p class="mb-3 text-body">Column structures differed.</p>
					<p class="mb-3 text-body">Employee attributes were distributed across different tables.</p>
					<p class="mb-3 text-body">Directly querying these heterogeneous structures from the
						application would have introduced unnecessary complexity into every
						search operation.</p>
					<p class="mb-3 text-body">Instead, schema normalization was performed inside the database.</p>
					<p class="mb-3 text-body">The objective was to ensure that every search algorithm received
						information presented through a consistent relational interface
						regardless of the original source.</p>
					<hr class="mt-6 border-gray-200" />

					<h2 class="mt-3 mb-3 text-4xl font-bold">4.3 Designing Logical Views</h2>
					<p class="mb-3 text-body">Rather than repeatedly constructing complex JOIN operations within
						application code, two logical database views were created.</p>
					<h3 class="western">Employee View (<code class="western">emp</code>)</h3>
					<p class="mb-3 text-body">The <code class="western">emp</code> view exposed the core
						employee identity.</p>
					<p class="mb-3 text-body">It presented employee code, names, father's name, CNIC, contact
						information, dates of birth, joining dates, and employment status
						using standardized field names independent of the original ERP
						schema.</p>
					<p class="mb-3 text-body">Because these names closely matched the remaining repositories,
						application code no longer needed to understand ERP-specific
						terminology.</p>
					<!--  -->
					<div class="mt-12 pt-6 border-t border-gray-200">
						<blockquote class="p-4 my-4 border-s-4 border-default bg-neutral-secondary-soft">
							<p class="text-xl italic font-medium leading-relaxed text-heading">
								<em class="font-bold text-blue-600 not-italic">
									<code class="text-xl">Emp</code></em><br />
								<em class="font-bold text-blue-600 not-italic">
									CREATE VIEW emp AS SELECT EMPBASIC_EMPLOYEE.EM_SEMPLOYEE AS ecode,
									EMPBASIC_EMPLOYEE.EM_SNAME AS ename, EMPBASIC_EMPLOYEE.EM_SFIRSTNAME AS firstname,
									EMPBASIC_EMPLOYEE.EM_SLASTNAME AS lastname, EMPBASIC_EMPLOYEE.EM_SFATHER AS
									fathername, EMPBASIC_EMPLOYEE.EM_SIDCARD AS cnic, EMPBASIC_EMPLOYEE.EM_DATEJOIN AS
									joiningdate, EMPBASIC_EMPLOYEE.EM_DATEBIRTH AS dob,
									EMPBASIC_EMPLOYEE.EM_SEMERGENCY_CONTACT AS phone1,
									EMPBASIC_EMPLOYEE.EM_SSPOUSE_PHONE AS mobile, EMPBASIC_EMPLOYEE.EM_SCONTACTNOEMR AS
									emgr_contact, EMPBASIC_EMPLOYEE.EM_SEMAIL AS email,
									EMPBASIC_EMPLOYEE.EM_DATEACTUALRESIGN AS status FROM EMPBASIC_EMPLOYEE ;
								</em>
							</p>
						</blockquote>
					</div>`
					<!--  -->
					<hr class="mt-6 border-gray-200" />

					<h3 class="western">Placement View (<code class="western">placement</code>)</h3>
					<p class="mb-3 text-body">Operational placement information existed across several
						normalized lookup tables describing department, designation, employee
						type, grade, and duty station.</p>
					<p class="mb-3 text-body">The <code class="western">placement</code> view consolidated these
						relationships into a single logical entity through a series of LEFT
						JOIN operations.</p>
					<p class="mb-3 text-body">Instead of requiring the application to reconstruct these joins
						repeatedly, organizational structure became available through one
						simplified relational interface.</p>
					<div class="mt-12 pt-6 border-t border-gray-200">
						<blockquote class="p-4 my-4 border-s-4 border-default bg-neutral-secondary-soft">
							<p class="text-xl italic font-medium leading-relaxed text-heading">
								<em class="font-bold text-blue-600 not-italic">
									<code class="text-xl">Placement</code></em><br />
								<em class="font-bold text-blue-600 not-italic">
									CREATE VIEW placement AS SELECT pl.PL_SEMPLOYEE AS ecode, e.ename AS ename,
									l.CD_SDESC AS loc, desig.CD_SDESC AS designation, g.CD_SDESC AS grade, et.CD_SDESC
									AS emp_type, dept.CD_SDESC AS dept, pl.PL_DATEDESIGNATION AS desigDate FROM ( ( ( (
									( (EMPBASIC_PLACEMENT pl left join emp e on pl.PL_SEMPLOYEE = e.ecode ) left join
									VU_DESIGNATION desig on pl.PL_SDESIGNATION = desig.CD_SCODE ) left join VU_GRADE g
									on pl.PL_SGRADE = g.CD_SCODE ) left join VU_EMPLOYEE_TYPE et on pl.PL_SEMPLOYEE_TYPE
									= et.CD_SCODE ) left join VU_LOCATION l on pl.PL_SLOCATION = l.CD_SCODE ) left join
									VU_DEPARTMENT dept on pl.PL_SDEPARTMENT = dept.CD_SCODE );
								</em>
							</p>
						</blockquote>
					</div>
					<hr class="mt-6 border-gray-200" />

					<h2 class="mt-3 mb-3 text-4xl font-bold">4.4 Unified Search Layer</h2>
					<p class="mb-3 text-body">With each repository transformed into a consistent relational
						structure, the application no longer needed to distinguish between
						different databases.</p>
					<p class="mb-3 text-body">Every search operator returned the same logical column structure
						regardless of whether the data originated from ERP, HR, or HRDC.</p>
					<p class="mb-3 text-body">Because the output format remained identical, SQL <code
							class="western">UNION</code>
						operations could merge these independent result sets into a single
						searchable dataset.</p>
					<p class="mb-3 text-body">From the perspective of the search engine, three heterogeneous
						databases had effectively become one logical information system.</p>
					<p class="mb-3 text-body">This separation between <span class="font-bold text-indigo-600">data
							preparation</span> and
						<span class="font-bold text-indigo-600">information retrieval</span> proved fundamental to the
						architecture.
					</p>
					<p class="mb-3 text-body">Future search algorithms could be introduced without redesigning
						the underlying consolidation layer.</p>
					<hr class="mt-6 border-gray-200" />

					<h2 class="mt-3 mb-3 text-4xl font-bold">4.5 Architectural Benefits</h2>
					<p class="mb-3 text-body">The resulting architecture provided several practical advantages.</p>
					<ul class="max-w-full space-y-1 text-body list-disc list-inside">
						<li>Reverse engineering occurred only
							once.
						</li>
						<li>Schema complexity remained
							isolated inside the database.
						</li>
						<li>Application code interacted with a
							stable relational model.
						</li>
						<li>Additional data sources could be
							incorporated with minimal changes.
						</li>
						<li>Search algorithms remained
							independent of database-specific implementation details.
						</li>
						<li>Maintenance effort was significantly reduced because changes
							to underlying tables rarely affected application logic.
						</li>
					</ul>
					<div class="mt-12 pt-6 border-t border-gray-200">
						<h3 class="text-xl font-bold text-gray-900 mb-3">
							Engineering Insight
						</h3>
						<blockquote class="p-4 my-4 border-s-4 border-default bg-neutral-secondary-soft">
							<p class="text-xl italic font-medium leading-relaxed text-heading">
								Data consolidation is not merely a migration exercise. It is the process of transforming
								heterogeneous information into a stable representation that allows higher-level
								algorithms to remain
								simple, modular, and maintainable.
							</p>
						</blockquote>
					</div>
				</div>
			</div>

			<!-- 05. Unified Search Model -->
			<h2 id="accordion-flush-heading-5">
				<button type="button"
					class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
					data-accordion-target="#accordion-flush-body-5" aria-expanded="false"
					aria-controls="accordion-flush-body-5">
					<span class="font-bold text-indigo-600">05. Unified Search Model</span>
					<svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="m5 15 7-7 7 7" />
					</svg>
				</button>
			</h2>
			<div id="accordion-flush-body-5" class="hidden" aria-labelledby="accordion-flush-heading-3">
				<div class="py-5 text-body border-b border-default">
					<h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">
						05. Unified Search Model
					</h1>
					<div class="mt-12 pt-6 border-t border-gray-200">
						<blockquote class="p-4 my-4 border-s-4 border-default bg-neutral-secondary-soft">
							<p class="text-xl italic font-medium leading-relaxed text-heading">
								&quot;Good search algorithms require good data. Great search systems require good
								abstractions.&quot;
							</p>
						</blockquote>
					</div>
					<p class="text-xl italic font-medium leading-relaxed text-heading">Once employee information had
						been consolidated into MariaDB and
						the ERP schema had been simplified through logical database views, a
						new engineering challenge emerged.</p>
					<p class="text-xl italic font-medium leading-relaxed text-heading">Although the data now resided
						within a common database engine, the
						search process itself still remained tightly coupled to the
						individual structure of each repository.</p>
					<p class="text-xl italic font-medium leading-relaxed text-heading">
						Each database used different field names.
					</p>
					<p class="text-xl italic font-medium leading-relaxed text-heading">
						Some stored employee names as a single field, while others separated first and last names.
					</p>
					<p class="text-xl italic font-medium leading-relaxed text-heading">
						Telephone numbers appeared under different column names.
					</p>
					<p class="text-xl italic font-medium leading-relaxed text-heading">
						Certain repositories contained information unavailable elsewhere.
					</p>
					<p class="text-xl italic font-medium leading-relaxed text-heading">
						If each search algorithm had been written specifically for every database, introducing a new
						search method would have required
						implementing and maintaining multiple versions of the same logic.
					</p>
					<p class="text-xl italic font-medium leading-relaxed text-heading">
						Such duplication would have significantly increase both software complexity and maintenance
						effort.
					</p>
					<p class="text-xl italic font-medium leading-relaxed text-heading">
						Instead, the project adopted a different approach.
					</p>
					<p class="text-xl italic font-medium leading-relaxed text-heading">
						Rather than designing search algorithms around individual databases, the databases were first
						transformed into a common logical search model.
					</p>
					<p class="text-xl italic font-medium leading-relaxed text-heading">
						From that point onward, every search algorithm interacted only with the unified model and
						remained completely independent of the underlying source systems.
					</p>
					<p class="text-xl italic font-medium leading-relaxed text-heading">
						This separation between data representation and search logic became one of the most important
						architectural decisions of the project.
					</p>
					<hr class="mt-6 border-gray-200" />

					<h2 class="mt-3 mb-3 text-4xl font-bold">
						5.1 Why a Unified Search Model Was Necessary
					</h2>
					<p class="text-xl italic font-medium leading-relaxed text-heading">
						Searching multiple databases independently presents several practical difficulties.
					</p>
					<p class="text-xl italic font-medium leading-relaxed text-heading">
						Each repository may expose different attributes, different naming conventions, and different
						data completeness.
					</p>
					<p class="text-xl italic font-medium leading-relaxed text-heading">
						Consequently, even identical search algorithms often require separate implementations for every
						data source.
					</p>
					<p class="text-xl italic font-medium leading-relaxed text-heading">
						Instead of solving the search problem three times, the project attempted to solve it once.
					</p>
					<p class="text-xl italic font-medium leading-relaxed text-heading">
						Every repository was transformed into a consistent logical representation exposing the same
						searchable attributes, regardless of
						its original internal structure.
					</p>
					<p class="text-xl italic font-medium leading-relaxed text-heading">
						The application therefore interacted with employee information rather than individual databases.
					</p>
					<p class="text-xl italic font-medium leading-relaxed text-heading">
						This abstraction significantly simplified subsequent software development.</p>
					<hr class="mt-6 border-gray-200" />

					<h2 class="mt-3 mb-3 text-4xl font-bold">5.2 Standardising Search Attributes</h2>
					<p class="text-xl italic font-medium leading-relaxed text-heading">To support consistent searching,
						every searchable repository
						exposed a common set of logical fields.</p>
					<p class="text-xl italic font-medium leading-relaxed text-heading">These included:</p>
					<ul class="max-w-full space-y-1 text-body list-disc list-inside">
						<li>Employee Code </li>
						<li>Employee Name </li>
						<li>Father's Name </li>
						<li>CNIC </li>
						<li>Mobile Number </li>
						<li>Telephone Number </li>
						<li>Email Address </li>
					</ul>
					<p class="text-xl italic font-medium leading-relaxed text-heading">
						Although not every repository contained every attribute, each search result followed the same
						logical structure.
					</p>
					<p class="text-xl italic font-medium leading-relaxed text-heading">
						This consistency allowed identical SQL statements to execute against multiple repositories
						without requiring algorithm-specific modifications.
					</p>
					<hr class="mt-6 border-gray-200" />

					<h2 class="mt-3 mb-3 text-4xl font-bold">5.3 Database Independence</h2>
					<p class="text-xl italic font-medium leading-relaxed text-heading">
						A major objective of the architecture was database independence.
					</p>
					<p class="text-xl italic font-medium leading-relaxed text-heading">
						Search algorithms should not need to know whether a record
						originated from the ERP, HR database, or HRDC repository.
					</p>
					<p class="text-xl italic font-medium leading-relaxed text-heading">
						Instead, each repository became simply another provider of employee information.
					</p>
					<p class="text-xl italic font-medium leading-relaxed text-heading">The responsibility for
						understanding database-specific schemas
						remained entirely within the database layer through views and field
						mappings.</p>
					<p class="text-xl italic font-medium leading-relaxed text-heading">Application code therefore became
						considerably simpler because
						business logic remained isolated from storage implementation.</p>
					<hr class="mt-6 border-gray-200" />

					<h2 class="mt-3 mb-3 text-4xl font-bold">5.4 Query Composition</h2>
					<p class="text-xl italic font-medium leading-relaxed text-heading">Each search operator generated
						its own SQL query against the
						standardized search model.</p>
					<p class="text-xl italic font-medium leading-relaxed text-heading">Rather than selecting a single
						search strategy, the system
						executed several complementary strategies independently.</p>
					<p class="text-xl italic font-medium leading-relaxed text-heading">Their result sets were
						subsequently combined using SQL UNION
						operations.</p>
					<p class="text-xl italic font-medium leading-relaxed text-heading">Because every query returned
						identical column structures, SQL
						UNION could merge all results into a single dataset without
						additional transformation.</p>
					<p class="text-xl italic font-medium leading-relaxed text-heading">This design also simplified
						future expansion.</p>
					<p class="text-xl italic font-medium leading-relaxed text-heading">Adding another search algorithm
						required only generating another
						compatible query.</p>
					<p class="text-xl italic font-medium leading-relaxed text-heading">No changes were required
						elsewhere in the application.</p>
					<hr class="mt-6 border-gray-200" />

					<h2 class="mt-3 mb-3 text-4xl font-bold">5.5 Preparing for Multi-Strategy Retrieval</h2>
					<p class="text-xl italic font-medium leading-relaxed text-heading">Separating the search
						architecture from individual algorithms
						created an important long-term advantage.</p>
					<p class="text-xl italic font-medium leading-relaxed text-heading">New retrieval strategies could be
						introduced without redesigning
						either the database schema or the application interface.</p>
					<p class="text-xl italic font-medium leading-relaxed text-heading">Whether the system employed exact
						matching, phonetic comparison,
						regular expressions, edit-distance calculations, or future search
						techniques, each algorithm operated against the same unified logical
						representation.</p>
					<p class="text-xl italic font-medium leading-relaxed text-heading">The architecture therefore
						remained stable while search
						capabilities continued to evolve.</p>
					<p class="text-xl italic font-medium leading-relaxed text-heading">Looking back, this architectural
						flexibility proved more valuable
						than any individual search algorithm implemented during the project.</p>
					<hr class="mt-6 border-gray-200" />

					<!--  -->
					<div class="mt-12 pt-6 border-t border-gray-200">
						<h3 class="text-xl font-bold text-gray-900 mb-3">
							Engineering Principle
						</h3>
						<blockquote><span class="font-bold text-indigo-600">Software architecture should isolate change.</span></blockquote>
						<blockquote class="p-4 my-4 border-s-4 border-default bg-neutral-secondary-soft">
							<p class="text-xl italic font-medium leading-relaxed text-heading">
								Search algorithms evolve continuously as new techniques
								emerge. By designing a stable abstraction layer between the databases
								and the search engine, individual algorithms could be improved,
								replaced, or extended without affecting the remainder of the system.
								Good architecture therefore minimizes the cost of future change
								rather than merely solving today's problem.
							</p>
						</blockquote>
					</div>
					<!--  -->
				</div>
			</div>

			<!-- 06. Search Strategy Design -->
			<h2 id="accordion-flush-heading-6">
				<button type="button"
					class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
					data-accordion-target="#accordion-flush-body-6" aria-expanded="false"
					aria-controls="accordion-flush-body-6">
					<span class="font-bold text-indigo-600">06. Search Strategy Design</span>
					<svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="m5 15 7-7 7 7" />
					</svg>
				</button>
			</h2>
			<div id="accordion-flush-body-6" class="hidden" aria-labelledby="accordion-flush-heading-3">
				<div class="py-5 text-body border-b border-default">

				</div>
			</div>

			<!-- 07. Evaluation of Search Algorithms -->
			<h2 id="accordion-flush-heading-7">
				<button type="button"
					class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
					data-accordion-target="#accordion-flush-body-7" aria-expanded="false"
					aria-controls="accordion-flush-body-7">
					<span class="font-bold text-indigo-600">07. Evaluation of Search Algorithms</span>
					<svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="m5 15 7-7 7 7" />
					</svg>
				</button>
			</h2>
			<div id="accordion-flush-body-7" class="hidden" aria-labelledby="accordion-flush-heading-3">
				<div class="py-5 text-body border-b border-default">

				</div>
			</div>

			<!-- 08. Lessons Learned -->
			<h2 id="accordion-flush-heading-8">
				<button type="button"
					class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
					data-accordion-target="#accordion-flush-body-8" aria-expanded="false"
					aria-controls="accordion-flush-body-8">
					<span class="font-bold text-indigo-600">08. Lessons Learned</span>
					<svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="m5 15 7-7 7 7" />
					</svg>
				</button>
			</h2>
			<div id="accordion-flush-body-8" class="hidden" aria-labelledby="accordion-flush-heading-3">
				<div class="py-5 text-body border-b border-default">

				</div>
			</div>

			<!-- 09. Future Work -->
			<h2 id="accordion-flush-heading-9">
				<button type="button"
					class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
					data-accordion-target="#accordion-flush-body-9" aria-expanded="false"
					aria-controls="accordion-flush-body-9">
					<span class="font-bold text-indigo-600">09. Future Work</span>
					<svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="m5 15 7-7 7 7" />
					</svg>
				</button>
			</h2>
			<div id="accordion-flush-body-9" class="hidden" aria-labelledby="accordion-flush-heading-3">
				<div class="py-5 text-body border-b border-default">

				</div>
			</div>

			<!-- 10. Conclusion -->
			<h2 id="accordion-flush-heading-10">
				<button type="button"
					class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
					data-accordion-target="#accordion-flush-body-10" aria-expanded="false"
					aria-controls="accordion-flush-body-10">
					<span class="font-bold text-indigo-600">10. Conclusion</span>
					<svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="m5 15 7-7 7 7" />
					</svg>
				</button>
			</h2>
			<div id="accordion-flush-body-10" class="hidden" aria-labelledby="accordion-flush-heading-3">
				<div class="py-5 text-body border-b border-default">

				</div>
			</div>


		</div>
	</div>
</template>

<script setup>
import {
	BriefcaseIcon,
	CalendarIcon,
} from '@heroicons/vue/20/solid'

</script>
