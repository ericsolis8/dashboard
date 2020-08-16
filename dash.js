const app = new Vue({
    el: "#app",
    data: {
        seleccionaProductoId: undefined,
        verProductoId: undefined,
        platillo: {
            name: "Postres",
            opciones: [
                {
                    id: 1,
                    nombre: "Crepa fresa con platano",
                    img: "img/crepa-fresa-platano.jpeg",
                    cantidad: 80,
                    color: "#cfcfcf",
                    detalles: ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt non qui fugiat iste sapiente facere, velit, laudantium aliquid hic error voluptate ipsa quis. Aut obcaecati in molestias, provident architecto quisquam saepe tempora nostrum molestiae voluptas odio pariatur perferendis dicta illum illo tempore laudantium eveniet, iste sint numquam rerum omnis earum voluptatum. Commodi eos doloremque error atque recusandae. Ab laudantium nesciunt explicabo sequi iusto aliquam ipsa quod, natus ipsum mollitia aspernatur.']
                },
                {
                    id: 2,
                    nombre: "Hotcake fresa con platano",
                    img: "img/hotcake.jpeg",
                    cantidad: 50,
                    color: "#cffc",
                    detalles: ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt non qui fugiat iste sapiente facere, velit, laudantium aliquid hic error voluptate ipsa quis. Aut obcaecati in molestias, provident architecto quisquam saepe tempora nostrum molestiae voluptas odio pariatur perferendis dicta illum illo tempore laudantium eveniet, iste sint numquam rerum omnis earum voluptatum. Commodi eos doloremque error atque recusandae. Ab laudantium nesciunt explicabo sequi iusto aliquam ipsa quod, natus ipsum mollitia aspernatur.']
                },
                {
                    id: 3,
                    nombre: "Hotcake chocolate",
                    img: "img/hotcake-chocolate.jpeg",
                    cantidad: 20,
                    color: "#aaaaaa",
                    detalles: ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt non qui fugiat iste sapiente facere, velit, laudantium aliquid hic error voluptate ipsa quis. Aut obcaecati in molestias, provident architecto quisquam saepe tempora nostrum molestiae voluptas odio pariatur perferendis dicta illum illo tempore laudantium eveniet, iste sint numquam rerum omnis earum voluptatum. Commodi eos doloremque error atque recusandae. Ab laudantium nesciunt explicabo sequi iusto aliquam ipsa quod, natus ipsum mollitia aspernatur.']
                }
            ]
        }
    },
    computed: {
        selectedProduct() {
            if(this.seleccionaProductoId) {
                return this.platillo.opciones.find(p => p.id === this.seleccionaProductoId)
            }
            return this.platillo.opciones[0]
        },
        selectedProductImg() {
            if(this.verProductoId) {
                return this.platillo.opciones.find(p => p.id === this.verProductoId).img
            }
            return this.selectedProduct.img
        }
    },
    methods: {
        selectProduct(opcionId) {
            this.seleccionaProductoId = opcionId
        },
        setPreviewModel(opcionId) {
            this.verProductoId = opcionId
        },
        clearPreviewModel() {
            this.verProducotId = undefined
        }
    },
});