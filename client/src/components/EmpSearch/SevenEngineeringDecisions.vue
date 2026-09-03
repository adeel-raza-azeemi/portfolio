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

				<h2 class="text-4xl font-bold">Progressive Search Space Reduction</h2>
				<p class="mb-3 text-body">One of the most significant engineering decisions made during
					development was recognizing that not every search algorithm should
					examine every record.</p>
				<p class="mb-3 text-body">Although each algorithm was capable of identifying particular
					classes of matches, their computational costs varied considerably.
					Applying the most computationally expensive methods indiscriminately
					across the complete dataset produced little practical benefit while
					significantly increasing execution time.</p>
				<p class="mb-3 text-body">Instead, the search process gradually evolved into a sequence of
					progressively refined filters.</p>
				<p class="mb-3 text-body">Computationally inexpensive operations were executed first to
					eliminate obviously unrelated records. More sophisticated similarity
					algorithms were then applied only to the smaller candidate set that
					remained.</p>
				<p class="mb-3 text-body">This approach substantially reduced the amount of work performed
					by the expensive algorithms without sacrificing search quality.</p>
				<p class="mb-3 text-body">The principle resembles multi-stage filtering systems commonly
					found throughout engineering disciplines. Rather than immediately
					applying the most precise analytical method, successive filtering
					stages progressively reduce the search space until only the most
					relevant candidates remain.</p>
				<p class="mb-3 text-body">Although the implementation evolved through practical
					experimentation rather than formal optimization, this progressive
					filtering strategy ultimately became one of the most influential
					design decisions within the system.</p>
				<hr class="h-px my-8 bg-gray-200 border-0" />

				<h3 class="western">Engineering Observation</h3>
				<p class="mb-3 text-body">Search performance depends not only upon the efficiency of
					individual algorithms but also upon the number of records they are
					required to evaluate.</p>
				<p class="mb-3 text-body">Reducing the candidate set before invoking computationally
					expensive algorithms frequently produces greater performance
					improvements than attempting to optimize the expensive algorithm
					itself.</p>
				<hr class="h-px my-8 bg-gray-200 border-0" />

				<div class="mt-12 pt-6 border-t border-gray-200">
					<h3 class="text-xl font-bold text-gray-900 mb-3">
						Engineering Principle
					</h3>
					<blockquote class="p-4 my-4 border-s-4 border-default bg-neutral-secondary-soft">
						<p class="text-xl italic font-medium leading-relaxed text-heading">
							Reducing the search space is often more effective than accelerating the search algorithm.
						</p>
					</blockquote>
				</div>

				<hr class="h-px my-8 bg-gray-200 border-0" />

				<hr class="h-px my-8 bg-gray-200 border-0" />

				<h2 class="text-4xl font-bold">7.1 Searching Less Instead of Searching Faster</h2>
				<p class="mb-3 text-body">This may sound counterintuitive, but during the development of the
					Employee Search System I eventually realized that improving search
					performance rarely meant finding a faster algorithm.</p>
				<p class="mb-3 text-body">More often, it meant avoiding unnecessary work altogether.</p>
				<p class="mb-3 text-body">When a search became slow, my first instinct was initially to look
					for a better algorithm or a more efficient implementation. Over time,
					however, I noticed that the largest performance gains usually came
					from reducing the amount of data that needed to be examined.</p>
				<p class="mb-3 text-body">Searching one hundred records with an average algorithm is almost
					always faster than searching one hundred thousand records with an
					excellent algorithm.</p>
				<p class="mb-3 text-body">This shifted my way of thinking.</p>
				<p class="mb-3 text-body">Instead of asking,</p>
				<blockquote>&quot;How can I make this algorithm faster?&quot;
				</blockquote>
				<p class="mb-3 text-body">I started asking,</p>
				<blockquote>&quot;How can I reduce the number of records that ever
					reach this algorithm?&quot;
				</blockquote>
				<p class="mb-3 text-body">That small change in perspective influenced nearly every
					optimization that followed.</p>
				<p class="mb-3 text-body">For example, inexpensive filters such as exact field matches,
					district selection, gender, or record status could immediately
					eliminate large portions of the dataset. Only after these inexpensive
					operations reduced the candidate set would more computationally
					expensive techniques, such as regular expressions or Levenshtein
					distance, be applied.</p>
				<p class="mb-3 text-body">The goal was never to make every algorithm faster.</p>
				<p class="mb-3 text-body">The goal was to ensure that expensive algorithms were executed as
					rarely as possible.</p>
				<p class="mb-3 text-body">In many situations, removing ninety percent of the candidate
					records before applying a costly comparison produced a greater
					performance improvement than rewriting the comparison algorithm
					itself.</p>
				<p class="mb-3 text-body">Performance optimization therefore became less about writing
					clever code and more about designing an efficient sequence of
					decisions.</p>
				<hr class="h-px my-8 bg-gray-200 border-0" />

				<h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">7.2 Progressive
					Filtering</h1>
				<p class="mb-3 text-body">Searching a large dataset efficiently is rarely accomplished by
					applying a single sophisticated algorithm. In practice, the search
					process becomes significantly faster when records are eliminated
					progressively through a series of increasingly selective filters.</p>
				<p class="mb-3 text-body">During the development of the Employee Search System, I found it
					useful to think of the search process as a pipeline rather than a
					single operation. Each stage had one purpose: reduce the candidate
					set before passing the remaining records to the next stage.</p>
				<p class="mb-3 text-body">The first filters were intentionally inexpensive. Simple
					operations such as checking district, gender, registration status, or
					exact field matches could discard a large percentage of records with
					minimal computational cost. Although these filters were individually
					simple, together they dramatically reduced the amount of data that
					subsequent algorithms needed to process.</p>
				<p class="mb-3 text-body">Once the candidate set had been sufficiently reduced, more
					computationally expensive techniques such as partial matching,
					phonetic comparison, regular expressions, or edit-distance
					calculations could be applied. Since these algorithms operated on
					only a small subset of records, their execution time became much more
					manageable.</p>
				<p class="mb-3 text-body">This ordering was not accidental. It followed a general
					engineering principle: <span class="font-bold text-indigo-600">perform inexpensive operations first
						and reserve expensive computations for the smallest possible dataset.</span>
					Reversing this sequence would have forced every advanced algorithm to
					process the entire database, resulting in unnecessary computation and
					noticeably slower searches.</p>
				<p class="mb-3 text-body">The search process therefore became less about finding the perfect
					algorithm and more about constructing an efficient sequence of
					elimination steps. Every filter removed records that no longer
					required further examination, allowing increasingly sophisticated
					algorithms to concentrate only on the most promising candidates.</p>
				<hr class="h-px my-8 bg-gray-200 border-0" />

				<div class="mt-12 pt-6 border-t border-gray-200">
					<h3 class="text-xl font-bold text-gray-900 mb-3">
						Engineering Principle
					</h3>
					<blockquote class="p-4 my-4 border-s-4 border-default bg-neutral-secondary-soft">
						<p class="text-xl italic font-medium leading-relaxed text-heading">
							This strategy closely resembles multi-stage filtration systems
							used in physical engineering. A water purification system does not
							begin with its finest membrane. Instead, coarse filters remove larger
							particles first, protecting the more delicate and expensive filters
							that follow.
						</p>
						<p class="text-xl italic font-medium leading-relaxed text-heading">
							The same principle applies to software search systems. Simple
							filters remove the obvious mismatches, allowing advanced algorithms
							to focus their computational effort where it is most valuable. The
							objective is not merely to search faster, but to avoid unnecessary
							searching altogether.
						</p>
					</blockquote>
				</div>

				<hr class="h-px my-8 bg-gray-200 border-0" />

				<h2 class="text-4xl font-bold">7.3 Measuring Before Optimizing</h2>
				<p class="mb-3 text-body">Performance optimization should begin with observation rather than
					assumption. During the development of the Employee Search System, I
					occasionally measured the behaviour of different search strategies to
					understand where the computational cost actually originated. Although
					these measurements were not conducted as formal benchmarks, they
					provided valuable insight into how the system behaved as the search
					criteria became increasingly complex.</p>
				<p class="mb-3 text-body">One observation became immediately apparent. Not all search
					algorithms scaled in the same way. Simple operations, such as exact
					matches or partial string comparisons, remained relatively
					inexpensive even when executed against large datasets. In contrast,
					algorithms that explored multiple alternative character combinations,
					such as edit-distance calculations or recursive phonetic matching,
					exhibited a much steeper increase in execution time as their search
					space expanded.</p>
				<p class="mb-3 text-body">Rather than relying on intuition alone, these small experiments
					influenced subsequent design decisions. They confirmed which
					algorithms could safely be applied to the complete dataset and which
					should be reserved for a much smaller subset of candidate records.
					This understanding reinforced an important engineering principle:
					optimization decisions should be guided by observed behaviour rather
					than assumptions about performance.</p>
				<p class="mb-3 text-body">In many cases, a simple measurement proved more valuable than
					extensive code modification. Once the primary performance bottleneck
					had been identified, the solution often became straightforward.
					Instead of attempting to optimise the algorithm itself, the search
					pipeline was restructured so that fewer records ever reached the
					computationally expensive stage.</p>
				<p class="mb-3 text-body">The objective was therefore not to make every algorithm faster,
					but to understand where computational effort was being spent and to
					organise the search process accordingly.</p>
				<hr class="h-px my-8 bg-gray-200 border-0" />

				<div class="mt-12 pt-6 border-t border-gray-200">
					<h3 class="text-xl font-bold text-gray-900 mb-3">
						Engineering Perspective
					</h3>
					<blockquote class="p-4 my-4 border-s-4 border-default bg-neutral-secondary-soft">
						<p class="text-xl italic font-medium leading-relaxed text-heading">
							Software engineers often focus on improving algorithms, but
							optimisation without measurement frequently addresses the wrong
							problem. A system may spend only a small fraction of its execution
							time inside the algorithm that appears most complex, while the actual
							bottleneck lies elsewhere.
						</p>
						<p class="text-xl italic font-medium leading-relaxed text-heading">
							For this reason, performance measurements—however simple—are
							often more valuable than assumptions. Even informal timing
							experiments can reveal which components deserve optimisation and
							which are already sufficiently efficient. Measuring first, and
							optimising second, leads to engineering decisions that are guided by
							evidence rather than intuition.
						</p>
					</blockquote>
				</div>

				<hr class="h-px my-8 bg-gray-200 border-0" />

				<!-- 7.4 and 7.5 will be added only when their content is complete. -->
			</div>
		</div>

	</div>
</template>

<script setup>
import { ref } from 'vue';

</script>

<style scoped></style>