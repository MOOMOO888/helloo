//function doTask1(){
    console.log('Hi...');
//}
function doTask1(){
    setTimeout(()=>{
        console.log('Hi..')
    },2000)
}

function doTask2(){
    console.log('Hi...');
}
doTask1()
console.log('woooooo')
doTask2