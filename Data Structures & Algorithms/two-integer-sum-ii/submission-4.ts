class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let left = 0
        let right = numbers.length - 1

        while (left < right) {
            const sum = numbers[left] + numbers[right]

            if (sum === target) {
                return [1 + left, 1 + right]
            } else if (sum > target) {
                right--
            } else {
                left++
            }
        }

        return []
    }
}
