<template>
	<div>
		<h2 id="accordion-flush-heading-7">
			<button type="button"
				class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
				data-accordion-target="#accordion-flush-body-7" aria-expanded="false"
				aria-controls="accordion-flush-body-7">
				<span class="font-bold text-indigo-600">07. Engineering Decisions</span>
				<svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						d="m5 15 7-7 7 7" />
				</svg>
			</button>
		</h2>
		<div id="accordion-flush-body-7" class="hidden" aria-labelledby="accordion-flush-heading-3">
			<div class="py-5 text-body border-b border-default">
				<hr class="h-px my-8 bg-gray-200 border-0" />

				<h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">07. Engineering
					Decisions</h1>
				<h2 class="text-4xl font-bold">From Individual Algorithms to an Engineering
					Strategy</h2>
				<p class="mb-3 text-body">The previous sections described the individual search algorithms
					implemented within the Employee Search &amp; Data Consolidation MIS.
					Each algorithm addressed a particular class of search problems and
					possessed distinct strengths and limitations. None, however, was
					sufficiently capable of solving every operational scenario
					encountered during the migration process.</p>
				<p class="mb-3 text-body">This observation gradually shifted the design philosophy of the
					system.</p>
				<p class="mb-3 text-body">The objective was no longer to identify the single &quot;best&quot;
					search algorithm. Instead, the focus became selecting and combining
					algorithms according to their individual characteristics,
					computational cost, and suitability for the problem being solved.</p>
				<p class="mb-3 text-body">In practice, successful employee identification depended less upon
					any individual algorithm than upon the engineering decisions
					governing when and how each algorithm was applied.</p>
				<hr class="h-px my-8 bg-gray-200 border-0" />

				<h2 class="text-4xl font-bold">Engineering Rather than Algorithm Selection</h2>
				<p class="mb-3 text-body">An interesting realization during development was that choosing a
					search algorithm was rarely the difficult part.</p>
				<p class="mb-3 text-body">The greater challenge was determining <strong>when</strong> an
					algorithm should be applied, <strong>where</strong> within the search
					process it belonged, and <strong>what trade-offs</strong> accompanied
					its use.</p>
				<p class="mb-3 text-body">For example, an algorithm producing the highest search accuracy
					was not automatically the most appropriate choice if it required
					excessive execution time for routine operational use.</p>
				<p class="mb-3 text-body">Likewise, a computationally inexpensive algorithm producing
					approximate results often became extremely valuable when used as an
					initial filtering mechanism before more sophisticated techniques were
					applied.</p>
				<p class="mb-3 text-body">The effectiveness of the system therefore emerged not from
					individual algorithms operating independently, but from the
					interaction between them.</p>
				<hr class="h-px my-8 bg-gray-200 border-0" />

				<h2 class="text-4xl font-bold">Search as Progressive Refinement</h2>
				<p class="mb-3 text-body">During implementation, the search process gradually evolved into a
					sequence of progressively refined filters.</p>
				<p class="mb-3 text-body">Broad, inexpensive operations were performed first to eliminate
					obviously unrelated records. More computationally intensive
					algorithms were then applied only to the remaining candidate set.</p>
				<p class="mb-3 text-body">This approach mirrors many engineering disciplines in which coarse
					analysis precedes fine analysis. Rather than applying the most
					sophisticated method immediately, progressively reducing the search
					space allows computational resources to be concentrated where they
					provide the greatest benefit.</p>
				<p class="mb-3 text-body">Viewed from this perspective, search becomes less about finding
					records and more about continuously reducing uncertainty.</p>
				<hr class="h-px my-8 bg-gray-200 border-0" />

				<h2 class="text-4xl font-bold">Engineering Observation</h2>
				<p class="mb-3 text-body">One of the most important lessons learned during implementation
					was that engineering rarely consists of discovering perfect
					solutions.</p>
				<p class="mb-3 text-body">Instead, engineering consists of balancing competing objectives.</p>
				<p class="mb-3 text-body">Improving search accuracy generally increases computational cost.</p>
				<p class="mb-3 text-body">Reducing execution time often decreases search completeness.</p>
				<p class="mb-3 text-body">Increasing flexibility may reduce precision.</p>
				<p class="mb-3 text-body">No design simultaneously optimizes every objective.</p>
				<p class="mb-3 text-body">Consequently, every implementation represents a series of
					deliberate compromises made according to the operational requirements
					of the environment.</p>
				<hr class="h-px my-8 bg-gray-200 border-0" />

				<h2 class="text-4xl font-bold">Engineering Principle</h2>
				<blockquote>
					<strong>
						Successful search systems are not built by
						selecting the most sophisticated algorithm. They are built by
						understanding the strengths, limitations, and interactions of
						multiple algorithms, then arranging them into a strategy that
						balances accuracy, responsiveness, and operational practicality.
					</strong>
				</blockquote>

				<div class="mt-12 pt-6 border-t border-gray-200">
					<h3 class="text-xl font-bold text-gray-900 mb-3">
						Engineering Principle
					</h3>
					<blockquote class="p-4 my-4 border-s-4 border-default bg-neutral-secondary-soft">
						<p class="text-xl italic font-medium leading-relaxed text-heading">
							Successful search systems are not built by
							selecting the most sophisticated algorithm. They are built by
							understanding the strengths, limitations, and interactions of
							multiple algorithms, then arranging them into a strategy that
							balances accuracy, responsiveness, and operational practicality.
						</p>
					</blockquote>
				</div>

				<hr class="h-px my-8 bg-gray-200 border-0" />

			</div>
		</div>

	</div>
</template>

<script setup>
import { ref } from 'vue';

</script>

<style scoped></style>