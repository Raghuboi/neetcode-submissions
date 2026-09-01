class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const seen: Map<string, Array<string>> = new Map()

        for (const str of strs) {
            const key = str.split('').sort().join('')
            const arr = seen.get(key) ?? []
            arr.push(str)
            seen.set(key, arr)
        }

        return [...seen.values()]
    }
}
