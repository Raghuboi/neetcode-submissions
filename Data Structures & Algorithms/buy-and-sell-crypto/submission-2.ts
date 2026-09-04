class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit = 0
        let lowest = Infinity

        for (const price of prices) {
            const profit = price - lowest
            maxProfit= Math.max(maxProfit, profit)
            lowest = Math.min(lowest, price)
        }

        return maxProfit
    }
}
