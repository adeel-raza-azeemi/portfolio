<template>
	<div
		class="max-w-full mx-auto my-6 p-16 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 transition duration-300 ease-in-out hover:shadow-lg">

		<h1 class="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6xl">
			Engineering Practical Employee Search Systems in Resource-Constrained Organizations</h1>
		<h3 class="text-xl font-bold text-gray-900 mb-3">A Case Study in Reverse Engineering, Data
			Consolidation, and Multi-Strategy Record Retrieval</h3>
		<!-- Reading mins etc -->
		<div class="min-w-0 flex-1">
			<h2 class="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Back End Developer
			</h2>
		</div>
		<!-- <hr class="h-px my-8 bg-gray-200 border-0" /> -->
		<!-- Metadata Section -->
		<div class="mt-4 flex flex-wrap items-center gap-y-2 text-sm text-gray-500">
			<!-- Author -->
			<span class="font-medium text-gray-700">Adeel Raza Azeemi</span>
			<span class="mx-2 hidden sm:inline">&middot;</span>
			<!-- Published Date -->
			<time datetime="2026-07">Published: July 2026</time>
			<span class="mx-2">&middot;</span>
			<!-- Reading Time -->
			<span>Reading Time: 25 minutes</span>
			<span class="mx-2">&middot;</span>
			<!-- Category -->
			<div
				class="mt-2 flex items-center text-sm text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md text-xs font-semibold">
				<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
					fill="none" viewBox="0 0 24 24">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						d="M8 8v8m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8-4v6m0-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
				</svg>
				Software Engineering
			</div>
			<div
				class="mt-2 flex items-center text-sm text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md text-xs font-semibold">
				<BriefcaseIcon class="mr-1.5 size-5 shrink-0 text-gray-400" aria-hidden="true" />
				Case Study
			</div>
		</div>

		<!-- Tags Section -->
		<div class="mt-3 flex flex-wrap gap-2">
			<span class="bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full text-xs font-medium">
				#Database Engineering
			</span>
			<span class="bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full text-xs font-medium">
				#Information Retrieval
			</span>
			<span class="bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full text-xs font-medium">
				#ERP
			</span>
			<span class="bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full text-xs font-medium">
				#MySQL
			</span>
		</div>

		<h3 class="text-xl font-bold text-gray-900 mb-3">This article is organized into ten engineering sections. Expand
			any section below to jump directly to that topic.</h3>

		<!-- Article Content Divider -->
		<hr class="mt-6 border-gray-200" />

		<div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-neutral-primary text-heading"
			data-inactive-classes="text-body">
			<!-- 01. Introduction -->
			<OneIntroduction />

			<!-- 02. The Operational Problem -->
			<TwoOperationalProblem />

			<!-- 03. Reverse Engineering an Undocumented Enterprise Database -->
			<ThreeReverseEngineering />

			<!-- 04. Data Consolidation Architecture -->
			<FourDataConsolidation />

			<!-- 05. Unified Search Model -->
			<FiveUnifiedSearchModel />

			<!-- 06. Search Strategy Design -->
			<SixSearchStrategyDesign />

			<!-- 07. Evaluation of Search Algorithms -->
			<SevenEvaluationOfSearchAlgorithms />

			<!-- 08. Lessons Learned -->
			<EightLessonsLearned />

			<!-- 09. Future Work -->
			<NineFutureWork />

			<!-- 10. Conclusion -->
			<TenConclusion />

		</div>
	</div>
</template>

<script setup>
import {
	BriefcaseIcon,
	CalendarIcon,
} from '@heroicons/vue/20/solid'
import OneIntroduction from '../../components/EmpSearch/OneIntroduction.vue'
import TwoOperationalProblem from '../../components/EmpSearch/TwoOperationalProblem.vue'
import ThreeReverseEngineering from '../../components/EmpSearch/ThreeReverseEngineering.vue'
import FourDataConsolidation from '../../components/EmpSearch/FourDataConsolidation.vue'
import FiveUnifiedSearchModel from '../../components/EmpSearch/fiveUnifiedSearchModel.vue'
import SixSearchStrategyDesign from '../../components/EmpSearch/SixSearchStrategyDesign.vue'
import SevenEvaluationOfSearchAlgorithms from '../../components/EmpSearch/SevenEvaluation.vue'
import EightLessonsLearned from '../../components/EmpSearch/EightLessonsLearned.vue'
import NineFutureWork from '../../components/EmpSearch/NineFutureWork.vue'
import TenConclusion from '../../components/EmpSearch/TenConclusion.vue'

</script>
