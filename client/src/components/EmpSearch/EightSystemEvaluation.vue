<template>
  <div>
    <h2 id="accordion-flush-heading-8">
      <button type="button"
        class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
        data-accordion-target="#accordion-flush-body-8" aria-expanded="false"
        aria-controls="accordion-flush-body-8">
        <span class="font-bold text-indigo-600">08. System Evaluation</span>
        <svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="m5 15 7-7 7 7" />
        </svg>
      </button>
    </h2>

    <div id="accordion-flush-body-8" class="hidden" aria-labelledby="accordion-flush-heading-8">
      <div class="py-5 text-body border-b border-default">
        <h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">
          08. System Evaluation
        </h1>

        <p class="mb-3 text-body">The Employee Search &amp; Data Consolidation MIS was developed primarily to solve an operational problem rather than to serve as an experimental research platform. Consequently, evaluation focused on whether the system could reliably support the situations that originally motivated its development.</p>

        <p class="mb-3 text-body">The evaluation therefore considered whether the system could:</p>
        <ul class="max-w-full space-y-1 text-body list-disc list-inside">
          <li>search employee information across multiple repositories;</li>
          <li>tolerate common inconsistencies in names and other attributes;</li>
          <li>identify potential duplicate records;</li>
          <li>provide useful results without requiring users to understand the underlying algorithms;</li>
          <li>remain practical to operate; and</li>
          <li>support the broader ERP migration process.</li>
        </ul>

        <p class="mb-3 text-body">The evaluation was therefore engineering-focused. The question was not which algorithm was universally superior, but whether the complete search strategy worked effectively under the actual organizational data and constraints.</p>

        <hr class="h-px my-8 bg-gray-200 border-0" />

        <h2 class="text-4xl font-bold">8.1 Evaluation Against the Original Problem</h2>
        <p class="mb-3 text-body">The original problem was not simply that searching employee records was difficult. The deeper problem was that the same employee could exist in several systems under different representations.</p>
        <p class="mb-3 text-body">The system addressed this by combining data consolidation with multiple search strategies. Instead of requiring users to understand which database contained a record, which schema was involved, or which algorithm was appropriate, the system provided a common search environment over the consolidated data.</p>
        <p class="mb-3 text-body">The search process was intended to identify plausible candidate records for further examination. A search result was therefore treated as evidence for investigation rather than automatic proof that two records represented the same person.</p>

        <hr class="h-px my-8 bg-gray-200 border-0" />

        <h2 class="text-4xl font-bold">8.2 Search Coverage</h2>
        <p class="mb-3 text-body">The consolidated employee dataset contained 5,102 records drawn from three principal repositories:</p>
        <ul class="max-w-full space-y-1 text-body list-disc list-inside">
          <li>ERP: 908 records</li>
          <li>HR: 759 records</li>
          <li>HRDC: 3,435 records</li>
          <li>Total: 5,102 records</li>
        </ul>
        <p class="mb-3 text-body">Bringing these repositories into a common logical model made it possible to search the historical sources through one interface and examine records that previously had to be considered separately.</p>
        <p class="mb-3 text-body">This was particularly important for duplicate identification because potentially related records could now be compared within the same search environment.</p>

        <hr class="h-px my-8 bg-gray-200 border-0" />

        <h2 class="text-4xl font-bold">8.3 Evaluation of Search Strategies</h2>
        <p class="mb-3 text-body">Each search strategy was evaluated according to the type of uncertainty it was intended to address.</p>

        <div class="overflow-x-auto my-6">
          <table class="w-full text-sm text-left text-body border border-gray-200">
            <thead class="bg-gray-50 text-heading">
              <tr>
                <th scope="col" class="px-4 py-3 border-b border-gray-200">Strategy</th>
                <th scope="col" class="px-4 py-3 border-b border-gray-200">Primary use</th>
                <th scope="col" class="px-4 py-3 border-b border-gray-200">Main limitation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-4 py-3 border-b border-gray-200 font-semibold">Exact matching</td>
                <td class="px-4 py-3 border-b border-gray-200">Stable identifiers and exact values</td>
                <td class="px-4 py-3 border-b border-gray-200">Fails when stored and searched values differ</td>
              </tr>
              <tr>
                <td class="px-4 py-3 border-b border-gray-200 font-semibold">LIKE</td>
                <td class="px-4 py-3 border-b border-gray-200">Partial values and broad candidate retrieval</td>
                <td class="px-4 py-3 border-b border-gray-200">Can produce large candidate sets</td>
              </tr>
              <tr>
                <td class="px-4 py-3 border-b border-gray-200 font-semibold">Soundex</td>
                <td class="px-4 py-3 border-b border-gray-200">Phonetic spelling variation</td>
                <td class="px-4 py-3 border-b border-gray-200">Phonetically similar values may be unrelated</td>
              </tr>
              <tr>
                <td class="px-4 py-3 border-b border-gray-200 font-semibold">Levenshtein</td>
                <td class="px-4 py-3 border-b border-gray-200">Character-level spelling and typing errors</td>
                <td class="px-4 py-3 border-b border-gray-200">Computationally expensive as the candidate set grows</td>
              </tr>
              <tr>
                <td class="px-4 py-3 font-semibold">Regular expressions</td>
                <td class="px-4 py-3">Structural patterns and data assumptions</td>
                <td class="px-4 py-3">Overly restrictive patterns can eliminate valid candidates</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="mb-3 text-body">The evaluation showed that the strategies were complementary rather than interchangeable. Each was useful when applied to the type of uncertainty it was designed to handle.</p>

        <hr class="h-px my-8 bg-gray-200 border-0" />

        <h2 class="text-4xl font-bold">8.4 Evaluation of Combined Strategy</h2>
        <p class="mb-3 text-body">The complete search strategy was more useful than any individual algorithm considered in isolation.</p>
        <p class="mb-3 text-body">Exact matching provided fast and deterministic results where identifiers were reliable. LIKE provided a practical way to retrieve partial matches. Soundex addressed phonetic variation, while Levenshtein provided a mechanism for handling character-level differences. Regular expressions allowed searches to be shaped around structural assumptions about the data.</p>
        <p class="mb-3 text-body">The combined approach effectively provided several definitions of similarity rather than forcing every search problem into one definition.</p>

        <hr class="h-px my-8 bg-gray-200 border-0" />

        <h2 class="text-4xl font-bold">8.5 Performance Evaluation</h2>
        <p class="mb-3 text-body">Performance evaluation was primarily observational rather than a formal laboratory benchmark.</p>
        <p class="mb-3 text-body">Simple operations such as exact matching and ordinary filtering were inexpensive. More computationally intensive similarity operations became progressively less practical as the number of records being compared increased.</p>
        <p class="mb-3 text-body">These observations influenced the arrangement of the search pipeline. Rather than applying expensive similarity calculations indiscriminately, the system was structured to reduce the candidate population before invoking more costly operations.</p>
        <p class="mb-3 text-body">This reinforced the central engineering principle developed during the project:</p>

        <div class="mt-8 pt-6 border-t border-gray-200">
          <blockquote class="p-4 my-4 border-s-4 border-default bg-neutral-secondary-soft">
            <p class="text-xl italic font-medium leading-relaxed text-heading">
              Reducing the search space is often more effective than accelerating the search algorithm.
            </p>
          </blockquote>
        </div>

        <hr class="h-px my-8 bg-gray-200 border-0" />

        <h2 class="text-4xl font-bold">8.6 Operational Evaluation</h2>
        <p class="mb-3 text-body">From an operational perspective, the system converted a fragmented employee-data problem into a single searchable environment.</p>
        <p class="mb-3 text-body">Users no longer needed to know which source database contained a particular employee record or which search algorithm was appropriate for a particular spelling variation. The application handled the retrieval strategy and presented candidate records through a common interface.</p>
        <p class="mb-3 text-body">The system also supported the broader migration process by bringing historical employee information into a form that could be examined and consolidated before being used for migration activities.</p>
        <p class="mb-3 text-body">The resulting system should not be interpreted as an automatic identity-resolution authority. Its role was to make potentially related records easier to find and compare, leaving the final determination to the people responsible for the data.</p>

        <div class="mt-12 pt-6 border-t border-gray-200">
          <h3 class="text-xl font-bold text-gray-900 mb-3">Engineering Perspective</h3>
          <blockquote class="p-4 my-4 border-s-4 border-default bg-neutral-secondary-soft">
            <p class="text-xl italic font-medium leading-relaxed text-heading">
              Evaluation of an operational information system should begin with the problem it was built to solve. A technically sophisticated component is useful only when the complete system remains practical under real data, real users, and real constraints.
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
