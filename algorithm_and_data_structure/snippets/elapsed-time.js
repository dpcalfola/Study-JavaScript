function addUpTo1(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i
    }
    return total
}

function addUpTo2(n) {
    return n * (n + 1) / 2
}


function functionPerformance(targetFunction) {
    let t1 = performance.now();
    targetFunction();
    let t2 = performance.now();
    console.log(t2 - t1)
}

let testNumber = 100
functionPerformance(() => addUpTo1(testNumber))
functionPerformance(() => addUpTo2(testNumber))


console.log(addUpTo1(100))
console.log(addUpTo2(100))