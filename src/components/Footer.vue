<template>
  <footer class="fixed bottom-0 w-full z-40">
    <!-- Liquid Glass Background -->
    <div class="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-xl border-t border-white border-opacity-10 transition-all duration-300 hover:bg-opacity-50"></div>
    
    <!-- Footer Content -->
    <div class="relative container mx-auto px-6 py-6 flex items-center justify-between">
      <!-- Copyright Left -->
      <div class="text-sm text-white text-opacity-70 hover:text-opacity-100 transition-all duration-300">
        &copy; 2024 <span class="text-emerald-500 font-semibold">AG</span>
      </div>
      
      <!-- Social Icons Center -->
      <div class="flex items-center gap-6">
        <!-- Email Icon -->
        <a 
          href="mailto:annlingeo@example.com"
          class="text-white text-opacity-70 hover:text-emerald-500 transition-all duration-300 group"
          title="Email"
        >
          <svg class="w-7 h-7 group-hover:scale-125 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
        </a>

        <!-- LinkedIn Icon -->
        <a 
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white text-opacity-70 hover:text-emerald-500 transition-all duration-300 group"
          title="LinkedIn"
        >
          <svg class="w-7 h-7 group-hover:scale-125 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13.6915026,13.4744657 L13.6915026,10.2926537 C13.6915026,9.41426537 13.3474925,8.75468354 12.4915502,8.75468354 C11.8915502,8.75468354 11.5115502,9.16641657 11.3474925,9.56748855 C11.2931345,9.70081391 11.2789976,9.89081391 11.2789976,10.0808139 L11.2789976,13.4744657 L9.5625,13.4744657 L9.5625,7.3192 C9.5625,6.5933768 9.54915502,5.98681391 9.53652174,5.49913925 L11.1734457,5.49913925 L11.2436813,6.38743069 L11.2789976,6.38743069 C11.6131293,5.83435573 12.4358242,5.05813025 13.7306277,5.05813025 C15.3876813,5.05813025 16.6731293,6.16391879 16.6731293,8.53035391 L16.6731293,13.4744657 L13.6915026,13.4744657 Z M6.4920472,4.6476 C5.77946131,4.6476 5.20905228,4.06468139 5.20905228,3.35427236 C5.20905228,2.64386332 5.77946131,2.06078772 6.4920472,2.06078772 C7.20463309,2.06078772 7.77504213,2.64386332 7.77504213,3.35427236 C7.77504213,4.06468139 7.20463309,4.6476 6.4920472,4.6476 Z M7.60968504,13.4744657 L5.35346635,13.4744657 L5.35346635,5.49913925 L7.60968504,5.49913925 L7.60968504,13.4744657 Z M17.6405748,0 L2.3594252,0 C1.05516832,0 0,1.04216331 0,2.33688805 L0,17.6631119 C0,18.9578366 1.05516832,20 2.3594252,20 L17.6405748,20 C18.9448317,20 20,18.9578366 20,17.6631119 L20,2.33688805 C20,1.04216331 18.9448317,0 17.6405748,0 Z" />
          </svg>
        </a>

        <!-- GitHub Icon -->
        <a 
          href="https://github.com/AnnlinGeorge"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white text-opacity-70 hover:text-emerald-500 transition-all duration-300 group"
          title="GitHub"
        >
          <svg class="w-7 h-7 group-hover:scale-125 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.545 2.91 1.187.092-.923.35-1.545.636-1.9-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817a9.554 9.554 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.138 18.192 20 14.432 20 10.017 20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>

      <!-- Empty Right (for symmetry) -->
      <div class="w-20"></div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
  // Update the href values in the template:
  // Email: Change href="#" to href="mailto:your.email@example.com"
  // LinkedIn: Change href="#" to href="https://linkedin.com/in/yourprofile"
  // GitHub: Change href="#" to href="https://github.com/yourprofile"
}
</script>
