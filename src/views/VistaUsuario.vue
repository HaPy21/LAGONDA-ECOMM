<template>
  <div class="container">
    <h1>Perfil de Usuario</h1>
    <div class="user-info">
      <h2>Información Personal</h2>
      <p><strong>Nombre:</strong> {{ user.firstName }}</p>
      <p><strong>Apellido:</strong> {{ user.lastName }}</p>
      <p><strong>Correo Electrónico:</strong> {{ user.email }}</p>
      <p><strong>Número:</strong> {{ user.number }}</p>
    </div>
    <button @click="modificarContraseña">Modificar Contraseña</button>
  </div>
</template>

<script>
export default {
  name: 'usuario',
  data() {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        number: '1234567890'
      },
    };
  },
};
</script>
<style>
.container {
  display: flex;
  margin-top: 1rem;
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

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>