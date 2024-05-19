function * count(){
    for(let i = 0; i < 5; i++){
        yield i
    }
}

const gen = count()

for(let num of gen){
    console.log(num);
}