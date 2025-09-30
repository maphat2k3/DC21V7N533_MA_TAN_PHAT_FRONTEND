import { createRouter, createWebHistory } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
import ContactEdit from "@/views/ContactEdit.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "contactbook",
    component: ContactBook,
  },
  {
    path: "/contacts/:id",
    name: "contact.edit",
    component: ContactEdit,
    props: true,   // truyền id xuống component
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: NotFound,
  },
  {
    path: "/contacts/add",
    name: "contact.add",
    component: () => import("@/views/ContactAdd.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
