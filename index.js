function highAndLow(numbers){
    let array = numbers.split(" ").sort()
    let high = Math.max(...array)
    let low = Math.min(...array)
     return `${high} ${low}`
}