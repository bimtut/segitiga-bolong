function segitigaBolong (height) {
    let len = 0, result = [], fixLen = 0, starStart = 0, startEnd = 0
    if (height >= 1) {
        fixLen = height*2-1
    } else {
        return "variabel yang anda masukkan tidak tepat"
    }
    len = fixLen
    startEnd = len-1

    while (len >= 1) {
        let str = ''
        if (len == height*2-1) {
            for (let i = 0; i < fixLen; i++) {
                str += '*'
            }
            result.push(str)
            len -= 2
            starStart++
            startEnd--
        } else {
            for (let i = 0; i < fixLen; i++) {
                if (i == starStart || i == startEnd) {
                    str += '*'
                } else {
                    str += ' '
                }
            }
            result.push(str)
            len -= 2
            starStart++
            startEnd--
        }
    }

    let resultStr = ''
    for (let i = 0; i < result.length; i++) {
        resultStr += result[i] + '\n'
    }
    return resultStr
}

// test case
console.log(segitigaBolong('hvhv'))
console.log(segitigaBolong(0))
console.log(segitigaBolong(3))
console.log(segitigaBolong(8))