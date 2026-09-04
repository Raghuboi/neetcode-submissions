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
            const volume = width * Math.min(heights[left], heights[right])

            maxVolume = Math.max(maxVolume, volume)

            if (heights[left] > heights[right]) {
                right--
            } else if (heights[right] > heights[left]) {
                left++
            } else {
                left++
                right--
            }
        }

        return maxVolume

    }
}
