function doIt(str, dec) {
    return dec(str)
}

e1 = doIt("supercalifragilisticexpialidocious", sj => cArray(sj))
console.log(e1)
e2 = doIt("supercalifragilisticexpialidocious", sj => dArray(sj))
console.table(e2)

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

function dArray(sd) {
    current2=""
    count=0
    for (let j=0;j<sd.length;j++) {
        if (sd[j]=="a" || sd[j]=='a') {
            current2+="A"
        } else {
            current2=current2+sd[j]
            count++
        }
    }
    return {
        originalString: sd,
        modifiedString: current2,
        numberReplaced: count,
        length: current2.length,
    }
}