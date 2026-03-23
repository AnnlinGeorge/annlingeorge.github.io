<template>
  <div class="group glass-effect-dark rounded-xl overflow-hidden glass-effect-hover shadow-lg">
    <!-- Image Container -->
    <div class="relative overflow-hidden h-64 bg-black bg-opacity-50">
      <img
        :src="project.image"
        :alt="project.title"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <!-- Overlay gradient -->
      <div class="absolute inset-0 bg-gradient-to-t from-black via-black via-opacity-30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
      <!-- Accent light on hover -->
      <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-emerald-500 from-0% via-transparent via-50% to-transparent pointer-events-none"></div>
    </div>

    <!-- Content Container -->
    <div class="p-6">
      <!-- Title -->
      <h3 class="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300 flex items-center gap-2">
        {{ project.title }}
        <span class="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
      </h3>

      <!-- Description -->
      <p class="text-white text-opacity-70 text-sm mb-6 leading-relaxed group-hover:text-opacity-90 transition-all duration-300">
        {{ project.description }}
      </p>

      <!-- Skills Footer -->
      <div class="flex flex-wrap gap-2">
        <button
          v-for="skill in project.skills"
          :key="skill"
          class="px-3 py-1 text-xs font-medium text-white glass-effect rounded-md hover:bg-emerald-500 hover:text-black hover:border-emerald-500 hover:bg-opacity-100 transition-all duration-300 transform hover:scale-105"
        >
          {{ skill }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>
