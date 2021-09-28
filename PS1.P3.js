function doIt(str, dec) {
    return dec(str)
}

e1 = doIt("supercalifragilisticexpialidocious", sj => cArray(sj))
console.log(e1)

function cArray(sc) {
    console.log("got here")
    li =[]
    if (sc.length==0) {
        return li
    }
    console.log("here too")
    //ind = 0
    //while (sc.includes("c")) {
    //    j = sc.indexOf("c")
    //    li.push(sc.substring(0,j))
    //    sc = sc.substring(j)
    //    ind++
    //    console.log(`Index ${ind}, sc is ${sc}`)
    //    if (ind>99) {
    //        break
    //    }
    //}
    //if (sc !== "") {
    //    li.push(sc)
    //}
    current=""
    for (let i=0;i<sc.length;i++) {
        console.log(`i=${i}, current=${current}`)
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