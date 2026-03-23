<template>
  <div class="min-h-screen bg-black">
    <Navigation :active-page="currentPage" @navigate="currentPage = $event" />
    
    <div class="pt-24 pb-28">
      <Home v-if="currentPage === 'home'" @navigate="currentPage = $event" />
      <Projects v-else-if="currentPage === 'projects'" />
      <Contact v-else-if="currentPage === 'contact'" />
    </div>
    
    <Footer />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import Home from './pages/Home.vue'
import Projects from './pages/Projects.vue'
import Contact from './pages/Contact.vue'

export default {
  components: {
    Navigation,
    Footer,
    Home,
    Projects,
    Contact
  },
  data() {
    return {
      currentPage: 'home'
    }
  }
}
</script>
