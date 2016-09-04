import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import index from './view/index'

Vue.use(VueRouter);

var router=new VueRouter();

router.map({
  '/':{
    name:'index',
    component:index
  }
});

router.start(App,'app');
