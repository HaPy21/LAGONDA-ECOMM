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
    <div class="orders">
      <h2>Pedidos</h2>
      <ul>
        <li v-for="order in orders" :key="order.id">
          <p><strong>Fecha:</strong> {{ order.date }}</p>
          <p><strong>Total:</strong> {{ order.total }}</p>
          <p><strong>Estado:</strong> {{ order.status }}</p>
        </li>
      </ul>
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
      orders: [
        {
          id: 1,
          date: '2023-05-20',
          total: '$100.00',
          status: 'En proceso'
        },
        {
          id: 2,
          date: '2023-05-15',
          total: '$50.00',
          status: 'Completado'
        },
        {
          id: 3,
          date: '2023-05-10',
          total: '$75.00',
          status: 'En proceso'
        }
      ]
    };
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

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>