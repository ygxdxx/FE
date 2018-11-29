export default {
  changeCity(state, val) {
    state.city = val
    try {
      localStorage.city = val
    } catch (e) {
    }
  }
}
