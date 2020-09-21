
const payWithBank3D = {
  install(Vue, merchant_Key) {
    Vue.mixin({
      mounted() {
        const payWithBank3DJS = 'https://parkwaycdnstorage.blob.core.windows.net/bank3d/bank3d.min.js'
        const script = document.createElement('script');
        script.src = payWithBank3DJS
        if(!document.querySelector(`[src="${payWithBank3DJS}"]`)) {
          document.body.appendChild(script)
        }
      }
    })

    Vue.prototype.$paywithbank3d = {
      open(options){
        const payment = window.Bank3D.createPayment({
          merchantKey: merchant_Key,
          ...options
        })
        payment.open();
      }
    }


  }
}

export default payWithBank3D;

