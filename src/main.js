import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './routes'

Vue.filter('currency', function(value) {
  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  });

  return formatter.format(value);
});

export const eventBus = new Vue();
export const authService = { isLoggedIn: false };

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      };
    }

    if (savedPosition) {
      return savedPosition;
    }

    return { x: 0, y: 0 };
  }
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
