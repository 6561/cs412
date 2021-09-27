const res = st1 => revAlph(st1)
console.log(`exioi in reverse alphabetical order is ${res("exioi")}`)
console.log(`supercalifragilisticexpialidocious in reverse alphabetical order is ${res("supercalifragilisticexpialidocious")}`)

function revAlph(st) {
    len = st.length
    if (len<2){
        return str
    }
    ret = ""
    for (let i=0;i <len;i++) {
        current=st.charAt(i)
        for (let j=0;j<len;j++) {
            if (j==ret.length) {
                ret+=current
                break
            } else if (j<ret.length && ret.charAt(j)<=current) {
                ret=ret.substring(0,j)+current+ret.substring(j)
                break
            }
        }
    }
    return ret
}