<template>
  <div>
    <b-container fluid class="bv-example-row mt-4">
      <b-row>
          <!--md pantalla promedio de notebook, sm para otros dispositivos -->
        <b-col cols="12" md="3" sm="12" v-for="(fruit,index) in fruits" :key="index">
          <b-card
            :title="fruit.name"
            :img-src="require(`@/assets/img/fruits/fruit${index+1}.jpg`)"
            img-height="240rem"
            img-alt="image"
            img-top
            tag="article"
            class="mb-4"
            style="height: 25rem;"
          >
            <b-card-text>
              <h5>Precio: ${{fruit.price}}.00</h5>
             <!--  <b-icon variant="warning" class="h1" icon="star-fill"></b-icon>-->
            <!--  <b-icon variant="warning" class="h1" icon="star-fill"></b-icon>-->
            <!--  <b-icon variant="warning" class="h1" icon="star-fill"></b-icon>-->
            <!--  <b-icon variant="warning" class="h1" icon="star-fill"></b-icon>-->
            <!--  <b-icon variant="warning" class="h1" icon="star-fill"></b-icon>-->
            </b-card-text>
            <template v-slot:footer>
                  <b-button
              v-if="!fruit.cart"
              :disabled="fruit.cart"
              @click="fruit.cart=true,addtocart(JSON.parse(JSON.stringify(fruit)))"
              block
              href="#"
              variant="success"
            ><b-icon-cart-plus></b-icon-cart-plus></b-button>
            <b-button
              v-if="fruit.cart"
              :disabled="fruit.cart"
              block
              href="#"
              variant="warning"
            >Articulo agregado</b-button>

            </template>
        
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fruits: [
        {
          id: 1,
          quantity: 1,
          name: "Apple",
          price: 1,
          img: "@/assets/fruits/Apple.jpg",
          cart: false,
        },
        {
          id: 2,
          quantity: 1,
          name: "Orange",
          price: 1,
          img: "@/assets/fruits/Orange.jpg",
          cart: false,
        },
        {
          id: 3,
          quantity: 1,
          name: "Cherry",
          price: 1,
          img: "@/assets/fruits/Cherry.jpg",
          cart: false,
        },
        {
          id: 4,
          quantity: 1,
          name: "Strawberry",
          price: 1,
          img: "@/assets/fruits/Strawberry.jpg",
          cart: false,
        },
        {
          id: 5,
          quantity: 1,
          name: "Orange",
          price: 1,
          img: "@/assets/fruits/Orange.jpg",
          cart: false,
        },
        {
          id: 6,
          quantity: 1,
          name: "Orange",
          price: 1,
          img: "@/assets/fruits/Orange.jpg",
          cart: false,
        },
        {
          id: 7,
          quantity: 1,
          name: "Orange",
          price: 1,
          img: "@/assets/fruits/Orange.jpg",
          cart: false,
        },
        {
          id: 8,
          quantity: 1,
          name: "Orange",
          price: 1,
          img: "@/assets/fruits/Orange.jpg",
          cart: false,
        },
      ],
    };
  },
  methods: {
    addtocart(product) {
      let cart = [];
      if (JSON.parse(localStorage.getItem("products"))) {
        cart = JSON.parse(localStorage.getItem("products"));
      } else {
        cart = [];
      }
      cart.push(product);
      localStorage.setItem("products", JSON.stringify(cart));
    },
  },
  created() {
    let cart = [];
    if (JSON.parse(localStorage.getItem("products"))) {
      cart = JSON.parse(localStorage.getItem("products"));
    } else {
      cart = [];
    }
    for (let index = 0; index < cart.length; index++) {
      for (let index2 = 0; index2 < this.fruits.length; index2++) {
        if (cart[index].id == this.fruits[index2].id) {
          this.fruits[index2].cart = true;
        }
      }
    }
  },
};
</script>
<style>
</style>