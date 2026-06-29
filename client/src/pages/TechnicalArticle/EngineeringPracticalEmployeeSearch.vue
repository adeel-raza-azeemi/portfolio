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

		<!-- Article Content Divider -->
		<hr class="mt-6 border-gray-200" />

		<div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-neutral-primary text-heading"
			data-inactive-classes="text-body">
			<!-- Part 1 -->
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
						Engineering Under
						Constraints</h1>
					<p class="mb-3 text-body">Engineering decisions are always shaped by constraints.</p>
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

			<!-- Part 2 -->
			<h2 id="accordion-flush-heading-2">
				<button type="button"
					class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
					data-accordion-target="#accordion-flush-body-3" aria-expanded="false"
					aria-controls="accordion-flush-body-3">
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

				</div>
			</div>

			<!-- Part 3 -->
			<h2 id="accordion-flush-heading-3">
				<button type="button"
					class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
					data-accordion-target="#accordion-flush-body-2" aria-expanded="false"
					aria-controls="accordion-flush-body-2">
					<span class="font-bold text-indigo-600">03. Reverse Engineering the ERP</span>
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
						Part 2 — Reverse Engineering an Undocumented Enterprise Database</h1>
					<h2 class="text-4xl font-bold">4. Understanding the Existing System</h2>
					<p class="mb-3 text-body">Before a search system could be designed, it was first necessary
						to understand the structure of the Enterprise Resource Planning (ERP)
						database itself. Although the ERP successfully supported the
						organization's Human Resources and Finance operations, it offered
						very little insight into its internal data model. Source code was
						unavailable, database documentation did not exist, and the vendor
						treated the underlying schema as proprietary.</p>
					<p class="mb-3 text-body">Consequently, the first engineering challenge was not software
						development—it was system discovery.</p>
					<p class="mb-3 text-body">The objective was straightforward:</p>
					<blockquote>Identify where employee information was actually stored
						and determine how those records could be extracted without modifying
						the production ERP.</blockquote>
					<p class="mb-3 text-body">At first glance, this appeared to be a simple database exploration
						exercise. In reality, it became an exercise in reverse engineering.</p>
					<hr class="h-px my-8 bg-gray-200 border-0" />

					<h2 class="text-4xl font-bold">4.1 Initial Exploration</h2>
					<p class="mb-3 text-body">Administrative access to the Oracle database server made it
						possible to inspect the database schema directly.</p>
					<p class="mb-3 text-body">The first observation immediately revealed the scale of the
						system.</p>
					<p class="mb-3 text-body">The ERP database contained:</p>

					<table class="w-full text-sm text-left rtl:text-right text-body">
						<thead class="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
							<tr class="bg-neutral-primary border-b border-default">
								<th scope="col" class="px-6 py-3 font-medium">Object</th>
								<th scope="col" class="px-6 py-3 font-medium">Count</th>
							</tr>
						</thead>
						<tbody>
							<tr class="bg-neutral-primary border-b border-default">
								<th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">Database
									Tables
								</th>
								<td class="px-6 py-4">685</td>
							</tr>
							<tr class="bg-neutral-primary border-b border-default">
								<th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">Database
									Views</th>
								<td class="px-6 py-4">187</td>
							</tr>
							<tr class="bg-neutral-primary border-b border-default">
								<th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">Empty
									Tables</th>
								<td class="px-6 py-4">478</td>
							</tr>
							<tr class="bg-neutral-primary border-b border-default">
								<th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">Non-empty
									Tables
								</th>
								<td class="px-6 py-4">207</td>
							</tr>
						</tbody>
					</table>
					<p class="mb-3 text-body">From an engineering perspective, these numbers immediately raised
						an important question.</p>
					<p class="mb-3 text-body">How many of these tables actually participated in the Human
						Resource module?</p>
					<p class="mb-3 text-body">The answer turned out to be: surprisingly few.</p>
					<p class="mb-3 text-body">Although the ERP exposed hundreds of tables, only a relatively
						small subset contained employee-related information. The remaining
						tables represented configuration data, module-specific entities,
						historical structures, system metadata, or simply remained unused
						within the organization's deployment.</p>
					<p class="mb-3 text-body">Rather than attempting to understand every table, the
						investigation focused only on identifying those that actively
						supported employee management.</p>
					<hr class="h-px my-8 bg-gray-200 border-0" />

					<h2 class="text-4xl font-bold">4.2 There Was No Documentation</h2>
					<p class="mb-3 text-body">Many commercial ERP systems provide detailed database
						documentation for customers or implementation partners.</p>
					<p class="mb-3 text-body">This system did not.</p>
					<p class="mb-3 text-body">No entity relationship diagrams were available.</p>
					<p class="mb-3 text-body">No data dictionary existed.</p>
					<p class="mb-3 text-body">No documentation described table relationships.</p>
					<p class="mb-3 text-body">No source code could be inspected to understand how the
						application interacted with the database.</p>
					<p class="mb-3 text-body">Every relationship had to be inferred.</p>
					<p class="mb-3 text-body">This fundamentally changed the engineering approach.</p>
					<p class="mb-3 text-body">Instead of reading documentation, the database itself became the
						documentation.</p>
					<hr class="h-px my-8 bg-gray-200 border-0" />

					<h2 class="text-4xl font-bold">4.3 A Surprising Discovery</h2>
					<p class="mb-3 text-body">One of the most unexpected findings during the investigation was
						the apparent absence of database-enforced referential integrity.</p>
					<p class="mb-3 text-body">Despite representing a highly normalized enterprise application,
						the Oracle schema contained virtually no foreign key constraints
						linking related tables together.</p>
					<p class="mb-3 text-body">Primary identifiers were clearly reused across multiple tables,
						suggesting that logical relationships certainly existed. However,
						these relationships were enforced entirely by the application rather
						than by the database management system.</p>
					<p class="mb-3 text-body">For example, fields representing employee identifiers consistently
						matched corresponding records in related tables, yet no explicit
						foreign key definitions were present within the schema.</p>
					<p class="mb-3 text-body">This observation had two important consequences.</p>
					<p class="mb-3 text-body">First, understanding relationships required careful examination of
						the stored data rather than relying on database metadata.</p>
					<p class="mb-3 text-body">Second, any supporting application developed outside the ERP
						needed to reconstruct these relationships independently.</p>
					<p class="mb-3 text-body">In effect, the data model had to be rediscovered.</p>
					<hr class="h-px my-8 bg-gray-200 border-0" />

					<h2 class="text-4xl font-bold">4.4 Finding the Important Tables</h2>
					<p class="mb-3 text-body">Without documentation or foreign key definitions, a systematic
						method was required to identify which tables actually supported
						employee management.</p>
					<p class="mb-3 text-body">Rather than examining hundreds of tables manually, a data-driven
						approach was adopted.</p>
					<p class="mb-3 text-body">The ERP application's user interface became the primary source of
						clues.</p>
					<p class="mb-3 text-body">Whenever a list of employees appeared within the application, the
						corresponding record count was noted.</p>
					<p class="mb-3 text-body">These counts were then compared against every non-empty database
						table.</p>
					<p class="mb-3 text-body">Tables whose row counts closely matched the application's
						displayed information became immediate candidates for further
						investigation.</p>
					<p class="mb-3 text-body">Several additional heuristics significantly accelerated the
						process.</p>
					<p class="mb-3 text-body">Database views were intentionally excluded during the initial
						investigation because they merely represented derived data built upon
						underlying base tables.</p>
					<p class="mb-3 text-body">Fortunately, the ERP followed a reasonably consistent naming
						convention in which view names began with the prefix &quot;V&quot;,
						allowing them to be identified quickly.</p>
					<p class="mb-3 text-body">Candidate tables were then inspected individually.</p>
					<p class="mb-3 text-body">Column names, record counts, and data contents were compared
						against information displayed within the ERP interface.</p>
					<p class="mb-3 text-body">Through repeated verification, the subset of tables responsible
						for employee information gradually emerged.</p>
					<p class="mb-3 text-body">Although this process required patience, it proved significantly
						more reliable than attempting to understand the entire schema
						simultaneously.</p>
					<hr class="h-px my-8 bg-gray-200 border-0" />
					<h2 class="text-4xl font-bold">4.5 Mining Rather Than Exploring</h2>
					<p class="mb-3 text-body">Looking back, the investigation resembled data mining more than
						traditional software development.</p>
					<p class="mb-3 text-body">The objective was never to understand every table.</p>
					<p class="mb-3 text-body">Instead, the objective was to isolate only those entities
						necessary to support employee search and migration.</p>
					<p class="mb-3 text-body">Once these tables had been identified, the remaining schema became
						largely irrelevant to the project.</p>
					<p class="mb-3 text-body">This principle substantially reduced the complexity of the
						engineering effort.</p>
					<p class="mb-3 text-body">Instead of attempting to reverse engineer an entire ERP containing
						hundreds of tables, the problem was reduced to understanding only the
						relatively small collection of entities required to reconstruct
						employee information.</p>
					<p class="mb-3 text-body">Only after this discovery process was complete could the actual
						design of the Employee Search MIS begin.</p>
				</div>
			</div>

			<!-- Part 4 -->
			<h2 id="accordion-flush-heading-4">
				<button type="button"
					class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
					data-accordion-target="#accordion-flush-body-3" aria-expanded="false"
					aria-controls="accordion-flush-body-3">
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
					<h2 class="text-4xl font-bold">
						Part III — Data Consolidation Architecture</h2>
					<h3 class="text-xl font-bold text-gray-900 mb-3">3. Data Consolidation Architecture</h3>
					<p class="mb-3 text-body">Before an effective search system could be developed, the employee
						information first had to be consolidated into a form that allowed
						uniform querying. Although the search algorithms received most of the
						attention, the real engineering challenge was integrating three
						independent personnel repositories into a single logical information
						system.</p>
					<p class="mb-3 text-body">The organization maintained employee information across three
						different sources:</p>
					<ul class="max-w-full space-y-1 text-body list-disc list-inside">
						<li><span class="font-bold text-indigo-600">ERP Database</span> (Oracle/SQL Server based),
							containing official employee, placement, and organizational records.</li>
						<li><span class="font-bold text-indigo-600">Legacy HR Database</span>, containing historical
							human resource information maintained before ERP adoption.</li>
						<li><span class="font-bold text-indigo-600">HRDC Database</span>, containing training and staff
							development records accumulated over several years.</li>
					</ul>
					<p class="mb-3 text-body">Together, these repositories contained more than <span
							class="font-bold text-indigo-600">5,100
							employee records</span> distributed across different database
						engines, schemas, naming conventions, and application architectures.</p>
					<h3 class="text-xl font-bold text-gray-900 mb-3">3.1 Reverse Engineering the ERP</h3>
					<p class="mb-3 text-body">The ERP database presented the greatest challenge.</p>
					<p class="mb-3 text-body">Rather than providing a concise operational schema, the database
						contained hundreds of tables, many of which were either empty,
						automatically generated, or unrelated to the HR module. No foreign
						key relationships were implemented at the database level, making it
						impossible to rely on metadata to understand how entities were
						connected.</p>
					<p class="mb-3 text-body">Consequently, the database had to be reverse engineered manually.</p>
					<p class="mb-3 text-body">Instead of studying the application source code—which was
						unavailable—the investigation began by observing the ERP
						application's user interface. Information displayed on individual
						screens was compared with database tables having similar record
						counts and contents. This iterative process gradually revealed which
						tables actually stored operational HR data.</p>
					<p class="mb-3 text-body">Naming conventions also proved useful. Database views followed a
						consistent prefix, allowing them to be distinguished from physical
						tables and preventing duplicate investigation of equivalent datasets.</p>
					<p class="mb-3 text-body">Once the relevant entities had been identified, only the
						operational tables required for employee search and placement
						information were extracted.</p>
					<h3 class="text-xl font-bold text-gray-900 mb-3">3.2 Database Migration Strategy</h3>
					<p class="mb-3 text-body">Because the helper MIS was developed using Laravel and MySQL, the
						ERP data had to be migrated into an open-source environment suitable
						for rapid development.</p>
					<p class="mb-3 text-body">The migration process consisted of several stages:</p>
					<ol class="list-decimal list-inside pl-5">
						<li>Export the required ERP tables.</li>
						<li>Import the tables into Microsoft SQL Server.</li>
						<li>Transfer the datasets through Microsoft Access using ODBC.</li>
						<li>Export each table into MySQL-compatible format.</li>
						<li>Import all converted tables into MariaDB/MySQL.</li>
						<li>Repeat the process for the HR database.</li>
						<li>Import the HRDC database directly into MySQL.</li>
					</ol>
					<p class="mb-3 text-body">Although this migration pipeline appears lengthy, it provided
						complete control over the imported schema while allowing unnecessary
						enterprise structures to be discarded.</p>
					<h3 class="text-xl font-bold text-gray-900 mb-3">3.3 Creating Logical Views</h3>
					<p class="mb-3 text-body">Even after migration, directly querying dozens of normalized ERP
						tables would have produced unnecessarily complex application code.</p>
					<p class="mb-3 text-body">Instead, logical database views were designed.</p>
					<p class="mb-3 text-body">The first view, <span class="font-bold text-indigo-600">emp</span>,
						exposed the
						core employee
						identity by presenting names, CNIC, contact information, dates of
						birth, and employment status using field names consistent with the
						other repositories.</p>
					<p class="mb-3 text-body">The second view, <span class="font-bold text-indigo-600">placement</span>,
						combined placement
						records with organizational lookup tables including designation,
						department, employee type, grade, and duty station. By resolving
						these relationships once inside the database, the application could
						retrieve complete placement information through a single query rather
						than repeatedly constructing complex joins.</p>
					<p class="mb-3 text-body">This approach significantly simplified the application layer while
						isolating schema complexity inside the database, where it naturally
						belonged.</p>
					<h3 class="text-xl font-bold text-gray-900 mb-3">3.4 Unified Search Layer</h3>
					<p class="mb-3 text-body">Once every repository had been transformed into a common
						relational structure, the search engine no longer needed to
						understand where a record originated.</p>
					<p class="mb-3 text-body">Instead, each search operator produced results with an identical
						column structure. SQL UNION operations merged these result sets into
						a single logical dataset presented to the user.</p>
					<p class="mb-3 text-body">From the application's perspective, three independent databases
						had effectively become one searchable information system.</p>
					<p class="mb-3 text-body">This architectural separation between data preparation and search
						algorithms proved fundamental. It allowed new search techniques to be
						introduced later without modifying the underlying data consolidation
						process, resulting in a system that remained modular, extensible, and
						considerably easier to maintain.</p>

				</div>
			</div>

			<!-- Part 5 -->
			<h2 id="accordion-flush-heading-5">
				<button type="button"
					class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
					data-accordion-target="#accordion-flush-body-3" aria-expanded="false"
					aria-controls="accordion-flush-body-3">
					<span class="font-bold text-indigo-600">05. Unified Data Model</span>
					<svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="m5 15 7-7 7 7" />
					</svg>
				</button>
			</h2>
			<div id="accordion-flush-body-5" class="hidden" aria-labelledby="accordion-flush-heading-3">
				<div class="py-5 text-body border-b border-default">

				</div>
			</div>

			<!-- part 6 -->
			<h2 id="accordion-flush-heading-6">
				<button type="button"
					class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
					data-accordion-target="#accordion-flush-body-3" aria-expanded="false"
					aria-controls="accordion-flush-body-3">
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

			<!-- Part 7 -->
			<h2 id="accordion-flush-heading-7">
				<button type="button"
					class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
					data-accordion-target="#accordion-flush-body-3" aria-expanded="false"
					aria-controls="accordion-flush-body-3">
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

			<!-- Part 8 -->
			<h2 id="accordion-flush-heading-8">
				<button type="button"
					class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
					data-accordion-target="#accordion-flush-body-3" aria-expanded="false"
					aria-controls="accordion-flush-body-3">
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

			<!-- Part 9 -->
			<h2 id="accordion-flush-heading-8">
				<button type="button"
					class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
					data-accordion-target="#accordion-flush-body-3" aria-expanded="false"
					aria-controls="accordion-flush-body-3">
					<span class="font-bold text-indigo-600">09. Future Work</span>
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

			<!-- Part 10 -->
			<h2 id="accordion-flush-heading-8">
				<button type="button"
					class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
					data-accordion-target="#accordion-flush-body-3" aria-expanded="false"
					aria-controls="accordion-flush-body-3">
					<span class="font-bold text-indigo-600">10. Conclusion</span>
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


		</div>
	</div>
</template>

<script setup>
import {
	BriefcaseIcon,
	CalendarIcon,
} from '@heroicons/vue/20/solid'

</script>
