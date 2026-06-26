<template>
  <div
    class="max-w-full mx-auto my-6 p-16 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 transition duration-300 ease-in-out hover:shadow-lg">

    <h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">Searching Employee Records
      Across Multiple Databases</h1>
    <h2 class="text-4xl font-bold">Why Exact Matching Is Not Enough</h2>
    <h3 class="text-3xl font-bold text-heading">Introduction</h3>
    <p class="mb-3 text-body">Every organization eventually faces a data consistency problem.</p>
    <p class="mb-3 text-body">Sometimes it begins with a new HR application. Later an ERP is
      introduced. Older systems continue to exist because they still
      contain historical information, while newer systems become the
      official source of truth. Over time, employee information becomes
      fragmented across multiple databases, each designed independently and
      optimized for its own purpose.</p>
    <p class="mb-3 text-body">This was exactly the challenge I encountered while developing an
      internal Employee Search &amp; Data Consolidation Management
      Information System (MIS).</p>
    <p class="mb-3 text-body">The organization maintained employee information in three
      different systems:</p>
    <ul class="max-w-full space-y-1 text-body list-disc list-inside">
      <li>
        <span class="font-bold text-indigo-600">ERP Database </span> - The organization's
          primary
          Human Resource and Finance system.
      </li>
      <li>
        <span class="font-bold text-indigo-600">Legacy HR Database</span> - A standalone HR
          application used before ERP implementation.
      </li>
      <li>
        <span class="font-bold text-indigo-600">HRDC Database</span> - An internal staff
          database
          maintained by the Human Resource Development Centre.
      </li>
    </ul>
    <p class="mb-3 text-body">Collectively these systems contained more than <span
        class="font-bold text-indigo-600">5,100
        employee records</span>.</p>
    <p class="mb-3 text-body">Although the ERP became the official HR platform, daily operations
      revealed a practical problem. Staff members frequently searched for
      employees whose names were misspelled, entered differently, or
      existed in multiple systems. The ERP's search mechanism required
      exact matches. Even a minor spelling mistake, missing space,
      punctuation mark, or abbreviated name caused the search to fail.</p>
    <p class="mb-3 text-body">Management needed a practical solution rather than replacing the
      ERP. My task was to build a helper MIS that could retrieve employee
      records regardless of which system contained them while tolerating
      common human errors.</p>
    <p class="mb-3 text-body">This article describes the engineering decisions behind that
      solution and explains why combining multiple search techniques
      produced better results than relying on a single algorithm.</p>
    <hr class="h-px my-8 bg-gray-200 border-0" />

    <h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">Understanding the Problem
    </h1>
    <p class="mb-3 text-body">At first glance the problem appeared simple.</p>
    <p class="mb-3 text-body">&quot;Search an employee.&quot;</p>
    <p class="mb-3 text-body">In reality, searching for an employee required answering several
      questions.</p>
    <p class="mb-3 text-body">Which database contains the record?</p>
    <p class="mb-3 text-body">Was the employee migrated into ERP?</p>
    <p class="mb-3 text-body">Is the employee only available in the legacy HR system?</p>
    <p class="mb-3 text-body">Does the spelling exactly match?</p>
    <p class="mb-3 text-body">Has the employee's CNIC changed?</p>
    <p class="mb-3 text-body">Was the mobile number updated?</p>
    <p class="mb-3 text-body">Did HR enter &quot;Muhammad&quot; while another operator entered
      &quot;Mohammad&quot;?</p>
    <p class="mb-3 text-body">The search system therefore needed to operate across multiple
      independent databases while accommodating inconsistencies introduced
      over many years of manual data entry.</p>
    <hr class="h-px my-8 bg-gray-200 border-0" />

    <h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">Consolidating Multiple Data
      Sources</h1>
    <p class="mb-3 text-body">Before any search algorithm could be implemented, the data itself
      needed to be consolidated.</p>
    <p class="mb-3 text-body">The ERP database presented the greatest challenge.</p>
    <p class="mb-3 text-body">Like many enterprise applications, the ERP stored information
      across a large number of highly normalized tables. Hundreds of tables
      existed, many of which were either empty, configuration-related, or
      unrelated to employee information. Without access to the ERP source
      code, understanding the schema required extensive database analysis.</p>
    <p class="mb-3 text-body">After identifying the relevant tables, I exported them from SQL
      Server using ODBC into Microsoft Access before converting them into
      MySQL-compatible SQL dumps. Once imported into MySQL, I created
      database views that combined employee, financial, placement, and
      organizational information into a single logical entity.</p>
    <p class="mb-3 text-body">This approach significantly simplified the search layer.</p>
    <p class="mb-3 text-body">Instead of querying dozens of normalized tables every time a user
      searched for an employee, the application queried a unified database
      view containing all relevant information.</p>
    <p class="mb-3 text-body">The same process was repeated for the Legacy HR database and the
      HRDC database.</p>
    <p class="mb-3 text-body">Ultimately the search engine operated against three standardized
      datasets:</p>
    <ul class="max-w-md space-y-1 text-body list-disc list-inside">
      <li>ERP View</li>
      <li>HR Database</li>
      <li>HRDC Database</li>
    </ul>
    <p class="mb-3 text-body">The application allowed users to search a specific source or query
      all sources simultaneously.</p>
    <hr class="h-px my-8 bg-gray-200 border-0" />

    <h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">Why Exact Search Fails</h1>
    <p class="mb-3 text-body">Exact matching is extremely fast.</p>
    <p class="mb-3 text-body">It is also extremely unforgiving.</p>
    <p class="mb-3 text-body">Consider the following examples.</p>
    <p class="mb-3 text-body">Employee record:</p>
    <blockquote>Muhammad Abdullah Khan</blockquote>
    <p class="mb-3 text-body">User searches for:</p>
    <blockquote>Mohammad Abdullah Khan</blockquote>
    <p class="mb-3 text-body">or</p>
    <blockquote>Muhammad A. Khan</blockquote>
    <p class="mb-3 text-body">or</p>
    <blockquote>M Abdullah Khan</blockquote>
    <p class="mb-3 text-body">Although a human immediately recognizes these as the same
      individual, an exact comparison considers them completely different
      strings.</p>
    <p class="mb-3 text-body">This limitation becomes more apparent in multilingual environments
      where names may be transliterated differently into English.</p>
    <p class="mb-3 text-body">An exact search should therefore remain available for cases where
      precise identifiers such as employee IDs or CNIC numbers are known,
      but it should never be the only search mechanism available.</p>
    <hr class="h-px my-8 bg-gray-200 border-0" />

    <h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">Expanding Search with SQL
      LIKE
    </h1>
    <p class="mb-3 text-body">The next logical improvement was SQL's LIKE operator.</p>
    <p class="mb-3 text-body">LIKE introduces wildcard matching, allowing partial text searches.</p>
    <p class="mb-3 text-body">Users can search for fragments of names instead of complete
      strings.</p>
    <p class="mb-3 text-body">For example:</p>
    <pre class="western" style="margin-bottom: 0.2in"><code class="western">Muhammad%</code></pre>
    <p class="mb-3 text-body">
      matches:</p>
    <ul class="max-w-md space-y-1 text-body list-disc list-inside">
      <li>Muhammad Ali</li>
      <li>Muhammad Khan</li>
      <li>Muhammad Abdullah</li>
    </ul>
    <p class="mb-3 text-body">This approach dramatically improves usability while remaining
      computationally inexpensive.</p>
    <p class="mb-3 text-body">However, LIKE has important limitations.</p>
    <p class="mb-3 text-body">Searching for very common prefixes quickly produces hundreds of
      results.</p>
    <p class="mb-3 text-body">Searching with extremely short fragments often becomes
      meaningless.</p>
    <p class="mb-3 text-body">LIKE is therefore an excellent filtering mechanism but not an
      intelligent matching algorithm.</p>
    <hr class="h-px my-8 bg-gray-200 border-0" />

    <h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">Phonetic Matching Using
      Soundex
    </h1>
    <p class="mb-3 text-body">Many spelling variations share similar pronunciation.</p>
    <p class="mb-3 text-body">Soundex converts words into phonetic codes, allowing names with
      similar pronunciation to produce identical search keys.</p>
    <p class="mb-3 text-body">For example:</p>
    <p class="mb-3 text-body">Muhammad</p>
    <p class="mb-3 text-body">Mohammad</p>
    <p class="mb-3 text-body">Mohamad</p>
    <p class="mb-3 text-body">may all produce similar phonetic values.</p>
    <p class="mb-3 text-body">This significantly improves search quality when users misspell
      names.</p>
    <p class="mb-3 text-body">Unfortunately, traditional Soundex works primarily on individual
      words.</p>
    <p class="mb-3 text-body">Employee names frequently contain two, three, or even four words.</p>
    <p class="mb-3 text-body">Applying Soundex independently to each word often failed to
      produce reliable matches.</p>
    <hr class="h-px my-8 bg-gray-200 border-0" />

    <h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">Designing a Multi-Word
      Soundex
      Function</h1>
    <p class="mb-3 text-body">To overcome this limitation, I implemented a custom database
      function named <span class="font-bold text-indigo-600">soundex_match_all()</span>.</p>
    <p class="mb-3 text-body">Instead of generating a phonetic code for only one word, the
      function processed each word within a name and compared them
      collectively.</p>
    <p class="mb-3 text-body">This produced noticeably better search results for multi-word
      employee names.</p>
    <p class="mb-3 text-body">The improvement came at a cost.</p>
    <p class="mb-3 text-body">The function required nested iterations across both search terms
      and database values.</p>
    <p class="mb-3 text-body">As the number of employee records increased, computational
      complexity also increased.</p>
    <p class="mb-3 text-body">This reinforced an important engineering lesson:</p>
    <p class="mb-3 text-body"><span class="font-bold text-indigo-600">Accuracy and performance almost always compete
        with
        one
        another.</span></p>
    <hr class="h-px my-8 bg-gray-200 border-0" />

    <h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">Measuring Similarity with
      Levenshtein Distance</h1>
    <p class="mb-3 text-body">Phonetic matching solves pronunciation problems.</p>
    <p class="mb-3 text-body">It does not solve typographical errors.</p>
    <p class="mb-3 text-body">Levenshtein Distance measures how many edits are required to
      transform one string into another.</p>
    <p class="mb-3 text-body">Examples include:</p>
    <ul class="max-w-md space-y-1 text-body list-disc list-inside">
      <li>insertion</li>
      <li>deletion</li>
      <li>substitution</li>
    </ul>
    <p class="mb-3 text-body">This allows searches such as:</p>
    <p class="mb-3 text-body">Abdulah</p>
    <p class="mb-3 text-body">to correctly match</p>
    <p class="mb-3 text-body">Abdullah</p>
    <p class="mb-3 text-body">provided the acceptable distance threshold remains small.</p>
    <p class="mb-3 text-body">Levenshtein proved particularly useful for correcting accidental
      typing mistakes.</p>
    <p class="mb-3 text-body">However, its computational cost grows rapidly when applied across
      thousands of records.</p>
    <p class="mb-3 text-body">Choosing an appropriate threshold therefore became critical.</p>
    <p class="mb-3 text-body">A higher threshold improved flexibility but significantly
      increased processing time.</p>
    <hr class="h-px my-8 bg-gray-200 border-0" />

    <h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">Regular Expressions</h1>
    <p class="mb-3 text-body">Regular expressions provided another powerful search mechanism.</p>
    <p class="mb-3 text-body">Instead of matching exact text, users could search patterns.</p>
    <p class="mb-3 text-body">Unlike phonetic matching, regular expressions excelled at
      structured searches where the expected format was known.</p>
    <p class="mb-3 text-body">They also avoided some of the computational costs associated with
      recursive similarity calculations.</p>
    <p class="mb-3 text-body">The challenge shifted from algorithm performance to pattern
      design.</p>
    <p class="mb-3 text-body">An overly broad pattern generated excessive results.</p>
    <p class="mb-3 text-body">An overly restrictive pattern returned nothing.</p>
    <p class="mb-3 text-body">Carefully designed expressions provided an excellent balance
      between flexibility and precision.</p>
    <hr class="h-px my-8 bg-gray-200 border-0" />

    <h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">Combining Multiple Search
      Strategies</h1>
    <p class="mb-3 text-body">One of the biggest lessons from this project was that no
      individual algorithm consistently produced the best results.</p>
    <p class="mb-3 text-body">Each solved a different class of problem.</p>
    <p class="mb-3 text-body">Exact matching was ideal for identifiers.</p>
    <p class="mb-3 text-body">LIKE handled partial searches.</p>
    <p class="mb-3 text-body">Soundex handled pronunciation differences.</p>
    <p class="mb-3 text-body">Levenshtein corrected typographical errors.</p>
    <p class="mb-3 text-body">Regular expressions supported structured searches.</p>
    <p class="mb-3 text-body">Rather than selecting one algorithm, the application allowed users
      to choose the most appropriate strategy or combine multiple search
      methods into a unified result set using SQL UNION operations.</p>
    <p class="mb-3 text-body">This hybrid approach produced substantially better search accuracy
      while preserving acceptable performance.</p>
    <hr class="h-px my-8 bg-gray-200 border-0" />

    <h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">Beyond Searching: ERP Data
      Integration</h1>
    <p class="mb-3 text-body">The project eventually expanded beyond employee retrieval.</p>
    <p class="mb-3 text-body">Once duplicate records could be identified reliably, another
      operational challenge emerged.</p>
    <p class="mb-3 text-body">Creating new employees inside the ERP required navigating multiple
      screens and manually entering related data.</p>
    <p class="mb-3 text-body">To streamline onboarding, I developed a companion utility that
      generated ERP-compatible JSON files.</p>
    <p class="mb-3 text-body">Users entered employee information once into the helper MIS.</p>
    <p class="mb-3 text-body">The system then produced structured JSON containing all required
      relationships and foreign keys expected by the ERP.</p>
    <p class="mb-3 text-body">Instead of repetitive manual entry, staff could perform bulk
      imports while maintaining consistent data quality.</p>
    <hr class="h-px my-8 bg-gray-200 border-0" />

    <h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">Lessons Learned</h1>
    <p class="mb-3 text-body">This project reinforced several principles that continue to
      influence how I design business systems today.</p>
    <p class="mb-3 text-body">First, technical problems are often data problems before they
      become software problems.</p>
    <p class="mb-3 text-body">Second, consolidating information into a unified logical model
      simplifies application development far more than writing increasingly
      complex search queries.</p>
    <p class="mb-3 text-body">Third, no search algorithm is universally superior. Practical
      systems benefit from combining multiple techniques rather than
      searching for a single &quot;perfect&quot; solution.</p>
    <p class="mb-3 text-body">Finally, successful enterprise software is not measured solely by
      elegant code. It is measured by how effectively it helps people
      complete their work with greater accuracy and less effort.</p>
    <hr class="h-px my-8 bg-gray-200 border-0" />

    <h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">Conclusion</h1>
    <p class="mb-3 text-body">The Employee Search &amp; Data Consolidation MIS transformed
      fragmented employee information into a unified, searchable platform.</p>
    <p class="mb-3 text-body">More importantly, it demonstrated that thoughtful data engineering
      can significantly improve the usability of existing enterprise
      systems without replacing them.</p>
    <p class="mb-3 text-body">The project ultimately consolidated more than <span
        class="font-bold text-indigo-600">5,100
        employee records</span> from three independent systems, introduced
      advanced fuzzy-search capabilities, simplified ERP onboarding through
      JSON integration, and reduced the operational effort required to
      locate and manage employee information.</p>
    <p class="mb-3 text-body">Although developed as an internal tool, the engineering principles
      behind it—data consolidation, layered search strategies, and
      practical system integration—are applicable to many organizations
      facing similar challenges as they modernize legacy information
      systems.</p>
  </div>
</template>

<script setup>

</script>