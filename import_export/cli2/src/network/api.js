import {request,multiRequest} from "./request";

export const testGet = ()=>{
  /*返回的是Promise，因此可以调用then或catch方法*/
  return request({
    url: '/get'
  })
};

export const testPost = ()=>{
  return request({
    url: '/post',
    method: 'post'
  })
};

export const testAll = ()=>{
  return multiRequest([testGet(),testPost()])
}
