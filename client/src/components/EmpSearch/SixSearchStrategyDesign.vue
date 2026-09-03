<template>
	<div>
		<h2 id="accordion-flush-heading-6">
			<button type="button"
				class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
				data-accordion-target="#accordion-flush-body-6" aria-expanded="false"
				aria-controls="accordion-flush-body-6">
				<span class="font-bold text-indigo-600">06. Search Algorithms</span>
				<svg data-accordion-icon class="w-5 h-5 rotate-180 shrink-0" aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						d="m5 15 7-7 7 7" />
				</svg>
			</button>
		</h2>
		<div id="accordion-flush-body-6" class="hidden" aria-labelledby="accordion-flush-heading-3">
			<div class="py-5 text-body border-b border-default">
				<h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">
					06 Search Strategy Design
				</h1>

				<div class="mt-12 pt-6 border-t border-gray-200">
					<blockquote class="p-4 my-4 border-s-4 border-default bg-neutral-secondary-soft">
						<p class="text-xl italic font-medium leading-relaxed text-heading">
							<em class="font-bold text-black-600 not-italic">
								&quot;Every search algorithm is an approximation of human
								reasoning. Each succeeds under certain conditions and fails under
								others.&quot;
							</em>
						</p>
					</blockquote>
				</div>

				<p class="mb-3 text-body">Once the employee records had been consolidated into a unified
					search model, the remaining challenge was identifying duplicate
					records despite inconsistencies in the underlying data.</p>
				<p class="mb-3 text-body">Names were occasionally misspelled.</p>
				<p class="mb-3 text-body">Some databases stored abbreviated forms.</p>
				<p class="mb-3 text-body">Others contained typographical errors, inconsistent spacing, or
					variations in spelling accumulated over many years of manual data
					entry.</p>
				<p class="mb-3 text-body">No single retrieval technique proved sufficiently robust to
					address every scenario.</p>
				<p class="mb-3 text-body">Instead of searching for a single &quot;best&quot; algorithm, the
					project adopted a different philosophy.</p>
				<p class="mb-3 text-body">Each algorithm was viewed as a specialised tool designed to solve
					a particular class of matching problems.</p>
				<p class="mb-3 text-body">The overall search system therefore became a composition of
					complementary strategies rather than a dependence upon any individual
					technique.</p>
				<p class="mb-3 text-body">This engineering decision significantly increased the probability
					of locating existing employee records while reducing the likelihood
					of overlooking duplicates.</p>
				<hr class="mt-6 border-gray-200" />

				<h2 class="mt-3 mb-3 text-4xl font-bold">Why One Search Algorithm Was Not Enough</h2>
				<p class="mb-3 text-body">Human names rarely conform to strict rules.</p>
				<p class="mb-3 text-body">An employee may appear under slightly different spellings across
					independent databases.</p>
				<p class="mb-3 text-body">Middle names may be omitted.</p>
				<p class="mb-3 text-body">Spaces and punctuation may vary.</p>
				<p class="mb-3 text-body">Typing mistakes are unavoidable.</p>
				<p class="mb-3 text-body">Consequently, a search strategy relying solely upon exact matching
					inevitably fails whenever the stored representation differs from the
					user's input.</p>
				<p class="mb-3 text-body">Conversely, search methods designed to tolerate variation often
					return excessive numbers of candidate records.</p>
				<p class="mb-3 text-body">The engineering challenge therefore becomes balancing precision
					against recall.</p>
				<p class="mb-3 text-body">Rather than attempting to maximise one at the expense of the
					other, the system deliberately employed several complementary search
					strategies.</p>
				<p class="mb-3 text-body">Each compensated for weaknesses present in the others.</p>

				<h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">6.1 Exact
					Matching</h1>
				<h3 class="text-xl font-bold text-gray-900 mb-3">Engineering Principle</h3>
				<blockquote>The fastest search algorithm is often the least tolerant
					of imperfect data. Real-world engineering requires balancing
					computational efficiency against the variability of human-generated
					information.</blockquote>
				<hr class="mt-6 border-gray-200" />

				<h3 class="text-xl font-bold text-gray-900 mb-3">Exact Matching</h3>
				<p class="mb-3 text-body">The simplest method of locating an employee record is an exact
					comparison against one or more database fields. This approach relies
					on SQL equality operators (<code class="western">=</code>), allowing
					indexed columns such as employee codes or national identity numbers
					to be searched extremely efficiently.</p>
				<p class="mb-3 text-body">For structured identifiers that are expected to be unique and
					correctly entered, exact matching remains the preferred technique.
					Queries execute rapidly, require minimal computational resources, and
					fully utilize database indexes.</p>
				<p class="mb-3 text-body">However, employee information collected over many years rarely
					remains perfectly consistent. During the migration project, data
					originated from several independent systems developed by different
					vendors and maintained by different departments. As a result, even
					records representing the same employee frequently contained
					variations such as:</p>
				<ul class="max-w-full space-y-1 text-body list-disc list-inside">
					<li>Differences in spelling
					</li>
					<li>Additional spaces
					</li>
					<li>Missing middle names
					</li>
					<li>Abbreviations
					</li>
					<li>Typographical mistakes
					</li>
					<li>Different capitalization
					</li>
					<li>
						<p class="mb-3 text-body">Alternate punctuation </p>
					</li>
				</ul>
				<p class="mb-3 text-body">For example:</p>
				<div id="code-block-viewer" dir="ltr">
					<pre class="western"><code class="western">Muhammad Ali</code>
						<code class="western">Muhamad Ali</code>
						<code class="western">Muhammad  Ali</code>
						<code class="western">Muhammad A. Ali</code></pre>
				</div>
				<p class="mb-3 text-body">Although these names clearly refer to the same individual, an
					exact comparison treats each value as completely different.</p>
				<p class="mb-3 text-body">Consequently, exact matching was primarily used for fields whose
					values were expected to remain stable, including employee
					identifiers, CNIC numbers, or other unique codes. It served as the
					foundation of the search engine but was intentionally supplemented
					with progressively more tolerant search strategies capable of
					handling imperfect real-world data.</p>
				<hr class="mt-6 border-gray-200" />

				<h3 class="text-xl font-bold text-gray-900 mb-3">Strengths</h3>
				<ul class="max-w-full space-y-1 text-body list-disc list-inside">
					<li>Extremely fast execution
					</li>
					<li>Fully indexable
					</li>
					<li>Minimal CPU consumption
					</li>
					<li>Ideal for unique identifiers
					</li>
					<li>
						<p class="mb-3 text-body">Predictable query plans</p>
					</li>
				</ul>
				<h3 class="text-xl font-bold text-gray-900 mb-3">Limitations</h3>
				<ul class="max-w-full space-y-1 text-body list-disc list-inside">
					<li>No tolerance for spelling errors
					</li>
					<li>Sensitive to whitespace and
						punctuation
					</li>
					<li>Unable to detect duplicate records
						containing inconsistent text
					</li>
					<li>
						<p class="mb-3 text-body">Ineffective when users only remember part of a value </p>
					</li>
				</ul>

				<h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">6.2 LIKE</h1>
				<h2 class="text-4xl font-bold">When Exact Matching Fails</h2>
				<p class="mb-3 text-body">Exact matching is computationally inexpensive and highly reliable
					when the search term is known precisely. However, real-world employee
					data rarely satisfies this ideal condition. Users frequently remember
					only fragments of a name, an incomplete CNIC, part of a mobile
					number, or an email address. In many cases, spelling inconsistencies,
					omitted spaces, abbreviations, or simple typing mistakes prevent an
					exact match from returning the desired employee record.</p>
				<p class="mb-3 text-body">During the migration process, these situations occurred regularly.
					Staff members searching for an employee often possessed only partial
					information rather than the complete identifier stored within the
					database. Consequently, relying solely on exact matching would have
					resulted in a significant number of unsuccessful searches.</p>
				<p class="mb-3 text-body">To address this limitation, the Employee Search &amp; Data
					Consolidation MIS incorporated SQL's <span class="font-bold text-indigo-600">LIKE</span>
					operator
					as the second stage of the search pipeline.</p>
				<hr class="h-px my-8 bg-gray-200 border-0" />

				<h2 class="text-4xl font-bold">Flexible Pattern-Based Searching</h2>
				<p class="mb-3 text-body">Unlike exact comparison, the LIKE operator allows pattern matching
					through the use of wildcard characters. Rather than requiring the
					entire field value to be known, the search can match any record
					containing the specified sequence of characters.</p>
				<p class="mb-3 text-body">For example, searching for:</p>
				<div id="code-block-viewer" dir="ltr">
					<pre class="western" style="margin-bottom: 0.2in"><code class="western">Ali</code></pre>
				</div>
				<p class="mb-3 text-body">may successfully retrieve records such as:</p>
				<ul class="max-w-full space-y-1 text-body list-disc list-inside">
					<li>Ali Ahmad
					</li>
					<li>Muhammad Ali
					</li>
					<li>Ali Khan
					</li>
					<li>
						Syed Ali Shah
					</li>
				</ul>
				<p class="mb-3 text-body">Similarly, the same mechanism can be applied to other attributes
					including:</p>
				<ul class="max-w-full space-y-1 text-body list-disc list-inside">
					<li>CNIC
					</li>
					<li>Mobile number
					</li>
					<li>Telephone number
					</li>
					<li>Email address
					</li>
					<li>
						Employee code
					</li>
				</ul>
				<p class="mb-3 text-body">This flexibility makes the LIKE operator useful far beyond
					employee names. Any field that may be only partially known by the
					user can benefit from pattern-based searching.</p>
				<hr class="h-px my-8 bg-gray-200 border-0" />

				<h2 class="text-4xl font-bold">Engineering Trade-Offs</h2>
				<p class="mb-3 text-body">The LIKE operator significantly increases the probability of
					locating the desired employee, but this increased flexibility
					introduces its own challenges.</p>
				<p class="mb-3 text-body">If the search pattern is overly restrictive, legitimate matches
					may still be missed. Conversely, patterns that are too broad can
					return hundreds of candidate records, forcing the user to manually
					inspect the results.</p>
				<p class="mb-3 text-body">For example, searching for a common surname such as <span
						class="font-bold text-indigo-600">Ali</span>
					may produce a large result set because the sequence appears both as
					an independent name and as part of many compound names. The objective
					therefore is not merely to increase the number of returned records,
					but to balance search flexibility against result usefulness.</p>
				<p class="mb-3 text-body">From an engineering perspective, the LIKE operator represents the
					first step away from deterministic searching toward heuristic
					searching. Rather than guaranteeing a single answer, it provides a
					manageable candidate set from which the correct employee can often be
					identified.</p>
				<hr class="h-px my-8 bg-gray-200 border-0" />

				<h2 class="text-4xl font-bold">Practical Use Within the MIS</h2>
				<p class="mb-3 text-body">In practice, the LIKE operator served as one component of a larger
					search strategy rather than a standalone solution. The system
					executed multiple complementary search mechanisms—including exact
					matching, phonetic matching, approximate string matching, and regular
					expressions—to compensate for the weaknesses of any individual
					technique.</p>
				<p class="mb-3 text-body">Additionally, during experimentation it became apparent that the
					LIKE operator could also serve as an effective pre-filter for more
					computationally expensive algorithms. By first reducing the candidate
					set using inexpensive pattern matching, subsequent techniques such as
					Levenshtein distance or custom multi-word Soundex could operate on a
					substantially smaller dataset. This hybrid strategy significantly
					reduced execution time while preserving search accuracy, illustrating
					an important engineering principle: simple algorithms often become
					considerably more powerful when used strategically in combination
					with more sophisticated methods.</p>
				<hr class="h-px my-8 bg-gray-200 border-0" />

				<div class="mt-12 pt-6 border-t border-gray-200">
					<h3 class="text-xl font-bold text-gray-900 mb-3">
						Engineering Insight
					</h3>
					<blockquote class="p-4 my-4 border-s-4 border-default bg-neutral-secondary-soft">
						<p class="text-xl italic font-medium leading-relaxed text-heading">
							The LIKE operator demonstrates that effective
							search is not always about finding the answer directly. Sometimes its
							greatest value lies in efficiently eliminating unlikely candidates,
							allowing more sophisticated algorithms to focus their computational
							effort where it matters most.
						</p>
					</blockquote>
				</div>

				<hr class="h-px my-8 bg-gray-200 border-0" />
				<h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">
					6.3 Soundex</h1>
				<h2 class="text-4xl font-bold">Beyond Exact Characters</h2>
				<p class="mb-3 text-body">Neither Exact Matching nor the <code class="western">LIKE</code>
					operator attempts to understand how a name sounds. Both techniques
					operate purely on characters stored within the database.
					Consequently, they remain sensitive to spelling differences even when
					two names are pronounced almost identically.</p>
				<p class="mb-3 text-body">This limitation became increasingly apparent during the migration
					process. Employee information had been entered over many years by
					different departments, often without standardized spelling
					conventions. Minor typographical differences were common, and
					transliteration between local languages and English introduced
					additional inconsistency.</p>
				<p class="mb-3 text-body">For example, the following names would generally be considered
					equivalent by a human reader:</p>
				<div id="code-block-viewer" dir="ltr">
					<pre class="western"><code class="western">Muhammad</code>
