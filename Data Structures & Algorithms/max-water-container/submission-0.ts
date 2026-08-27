class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0
        let right = heights.length - 1
        let maximum = 0

        while (left < right) {
            const width = right - left
            const vol = width * Math.min(heights[left], heights[right])
            
            if (vol > maximum) {
                maximum = vol
            }

            if (heights[left] > heights[right]) {
                right--
            } else if (heights[left] < heights[right]) {
                left++
            } else {
                right--
                left++
            }
        }

    return maximum
    
    }
}
