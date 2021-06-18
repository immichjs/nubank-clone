import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: 'Anon',
    balanceVisibilityStatus: true,
    payStatus: false,
    virtualCardStatus: false,
    loadingState: true,

    currentInvoice: 0,
    availableLimit: 0,
    
    balanceAvailable: 0,
    loanAvailable: 51000,

    footerListItems: [
      { icon: 'move', name: 'Pix', id: 0, nameState: '' },
      { icon: 'barcode', name: 'Pagar', id: 1, nameState: 'payStatus' },
      { icon: 'user-plus', name: 'Indicar amigos', id: 2, nameState: '' },
      { icon: 'coin', name: 'Transferir', id: 3, nameState: '' },
      { icon: 'coin', name: 'Depositar', id: 4, nameState: '' },
      { icon: 'donate-heart', name: 'Empréstimos', id: 5, nameState: '' },
      { icon: 'credit-card', name: 'Cartão virtual', id: 6, nameState: 'virtualCardStatus' },
      { icon: 'mobile-alt', name: 'Recarga de celular', id: 7, nameState: '' },
      { icon: 'slider', name: 'Ajudar limite', id: 8, nameState: '' },
      { icon: 'lock-alt', name: 'Bloquear cartão', id: 10, nameState: '' },
      { icon: 'coin', name: 'Cobrar', id: 11, nameState: '' },
      { icon: 'donate-heart', name: 'Doação', id: 12, nameState: '' },
      { icon: 'help-circle', name: 'Me ajuda', id: 13, nameState: '' },
    ],
  },
  getters: {
    username: state => state.userName,
    balanceVisibilityStatus: state => state.balanceVisibilityStatus,
    payStatus: state => state.payStatus,
    virtualCardStatus: state => state.virtualCardStatus,
    loadingState: state => state.loadingState,

    currentInvoice: state => state.currentInvoice,
    availableLimit: state => state.availableLimit,
    
    balanceAvailable: state => state.balanceAvailable,
    loanAvailable: state => state.loanAvailable,

    getFooterListItems: state => state.footerListItems,
  },
  mutations: {
    changeVisibilityStatusIcon: state => state.balanceVisibilityStatus = !state.balanceVisibilityStatus,
    changeVirtualCardState: (state, payload) => state[payload.name] = payload.status,
    changePayStatus: (state, payload) => state[payload.name] = status,
    changeLoadingState: (state, payload) => state.loadingState = payload,

    SET_USERNAME: (state, payload) => state.userName = payload || state.userName,
    SET_LIMIT: (state, payload) => state.availableLimit = Number(payload) || 200,
    SET_BALANCE: (state, payload) => state.balanceAvailable = Number(payload) || 990,
  },
  actions: {
    loading: ({ commit }, payload) => {
      setTimeout(() => {
        commit('changeLoadingState', payload)
      }, 3000)
    }
  }
})
