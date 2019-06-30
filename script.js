let arr = [1, 2, 3, 4];

let arrNew = arr.map((el, i) => {
    return () => { console.log(arr[i]) }
})

arrNew.forEach((e) => {
    console.log(e());
})
