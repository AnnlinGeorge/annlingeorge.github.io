<template>
  <div class="container mx-auto px-6 py-20 min-h-screen flex items-center justify-center">
    <div class="max-w-2xl text-center">
      <!-- Decorative liquid glass background element -->
      <div class="absolute top-40 left-10 w-72 h-72 bg-emerald-500 bg-opacity-5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-20 right-10 w-80 h-80 bg-emerald-500 bg-opacity-3 rounded-full blur-3xl pointer-events-none"></div>
      
      <div class="relative z-10">
        <!-- Main Heading -->
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight animate-fade-in-up">
          Hello, I'm <span class="text-emerald-500 relative">
            Annlin
            <span class="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></span>
          </span>
        </h1>
        
        <!-- Description -->
        <div class="space-y-6 text-lg md:text-xl text-white text-opacity-80 animate-fade-in-up">
          <p class="leading-relaxed hover:text-opacity-100 transition-all duration-300">
            A passionate Backend Developer who works with Spring Boot, Docker, and Kubernetes to create scalable and efficient applications.
          </p>
          <p class="leading-relaxed hover:text-opacity-100 transition-all duration-300">
            Passionate about building responsive, user-centered solutions that blend aesthetics with performance.
          </p>
        </div>

        <!-- Call to Action -->
        <div class="mt-12 animate-fade-in-up">
          <button 
            @click="navigateToProjects" 
            class="group relative px-8 py-3 bg-emerald-500 text-black font-semibold rounded-lg hover:bg-emerald-600 transition-all duration-300 overflow-hidden"
          >
            <span class="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 group-hover:opacity-20 group-hover:blur transition-all duration-300"></span>
            <span class="relative">View My Work</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    navigateToProjects() {
      this.$emit('navigate', 'projects')
    }
  }
}
</script>
