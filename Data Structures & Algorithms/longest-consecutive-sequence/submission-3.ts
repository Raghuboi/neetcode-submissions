class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
    const seen: Set<number> = new Set(nums)
    let longest = 0

    for (const num of seen) {
        if (!seen.has(num - 1)) {
            let current = num
            let length = 1

            while(seen.has(current + 1)) {
                current++
                length++
            }

            longest = Math.max(longest, length)
        }
    }

    return longest
    }
}
