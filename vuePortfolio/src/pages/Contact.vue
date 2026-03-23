<template>
  <div class="container mx-auto px-6 py-20 min-h-screen flex items-center justify-center">
    <!-- Decorative elements -->
    <div class="absolute top-40 right-20 w-60 h-60 bg-emerald-500 bg-opacity-5 rounded-full blur-3xl pointer-events-none"></div>
    
    <div class="max-w-md w-full relative z-10">
      <!-- Heading -->
      <div class="mb-12 text-center animate-fade-in-up">
        <h2 class="text-5xl md:text-6xl font-bold text-white mb-4">
          Get in <span class="text-emerald-500 relative">
            Touch
            <span class="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></span>
          </span>
        </h2>
        <p class="text-white text-opacity-70 hover:text-opacity-90 transition-all duration-300">
          I'd love to hear from you. Send me a message and I'll respond as soon as possible.
        </p>
      </div>

      <!-- Contact Form -->
      <form @submit.prevent="submitForm" class="space-y-6 animate-fade-in-up" style="animation-delay: 0.2s">
        <!-- Name Input -->
        <div class="group">
          <input
            v-model="form.name"
            type="text"
            placeholder="Your Name"
            class="w-full px-4 py-3 glass-effect rounded-lg text-white placeholder-white placeholder-opacity-50 focus:outline-none focus:border-emerald-500 focus:bg-opacity-10 focus:backdrop-blur-xl transition-all duration-300 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-30"
            required
          />
          <p v-if="errors.name" class="text-red-400 text-xs mt-1">{{ errors.name }}</p>
        </div>

        <!-- Email Input -->
        <div class="group">
          <input
            v-model="form.email"
            type="email"
            placeholder="your@email.com"
            class="w-full px-4 py-3 glass-effect rounded-lg text-white placeholder-white placeholder-opacity-50 focus:outline-none focus:border-emerald-500 focus:bg-opacity-10 focus:backdrop-blur-xl transition-all duration-300 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-30"
            required
          />
          <p v-if="errors.email" class="text-red-400 text-xs mt-1">{{ errors.email }}</p>
        </div>

        <!-- Message Input -->
        <div class="group">
          <textarea
            v-model="form.message"
            placeholder="Your message..."
            rows="6"
            class="w-full px-4 py-3 glass-effect rounded-lg text-white placeholder-white placeholder-opacity-50 focus:outline-none focus:border-emerald-500 focus:bg-opacity-10 focus:backdrop-blur-xl transition-all duration-300 resize-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-30"
            required
          ></textarea>
          <p v-if="errors.message" class="text-red-400 text-xs mt-1">{{ errors.message }}</p>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          :disabled="isSubmitting"
          class="w-full group relative px-6 py-3 bg-emerald-500 text-black font-semibold rounded-lg hover:bg-emerald-600 disabled:bg-emerald-600 disabled:opacity-50 transition-all duration-300 overflow-hidden"
        >
          <span class="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 group-hover:opacity-20 group-hover:blur transition-all duration-300"></span>
          <span class="relative">{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
        </button>
      </form>

      <!-- Success Message -->
      <div
        v-if="submitted"
        class="mt-6 p-4 glass-effect-dark border-emerald-500 border-opacity-50 rounded-lg text-emerald-300 text-center animate-fade-in"
      >
        ✓ Thank you! Your message has been sent.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      errors: {
        name: '',
        email: '',
        message: ''
      },
      submitted: false,
      isSubmitting: false
    }
  },
  methods: {
    validateForm() {
      this.errors = {
        name: '',
        email: '',
        message: ''
      }

      // Validate name
      if (!this.form.name.trim()) {
        this.errors.name = 'Name is required'
        return false
      }
      if (this.form.name.trim().length < 3) {
        this.errors.name = 'Name must be at least 3 characters'
        return false
      }

      // Validate email with regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!this.form.email.trim()) {
        this.errors.email = 'Email is required'
        return false
      }
      if (!emailRegex.test(this.form.email.trim())) {
        this.errors.email = 'Please enter a valid email address'
        return false
      }

      // Validate message
      if (!this.form.message.trim()) {
        this.errors.message = 'Message is required'
        return false
      }
      if (this.form.message.trim().length < 10) {
        this.errors.message = 'Message must be at least 10 characters'
        return false
      }

      return true
    },

    async submitForm() {
      // Validate form
      if (!this.validateForm()) {
        return
      }

      this.isSubmitting = true

      try {
        // Send email using FormSubmit.io (free service)
        const response = await fetch('https://formspree.io/f/mojkrzgb', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.form.name,
            email: this.form.email,
            message: this.form.message,
            _replyto: this.form.email,
            _subject: `New message from ${this.form.name}`
          })
        })

        if (response.ok) {
          console.log('Form submitted:', this.form)
          this.submitted = true

          // Reset form
          this.form = {
            name: '',
            email: '',
            message: ''
          }

          // Hide success message after 3 seconds
          setTimeout(() => {
            this.submitted = false
          }, 3000)
        } else {
          this.errors.message = 'Failed to send message. Please try again.'
        }
      } catch (error) {
        console.error('Error sending form:', error)
        this.errors.message = 'An error occurred. Please try again.'
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>
