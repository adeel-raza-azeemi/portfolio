<template>
  <div>
    <h2 id="accordion-flush-heading-3">
				<button type="button"
					class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
					data-accordion-target="#accordion-flush-body-3" aria-expanded="false"
					aria-controls="accordion-flush-body-3">
					<span class="font-bold text-indigo-600">03. Legacy Data Sources</span>
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

  </div>
</template>

<script setup>
import { ref } from 'vue';

</script>

<style scoped>

</style>