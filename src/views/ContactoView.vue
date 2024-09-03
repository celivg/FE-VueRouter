<script>
export default {
  methods: {
    VolverAlInicio() {
      this.$router.push({ name: 'inicio' })
    }
  }
}
</script>

<template>
  <div class="container my-5 py-5">
    <h2>¡Contáctanos!</h2>

    <form>
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="nombre" aria-describedby="nombreHelp" />
        <div id="nombreHelp" class="form-text">Ingresa tu nombre</div>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Correo Electrónico</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
        <div id="emailHelp" class="form-text">Ingresa tu correo electrónico</div>
      </div>
      <div class="mb-3">
        <label for="mensaje" class="form-label">Mensaje</label>
        <textarea class="form-control" id="mensaje" rows="3"></textarea>
      </div>
      <div class="buttons">
      <button type="submit" class="btn btn-custom">Enviar</button>

      <button class="btn btn-custom2" @click="VolverAlInicio">Ir a Inicio</button>
    </div>
    </form>
  </div>
</template>

<style scoped>
h2{
  margin-top: 2rem;
  font-weight: 600;
  color: #707070;
  text-align: center;
}

form {
  margin: 0 auto;
  width: 50%;
}

.buttons {
  display: flex;
  justify-content: space-between;
}

.btn-custom {
  background-color: #e83e8c;
  color: #ffffff;
  border: none;
  margin-top: 1rem;
}

.btn-custom2{
  color: #e83e8c;
  border: 2px solid #e83e8c;
  margin-top: 1rem;
}

.btn-custom:hover {
  background-color: #d6337a;
}

.btn-custom2:hover{
  background-color: #e83e8c;
  color: #ffffff;
}
</style>