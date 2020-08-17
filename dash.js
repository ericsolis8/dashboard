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
                    images: ["img/crepa-fresa-platano.jpeg",
                            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.instructables.com%2FFGJ%2FT5XM%2FGJHVGWUZ%2FFGJT5XMGJHVGWUZ.MEDIUM.jpg&f=1&nofb=1",
                            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Finspiredcooks.com%2Fwp-content%2Fgallery%2Frecipe%2FStrawberry_Crepes.jpg&f=1&nofb=1",
                            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcomohacercrepas.net%2Fwp-content%2Fuploads%2F2018%2F09%2F18.-crepas-de-fresa-300x225.jpg&f=1&nofb=1"
                            ],
                    cantidad: 80,
                    color: "#cfcfcf",
                    detalles: ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt non qui fugiat iste sapiente facere, velit, laudantium aliquid hic error voluptate ipsa quis. Aut obcaecati in molestias, provident architecto quisquam saepe tempora nostrum molestiae voluptas odio pariatur perferendis dicta illum illo tempore laudantium eveniet, iste sint numquam rerum omnis earum voluptatum. Commodi eos doloremque error atque recusandae. Ab laudantium nesciunt explicabo sequi iusto aliquam ipsa quod, natus ipsum mollitia aspernatur.']
                },
                {
                    id: 2,
                    nombre: "Hotcake fresa con platano",
                    images: ["img/hotcake.jpeg",
                            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.lovethispic.com%2Fuploaded_images%2F42227-Fruit-Waffles.jpg&f=1&nofb=1",
                            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fwaffles-strawberry-ice-cream-delicious-41180162.jpg&f=1&nofb=1",
                            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngriver.com%2Fwp-content%2Fuploads%2F2018%2F03%2FDownload-Waffles-PNG-File-420x267-458.png&f=1&nofb=1"
                            ],
                    cantidad: 50,
                    color: "#cffc",
                    detalles: ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt non qui fugiat iste sapiente facere, velit, laudantium aliquid hic error voluptate ipsa quis. Aut obcaecati in molestias, provident architecto quisquam saepe tempora nostrum molestiae voluptas odio pariatur perferendis dicta illum illo tempore laudantium eveniet, iste sint numquam rerum omnis earum voluptatum. Commodi eos doloremque error atque recusandae. Ab laudantium nesciunt explicabo sequi iusto aliquam ipsa quod, natus ipsum mollitia aspernatur.']
                },
                {
                    id: 3,
                    nombre: "Hotcake chocolate",
                    images: [
                        "img/hotcake-chocolate.jpeg",
                        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fwww.ahla-3alam.com%2Fwp-content%2Fuploads%2F2016%2F11%2Fsweets15.jpg%3Fresize%3D493%252C329&f=1&nofb=1",
                        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.lovethispic.com%2Fuploaded_images%2F50439-Chocolate-Waffles.png&f=1&nofb=1",
                        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F560x315%2F2900185.jpg&f=1&nofb=1"
                    ],
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