function dutchNationalFlag(array) {
    let counts = {}
    array.forEach( a => {
        if(!counts[a]) counts[a] = 0
        counts[a]++
    })
    
    let res = []
    for(let i = 0; i <= 2; i++){
        while(counts[i] > 0){
            res.push(i)
            counts[i]--
        }
    }
    
    return res
}

