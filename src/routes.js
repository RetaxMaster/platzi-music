import Search from '@/components/Search'
import About from '@/components/About'
import TrackDetail from '@/components/TrackDetail'

const routes = [
  {
    path: "/",
    name: "search",
    component: Search
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/track/:id",
    name: "track",
    component: TrackDetail
  }
]


export default routes