<code class="western">Mohammad</code>
<code class="western">Muhamad</code>
<code class="western">Mohamad</code></pre>
				</div>
				<p class="mb-3 text-body">Although each spelling represents the same pronunciation,
					traditional string comparison treats every variation as a completely
					different value.</p>
				<p class="mb-3 text-body">To bridge this gap, the Employee Search &amp; Data Consolidation
					MIS incorporated <strong>phonetic matching</strong> using MySQL's
					built-in <code class="western">SOUNDEX()</code> function.</p>
				<hr class="h-px my-8 bg-gray-200 border-0" />

				<h2 class="text-4xl font-bold">How Soundex Works</h2>
				<p class="mb-3 text-body">Unlike traditional comparison algorithms, Soundex transforms a
					word into a compact phonetic code representing its approximate
					pronunciation rather than its exact spelling.</p>
				<p class="mb-3 text-body">Instead of comparing characters directly, two words are first
					converted into their phonetic representations.</p>
				<p class="mb-3 text-body">For example:</p>
				<table width="218" cellpadding="2" cellspacing="0">
					<col width="106" />
					<col width="104" />
					<thead>
						<tr>
							<th width="106" style="border: none; padding: 0in">
								<p class="mb-3 text-body">Original
									Name</p>
							</th>
							<th width="104" style="border: none; padding: 0in">
								<p class="mb-3 text-body">Soundex Code</p>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td width="106" style="border: none; padding: 0in">
								<p class="mb-3 text-body">Muhammad</p>
							</td>
							<td width="104" style="border: none; padding: 0in">
								<p class="mb-3 text-body">M530</p>
							</td>
						</tr>
						<tr>
							<td width="106" style="border: none; padding: 0in">
								<p class="mb-3 text-body">Mohamad</p>
							</td>
							<td width="104" style="border: none; padding: 0in">
								<p class="mb-3 text-body">M530</p>
							</td>
						</tr>
						<tr>
							<td width="106" style="border: none; padding: 0in">
								<p class="mb-3 text-body">Muhamad</p>
							</td>
							<td width="104" style="border: none; padding: 0in">
								<p class="mb-3 text-body">M530</p>
							</td>
						</tr>
					</tbody>
				</table>
				<p class="mb-3 text-body">Although the spellings differ, their phonetic codes remain
					identical, allowing the search engine to identify likely matches that
					exact comparison would miss.</p>
				<p class="mb-3 text-body">From an engineering perspective, this represents a fundamental
					shift.</p>
				<p class="mb-3 text-body">The objective is no longer to determine whether two strings are
					identical, but whether they are likely to represent the same spoken
					name.</p>
				<hr class="h-px my-8 bg-gray-200 border-0" />

				<h2 class="text-4xl font-bold">Practical Benefits</h2>
				<p class="mb-3 text-body">During migration activities, phonetic searching proved
					particularly useful for employee names entered manually by different
					operators over several years.</p>
				<p class="mb-3 text-body">Unlike Exact Matching, which rejected even a single spelling
					variation, Soundex tolerated many common inconsistencies while
					remaining computationally inexpensive compared to more advanced
					similarity algorithms.</p>
				<p class="mb-3 text-body">This significantly increased the probability of locating an
					employee whose name had been entered differently across multiple
					systems.</p>
				<p class="mb-3 text-body">Since MySQL already provided an implementation of the algorithm,
					integrating phonetic matching into the search pipeline required
					minimal development effort while providing a noticeable improvement
					in search coverage.</p>
				<hr class="h-px my-8 bg-gray-200 border-0" />

				<h2 class="text-4xl font-bold">Engineering Limitations</h2>
				<p class="mb-3 text-body">Although Soundex represented a considerable improvement over exact
					comparison, it quickly revealed an important limitation.</p>
				<p class="mb-3 text-body">The algorithm was originally designed to encode <strong>individual
						words</strong>.</p>
				<p class="mb-3 text-body">Real employee names rarely consist of only one word.</p>
				<p class="mb-3 text-body">Examples such as:</p>
				<div id="Section1" dir="ltr">
					<pre class="western">
							<a name="code-block-viewer"></a><code class="western">Muhammad Ali Khan</code>
						<code class="western">Syed Muhammad Shah</code>
						<code class="western">Abdul Rahman</code></pre>
				</div>
				<p class="mb-3 text-body">contain multiple independent words, each contributing meaningful
					information about the person's identity.</p>
				<p class="mb-3 text-body">Standard Soundex processes only a single string and produces a
					single phonetic code. As the number of words increases, much of the
					distinguishing information is effectively compressed into one
					representation.</p>
				<p class="mb-3 text-body">Consequently, names containing several words often produced
					phonetic codes that were either insufficiently descriptive or failed
					to distinguish between different employees sharing common first
					names.</p>
				<p class="mb-3 text-body">In practice, this limitation became increasingly apparent as the
					dataset grew.</p>
				<p class="mb-3 text-body">The algorithm was capable of handling simple spelling variations,
					yet struggled to preserve the richer structure found in multi-word
					names.</p>
				<p class="mb-3 text-body">Rather than abandoning phonetic searching altogether, this
					observation motivated the development of a custom solution capable of
					extending Soundex beyond its original design.</p>
				<hr class="h-px my-8 bg-gray-200 border-0" />

				<div class="mt-12 pt-6 border-t border-gray-200">
					<h3 class="text-xl font-bold text-gray-900 mb-3">
						Engineering Insight
					</h3>
					<blockquote class="p-4 my-4 border-s-4 border-default bg-neutral-secondary-soft">
						<p class="text-xl italic font-medium leading-relaxed text-heading">
							Every algorithm is built upon assumptions about
							the problem it is trying to solve. Soundex assumes that a single word
							adequately represents a person's identity. Real-world employee
							databases demonstrated that this assumption often does not hold.
							Rather than discarding the algorithm, the engineering challenge
							became identifying where its assumptions failed and extending it to
							better match operational reality.
						</p>
					</blockquote>
				</div>

				<hr class="h-px my-8 bg-gray-200 border-0" />

				<h2 class="text-4xl font-bold">Looking Ahead</h2>
				<p class="mb-3 text-body">The limitations of standard Soundex ultimately led to the
					development of a custom <strong>Multi-word Soundex</strong>
					implementation. Instead of treating an employee name as one
					continuous string, the enhanced algorithm processed each individual
					word separately before combining the phonetic information into a more
					expressive representation.</p>
				<p class="mb-3 text-body">While this significantly improved search accuracy for complex
					names, it also introduced a new engineering challenge: computational
					complexity.</p>
				<p class="mb-3 text-body">The following section examines how this custom approach was
					designed, the benefits it provided, and the performance trade-offs
					that accompanied its increased flexibility.</p>

				<h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">
					6.4 Multi-word Soundex</h1>
				<h2 class="text-4xl font-bold">When Standard Soundex Was No Longer Enough</h2>
				<p class="mb-3 text-body">While the built-in Soundex algorithm successfully handled many
					spelling variations, it became increasingly ineffective when applied
					to the naming conventions present within the organization's employee
					databases.</p>
				<p class="mb-3 text-body">Unlike datasets consisting primarily of single-word names, the
					employee records frequently contained multiple meaningful components.
					A typical record might include a first name, middle name, family
					name, or honorific, all stored as part of the employee's full name.</p>
				<p class="mb-3 text-body">Examples included names such as:</p>
				<div id="code-block-viewer" dir="ltr">
					<pre class="western"><code class="western">Muhammad Ali Khan</code>
