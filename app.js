{
    //30-masala
    function reverse(number){
        let result = +number.toString().split("").reverse().join("")
        return result
    }
    console.log(reverse(321));
}

{
    //31-masala
    let arr =  ["text", "world", "laptop"]
    let result = arr.reduce((obj, str)=>{
        obj[str] = str.length
        return obj
    }, {})
    console.log(result);
}

{
    //32-masala
    function minMaxWord(str){
        let splt = str.split(" ")
        let maxWord = Math.max(splt.length)
        let minWord = ""
        return maxWord
    }
    console.log(minMaxWord("Men dasturlash kursida o’qiyman"));
}

{
    //33-masala
    function getLevel(number){
        let arr = []
        for(let i = 1; i <= number; i++){
            arr.push(2 ** i)
        }
        return arr
    }
    console.log(getLevel(5));
}

{
    //34-masala
    function foo(str){
        let arr = str.split(" ")
        let minStr = arr[0]
        for(let i = 0; i < arr.length; i++){
            if(arr[i].length < minStr.length){
                minStr = arr[i]
            }
        }
        return minStr
    }
    console.log(foo("Men TATUda O'qiyman"));
}

{
    //35-masala
    const obj = {a: 2, b: 3, c: 4}
    let n = 3
    let resault = {}
    for(let index in obj){
        resault[index] = obj[index] * n
    }
    console.log(resault);
}

{
    //36-masala
    function findNumber(str){
        let Nubers = "1234567890"
        let splt = str.split("")
        let count = 0
        for(let i = 0; i < splt.length; i++){
            if(Nubers.includes(splt[i])){
                count++
            }
        }
        return count
    }
    console.log(findNumber("Men 20 yoshdaman"));
}

{
    //37-masala
    const numToArray = arr => {
        let sum = arr.reduce((a, b)=> a + b, 0)
        let result = sum.toString().split("").map(index => parseInt(index))
        return result
    }
    console.log(numToArray([1, 22, 3]));
}

{
    //38-masala
    function findA(str){
        let splt = str.split(" ")
        let count = 0
        for(let i = 0; i < splt.length; i++){
            if(splt[i].includes("a") || splt[i].includes("A")){
                count++
            }
        }
        return `Kiritilgan matnning ${count} ta so'zida "a" yoki "A" harfi ishlatilgan`
    }
    console.log(findA("Hello my name is Janob hech kim"));
}

{
    //39-masala
    let n = 8
    let count = 0
    if(n % 2 === 0){
        while(n >= 2){
            n = n/2
            count++
        }
        console.log(`Kiritilgan son 2 ning ${count} chi darajasi`);
    }else{
        console.log("Kiritilgan son ikkining darajasidagi son emas");
    }
}

{
    //40-masala
    function middleThigh(arr){
        if(arr.length % 2 != 0){
            let index = Math.floor(arr.length / 2)
            let result = arr[index]
            return result
        }else{
            let index = arr.length / 2
            let result = (arr[index] + arr[index - 1]) / 2
            return result
        }
    }
    console.log(middleThigh([1,2,3,4,5,6]));
}

{
    //45-masala
    const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit']
    let obj = {}
    for(let i = 0; i < animals.length; i++){
        if (obj[animals[i]]) {
            obj[animals[i]] += 1;
        } else {
            obj[animals[i]] = 1;
        }
    }
    console.log(obj);
}

{
    //46-masala
    let arr = [1, 2, 3, 4, 5]
    let result = []
    for(let i = 0; i < arr.length; i++){
        result.push(Math.pow(arr[i], 2))
    }
    console.log(result);
}

{
    //47-masal
    let arr = [ 1, -4, 12, 0, -3, 29, -150]
    let resault = arr.filter(index => index > 0).reduce((a, b) => a + b, 0)
    console.log(resault);
}

{
    //48-masala
    let str = 'George Raymond Richard Martin'
    let result = str.split(" ").map(index => index[0]).join("")
    console.log(result);
}
