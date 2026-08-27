class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        values = {}
        for index, num in enumerate(nums):
          difference = target - num
          solution = values.get(difference)
          if solution != None:
            return [solution, index]
          else:
            values[num] = index