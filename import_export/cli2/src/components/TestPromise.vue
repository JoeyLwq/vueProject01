<template>
  <h2>这里用来测试Promise,请打开F12</h2>
</template>

<script>
export default{
  name: 'TestPromise',
  data() {
    return {
    }
  },
  methods: {
    testAsyncPromise(){
      new Promise((resolve, reject) => {
        console.log('this is layer01')
        setTimeout(() => {
          resolve('lay01')
        },1000)
      }).then(data1 => {
        console.log('this is layer02 and got data from ' + data1)
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve('lay02')
          },1000)
        })
      }).then(data2 => {
        console.log('this is layer03 and got data from ' + data2)
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            reject('lay03')
          },1000)
        })
      }).catch(err => {
        console.log('this is layer04 and got err from ' + err)
      })
    },

    testPromiseSyntax01(){
      new Promise((resolve,reject)=>{
        let temp = 'layer01'
        console.log('this is layer01')
        resolve('from ' + temp)
      }).then((data1) => {
        console.log('this is layer02 and ' + data1)
        return data1 + ' and layer02'
      }).then((data2) => {
        console.log('this is layer03 and ' + data2)
        throw data2 + ' and layer03 and throw'
      }).catch((data3) => {
        console.log(data3)
      })
    },

    testPromiseSyntax02(){
      let temp = 'layerOut'
      Promise.resolve(temp).then((temp)=>{
        return temp + ' + layer01'
      }).then((data1)=>{
        return data1 + ' + layer02'
      }).then((data2)=>{
        console.log(data2)
      })
    },

    testSync(){
      console.log('up')
      //说明setTimeout是异步的
      setTimeout(()=>{
        console.log('in the setTimeout')
      },2000)
      console.log('down')
    },

    testPromiseAll(){
      Promise.all([
        new Promise((resolve, reject) => {
          setTimeout(()=>{
            resolve('promise result up')
          },2000)
        }),
        new Promise((resolve, reject) => {
          setTimeout(()=>{
            resolve('promise result down')
          },1000)
        })
      ]).then(results => {
        console.log(results)
      })
    }



  },
  activated(){
    //this.testAsyncPromise()
    //this.testPromiseSyntax01()
    //this.testPromiseSyntax02()
    //this.testSync()
    this.testPromiseAll()
  }

}
</script>
