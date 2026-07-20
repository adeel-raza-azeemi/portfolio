<template>
  <div>
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
						<blockquote><span class="font-bold text-indigo-600">Software architecture should isolate
								change.</span></blockquote>
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

  </div>
</template>

<script setup>
import { ref } from 'vue';

</script>

<style scoped>

</style>