<template>
    <div>
        <Navbaradmin/><br>
        <div>
            <b-tabs content-class="mt-3" align="center" no-body>
                <b-tab title="Productos" active>
                    <h1 class="text">ABM de Productos</h1>
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
                </b-tab>
                <b-tab title="Categorías">
                    <h1 class="text">ABM de Categorías</h1>
                </b-tab>
                <b-tab title="Otros" disabled><p>I'm a disabled tab!</p></b-tab>
            </b-tabs>
        </div>
        <div>
            <ProductosAdmin v-model="productos"/>
        </div>
    </div>
</template>

    <script>
        import { db } from "@/firebase";
        import Navbaradmin from "@/components/Navbaradmin";

        export default {
            data(){
                return {
                    data: "",
                    busy: true,
                    items: [],
                    fields: [
                      { key: "products", label: "sales" },
                      { key: "total", label: "total" },
                      { key: "delete", label: "Delete" },
                    ],
                }
            },
            components: {
                Navbaradmin,
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
            methods:{
                deletesale(id){
                    db.collection("vue").doc(id).delete().then(function(){})
                }
            }
        };
</script>

<style>
    .text{
        text-align: center;
    }
    </style>