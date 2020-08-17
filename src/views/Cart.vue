
<template>
    <div>
        <navbar />
        <b-container fluid class="mt-4">

    <b-row>
        <b-col>
          <!--  <h2>Shopping Cart</h2> -->
            <b-icon-cart-plus></b-icon-cart-plus>
        </b-col>
    </b-row> 

    <b-row>
        <b-col class="text-center">
            <b-table bordered hover :items="cart" :fields="fields">

                <template v-slot:cell(#)="data">
            {{ data.index+1 }}
                </template>
                <template v-slot:cell(price)="data">
                    {{ data.item.price * data.item.quantity }}
                </template>
                <template v-slot:cell(remove)="data">
                    <b-button @click="remove(data.item.id)" variant="danger" class="mr-2">
                      X
                    </b-button>
                </template>
                <template v-slot:cell(quantity)="data">
                    <b-row>
                        <b-col cols="3" class="text-center">
                            <b-button :disabled="data.item.quantity <=1" variant="primary"
                            @click="decrement(data.item.id)" class="mr-2">
                            -
                            </b-button>
                        </b-col>
                        <b-col cols="6" class="text-center">
                            <h4> {{data.item.quantity}}</h4>
                        </b-col>
                        <b-col cols="3" class="text-center">
                            <b-button variant="primary" @click="increment(data.item.id)"
                            class="mr-2">
                            +
                            </b-button>
                        </b-col>
                    </b-row>

                </template>

            </b-table>

        </b-col>
    </b-row>
    <b-col><h3 class="text-right">TOTAL $ {{ total }}.00</h3></b-col>
    <b-row class="text-center" v-if="cart.lenght > 0">
        <b-col></b-col>
        <b-col></b-col>
        <b-col></b-col>
        <b-col></b-col>
        <b-col><h3>Total</h3></b-col>
        <b-col><h3>$ {{ total }}.00</h3></b-col>
    </b-row>
   <b-row class="mt-4 text-center" v-if="cart.length > 0">
        <b-col>
            <b-button @click="clean" variant="info" block class="mr-2">vaciar <b-icon-cart4></b-icon-cart4></b-button>
        </b-col>
        <b-col></b-col>
        <b-col cols="4">Salvando el Semestre-Youtube</b-col>
        <b-col></b-col>
        <b-col>
            <b-button @click="buy" variant="success" block class="mr-2">comprar</b-button>
        </b-col>
    </b-row>
    <b-modal hide-header-close no-close-on-esc no-close-on-backdrop ref="modal-1"
    centered-title="Purchase Completed">
    <template slot="modal-footer">
        <b-button class="mt-3" variant="info" block @click="clean">Cerrar</b-button>

    </template>
    <p class="mb-4">Productos</p>
    <ul v-for="productFinal in ticket.products" :key="productFinal.id">
        <li >
            Producto: {{ productFinal.name }}
        </li>
        <li >
            Cantidad: {{ productFinal.quantity }}
        </li>
        <li >
            Precio: {{ productFinal.price }}
        </li>
        <li >
            Total: {{ productFinal.quantity * productFinal.price }}
        </li>        
    <hr>
    </ul>
    <h2 class="my-4 text-center">Total: ${{ticket.total}}.00</h2>

    </b-modal>

        </b-container>

    </div>
</template>

<script>
import { db } from "@/firebase"
import navbar from "@/components/Navbar.vue"
export default {
  name: 'Cart',
  components: {
    navbar
  },
  data() {
    return {
      ticket:{
        products: null,
        total: 0,
      },
      counter: 0,

      cart:[],
      fields: ['#', 'remove', 'image', 'name', 'quantity', 'price']
    } //data return
  },

  methods: {

    clean(){

        this.cart=[];
for (const key in this.cart){

  this.cart[key].cart=false
  this.cart[key].quantity=1

}
localStorage.setItem('products',JSON.stringify(this.cart))
this.$refs['modal-1'].hide()
    },
    remove(id) {

        for (let index = 0; index < this.cart.length; index++) {

            if (this.cart[index].id == id) {
        this.cart.splice(index,1);
        localStorage.setItem('products',JSON.stringify(this.cart))
            }
        }

    },
    buy(){
      this.ticket={
          products: this.cart,
          total: this.total
      }
      db.collection('vue').add(this.ticket);
      this.$refs['modal-1'].show()


    }  ,
    increment(id){
        for (let index = 0; index < this.cart.length; index++) {
            if (this.cart[index].id == id){
        this.cart[index].quantity++
        localStorage.setItem('products',JSON.stringify(this.cart))
    }
  }
},
decrement(id){
        for (let index = 0; index < this.cart.length; index++) {
            if (this.cart[index].id == id) {
        this.cart[index].quantity--
        localStorage.setItem('products',JSON.stringify(this.cart))
        }
        }
        }
        },
        computed: {
            total(){
                let t =0;
                for (let index =0; index <this.cart.length; index++) {
                    t += this.cart[index].price*this.cart[index].quantity

                }
                return t
            }
        },
created(){
    if(JSON.parse(localStorage.getItem('products'))) {
        this.cart= JSON.parse(localStorage.getItem('products'))
    } else {
        this.cart = []
    }
}
}
</script>

<style scoped>

</style>
