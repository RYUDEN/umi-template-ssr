const routes:any[] = [
    {
      path: '/', 
      component: '@/layout/DefaultLayout',
      routes: [
        {
          path:'/',
          redirect:'/home'
        },
        {
          title:'首页',
          path:'/home',
          component:'@/pages/index'
        },
        {          
          path:'/about',
          component:'@/components/Authration',
          routes: [
            {
              path:'/about',
              title:'关于',
              component:'@/pages/about',
              
            },
          ]
        }
      ]
    },
]
export default routes