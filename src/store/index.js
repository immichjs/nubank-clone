import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: 'Anon',

    startState: false,
    balanceVisibilityStatus: true,
    payStatus: false,
    virtualCardStatus: false,
    loadingState: false,

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
    
    creditCardNumbers: [
      { number: '5142 7849 0604 4547', cardExpiry: '12/2029', cvv: '686' },
      { number: '5530 7001 8318 8229', cardExpiry: '04/2029', cvv: '544' },
      { number: '5256 9548 2506 3561', cardExpiry: '03/2029', cvv: '254' },
      { number: '5290 9354 3663 1936', cardExpiry: '10/2029', cvv: '378' },
      { number: '5462 1805 6385 0312', cardExpiry: '07/2029', cvv: '541' },
      { number: '5109 5925 6490 7066', cardExpiry: '10/2029', cvv: '680' },
      { number: '5588 8177 1806 1928', cardExpiry: '11/2029', cvv: '570' },
      { number: '5131 0977 3281 5680', cardExpiry: '10/2029', cvv: '843' },
      { number: '5550 4572 7504 6683', cardExpiry: '06/2029', cvv: '288' },
      { number: '5359 4869 7950 9913', cardExpiry: '09/2029', cvv: '856' },
      { number: '5204 4915 1701 4753', cardExpiry: '01/2029', cvv: '664' },
      { number: '5400 3937 2879 2551', cardExpiry: '01/2029', cvv: '796' },
      { number: '5259 0346 4346 5673', cardExpiry: '02/2029', cvv: '192' },
      { number: '5385 8230 4193 3317', cardExpiry: '08/2029', cvv: '315' },
      { number: '5274 9429 9754 7568', cardExpiry: '12/2029', cvv: '252' },
      { number: '5377 6937 9912 2383', cardExpiry: '10/2029', cvv: '251' },
      { number: '5432 8207 9453 0038', cardExpiry: '11/2029', cvv: '274' },
      { number: '5114 7393 7684 5413', cardExpiry: '09/2029', cvv: '688' },
      { number: '5147 6583 0130 3200', cardExpiry: '09/2029', cvv: '419' },
    ],
    cardIndex: 0,
  },
  getters: {
    startState: state => state.startState,
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

    creditCardNumbers: state => state.creditCardNumbers,
    cardIndex: state => state.cardIndex
  },
  mutations: {
    changeStartState: (state, payload) => state.startState = payload,
    changeVisibilityStatusIcon: (state, payload) => payload ? state.balanceVisibilityStatus = payload : state.balanceVisibilityStatus = payload,
    changeVirtualCardState: (state, payload) => state[payload.name] = payload.status,
    changePayStatus: (state, payload) => state[payload.name] = status,
    changeLoadingState: (state, payload) => state.loadingState = payload,

    setUser: (state, payload) => {
      state.userName = payload.name || state.username
      state.balanceAvailable = Number(payload.balance) || 1000,
      state.availableLimit = Number(payload.limit) || 200
    },

    setCardIndex: (state, payload) => state.cardIndex = payload
  },
  actions: {
    loading: ({ commit }, payload) => {
      setTimeout(() => {
        commit('changeLoadingState', payload)
      }, 3000)
    }
  }
})
