export default {
  filters: {
    BRL (coin) {
      return `${coin}`.replace('.', ',')
    }
  }
}
