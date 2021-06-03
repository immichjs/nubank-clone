import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: 'Michel França',
    balanceVisibilityStatus: true,

    currentInvoice: 2432,
    availableLimit: 92832,
    
    balanceAvailable: 24213,
    loanAvailable: 8700,

    footerListItems: [
      { icon: 'move', name: 'Pix', id: 0 },
      { icon: 'barcode', name: 'Pagar', id: 1 },
      { icon: 'user-plus', name: 'Indicar amigos', id: 2 },
      { icon: 'coin', name: 'Transferir', id: 3 },
      { icon: 'coin', name: 'Depositar', id: 4 },
      { icon: 'donate-heart', name: 'Empréstimos', id: 5 },
      { icon: 'credit-card', name: 'Cartão virtual', id: 6 },
      { icon: 'mobile-alt', name: 'Recarga de celular', id: 7 },
      { icon: 'slider', name: 'Ajudar limite', id: 8 },
      { icon: 'lock-alt', name: 'Bloquear cartão', id: 10 },
      { icon: 'coin', name: 'Cobrar', id: 11 },
      { icon: 'donate-heart', name: 'Doação', id: 12 },
      { icon: 'help-circle', name: 'Me ajuda', id: 13 },
    ],
  },
  getters: {
    getUserName: state => state.userName,
    balanceVisibilityStatus: state => state.balanceVisibilityStatus,

    currentInvoice: state => state.currentInvoice,
    availableLimit: state => state.availableLimit,
    
    balanceAvailable: state => state.balanceAvailable,
    loanAvailable: state => state.loanAvailable,

    getFooterListItems: state => state.footerListItems,
  },
  mutations: {
    changeVisibilityStatusIcon (state) {
      state.balanceVisibilityStatus = !state.balanceVisibilityStatus
    },
  },
})
