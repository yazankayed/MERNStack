let test="hahahhaahhahaha";

let j = test.length-1;
for (let i = 0; i!=j; i++) {
    if (test[i]!=test[j]){
        return false
    }
    j--
    
}
return true