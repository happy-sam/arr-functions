let arr = [1, 2, 3, 4];

let arrNew = arr.map((el) => {
    return () => { console.log(el) }
})

arrNew.forEach((e) => {
    console.log(e());
})
