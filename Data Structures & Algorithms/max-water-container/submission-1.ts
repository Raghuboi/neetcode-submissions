class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let maxVolume = 0
        let left = 0
        let right = heights.length - 1

        while (left < right) {
            const width = right - left
            const height = Math.min(heights[left], heights[right])
            maxVolume = Math.max(maxVolume, width * height)
            
            if (heights[left] < heights[right]) {
                left++
            } else {
                right--
            }
        }

        return maxVolume
    }
}
