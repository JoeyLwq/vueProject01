import {SYNCCHANGE} from "./action-types";
import {CHANGEDIST} from "./mutation-types";

/*异步操作都放在actions中，但要改变state也都必须通过
  commit mutation来实现*/
export default {
  [SYNCCHANGE](context,msg){
    return new Promise(resolve => {
      setTimeout(()=>{
        context.commit(CHANGEDIST);
        console.log(msg + '在里面显示了');
        resolve('promise里传出的参数')
      },1000)
    })
  }
}
