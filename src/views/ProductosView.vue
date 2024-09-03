<script>
export default {
  methods: {
    VolverAlInicio() {
      this.$router.push({ name: "inicio" });
    },
  },
  props: {
    nombre: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    precio: {
      type: Number,
      required: true,
    },
    cantidad: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <section class="container" id="productos">
    <h1 class="text-center">Productos</h1>
    <div class="row">
      <div class="col-sm-4 col-12 px-5 mb-4">
        <div class="card">
          <img
            src="../assets/img/desayunos.jpg"
            class="card-img-top"
            alt="colaciones"
          />
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ nombre }}</h5>
            <p class="card-text">
              {{ descripcion }}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Precio: {{ precio }}</li>
            <li class="list-group-item">Cantidad: {{ cantidad }}</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Ver más</a>
            <a href="#" class="card-link">Comprar</a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.btn-right {
  display: flex;
  justify-content: flex-end;
}

.btn-custom2 {
  color: #e83e8c;
  border: 2px solid #e83e8c;
  margin-top: 1rem;
}

.btn-custom2:hover {
  background-color: #e83e8c;
  color: #ffffff;
}
</style>
