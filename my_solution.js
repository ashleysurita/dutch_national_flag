function dnf(arr) {
    if(!arr || !arr.length) return arr

    let curr = 0
    let i = 0    
    while(i < arr.length - 1) {
        if(arr[i] === curr) i++
        else {            
           let swapped = false
           for(let j = i + 1; j < arr.length; j++){
               if(arr[j] === curr) {
                   [ arr[j], arr[i] ] = [ arr[i], arr[j] ]
                   i++                   
                   swapped = true
               }
           }            
            // nothing swapped, increase curr
            if(!swapped) {
                curr++         
            }
        }
    }
    
    return arr
}
