function doIt(str, dec) {
    return dec(str)
}

e1 = doIt("supercalifragilisticexpialidocious", sj => cArray(sj))
console.log(e1)

function cArray(sc) {
    li =[]
    if (sc.length==0) {
        return li
    }
    current=""
    for (let i=0;i<sc.length;i++) {

        if (sc[i]=="c" || sc[i]=='c') {
            li.push(current)
            current="c"
        } else {
            current=current+sc[i]
        }
    }
    li.push(current)
    return li
}