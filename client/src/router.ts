import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Projects from './pages/Projects.vue'
import EmployeeRecordDeduplication from './pages/TechnicalArticle/EmployeeRecordDeduplication.vue'
import ImportingSQLServerToMySQL from './pages/TechnicalArticle/ImportingSQLServerToMySQL.vue'
import BuildingMedicalMISForNGO from './pages/TechnicalArticle/BuildingMedicalMISForNGO.vue'
import ProcurementDigitizationLessons from './pages/TechnicalArticle/ProcurementDigitizationLessons.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { layout: 'DefaultLayout' } // Uses main app layout
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: { layout: 'DefaultLayout' } // Uses main app layout
  },

  { 
    path: '/technicalArticle/employee-record-deduplication', 
    name: 'EmployeeRecordDeduplication', 
    component: EmployeeRecordDeduplication,
    meta: { layout: 'DefaultLayout' } // Uses main app layout
  },
  { 
    path: '/technicalArticle/importing-sql-server-to-mysql', 
    name: 'ImportingSQLServerToMySQL', 
    component: ImportingSQLServerToMySQL,
    meta: { layout: 'DefaultLayout' } // Uses main app layout
  },
  { 
    path: '/technicalArticle/building-medical-mis-for-ngo', 
    name: 'BuildingMedicalMISForNGO', 
    component: BuildingMedicalMISForNGO,
    meta: { layout: 'DefaultLayout' } // Uses main app layout
  },
  { 
    path: '/technicalArticle/procurement-digitization-lessons', 
    name: 'ProcurementDigitizationLessons', 
    component: ProcurementDigitizationLessons,
    meta: { layout: 'DefaultLayout' } // Uses main app layout
  }
]

const router = createRouter({
  history: createWebHistory(typeof import.meta.env !== 'undefined' ? import.meta.env.BASE_URL : '/'),
  // history: createWebHistory(),
  routes
})

export default router
