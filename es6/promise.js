
var Por = function(n){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(n)
        },1000)
    }).then(res=>{
        console.log("我在这"+res)
        return 20
    }).then(res=>{
        console.log("我在这"+res)
        return 30;
    })
}
Por(10).then(res=>{
    console.log(res)
})