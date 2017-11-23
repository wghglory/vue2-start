import AddBlog from './components/AddBlog.vue';
import Blogs from './components/Blogs.vue';
import Blog from './components/Blog.vue';
import Message from './components/Message.vue';
import Users from './components/Users.vue';
import Todos from './components/Todos.vue';
import Products from './components/Products.vue';

export default [
  { path: '/', component: Blogs },
  { path: '/add', component: AddBlog },
  { path: '/blog/:id', component: Blog },
  { path: '/users/:teamId', component: Users },
  { path: '/message', component: Message },
  { path: '/todos', component: Todos },
  { path: '/products', component: Products }
];
