function getSum (a, b) {
    return a + b
}

const sum = getSum(1, 2)



const getSum = (a, b) => {
    this.myObject.height = a
    const sum = a + b + this.myObject.width
    return sum
}

const sum = getSum(1, 2)

// put all even numbers from an array in an array and then console log all the numbers in that array
const arr = [1, 2, 3, 4]

const getEvens = (arrOfNums) => {
    return arrOfNums.filter((num) => {
        return num % 2
    });
}

const logNumbers = (arrOfNums) => {
    arrOfNums.forEach(num => {
        console.log(num)
    })
}

const evens = getEvens(arr)
logNumbers(events)

// put all even numbers from an array in an array and then console log all the numbers in that array
const arr = [1, 2, 3, 4]

const printEvens = () => {
    let len = arr.length
    for (let i = 0; i < len; i++) {
        if (arr[i] % 2 !== 0) {
            arr.splice(arr[i, 1])
        }
    }

    len = arr.length
    for (let i = 0; i < len; i++) {
        console.log(arr[i])
    }
}

printEvens()


const getBanner = (text, bannerType) => {
    const getBackgroundColor = (bannerType) => {
        switch (bannerType) {
            case 'warning':
                return 'yellow'
            case 'error':
                return 'red'
            default:
                return 'green'
        }
    }

    return `
        <div style=${getBackgroundColor(bannerType)}>${text}</div>
    `
}
const banner = getBanner('This is a warning message', 'warning')





