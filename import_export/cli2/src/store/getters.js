export default {
  getter01(state, getters){
    return state.counter + '经过了geter01'
  },
  getter02(state, getters){
    return function(sth) {
      return sth + ' 经过了getter02'
    }
  }
}
