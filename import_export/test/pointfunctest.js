
const pointfunc = {
    aaa(){
        setTimeout(function(){
            setTimeout(function(){
                console.log(this)
            })

            setTimeout(()=>console.log(this))
        })
    },

    bbb(){
        setTimeout(()=>{
            setTimeout(function(){
                console.log(this)
            })

            setTimeout(()=>console.log(this))
        })

    },

    ccc(){
        console.log(this)
    }



}
pointfunc.aaa()
pointfunc.bbb()
pointfunc.ccc()