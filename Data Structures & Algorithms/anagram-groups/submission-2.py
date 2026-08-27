class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        sortedWords = defaultdict(list) # <sorted-anagram>: [index1, index2]
        for word in strs:
            sortedWord = ''.join(sorted(word))
            sortedWords[sortedWord].append(word)
        return list(sortedWords.values())            