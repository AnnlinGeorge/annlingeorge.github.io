<template>
  <div class="container mx-auto px-6 py-20 min-h-screen">
    <!-- Decorative element -->
    <div class="absolute top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500 bg-opacity-5 rounded-full blur-3xl pointer-events-none"></div>
    
    <!-- Page Heading -->
    <div class="mb-16 relative z-10 animate-fade-in-up">
      <h2 class="text-5xl md:text-6xl font-bold text-white mb-4">
        Featured <span class="text-emerald-500 relative">
          Projects
          <span class="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></span>
        </span>
      </h2>
      <p class="text-white text-opacity-70 text-lg hover:text-opacity-90 transition-all duration-300">
        A collection of recent work showcasing my skills and experience.
      </p>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
      <div
        v-for="(project, index) in projects"
        :key="project.id"
        :style="`animation-delay: ${index * 0.1}s`"
        class="animate-fade-in-up"
      >
        <ProjectCard :project="project" />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue'

export default {
  name: 'Projects',
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'E-Commerce Platform',
          description: 'A modern e-commerce solution with real-time inventory management and seamless checkout experience.',
          image: 'https://images.unsplash.com/photo-1460925895917-adf4e2d95d28?w=600&h=400&fit=crop',
          skills: ['Vue.js', 'Tailwind CSS', 'Node.js', 'MongoDB']
        },
        {
          id: 2,
          title: 'Task Management App',
          description: 'Collaborative task management tool with real-time updates and team collaboration features.',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
          skills: ['Vue.js', 'Firebase', 'Tailwind CSS', 'JavaScript']
        },
        {
          id: 3,
          title: 'Analytics Dashboard',
          description: 'Interactive data visualization dashboard for real-time business metrics and performance tracking.',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
          skills: ['Vue.js', 'Chart.js', 'Node.js', 'PostgreSQL']
        },
        {
          id: 4,
          title: 'Social Media Site',
          description: 'Feature-rich social platform with user profiles, messaging, and content sharing capabilities.',
          image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
          skills: ['Vue.js', 'Express', 'MongoDB', 'WebSockets']
        }
      ]
    }
  }
}
</script>
