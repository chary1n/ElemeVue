import Vue from 'vue'
import Router from 'vue-router'
import Content from '../components/content/Content.vue'
import StepOne from '../components/content/StepOne.vue'
import StepTwo from '../components/content/StepTwo.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/', redirect:'/home'},
    {path:'/home',component:Content,
    children:[
      {path:'', redirect:'step_one'},
      {path:'step_one',components:{
       step: StepOne
      }
      },
      {path:'step_two', components:{
        step: StepTwo,
      }}
    ]},
    {path:'/home2',component:Content,props:{mymsg:'zxcc'}}

  ]
})
