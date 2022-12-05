import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/oauth",
      name:"oauth",
      component: () => import("../views/oAuthView.vue")
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path:"/admin",
      name:'admin',
      component:()=> import('../views/admin/HomeView.vue'),

      // beforeEnter:(to, from ,next)=>{
      //   const route = useRoute();
      //   console.log("middle ware");
      //   console.log(this.$route);
      //   // let result = axios.post('http://localhost:3000/charbrity/auth/authenticate', 
	    //   //       { 
		  //   //         token: this.$route.params
	    //   //       } )
      //   //         .then(Response =>{
      //   //             console.log(Response.data);
      //   //             window.open(Response.data,"_selt");
      //   //         });
      //   next();
      // }
    },
    {
      path:'/user',
      name: 'user',
      component: () => import('../views/admin/UserView.vue')
    },
    {
      path:'/donate',
      name: 'donte',
      component: () => import('../views/DonateView.vue')
    },
    {
      path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
      //redirect: '/404',
      component: () => import('../views/404.vue')
    }
  ]
})

export default router
