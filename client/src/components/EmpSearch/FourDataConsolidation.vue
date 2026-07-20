<template>
  <div>
    <h2 id="accordion-flush-heading-4">
				<button type="button"
					class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
					data-accordion-target="#accordion-flush-body-4" aria-expanded="false"
					aria-controls="accordion-flush-body-4">
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
					<h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">
						04. Data Consolidation Architecture</h1>
					<div class="mt-12 pt-6 border-t border-gray-200">
						<blockquote class="p-4 my-4 border-s-4 border-default bg-neutral-secondary-soft">
							<p class="text-xl italic font-medium leading-relaxed text-heading">
								<em class="font-bold text-black-600 not-italic">
									&quot;Finding the data solved one problem. Making
									it usable solved another.&quot;</em>
							</p>
						</blockquote>
					</div>
					<p class="mb-3 text-body">Identifying the operational tables represented only the first
						stage of the project.</p>
					<p class="mb-3 text-body">Employee information still remained distributed across multiple
						databases developed using different technologies, naming conventions,
						and application architectures.</p>
					<p class="mb-3 text-body">Before effective searching could be implemented, these
						heterogeneous datasets first had to be transformed into a common
						logical representation.</p>
					<p class="mb-3 text-body">The objective was not merely to migrate data.</p>
					<p class="mb-3 text-body">The objective was to create an architecture in which every search
						algorithm could operate against a consistent information model
						regardless of the original data source.</p>
					<hr class="mt-6 border-gray-200" />

					<h2 class="mt-3 mb-3 text-4xl font-bold">4.1 Migration Strategy</h2>
					<p class="mb-3 text-body">The organization maintained employee information within three
						independent repositories.</p>
					<ul class="max-w-full space-y-1 text-body list-disc list-inside">
						<li><span class="font-bold text-indigo-600">ERP Database</span>
							containing official employee and placement information.
						</li>
						<li><span class="font-bold text-indigo-600">Legacy HR Database</span>
							containing historical personnel records.
						</li>
						<li><span class="font-bold text-indigo-600">HRDC Database</span>
							containing staff development
							and training information.
						</li>
					</ul>
					<p class="mb-3 text-body">Because the helper MIS was developed using Laravel and MariaDB,
						each repository first had to be migrated into a common relational
						environment.</p>
					<p class="mb-3 text-body">The migration process consisted of several controlled stages:</p>
					<ol class="list-decimal list-inside pl-5">
						<li>Export operational ERP tables from
							Oracle.
						</li>
						<li>Import them into Microsoft SQL
							Server.
						</li>
						<li>Transfer the datasets through
							Microsoft Access using ODBC.
						</li>
						<li>Export each table into
							MySQL-compatible format.
						</li>
						<li>Import the converted tables into
							MariaDB.
						</li>
						<li>Import the HR database (originally
							supplied in Excel format) into MariaDB.
						</li>
						<li>Import the HRDC MySQL database without modification.
						</li>
					</ol>
					<p class="mb-3 text-body">Following migration, all three repositories existed within MariaDB
						while remaining logically independent.</p>
					<p class="mb-3 text-body">This arrangement simplified development while preserving the
						original structure of each source system.</p>
					<hr class="mt-6 border-gray-200" />

					<h2 class="mt-3 mb-3 text-4xl font-bold">
						4.2 Standardising the Data Model
					</h2>
					<p class="mb-3 text-body">Although the databases now shared a common database engine, they
						still differed substantially in schema design.</p>
					<p class="mb-3 text-body">Field names varied.</p>
					<p class="mb-3 text-body">Column structures differed.</p>
					<p class="mb-3 text-body">Employee attributes were distributed across different tables.</p>
					<p class="mb-3 text-body">Directly querying these heterogeneous structures from the
						application would have introduced unnecessary complexity into every
						search operation.</p>
					<p class="mb-3 text-body">Instead, schema normalization was performed inside the database.</p>
					<p class="mb-3 text-body">The objective was to ensure that every search algorithm received
						information presented through a consistent relational interface
						regardless of the original source.</p>
					<hr class="mt-6 border-gray-200" />

					<h2 class="mt-3 mb-3 text-4xl font-bold">4.3 Designing Logical Views</h2>
					<p class="mb-3 text-body">Rather than repeatedly constructing complex JOIN operations within
						application code, two logical database views were created.</p>
					<h3 class="text-xl font-bold text-gray-900 mb-3">Employee View (<code class="western">emp</code>)
					</h3>
					<p class="mb-3 text-body">The <code class="western">emp</code> view exposed the core
						employee identity.</p>
					<p class="mb-3 text-body">It presented employee code, names, father's name, CNIC, contact
						information, dates of birth, joining dates, and employment status
						using standardized field names independent of the original ERP
						schema.</p>
					<p class="mb-3 text-body">Because these names closely matched the remaining repositories,
						application code no longer needed to understand ERP-specific
						terminology.</p>
					<!--  -->
					<div class="mt-12 pt-6 border-t border-gray-200">
						<blockquote class="p-4 my-4 border-s-4 border-default bg-neutral-secondary-soft">
							<p class="text-xl italic font-medium leading-relaxed text-heading">
								<em class="font-bold text-blue-600 not-italic">
									<code class="text-xl">Emp</code></em><br />
								<em class="font-bold text-blue-600 not-italic">
									CREATE VIEW emp AS SELECT EMPBASIC_EMPLOYEE.EM_SEMPLOYEE AS ecode,
									EMPBASIC_EMPLOYEE.EM_SNAME AS ename, EMPBASIC_EMPLOYEE.EM_SFIRSTNAME AS firstname,
									EMPBASIC_EMPLOYEE.EM_SLASTNAME AS lastname, EMPBASIC_EMPLOYEE.EM_SFATHER AS
									fathername, EMPBASIC_EMPLOYEE.EM_SIDCARD AS cnic, EMPBASIC_EMPLOYEE.EM_DATEJOIN AS
									joiningdate, EMPBASIC_EMPLOYEE.EM_DATEBIRTH AS dob,
									EMPBASIC_EMPLOYEE.EM_SEMERGENCY_CONTACT AS phone1,
									EMPBASIC_EMPLOYEE.EM_SSPOUSE_PHONE AS mobile, EMPBASIC_EMPLOYEE.EM_SCONTACTNOEMR AS
									emgr_contact, EMPBASIC_EMPLOYEE.EM_SEMAIL AS email,
									EMPBASIC_EMPLOYEE.EM_DATEACTUALRESIGN AS status FROM EMPBASIC_EMPLOYEE ;
								</em>
							</p>
						</blockquote>
					</div>`
					<!--  -->
					<hr class="mt-6 border-gray-200" />

					<h3 class="text-xl font-bold text-gray-900 mb-3">Placement View (<code
							class="western">placement</code>)</h3>
					<p class="mb-3 text-body">Operational placement information existed across several
						normalized lookup tables describing department, designation, employee
						type, grade, and duty station.</p>
					<p class="mb-3 text-body">The <code class="western">placement</code> view consolidated these
						relationships into a single logical entity through a series of LEFT
						JOIN operations.</p>
					<p class="mb-3 text-body">Instead of requiring the application to reconstruct these joins
						repeatedly, organizational structure became available through one
						simplified relational interface.</p>
					<div class="mt-12 pt-6 border-t border-gray-200">
						<blockquote class="p-4 my-4 border-s-4 border-default bg-neutral-secondary-soft">
							<p class="text-xl italic font-medium leading-relaxed text-heading">
								<em class="font-bold text-blue-600 not-italic">
									<code class="text-xl">Placement</code></em><br />
								<em class="font-bold text-blue-600 not-italic">
									CREATE VIEW placement AS SELECT pl.PL_SEMPLOYEE AS ecode, e.ename AS ename,
									l.CD_SDESC AS loc, desig.CD_SDESC AS designation, g.CD_SDESC AS grade, et.CD_SDESC
									AS emp_type, dept.CD_SDESC AS dept, pl.PL_DATEDESIGNATION AS desigDate FROM ( ( ( (
									( (EMPBASIC_PLACEMENT pl left join emp e on pl.PL_SEMPLOYEE = e.ecode ) left join
									VU_DESIGNATION desig on pl.PL_SDESIGNATION = desig.CD_SCODE ) left join VU_GRADE g
									on pl.PL_SGRADE = g.CD_SCODE ) left join VU_EMPLOYEE_TYPE et on pl.PL_SEMPLOYEE_TYPE
									= et.CD_SCODE ) left join VU_LOCATION l on pl.PL_SLOCATION = l.CD_SCODE ) left join
									VU_DEPARTMENT dept on pl.PL_SDEPARTMENT = dept.CD_SCODE );
								</em>
							</p>
						</blockquote>
					</div>
					<hr class="mt-6 border-gray-200" />

					<h2 class="mt-3 mb-3 text-4xl font-bold">4.4 Unified Search Layer</h2>
					<p class="mb-3 text-body">With each repository transformed into a consistent relational
						structure, the application no longer needed to distinguish between
						different databases.</p>
					<p class="mb-3 text-body">Every search operator returned the same logical column structure
						regardless of whether the data originated from ERP, HR, or HRDC.</p>
					<p class="mb-3 text-body">Because the output format remained identical, SQL <code
							class="western">UNION</code>
						operations could merge these independent result sets into a single
						searchable dataset.</p>
					<p class="mb-3 text-body">From the perspective of the search engine, three heterogeneous
						databases had effectively become one logical information system.</p>
					<p class="mb-3 text-body">This separation between <span class="font-bold text-indigo-600">data
							preparation</span> and
						<span class="font-bold text-indigo-600">information retrieval</span> proved fundamental to the
						architecture.
					</p>
					<p class="mb-3 text-body">Future search algorithms could be introduced without redesigning
						the underlying consolidation layer.</p>
					<hr class="mt-6 border-gray-200" />

					<h2 class="mt-3 mb-3 text-4xl font-bold">4.5 Architectural Benefits</h2>
					<p class="mb-3 text-body">The resulting architecture provided several practical advantages.</p>
					<ul class="max-w-full space-y-1 text-body list-disc list-inside">
						<li>Reverse engineering occurred only
							once.
						</li>
						<li>Schema complexity remained
							isolated inside the database.
						</li>
						<li>Application code interacted with a
							stable relational model.
						</li>
						<li>Additional data sources could be
							incorporated with minimal changes.
						</li>
						<li>Search algorithms remained
							independent of database-specific implementation details.
						</li>
						<li>Maintenance effort was significantly reduced because changes
							to underlying tables rarely affected application logic.
						</li>
					</ul>
					<div class="mt-12 pt-6 border-t border-gray-200">
						<h3 class="text-xl font-bold text-gray-900 mb-3">
							Engineering Insight
						</h3>
						<blockquote class="p-4 my-4 border-s-4 border-default bg-neutral-secondary-soft">
							<p class="text-xl italic font-medium leading-relaxed text-heading">
								Data consolidation is not merely a migration exercise. It is the process of transforming
								heterogeneous information into a stable representation that allows higher-level
								algorithms to remain
								simple, modular, and maintainable.
							</p>
						</blockquote>
					</div>
				</div>
			</div>

  </div>
</template>

<script setup>
import { ref } from 'vue';

</script>

<style scoped>

</style>