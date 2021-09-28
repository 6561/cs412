const opAdd = (left, right) => left+right
const opSubtract = (left, right) => left-right
const opMultiply = (left, right) => left*right
const opDivide = (left, right) => left/right
const opExp = (left, right) => left^right
const opMod = (left, right) => left%right

const expr = "8+3"
operr = evaluate(expr)
console.log(`${expr} is ${operr}`)

function parseOp(st) {
    if (st.length<3){
        return opAdd
    }
    ch=st.charAt(1)
    switch (ch) {
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
    return opAdd
}
function evaluate(str) {
    rett = parseOp(str)
    le=parseInt(str.substring(0,1))
    ri=parseInt(str.substring(2))
    return rett(le,ri)
}