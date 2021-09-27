function revAlph(str) {
    if (str.length<2){
        return str
    }
    
    ret = ""
    for (let i=0;i <str.length;i++) {
        current=str.charAt(i)
        for (let j=0;j<str.length;j++) {
            
            if (j==ret.length) {
                ret+=current
                break
            } else if (j<ret.length) {
                if (ret.charAt(j))
            }
        }
    }
    return ret
}