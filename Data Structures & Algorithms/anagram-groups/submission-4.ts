class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const seen = new Map<string, Array<string>>()

        for (let i = 0; i < strs.length; i++) {
                const str = strs[i]
                const key = str.split("").sort().join("")
                const arr = seen.get(key) ?? []
                arr.push(str)
                seen.set(key, arr)
        }

        return Array.from(seen.values())
    }
}
