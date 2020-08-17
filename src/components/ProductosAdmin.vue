<template>
    <div>
        <b-container class="mt-4" fluid>
            <b-table :busy="busy" bordered :fields="fields" hover :items="items">
               <template v-slot:cell(products)="data">
                   <h5>Id: {{data.item.id}}</h5>
                   <ul v-for="(product,index) in data.item.products" :key="index">
                       <li>Name:{{product.name}}</li>
                       <li>Price:{{product.price}}</li>
                       <li>Quantity:{{product.quantity}}</li>

                       <br />
                       </ul>
               </template>
               <template v-slot:cell(total)="data">
                   <h2>$ {{data.item.total}}.00</h2>
                   </template>
                   <template v-slot:cell(delete)="data">
                       <b-button @click="deletesale(data.item.id)" block class="mt-4"
                       style="top:50%! important;" size="lg" variant="danger">Delete sale</b-button>
                       </template>
                       <template v-slot:table-busy>
                           <div class="text-center text-succes my-2">
                               <b-spinner class="align-middle"></b-spinner>
                               <strong>Loading...</strong>
                               </div>
                       </template>
            </b-table>
        </b-container>
    </div>
</template>
<script>
    import { db } from "@/firebase";
    export default {
        data() {
        return {
          data: "",
          busy: true,
          items: [],
          fields: [
            { key: "products", label: "sales" },
            { key: "total", label: "total" },
            { key: "delete", label: "Delete" },
          ],
        };
      },
      created() {
        db.collection("vue").onSnapshot((querySnapshot) => {
          this.items = [];
          this.buys = true;
          querySnapshot.forEach((doc) => {
            const doc2 = doc.data();
            doc2.id = doc.id;
            this.items.push(doc2);
          });
          if (this.items.length) {
            this.busy = false;
          } else {
            this.busy = false;
          }
        });
      },
      methods: {
        
      },
    };
</script>