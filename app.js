window.addEventListener('load', () => {
    const vm = new Vue({
        el: "#app",
        data: {
            bitcoinData: {
                tiempo: null,
                precio: null,
            }
        },
        created: function() {
            axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then((val) => {
                this.bitcoinData.tiempo = val.data.time.updated
                this.bitcoinData.precio = val.data.bpi.USD.rate_float.toFixed(2)
                console.log(this.bitcoinData.precio);
            })
            .catch((err) => {
                console.log(err)
            })
        }
    });
})