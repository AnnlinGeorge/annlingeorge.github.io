<template>
  <nav class="fixed top-0 w-full z-50">
    <!-- Liquid Glass Background -->
    <div class="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-xl border-b border-white border-opacity-10 transition-all duration-300 hover:bg-opacity-50"></div>
    
    <!-- Navigation Content -->
    <div class="relative container mx-auto px-6 py-6 flex items-center justify-between">
      <!-- Logo -->
      <div @click="navigate('home')" class="text-2xl font-bold text-white hover:text-emerald-500 transition-colors duration-300 cursor-pointer group">
        AG
        <span class="block h-0.5 w-0 group-hover:w-full bg-emerald-500 transition-all duration-300 mt-1"></span>
      </div>
      
      <!-- Nav Links -->
      <div class="hidden md:flex items-center gap-8">
        <button
          @click="navigate('home')"
          :class="[
            'font-medium transition-all duration-300 relative group py-2',
            activePage === 'home' 
              ? 'text-emerald-500' 
              : 'text-white hover:text-emerald-500'
          ]"
        >
          <span>Home</span>
          <span v-if="activePage === 'home'" class="absolute -bottom-2 left-0 right-0 h-0.5 bg-emerald-500 transition-all duration-300"></span>
          <span v-else class="absolute -bottom-2 left-0 right-0 h-0.5 bg-emerald-500 w-0 group-hover:w-full transition-all duration-300"></span>
        </button>
        <button
          @click="navigate('projects')"
          :class="[
            'font-medium transition-all duration-300 relative group py-2',
            activePage === 'projects' 
              ? 'text-emerald-500' 
              : 'text-white hover:text-emerald-500'
          ]"
        >
          <span>Projects</span>
          <span v-if="activePage === 'projects'" class="absolute -bottom-2 left-0 right-0 h-0.5 bg-emerald-500 transition-all duration-300"></span>
          <span v-else class="absolute -bottom-2 left-0 right-0 h-0.5 bg-emerald-500 w-0 group-hover:w-full transition-all duration-300"></span>
        </button>
        <button
          @click="navigate('contact')"
          :class="[
            'font-medium transition-all duration-300 relative group py-2',
            activePage === 'contact' 
              ? 'text-emerald-500' 
              : 'text-white hover:text-emerald-500'
          ]"
        >
          <span>Contact Me</span>
          <span v-if="activePage === 'contact'" class="absolute -bottom-2 left-0 right-0 h-0.5 bg-emerald-500 transition-all duration-300"></span>
          <span v-else class="absolute -bottom-2 left-0 right-0 h-0.5 bg-emerald-500 w-0 group-hover:w-full transition-all duration-300"></span>
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="md:hidden text-white hover:text-emerald-500 transition-colors"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-90 backdrop-blur-glass border-b border-white border-opacity-10"
    >
      <div class="container mx-auto px-6 py-4 flex flex-col gap-4">
        <button
          @click="navigateMobile('home')"
          :class="[
            'py-2 font-medium transition-colors duration-300 text-left',
            activePage === 'home' 
              ? 'text-emerald-500' 
              : 'text-white hover:text-emerald-500'
          ]"
        >
          Home
        </button>
        <button
          @click="navigateMobile('projects')"
          :class="[
            'py-2 font-medium transition-colors duration-300 text-left',
            activePage === 'projects' 
              ? 'text-emerald-500' 
              : 'text-white hover:text-emerald-500'
          ]"
        >
          Projects
        </button>
        <button
          @click="navigateMobile('contact')"
          :class="[
            'py-2 font-medium transition-colors duration-300 text-left',
            activePage === 'contact' 
              ? 'text-emerald-500' 
              : 'text-white hover:text-emerald-500'
          ]"
        >
          Contact Me
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    activePage: {
      type: String,
      default: 'home'
    }
  },
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  methods: {
    navigate(page) {
      this.$emit('navigate', page)
    },
    navigateMobile(page) {
      this.$emit('navigate', page)
      this.mobileMenuOpen = false
    }
  }
}
</script>
