<template>
  <div class="container">
    <h1>Cambiar Contraseña</h1>
    <form class="form" @submit="saveChanges">
      <label for="password">Contraseña Actual:</label>
      <input type="password" id="password" v-model="currentPassword" required>
      <label for="newPassword">Nueva Contraseña:</label>
      <input type="password" id="newPassword" v-model="newPassword" required>
      <label for="confirmPassword">Confirmar Nueva Contraseña:</label>
      <input type="password" id="confirmPassword" v-model="confirmPassword" required>
      <button type="submit">Guardar Cambios</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'cambiarcontra',
  data() {
    return {
      cliente:{
        nombre: 'Andrea',
        apellido: 'Hidalgo',
        email: 'andreaa@ejemplo.com',
        numero: '934984355',
        provincia: 'Lima',
        distrito: 'Lima',
        calle: 'Jr. San Pedro',
        numcalle: '1309',
        casadep: 'Casa',
        recibepedidos: 'Yo mismo',
      },

      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    };
  },
  methods: {
    saveChanges() {
      if (this.newPassword !== this.confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
      }
      
      if (this.currentPassword === this.newPassword) {
        alert('La nueva contraseña no puede ser igual a la contraseña actual.');
        
      }
      
      if (this.currentPassword.length === 0 || this.newPassword.length === 0 || this.confirmPassword.length === 0) {
        alert('Por favor, completa todos los campos.');
        return;
      }
      
      // ingresar codigo para guardar en base de datos
      
      if(todoestacorrecto){
        axios.put(this.$url+'/cambiarContraseña',this.$params.id,this.cliente,{

        }).then()
      }
      // this.mensaje=result.data.messagge
      
      alert('Contraseña cambiada exitosamente.');
    },
    initDataUser(){
      axios.get(this.$url+'/getClienteById'+this.$params.id,this.cliente,{
        Headers:{
          'content-Type':'string/Json',
        'Authorization': this.token
        }
      }).then(
        (result)=> {
          console.log(result.data)
          this.cliente=result.data
      }).catch((err)=> {return console.log(err)})
    }
    
  },
  beforeMount(){
    this.initDataUser()
  }
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial, sans-serif;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
}

label {
  margin-bottom: 5px;
}

input {
  margin-bottom: 10px;
  padding: 5px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
