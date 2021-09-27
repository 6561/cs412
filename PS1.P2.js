const res = st1 => parseOp(st1)
operr = res("8%3")
console.log(`4+2 is ${parseOp("4+2")}`)
console.log(`2^8 is ${res("2^8")}`)

const opAdd = (left, right) => left+right
const opSubtract = (left, right) => left-right
const opMultiply = (left, right) => left*right
const opDivide = (left, right) => left/right
const opExp = (left, right) => left^right
const opMod = (left, right) => left%right

function parseOp(st) {
    if (st.length<3){
        return opAdd
    }
    switch (st.charAt(1)) {
        case '+':
            return opAdd
        case '-':
            return opSubtract
        case '*':
            return opMultiply
        case '/':
            return opDivide
        case '^':
            return opExp
        case '%':
            return opMod
            
    }
    return opAdds
}
function evaluate(str) {
    resz = st1 => parseOp(st1)
    le=parseInt(str.substring(0,1))
    ri=parseInt(str.substring(2))
    return resz(le,ri)
}