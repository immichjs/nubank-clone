import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: 'Michel França',
    visibleAccountValue: true,

    footerListItems: [
      { url: ' ', name: 'Pix', id: 0 },
      { url: ' ', name: 'Pagar', id: 1 },
      { url: ' ', name: 'Indicar amigos', id: 2 },
      { url: ' ', name: 'Transferir', id: 3 },
      { url: ' ', name: 'Depositar', id: 4 },
      { url: ' ', name: 'Empréstimos', id: 5 },
      { url: ' ', name: 'Cartão virtual', id: 6 },
      { url: ' ', name: 'Recarga de celular', id: 7 },
      { url: ' ', name: 'Ajudar limite', id: 8 },
      { url: ' ', name: 'Bloquear cartão', id: 10 },
      { url: ' ', name: 'Cobrar', id: 11 },
      { url: ' ', name: 'Doação', id: 12 },
      { url: ' ', name: 'Me ajuda', id: 13 },
    ],
  },
  getters: {
    getUserName: state => state.userName,
    getVisibleAccountValue: state => state.visibleAccountValue,

    getFooterListItems: state => state.footerListItems,
  },
  mutations: {
    changeVisibilityAccountValue (state) {
      state.visibleAccountValue = !state.visibleAccountValue
    }
  },
  actions: {
  },
  modules: {
  }
})
