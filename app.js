const { createApp } = Vue;

createApp({
  template: `
    <div>
      <h1>Lista de Coches</h1>
      <ul>
        <li v-for="coches in paginatedCoches" :key="coches.id">
          <img :src="coches.imagen" :alt="coches.coches" width="100" height="100" />
          <div>
            <strong>{{ coches.coches }}</strong> 
            <br />
            {{ coches.marca}}, {{ coches.modelo }}
          </div>
        </li>
      </ul>

      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">Anterior</button>
        <span>Página {{ currentPage }} de {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Siguiente</button>
      </div>
    </div>
  `,
  data() {
    return {
      coches: [
        { id: 1, coche: "uno",  marca: "audi", modelo: "sportback", imagen: "img/uno.webp" },
        { id: 2, coche: "dos",  marca: "audi", modelo: "sedan", imagen: "img/dos.webp" },
        { id: 3, coche: "tres",  marca: "audi", modelo: "a5", imagen: "img/tres.webp" },
        { id: 4, coche: "cuatro",  marca: "audi", modelo: "a3", imagen: "img/cuatro.webp" },
        { id: 5, coche: "cinco",  marca: "audi", modelo: "coupe", imagen: "img/cinco.webp" },
        { id: 6, coche: "seis",  marca: "audi", modelo: "avantperformance", imagen: "img/seis.webp" },

      ],
      currentPage: 1,
      itemsPerPage: 2,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.coches.length / this.itemsPerPage);
    },
    paginatedCoches() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.coches.slice(start, end);
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
  },
}).mount('#app');
