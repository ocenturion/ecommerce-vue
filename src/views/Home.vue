<template>
  <div class="home">
   <navbar/> 
   <carousel/> 
   <products/> 
    </div>
</template>

<script>
import navbar from '@/components/Navbar.vue'
import carousel from '@/components/Carousel.vue'
import products from '@/components/Products.vue'

export default {
  name: 'Home',
  components: {
  navbar,
  carousel,
  products
  }
}
</script>
