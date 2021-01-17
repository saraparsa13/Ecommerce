import Home from '../components/Home'
import Login from '../components/Login'
import AccordionView from '../components/AccordionView'
import '../assets/styles/_index.scss'

const indexRoutes = [
   { path: '/', component: Home },
   { path: '/login', component: Login },
   { path: '/accordion', component: AccordionView }
]

export default indexRoutes