import ProductList from './ProductList.vue';
import ViewProducts from './ViewProduct.vue';
import Cart from './Cart.vue';

export const routes = [
  { path: '', component: ProductList },
  { path: '/cart', component: Cart},
  { path: '/products/:productId', props: true, name: 'viewProduct' ,component: ViewProducts},
  { path: '*', component : { template: '<h1>Page Not Found</h1>' }}

];
