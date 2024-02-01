
// Samuel Steyn
// This is my notes/scratch pad



// Range function

function range(initial = 1, final = 10, increment = 1)
{
   if(increment > 0){
    let rangeOfNumbers = []
    if (final > initial){
        for (let i = initial; i <= final; i += increment){
        rangeOfNumbers.push(i)
       }
       return(rangeOfNumbers)
    } else {
        return("Invalid argument")
    }
} else { 
    if(increment < 0){
        let rangeOfNumbers = []
        if (final < initial){
            for (let i = initial; i >= final; i += increment){
                rangeOfNumbers.push(i)
            }
            return(rangeOfNumbers)
        }
        else {
            return("Invalid argument")
        }
    } else {
        return("Invalid increment")
    }
}
}

console.log(range(-3,-300,-10))





















