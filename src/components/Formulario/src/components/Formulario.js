
export default {
  name: 'src-components-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData : this.getInicialData(),
      formState : {},
      nombreMinLength : 3,
      nombreMaxLength : 15,
      edadMin : 18,
      edadMax : 120,
      datos : []
    }
  },
  computed: {

  },
  mounted() {
    this.getInicialData()
  },
  methods: {
    getInicialData() {
      return {
        nombre : '',
        edad : '',
        email: ''
      }
    },
    enviar() {
      let usuario = {...this.formData}
      console.log(usuario)
      this.datos.push(usuario)
      this.formData = this.getInicialData()   //inicializando los valores
      this.formState._reset()                 // inicializando el estado
    }
  }
}


