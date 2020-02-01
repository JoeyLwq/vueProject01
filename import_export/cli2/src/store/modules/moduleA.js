export const moduleA = {
  state: {
    name: '模块一'
  },
  /*模块中的mutations方法不要重复*/
  mutations: {
    mutationsFromMuduleA(state){
      state.name += ' updated';
    }
  },
  actions: {
    syncFromMuduleA(context){
      return new Promise(resolve => {
        setTimeout(()=>{
          context.commit('mutationsFromMuduleA')
          resolve(context)
        },1000)
      })
    }
  },
  getters: {
    /*rootState可以获取根模块的state对象*/
    getter1FromMuduleA(state,getters,rootState){
      return state.name + rootState.counter + '经过了muduleA的getter1'
    }
  }
};
