class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
      counts = {}
      for num in nums:
        exists = counts.get(num)
        if (bool(exists)):
          return True
        else:
          counts[num] = counts.get(num, 0) + 1
      return False