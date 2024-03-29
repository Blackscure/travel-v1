import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard.vue");
const Accomodations = () => import(/* webpackChunkName: "common" */ "@/pages/Accomodations.vue");
const Contracts = () => import(/* webpackChunkName: "common" */ "@/pages/Contracts.vue");
const  Agents = () => import(/* webpackChunkName: "common" */ "@/pages/Agents.vue");
const  CreateAgent = () => import(/* webpackChunkName: "common" */ "@/pages/CreateAgent.vue");
const  CreateAccomodation = () => import(/* webpackChunkName: "common" */ "@/pages/CreateAccomodation.vue");
const  CreateContract = () => import(/* webpackChunkName: "common" */ "@/pages/CreateContract.vue");
const  Login = () => import(/* webpackChunkName: "common" */ "@/pages/Login.vue");


const routes = [
  {
    path: "/",
    redirect: "/login", // Redirect to the login page by default
  },

  {
    path: "/login",
    name: "login",
    component: Login,
  },

  {
    path: "/dashboard",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },



      {
        path: "accomodations",
        name: "accomodations",
        component: Accomodations
      },
      {
        path: "contracts",
        name: "contracts",
        component: Contracts
      },
      {
        path: "agents",
        name: "agents",
        component: Agents
      },

      {
        path: "create-agent",
        name: "create agent",
        component: CreateAgent
      },

      {
        path: "create-accomodations",
        name: "create accomodation",
        component: CreateAccomodation
      },

      {
        path: "create-contract",
        name: "create contract",
        component: CreateContract
      }


    ]
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
