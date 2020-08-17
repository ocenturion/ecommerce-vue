<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="success">
      <b-navbar-brand @click="goHome" href="#">
        Ecommerce
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item @click="gotocart" active>
            <b-icon-cart4></b-icon-cart4>
          </b-nav-item>

          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <em>Login</em>
            </template>
            <b-dropdown-item class="text-center" v-b-modal.modal-1>Ingresar</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div>
      <b-modal hide-footer ref="my-modal" id="modal-1" title="Admin">
        <b-form @submit="onSubmit">
          <b-form-group id="input-group-1" label="User:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.user"
              type="email"
              required
              placeholder="Ingresar user"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-2" label="Password:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.pass"
              type="password"
              required
              placeholder="Ingresar pass"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" block variant="primary">Ingresar</b-button>
        </b-form>
      </b-modal>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
    name: 'Form',
  data() {
    return {
      cart: "",
      form: {
        user: "",
        pass: "",
      },
      show: true,
      con: false,
      message: "",
    };
  },
  created() {
    if (JSON.parse(localStorage.getItem("products"))) {
      this.cart = JSON.parse(localStorage.getItem("products"));
    } else {
      return;
    }
  },
  methods: {
    gotocart() {
      this.$router.push("/cart");
    },
    goHome() {
      this.$router.push("/");
    },
    onSubmit(e) {
      e.preventDefault();
      this.con = false;
      let t = this;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.user, this.form.pass)
        .then(() => {
          this.$router.push("/admin");
        })
        .catch(function (error) {
          t.con = true;
          t.message = error.message;
        });
    },
  },
}
</script>
<style>
</style>

