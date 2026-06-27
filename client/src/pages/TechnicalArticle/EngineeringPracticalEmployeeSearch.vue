<script setup>

</script>

<template>
	<div
		class="max-w-full mx-auto my-6 p-16 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 transition duration-300 ease-in-out hover:shadow-lg">

		<!-- Table of content -->
		<div class="w-full bg-gray-100 px-4 py-3 text-left text-gray-800 break-words max-w-md rounded">
			<div class="mx-auto text-xl font-semibold"><span class="font-bold text-indigo-600">Table of content</span>
			</div>
			<ul class="mt-2 list-disc px-2 pl-6">
				<li>
					<a class="block hover:bg-gray-200 px-2 py-1 rounded" href="#introduction">Introduction &
						Background</a>
				</li>
				<li>
					<a class="block hover:bg-gray-200 px-2 py-1 rounded" href="#reverse-engineering-the-ERP">Reverse
						Engineering the ERP</a>
				</li>
				<li>
					<a class="block hover:bg-gray-200 px-2 py-1 rounded" href="#data-consolidation-architecture">Data
						Consolidation Architecture</a>
				</li>
				<li>
					<a class="block hover:bg-gray-200 px-2 py-1 rounded" href="#designing-the-search-engine">Designing
						the Search Engine</a>
				</li>
				<li>
					<a class="block hover:bg-gray-200 px-2 py-1 rounded"
						href="#performance-engineering-decisions">Performance & Engineering Decisions</a>
				</li>
				<li>
					<a class="block hover:bg-gray-200 px-2 py-1 rounded" href="#results-lessons-learned">Results,
						Lessons Learned</a>
				</li>
				<li>
					<a class="block hover:bg-gray-200 px-2 py-1 rounded" href="#polish-diagrams-references">Polish,
						diagrams, references</a>
				</li>
			</ul>
		</div>
		<!-- end -->
		<div id="introduction">
			<h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">
				Engineering Practical Employee Search in Resource-Constrained
				Organizations</h1>
			<h3 class="">A Case Study in Reverse Engineering, Data
				Consolidation, and Multi-Strategy Record Retrieval</h3>
			<hr class="h-px my-8 bg-gray-200 border-0" />

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

			<h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">1. Introduction</h1>
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

			<h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">2. Engineering Under
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
				using PHP and MySQL (later MariaDB). This choice was driven less by
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

			<h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">3. The Engineering
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

		<div id="reverse-engineering-the-ERP">
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
						<th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">Database Tables</th>
						<td class="px-6 py-4">685</td>
					</tr>
					<tr class="bg-neutral-primary border-b border-default">
						<th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">Database Views</th>
						<td class="px-6 py-4">187</td>
					</tr>
					<tr class="bg-neutral-primary border-b border-default">
						<th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">Empty Tables</th>
						<td class="px-6 py-4">478</td>
					</tr>
					<tr class="bg-neutral-primary border-b border-default">
						<th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">Non-empty Tables</th>
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
		<div id="data-consolidation-architecture"></div>
		<div id="designing-the-search-engine"></div>
		<div id="performance-engineering-decisions"></div>
		<div id="results-lessons-learned"></div>
		<div id="polish-diagrams-references"></div>
	</div>
</template>