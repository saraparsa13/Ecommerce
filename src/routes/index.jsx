import Home from '../components/Home'
import Login from '../components/Login'
import AccordionView from '../components/AccordionLoader'
import '../assets/styles/_index.scss'
import TreeviewLoader from '../components/TreeviewLoader'

const indexRoutes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/accordion', component: AccordionView },
  { path: '/treeview', component: TreeviewLoader },
]

export default indexRoutes