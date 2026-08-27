class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let lowest =  Infinity
        let maxProfit = 0

        for (const price of prices) {
            if (price < lowest) {
                lowest = price
            }
            
            let profit = price - lowest

            if (profit > maxProfit) {
                maxProfit = profit
            }
        }

        return maxProfit
    }
}