<code class="western">Syed Muhammad Shah</code>
<code class="western">Abdul Rahman</code>
<code class="western">Muhammad Asif</code></pre>
				</div>
				<p class="mb-3 text-body">From a human perspective, each word contributes important
					identifying information.</p>
				<p class="mb-3 text-body">Standard Soundex, however, was originally designed to generate a
					phonetic representation for a single word. Applying it directly to an
					entire multi-word string significantly reduced its effectiveness.</p>
				<p class="mb-3 text-body">As the number of words increased, the phonetic representation
					became less capable of distinguishing between employees who shared
					common first names but differed elsewhere.</p>
				<p class="mb-3 text-body">This was particularly problematic within South Asian naming
					conventions, where names such as <span class="font-bold text-indigo-600">Muhammad</span>, <span
						class="font-bold text-indigo-600">Ali</span>,
					<span class="font-bold text-indigo-600">Ahmed</span>, <span
						class="font-bold text-indigo-600">Khan</span>, and <span
						class="font-bold text-indigo-600">Hussain</span>
					appear frequently across the population.
				</p>
				<p class="mb-3 text-body">The result was a noticeable increase in false positives while
					simultaneously missing legitimate matches.</p>
				<hr class="h-px my-8 bg-gray-200 border-0" />

				<h2 class="text-4xl font-bold">Extending the Algorithm</h2>
				<p class="mb-3 text-body">Rather than replacing Soundex entirely, the objective became
					extending its capabilities while preserving its strengths.</p>
				<p class="mb-3 text-body">Instead of treating the employee's full name as one continuous
					string, the custom algorithm processed each individual word
					separately.</p>
				<p class="mb-3 text-body">Conceptually, the process followed four stages.</p>
				<ol>
					<li>Split the employee name into
						individual words.
					</li>
					<li>Generate the Soundex code for each
						word independently.
					</li>
					<li>Combine the resulting phonetic
						codes into a composite representation.
					</li>
					<li>
						Compare the composite phonetic representation against
						similarly processed employee records.
					</li>
				</ol>
				<p class="mb-3 text-body">For example:</p>
				<table cellpadding="2" cellspacing="2">
					<thead>
						<tr>
							<th style="border: none; padding: 0in">
								<p class="mb-3 text-body">Employee Name</p>
							</th>
							<th style="border: none; padding: 0in">
								<p class="mb-3 text-body">Individual Soundex Codes</p>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td style="border: none; padding: 0in">
								<p class="mb-3 text-body">Muhammad Ali Khan</p>
							</td>
							<td style="border: none; padding: 0in">
								<p class="mb-3 text-body">M530 – A400 – K500</p>
							</td>
						</tr>
						<tr>
							<td style="border: none; padding: 0in">
								<p class="mb-3 text-body">Mohammad Ali Khan</p>
							</td>
							<td style="border: none; padding: 0in">
								<p class="mb-3 text-body">M530 – A400 – K500</p>
							</td>
						</tr>
						<tr>
							<td style="border: none; padding: 0in">
								<p class="mb-3 text-body">Muhamad Ali Khan</p>
							</td>
							<td style="border: none; padding: 0in">
								<p class="mb-3 text-body">M530 – A400 – K500</p>
							</td>
						</tr>
					</tbody>
				</table>
				<p class="mb-3 text-body">Although the spellings differ slightly, each individual word still
					generates nearly identical phonetic representations, allowing the
					composite search to remain highly tolerant of spelling variations
					while preserving the structure of the original name.</p>
				<p class="mb-3 text-body">From an engineering standpoint, this represented an important
					conceptual improvement.</p>
				<p class="mb-3 text-body">Instead of asking:</p>
				<blockquote>&quot;Do these two names sound similar?&quot;</blockquote>
				<p class="mb-3 text-body">the algorithm now asked:</p>
				<blockquote>&quot;Do the individual components of these names sound
					similar?&quot;</blockquote>
				<hr class="h-px my-8 bg-gray-200 border-0" />

				<h2 class="text-4xl font-bold">Why This Improved Search Accuracy</h2>
				<p class="mb-3 text-body">Breaking a name into multiple phonetic components preserved
					considerably more information than treating the name as a single
					string.</p>
				<p class="mb-3 text-body">Common first names no longer dominated the comparison.</p>
				<p class="mb-3 text-body">Employees sharing the same first name but different surnames
					became much easier to distinguish.</p>
				<p class="mb-3 text-body">Similarly, spelling mistakes occurring within only one portion of
					the name no longer prevented the remaining words from contributing
					useful matching information.</p>
				<p class="mb-3 text-body">This significantly improved duplicate detection across multiple
					databases where inconsistent manual data entry had accumulated over
					many years.</p>
				<hr class="h-px my-8 bg-gray-200 border-0" />

				<h2 class="text-4xl font-bold">The Hidden Engineering Cost</h2>
				<p class="mb-3 text-body">Every engineering improvement introduces a corresponding cost.</p>
				<p class="mb-3 text-body">In this case, the increased search accuracy came at the expense of
					computational complexity.</p>
				<p class="mb-3 text-body">The custom implementation processed every word individually.</p>
				<p class="mb-3 text-body">Internally, the implementation repeatedly invoked the standard
					Soundex function while iterating through each word within the
					employee name.</p>
				<p class="mb-3 text-body">Conceptually, the algorithm resembled the following process:</p>
				<div id="Section1" dir="ltr">
					<pre class="western"><a name="code-block-viewer"></a><code class="western">Employee Name</code>
