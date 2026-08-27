class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        counts = {}
        frequencies = defaultdict(list)
        result = []
        
        for num in nums:
            counts[num] = counts.get(num, 0) + 1            
            
        for num, count in counts.items():
            frequencies[count].append(num)
            
        for frequency in range(len(nums), 0, -1):
            if frequency in frequencies:
                result.extend(frequencies[frequency])
                if (len(result) >= k):
                    return result[:k]
                
        return result