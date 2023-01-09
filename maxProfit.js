var maxProfit = function(prices) {
    let min = prices[0]
    let max = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
            console.log('min ' + min)
        } else if (prices[i] - min > max) {
            max = prices[i] - min
            console.log('max ' + max)
        }
    }
    return max
}