<code class="western">        │</code>
<code class="western">Split into Words</code>
<code class="western">        │</code>
<code class="western"> ┌──────┼────────┐</code>
<code class="western"> │      │        │</code>
<code class="western">Word1  Word2   Word3</code>
<code class="western"> │      │        │</code>
<code class="western">Soundex Soundex Soundex</code>
<code class="western"> │      │        │</code>
<code class="western"> └──────┼────────┘</code>
<code class="western">        │</code>
<code class="western">Combine Phonetic Codes</code>
<code class="western">        │</code>
<code class="western">Perform Comparison</code></pre>
				</div>
				<p class="mb-3 text-body">Although elegant conceptually, this meant that every additional
					word increased the amount of work performed.</p>
				<p class="mb-3 text-body">Names containing four or five components required proportionally
					more phonetic processing than single-word names.</p>
				<p class="mb-3 text-body">When executed against thousands of employee records, this
					additional processing accumulated rapidly.</p>
				<hr class="h-px my-8 bg-gray-200 border-0" />

				<h2 class="text-4xl font-bold">Practical Performance Observations</h2>
				<p class="mb-3 text-body">The implementation proved highly effective for improving search
					quality.</p>
				<p class="mb-3 text-body">However, practical testing revealed that combining recursive word
					processing with phonetic comparison significantly increased execution
					time on larger datasets.</p>
				<p class="mb-3 text-body">Although no formal benchmarking was conducted, operational
					experience consistently showed that the algorithm consumed noticeably
					more processing resources than Exact Matching, LIKE, or standard
					Soundex searches.</p>
				<p class="mb-3 text-body">This represented an important engineering lesson.</p>
				<p class="mb-3 text-body">Improving search intelligence almost always requires additional
					computational effort.</p>
				<p class="mb-3 text-body">Rather than searching for a universally superior algorithm,
					engineers must balance search quality against execution cost.</p>
				<hr class="h-px my-8 bg-gray-200 border-0" />

				<div class="mt-12 pt-6 border-t border-gray-200">
					<h3 class="text-xl font-bold text-gray-900 mb-3">
						Engineering Principle
					</h3>
					<blockquote class="p-4 my-4 border-s-4 border-default bg-neutral-secondary-soft">
						<p class="text-xl italic font-medium leading-relaxed text-heading">
							Increasing algorithmic intelligence often
							increases computational cost. The engineering objective is therefore
							not to maximize sophistication, but to apply the appropriate level of
							sophistication only where it delivers meaningful operational value.
						</p>
					</blockquote>
				</div>

				<hr class="h-px my-8 bg-gray-200 border-0" />

				<h2 class="text-4xl font-bold">Why It Was Still Worth Implementing</h2>
				<p class="mb-3 text-body">Despite its higher computational requirements, Multi-word Soundex
					solved a real operational problem that simpler search techniques
					could not address.</p>
				<p class="mb-3 text-body">Employee records spanning multiple systems had accumulated years
					of inconsistent spelling, transliteration differences, and variations
					in how names were entered. By preserving the phonetic structure of
					each individual word, the algorithm substantially increased the
					likelihood of identifying duplicate records that would otherwise have
					remained undiscovered.</p>
				<p class="mb-3 text-body">Although computationally more expensive, the improvement in search
					quality justified its use during migration activities, where
					correctness was more valuable than raw execution speed.</p>
				<hr class="h-px my-8 bg-gray-200 border-0" />

				<h2 class="text-4xl font-bold">Transition to the Next Method</h2>
				<p class="mb-3 text-body">Even with these improvements, Multi-word Soundex remained a
					phonetic algorithm.</p>
				<p class="mb-3 text-body">Its effectiveness depended on words sounding alike.</p>
				<p class="mb-3 text-body">It could not measure how different two strings actually were.</p>
				<p class="mb-3 text-body">For example:</p>
				<div id="Section2" dir="ltr">
					<pre class="western">
							<a name="code-block-viewer Copy 1"></a>
							<code class="western">Muhammad</code>
							<code class="western">Muhamad</code>
							<code class="western">Adeel</code>
							<code class="western">Adel</code>
							<code class="western">Sajid</code>
							<code class="western">Saeed</code>
						</pre>
				</div>
				<p class="mb-3 text-body">Some names differ by only a single missing character.</p>
				<p class="mb-3 text-body">Others differ by substitutions, insertions, or deletions that
					phonetic encoding cannot adequately capture.</p>
				<p class="mb-3 text-body">Addressing these cases required a fundamentally different
					approach—one that measured the <span class="font-bold text-indigo-600">distance between strings
						rather than their pronunciation</span>.</p>

				<p class="mb-3 text-body">This leads naturally to the next search technique:</p>
				<div class="mt-12 pt-6 border-t border-gray-200">
					<blockquote><span class="font-bold text-indigo-600">
							Levenshtein Distance
						</span>
						, an algorithm capable of quantifying how many editing operations are required to
						transform one string into another.
					</blockquote>
				</div>

				<hr class="h-px my-8 bg-gray-200 border-0" />

				<h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">
					6.5 Levenshtein Distance</h1>
				<h2 class="text-4xl font-bold">Edit Distance for Approximate Matching</h2>
				<p class="mb-3 text-body">Unlike the previous search methods, which relied on exact values,
					partial matches, phonetic similarity, or structural patterns,
					Levenshtein Distance measures the similarity between two strings by
					calculating the minimum number of editing operations required to
					transform one string into another. These operations consist of
					character insertions, deletions, and substitutions.</p>
				<p class="mb-3 text-body">This approach is particularly effective for recovering records
					affected by human typing errors, where the intended value is visually
					similar to the stored value but no longer satisfies exact or phonetic
					matching criteria.</p>
				<p class="mb-3 text-body">Unlike Soundex, which attempts to identify words that sound alike,
					Levenshtein Distance measures how closely two strings resemble one
					another regardless of pronunciation. Consequently, it proved
					particularly useful for correcting typographical mistakes introduced
					during manual data entry.</p>
				<hr class="h-px my-8 bg-gray-200 border-0" />

				<h2 class="text-4xl font-bold">Handling Typographical Errors</h2>
				<p class="mb-3 text-body">Employee records accumulated over many years inevitably contained
					minor inconsistencies caused by manual data entry. Typical examples
					included omitted characters, duplicated letters, accidental
					substitutions, and small spelling mistakes.</p>
				<p class="mb-3 text-body">These errors often prevented exact searches from locating the
					intended employee, even though the correct record differed by only
					one or two characters.</p>
				<p class="mb-3 text-body">Levenshtein Distance addressed this problem by measuring the
					number of edits required to transform the search term into the stored
					value, allowing records with minor differences to be recovered
					successfully.</p>
				<hr class="h-px my-8 bg-gray-200 border-0" />

				<h2 class="text-4xl font-bold">Performance Considerations</h2>
				<p class="mb-3 text-body">Among all search methods implemented within the system,
					Levenshtein Distance imposed the greatest computational cost.</p>
				<p class="mb-3 text-body">Although no formal performance study was conducted, several
					informal benchmark experiments were performed during development to
					understand the practical impact of increasing the permitted edit
					distance. These experiments consistently demonstrated that execution
					time increased dramatically as additional character modifications
					were allowed.</p>
				<p class="mb-3 text-body">Routine searches therefore limited the edit distance to <span
						class="font-bold text-indigo-600">two
						character modifications</span> when applied across the complete
					employee dataset. This threshold provided a practical balance between
					search accuracy and acceptable response time during normal operation.</p>
				<p class="mb-3 text-body">Rather than representing a fixed limitation of the algorithm
					itself, this threshold reflected an engineering decision based on the
					size of the search space being evaluated.</p>
				<hr class="h-px my-8 bg-gray-200 border-0" />

				<h2 class="text-4xl font-bold">Progressive Search-Space Reduction</h2>
				<p class="mb-3 text-body">The two-character limit applied primarily when Levenshtein
					Distance was evaluated against the entire dataset.</p>
				<p class="mb-3 text-body">As the search engine evolved, it became apparent that
					computationally expensive algorithms should not necessarily operate
					on every record. Instead, inexpensive filters such as the <code class="western">LIKE</code>
					operator were first used to eliminate obviously unrelated records.
					Levenshtein Distance was then applied only to the much smaller subset
					that remained.</p>
				<p class="mb-3 text-body">Unlike the earlier approach of combining independent search
					strategies through <code class="western">UNION</code>, this
					optimization combined multiple conditions within the same query using
					logical <code class="western">AND</code> operators. The inexpensive
					filter naturally reduced the candidate records before the
					edit-distance calculation was performed.</p>
				<p class="mb-3 text-body">Reducing the search space in this manner significantly improved
					performance while preserving the accuracy advantages of Levenshtein
					Distance.</p>
				<hr class="h-px my-8 bg-gray-200 border-0" />

				<h2 class="text-4xl font-bold">Operational Flexibility</h2>
				<p class="mb-3 text-body">Although routine searches restricted the edit distance to maintain
					acceptable response times, operational requirements occasionally
					justified more computationally expensive searches.</p>
				<p class="mb-3 text-body">When all other search methods failed to locate a particular
					employee, larger edit distances could still be used as a final
					recovery mechanism. Such searches sometimes required a considerable
					amount of time to complete, but these situations were relatively rare
					and typically involved locating a single critical employee record
					during data migration.</p>
				<p class="mb-3 text-body">In these circumstances, spending additional processing time to
					recover the correct record was considered an acceptable trade-off.</p>
				<p class="mb-3 text-body">This illustrates an important engineering principle: performance
					requirements depend upon operational context. A search performed
					hundreds of times each day must prioritize responsiveness, whereas a
					one-time recovery task may reasonably prioritize completeness over
					execution speed.</p>
				<hr class="h-px my-8 bg-gray-200 border-0" />

				<h2 class="text-4xl font-bold">Engineering Observation</h2>
				<p class="mb-3 text-body">Increasing the allowable edit distance undoubtedly discovers more
					potential matches, but it also increases the computational effort
					required to evaluate those possibilities. Beyond a certain point, the
					additional processing time produces diminishing practical benefit.</p>
				<p class="mb-3 text-body">Consequently, the implementation favored adaptive application
					rather than unrestricted use. Routine searches emphasized efficiency,
					while exceptional recovery scenarios permitted more exhaustive
					evaluation when operationally justified.</p>
				<hr class="h-px my-8 bg-gray-200 border-0" />

				<div class="mt-12 pt-6 border-t border-gray-200">
					<h3 class="text-xl font-bold text-gray-900 mb-3">
						Engineering Principle
					</h3>
					<blockquote class="p-4 my-4 border-s-4 border-default bg-neutral-secondary-soft">
						<p class="text-xl italic font-medium leading-relaxed text-heading">
							Computationally expensive similarity algorithms
							should be applied selectively. Restricting them to progressively
							filtered candidate sets provides substantially better scalability
							than applying them indiscriminately across the entire dataset.
						</p>
					</blockquote>
				</div>

				<hr class="h-px my-8 bg-gray-200 border-0" />

				<hr class="h-px my-8 bg-gray-200 border-0" />

				<h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">
					6.6 Regular Expressions
				</h1>
				<h4 class="western" style="line-height: 115%; margin-top: 0in; margin-bottom: 0.1in">
					Pattern-Based Searching</h4>
				<p class="mb-3 text-body">While operators such as <code class="western">LIKE</code>,
					<code class="western">Soundex</code>, and <code class="western">Levenshtein
