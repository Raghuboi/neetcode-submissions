class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        const seen: Map<number, number> = new Map()

        for (let i = 0; i < numbers.length; i++) {
            if (seen.has(target - numbers[i])) {
                return [1 + seen.get(target - numbers[i]), 1 + i]
            }
            
            seen.set(numbers[i], i)
        }

        return []
    }
}
