class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let left = 0
        let right = s.length - 1

        while (left < right) {
            while (left < right && !this.isAlphaNumeric(s[left].toLowerCase())) {
                left++
            }

            while (left < right &&!this.isAlphaNumeric(s[right].toLowerCase())) {
                right--
            }

            if (s[left].toLowerCase() === s[right].toLowerCase()) {
                left++
                right--
            } else {
                return false
            }
        }

        return true
    }

    isAlphaNumeric(s: string): boolean {
        return (("a" <= s && s <= "z") || ("A" <= s && s <= "Z") || "0" <= s && s <= "9")
    }
}
