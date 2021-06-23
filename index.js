a = [2, 3, 4, 5, 1]
b = [2, 3, 1, 6, 7, 8]
c = [3, 5, 6, 9, 1, 4]
d = [4, 6, 7, 2, 1, 5]


const arrDiff = (a, b, c, d) => {

    let diff1 = a.filter(item => !b.includes(item)).concat(b.filter(item => !a.includes(item)))
    return diff1
    let diff2 = c.filter(item => !d.includes(item)).concat(d.filter(item => !c.includes(item)))
    return diff2
}
console.log(arrDiff(a, b))
console.log(arrDiff(c, d))






