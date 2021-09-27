console.log("say cheese!")
console.log(revAlph("exioi"))
console.log("More cheese?")
function revAlph(st) {
    console.log("In the function")
    if (st.length<2){
        return str
    }
    ret = ""
    for (let i=0;i <st.length;i++) {
        current=st.charAt(i)
        for (let j=0;j<st.length;j++) {
            if (j==ret.length) {
                ret+=current
                break
            } else if (j<ret.length && ret.charAt(j)>=current) {
                ret=ret.substring(0,j)+current+ret.substring(j)
                break
            }
        }
    }
    return ret
}