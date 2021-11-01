<template>
  <section class="src-components-Usuarios">
    <div class="jumbotron">
      <div class="container text-center">
        <h2>Componente Usuarios</h2>
        <hr />
        <br />
        <button
          class="btn btn-success ml-3 margin-left: 30px"
          @click="getUsuarios()"
        >
          GET
        </button>
        <hr />
        <br />
      </div>
    </div>
    <div v-if="usuarios.length" class="table-responsive">
      <table class="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Telefono</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(usuarios, index) in usuarios" :key="index">
            <td>{{ usuarios.nombre }}</td>
            <td>{{ usuarios.email }}</td>
            <td>{{ usuarios.telefono }}</td>
            <td>
              <button
                class="btn btn-danger mr-3"
                @click="deleteUsuario(usuarios.id)"
              >
                DELETE
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: "src-components-Usuarios",
  props: [],
  mounted() {
    this.getUsuarios();
  },
  beforedestroyed() {},
  data() {
    return {
      urlUsuarios: "https://617f1cd12ff7e600174bd9c9.mockapi.io/usuarios",
      usuarios: [],
    };
  },
  methods: {
    /* --------------------------------------- */
    /*               Get Usuario               */
    /* --------------------------------------- */
    async getUsuarios() {
      try {
        let respuesta = await this.axios(this.urlUsuarios);
        let usuarios = respuesta.data;
        console.log("AXIOS GET USUARIOS", usuarios);
        this.usuarios = usuarios;
      } catch (error) {
        console.error("ERROR AXIOS GET USUARIOS", error);
      }
    },

    /* --------------------------------------- */
    /*             Borrar Usuario              */
    /* --------------------------------------- */
    async deleteUsuario(id) {
      try {
        let respuesta = await this.axios.delete(this.urlUsuarios + "/" + id);
        let usuarioEliminado = respuesta.data;
        console.log("AXIOS DELETE USUARIO", usuarioEliminado);
        let index = this.usuarios.findIndex(
          (usuario) => usuario.id == usuarioEliminado.id
        );
        this.usuarios.splice(index, 1);
      } catch (error) {
        console.error("ERROR AXIOS DELETE USUARIO", error);
      }
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
.src-components-Usuarios {
}

.jumbotron {
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#7d7e7d+0,0e0e0e+100 */
  background: rgb(125, 126, 125); /* Old browsers */
  background: -moz-linear-gradient(
    top,
    rgba(125, 126, 125, 1) 0%,
    rgba(14, 14, 14, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    rgba(125, 126, 125, 1) 0%,
    rgba(14, 14, 14, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    rgba(125, 126, 125, 1) 0%,
    rgba(14, 14, 14, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7d7e7d', endColorstr='#0e0e0e',GradientType=0 ); /* IE6-9 */
  color: ghostwhite;
}
</style>
