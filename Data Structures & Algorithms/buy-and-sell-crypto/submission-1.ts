class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let lowest = Infinity
        let maxProfit = 0
        
        for (const price of prices) {
            lowest = Math.min(lowest, price)
            const profit = price - lowest
            maxProfit = Math.max(maxProfit, profit)
        }

        return maxProfit
    }
}
