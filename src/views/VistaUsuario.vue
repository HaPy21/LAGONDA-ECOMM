<template>
  <div class="container">
    <h1></h1>
    <div class="user-info">
      <h2>INFORMACIÓN PERSONAL</h2>
      <table>
        <tr>
          <td><strong>Nombre:</strong></td>
          <td>
            <input v-model="user.nombre" :disabled="!editingMode" />
          </td>
        </tr>
        <tr>
          <td><strong>Apellido:</strong></td>
          <td>
            <input v-model="user.apellido" :disabled="!editingMode" />
          </td>
        </tr>
        <tr>
          <td><strong>Correo Electrónico:</strong></td>
          <td>
            <input v-model="user.email" :disabled="!editingMode" />
          </td>
        </tr>
        <tr>
          <td><strong>Número de Contacto:</strong></td>
          <td>
            <input v-model="user.numero" :disabled="!editingMode" />
          </td>
        </tr>
        <tr>
          <td><strong>Provincia:</strong></td>
          <td>
            <input v-model="user.provincia" :disabled="!editingMode" />
          </td>
        </tr>
        <tr>
          <td><strong>Distrito:</strong></td>
          <td>
            <input v-model="user.distrito" :disabled="!editingMode" />
          </td>
        </tr>
        <tr>
          <td><strong>Calle:</strong></td>
          <td>
            <input v-model="user.calle" :disabled="!editingMode" />
          </td>
        </tr>
        <tr>
          <td><strong>Número:</strong></td>
          <td>
            <input v-model="user.numcalle" :disabled="!editingMode" />
          </td>
        </tr>
        <tr>
          <td><strong>Casa/Depto:</strong></td>
          <td>
            <input v-model="user.casadep" :disabled="!editingMode" />
          </td>
        </tr>
        <tr>
          <td><strong>Recibe Pedido:</strong></td>
          <td>
            <input v-model="user.recibepedidos" :disabled="!editingMode" />
          </td>
        </tr>
      </table>
    </div>
    <div class="button-container">
      <button @click="toggleEditingMode">
        {{ editingMode ? 'Guardar Cambios' : 'Editar Información' }}
      </button>
      <button v-on:click="cambiarContra()" @click="modificarContraseña">Modificar Contraseña</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'usuario',
  data() {
    return {
      user: {
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
      editingMode: false,
    };
  },
  methods: {
    cambiarContra() {
      this.$router.push('/CambiarContra');
    },
    toggleEditingMode() {
      if (this.editingMode) {
        // Lógica para guardar los cambios
        // Aquí puedes enviar los datos actualizados al servidor
        console.log('Guardando cambios:', this.user);
      }
      this.editingMode = !this.editingMode;
    },
    modificarContraseña() {
      // Agrega aquí la lógica para modificar la contraseña del usuario
    },
  },
};
</script>

<style>
.container {
  display: flex;
  margin-top: 11rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.user-info {
  margin-bottom: 20px;
}

.user-info h2,
.orders h2 {
  margin-bottom: 10px;
}

.orders ul {
  list-style: none;
  padding: 0;
}

.orders li {
  margin-bottom: 10px;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 10px;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

table {
  border-collapse: collapse;
  width: 100%;
}

table td,
table th {
  border: 1px solid #ddd;
  padding: 8px;
}

table tr:nth-child(even) {
  background-color: #f2f2f2;
}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #007bff;
  color: white;
}
</style>
