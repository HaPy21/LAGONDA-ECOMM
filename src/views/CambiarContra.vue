<template>
  <div class="container">
    <h1>Cambiar Contraseña</h1>
    <form class="form">
      <label for="password">Contraseña Actual:</label>
      <input type="password" id="password" required>
      <label for="newPassword">Nueva Contraseña:</label>
      <input type="password" id="newPassword" required>
      <label for="confirmPassword">Confirmar Nueva Contraseña:</label>
      <input type="password" id="confirmPassword" required>
      <button type="submit">Guardar Cambios</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'cambiarcontra'
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
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