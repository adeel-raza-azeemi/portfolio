<template>
  <div>
    <h2 id="accordion-flush-heading-9">
      <button type="button"
        class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
        data-accordion-target="#accordion-flush-body-9" aria-expanded="false"
        aria-controls="accordion-flush-body-9">
        <span class="font-bold text-indigo-600">09. Lessons Learned</span>
        <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="m5 15 7-7 7 7" />
        </svg>
      </button>
    </h2>

    <div id="accordion-flush-body-9" class="hidden" aria-labelledby="accordion-flush-heading-9">
      <div class="py-5 text-body border-b border-default">
        <h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">
          09. Lessons Learned
        </h1>

        <p class="mb-3 text-body">The Employee Search &amp; Data Consolidation MIS began as a relatively narrow requirement: make employee records easier to find during an ERP migration. As development progressed, however, the problem expanded into reverse engineering, data consolidation, information retrieval, and performance engineering.</p>
        <p class="mb-3 text-body">Several lessons emerged from that process.</p>

        <hr class="h-px my-8 bg-gray-200 border-0" />

        <h2 class="text-4xl font-bold">9.1 The Difficult Part Was Not Writing the Search Query</h2>
        <p class="mb-3 text-body">The difficult part was understanding the problem that the query was supposed to solve.</p>
        <p class="mb-3 text-body">The important questions were often outside the query itself: Where does the data actually reside? Which tables represent the same entity? Which fields are reliable? Which records may refer to the same person? What type of uncertainty is present? Which search technique is appropriate for that uncertainty? How much computation is practical?</p>
        <p class="mb-3 text-body">A search query can be syntactically correct and still solve the wrong problem. The quality of the search therefore depends heavily on understanding the representation of the underlying data.</p>

        <hr class="h-px my-8 bg-gray-200 border-0" />

        <h2 class="text-4xl font-bold">9.2 Data Quality Is an Engineering Problem</h2>
        <p class="mb-3 text-body">Inconsistent spelling, missing names, abbreviations, formatting differences, and typographical errors were not isolated technical anomalies. They were consequences of data accumulated over years through different systems, departments, operators, and processes.</p>
        <p class="mb-3 text-body">The practical response was not to assume that the data would become clean. The system had to be designed around the data as it actually existed.</p>
        <p class="mb-3 text-body">This is an important distinction. Data quality is often treated as a prerequisite for a system. In operational environments, it is frequently part of the engineering problem that the system itself must accommodate.</p>

        <hr class="h-px my-8 bg-gray-200 border-0" />

        <h2 class="text-4xl font-bold">9.3 The Database Can Be More Valuable Than the Documentation</h2>
        <p class="mb-3 text-body">When documentation was unavailable, the database became the primary source of evidence about how the ERP represented information.</p>
        <p class="mb-3 text-body">Tables, columns, record counts, naming conventions, identifiers, relationships, and repeated structures provided clues about the underlying data model. The database did not explain itself completely, but it provided enough evidence to reconstruct the parts of the model required by the project.</p>
        <p class="mb-3 text-body">This experience reinforced a practical reverse-engineering principle: when documentation is missing, the data itself becomes part of the documentation.</p>

        <hr class="h-px my-8 bg-gray-200 border-0" />

        <h2 class="text-4xl font-bold">9.4 Good Architecture Removes Complexity From the Application</h2>
        <p class="mb-3 text-body">The use of logical database views was more than a convenience. It created a stable boundary between the source systems and the application.</p>
        <p class="mb-3 text-body">The ERP contained normalized structures and terminology that were not useful to expose repeatedly throughout the application. By presenting the required information through simplified logical views, the search layer could operate on a consistent representation.</p>
        <p class="mb-3 text-body">This reduced application complexity and made it possible to change or extend search strategies without repeatedly rebuilding the source-specific joins and relationships.</p>

        <hr class="h-px my-8 bg-gray-200 border-0" />

        <h2 class="text-4xl font-bold">9.5 No Search Algorithm Is Universally Correct</h2>
        <p class="mb-3 text-body">Each search strategy proved useful for a different type of problem.</p>
        <ul class="max-w-full space-y-1 text-body list-disc list-inside">
          <li>Exact matching was appropriate for reliable identifiers.</li>
          <li>LIKE was useful for partial values and broad candidate retrieval.</li>
          <li>Soundex helped with phonetic spelling variation.</li>
          <li>Levenshtein addressed character-level differences and typographical errors.</li>
          <li>Regular expressions were useful when the search could be described structurally.</li>
        </ul>
        <p class="mb-3 text-body">The practical question was therefore not, “Which algorithm is best?” It was, “What kind of uncertainty am I trying to handle?”</p>

        <hr class="h-px my-8 bg-gray-200 border-0" />

        <h2 class="text-4xl font-bold">9.6 Expensive Algorithms Should Be Protected</h2>
        <p class="mb-3 text-body">Levenshtein distance demonstrated this clearly. Increasing the allowed edit distance can increase the number of potentially useful matches, but it also increases the amount of computation required.</p>
        <p class="mb-3 text-body">For the complete dataset, a normal maximum distance of two edits was a practical boundary. Higher edit distances were more reasonable when the comparison was applied as a secondary operation to a much smaller candidate set.</p>
        <p class="mb-3 text-body">The lesson was broader than Levenshtein itself: expensive algorithms do not always need to be made faster. Sometimes the better engineering decision is simply to give them less work.</p>

        <hr class="h-px my-8 bg-gray-200 border-0" />

        <h2 class="text-4xl font-bold">9.7 Measurement Does Not Need to Be Perfect to Be Useful</h2>
        <p class="mb-3 text-body">The performance observations in this project were not formal laboratory benchmarks. They were practical measurements and experiments performed while building the system.</p>
        <p class="mb-3 text-body">Even this limited measurement was enough to reveal meaningful differences between inexpensive operations and more computationally expensive similarity calculations. Those observations influenced the structure of the search pipeline.</p>
        <p class="mb-3 text-body">A small amount of real measurement is usually better than a large amount of speculation.</p>

        <hr class="h-px my-8 bg-gray-200 border-0" />

        <h2 class="text-4xl font-bold">9.8 Search Is a Process of Reducing Uncertainty</h2>
        <p class="mb-3 text-body">The search process can be understood as a sequence:</p>
        <ol class="max-w-full space-y-1 text-body list-decimal list-inside">
          <li>generate a broad candidate set;</li>
          <li>filter irrelevant records;</li>
          <li>refine the remaining candidates;</li>
          <li>apply similarity comparison where necessary; and</li>
          <li>allow human verification to resolve the remaining uncertainty.</li>
        </ol>
        <p class="mb-3 text-body">Each stage reduces uncertainty while controlling the amount of computation required by the next stage.</p>
        <p class="mb-3 text-body">This perspective was useful because it connected the individual algorithms into one engineering process rather than treating them as unrelated features.</p>

        <hr class="h-px my-8 bg-gray-200 border-0" />

        <h2 class="text-4xl font-bold">9.9 Practical Engineering Is Often About Constraints</h2>
        <p class="mb-3 text-body">The project was developed in a resource-constrained organizational environment. The production ERP could not be modified, source code and documentation were unavailable, multiple database technologies were involved, and the solution had to be maintained locally without introducing unnecessary licensing or infrastructure requirements.</p>
        <p class="mb-3 text-body">Those constraints did not merely limit the design. They shaped it.</p>
        <p class="mb-3 text-body">An independent supporting MIS, logical views, open-source technologies, and a progressive search strategy were practical responses to those conditions.</p>
        <p class="mb-3 text-body">The resulting lesson is straightforward: engineering quality is not measured only by what a system could achieve under ideal conditions. It is also measured by how well the solution works within the conditions that actually exist.</p>

        <div class="mt-12 pt-6 border-t border-gray-200">
          <h3 class="text-xl font-bold text-gray-900 mb-3">Engineering Principle</h3>
          <blockquote class="p-4 my-4 border-s-4 border-default bg-neutral-secondary-soft">
            <p class="text-xl italic font-medium leading-relaxed text-heading">
              Practical engineering begins by accepting the real problem—including imperfect data, incomplete documentation, limited resources, and operational constraints—and then designing a solution that works within those conditions.
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>
