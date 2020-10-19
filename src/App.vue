<template lang="pug">

section.columns.is-centered
  .column.is-half

    form

      img(src="https://static.platzi.com/media/user_upload/Page%201-d8d869f4-7130-4ae9-9907-2fa809bd136a.jpg")

      h1 Registro estación Platzi

      .field
        label.label Nombre
        input(value="Platzetiro")

      .field
        label.label Apellido
        input(value="Cool de la Web")

      .field
        label.label Cargo
        input(value="FullStack JS")

      .button-container
        button ENVIAR
    

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
      HelloWorld
  }
}
</script>

<style lang="scss">
/* Es una buena pŕactica importar los estiulos generales desde el componente App.vue */
@import "./scss/main.scss";

form {
  text-align: center;
}

h1 {
  color: #00BFD6;
  font-weight: bold;
  font-size: 2em;
}

.field {

  label {
    color: #ff9300;
    text-align: left;
  }

  input {
    border: none;
    border-bottom: 1px solid #ff9300;
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
  }

}

.button-container {

  display: flex;
  justify-content: flex-end;

  button {
    padding: 14px 37px;
    border: none;
    background: #a3ecf3;
    color: #fff;
    font-weight: bold;
    font-size: 1.2em;
    box-shadow: 1px 1px 5px #ccc;
  }

}

</style>