Distance</code> compensate for uncertainty in the stored data,
					Regular Expressions approach the problem from a different
					perspective. Rather than searching for an exact value or an
					approximate spelling, they allow the engineer to describe the
					<span class="font-bold text-indigo-600">expected pattern</span> of the desired information.
				</p>
				<p class="mb-3 text-body">Whenever the information being searched follows a recognizable
					structure, Regular Expressions often become the most appropriate
					search technique.</p>
				<p class="mb-3 text-body">For example, they can be particularly effective when searching
					fields such as:</p>
				<ul class="max-w-full space-y-1 text-body list-disc list-inside">
					<li>telephone numbers,
					</li>
					<li>national identity numbers (CNIC),
					</li>
					<li>email addresses,
					</li>
					<li>employee codes,
					</li>
					<li>
						or any other field where the data follows a predictable textual format.
					</li>
				</ul>
				<p class="mb-3 text-body">Instead of searching for one specific value, the search expression
					describes the structure that valid records should satisfy.</p>
				<p class="mb-3 text-body">Unlike Levenshtein Distance, which measures character differences,
					or Soundex, which compares pronunciation, Regular Expressions
					determine whether the stored value conforms to a predefined pattern.</p>
				<hr class="h-px my-8 bg-gray-200 border-0" />

				<h3 class="western" style="line-height: 115%; margin-top: 0in; margin-bottom: 0.1in">
					An Iterative Engineering Process</h3>
				<p class="mb-3 text-body">One of the practical lessons learned during development was that
					constructing an effective Regular Expression is rarely a one-step
					activity.</p>
				<p class="mb-3 text-body">The initial instinct is often to encode every known assumption
					about the target record into a single, highly restrictive pattern. In
					theory, this should isolate only the desired records.</p>
				<p class="mb-3 text-body">In practice, however, the opposite frequently occurred.</p>
				<p class="mb-3 text-body">The query often returned no records at all.</p>
				<p class="mb-3 text-body">This did not necessarily indicate an error in the Regular
					Expression itself. More commonly, it revealed that one or more
					assumptions about the underlying data were incorrect or overly
					restrictive. The employee record might contain unexpected
					abbreviations, omitted fields, inconsistent formatting, or values
					that differed from what the operator initially expected.</p>
				<hr class="h-px my-8 bg-gray-200 border-0" />

				<h3 class="western" style="line-height: 115%; margin-top: 0in; margin-bottom: 0.1in">
					Progressive Pattern Refinement</h3>
				<p class="mb-3 text-body">Instead of repeatedly modifying an already complex expression, a
					more reliable strategy gradually emerged.</p>
				<p class="mb-3 text-body">Rather than beginning with a highly restrictive pattern, the
					search process started with an intentionally broad expression capable
					of matching a large number of records.</p>
				<p class="mb-3 text-body">Initially, almost all assumptions were removed from the
					expression. The objective was simply to verify that the Regular
					Expression itself was functioning correctly and that matching records
					existed.</p>
				<p class="mb-3 text-body">Once records were successfully returned, additional constraints
					were introduced incrementally. After each refinement, the results
					were evaluated again.</p>
				<p class="mb-3 text-body">Whenever a newly introduced constraint caused the result set to
					disappear, it immediately indicated that one of the assumptions about
					the data was incorrect or unnecessarily restrictive.</p>
				<p class="mb-3 text-body">The pattern was then revised until the result set converged toward
					the desired records.</p>
				<p class="mb-3 text-body">This iterative refinement proved considerably more reliable than
					attempting to construct a perfect Regular Expression from the outset.</p>
				<hr class="h-px my-8 bg-gray-200 border-0" />

				<h3 class="western" style="line-height: 115%; margin-top: 0in; margin-bottom: 0.1in">
					Engineering Observation</h3>
				<p class="mb-3 text-body">An important realization during implementation was that a Regular
					Expression is more than a search pattern—it is a collection of
					assumptions about how the data is stored.</p>
				<p class="mb-3 text-body">Every additional condition narrows the search space, but every
					additional condition also increases the risk of excluding the desired
					record.</p>
				<p class="mb-3 text-body">Consequently, designing an effective Regular Expression became an
					iterative dialogue with the data itself. Each refinement either
					confirmed or challenged the engineer's current understanding of the
					dataset.</p>
				<hr class="h-px my-8 bg-gray-200 border-0" />

				<div class="mt-12 pt-6 border-t border-gray-200">
					<h3 class="text-xl font-bold text-gray-900 mb-3">
						Engineering Principle
					</h3>
					<blockquote class="p-4 my-4 border-s-4 border-default bg-neutral-secondary-soft">
						<p class="text-xl italic font-medium leading-relaxed text-heading">
							Regular Expressions encode assumptions about the structure of data. Rather
							than attempting to construct a perfect pattern immediately, effective
							engineering progressively refines those assumptions until the desired
							records naturally emerge from the dataset.
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