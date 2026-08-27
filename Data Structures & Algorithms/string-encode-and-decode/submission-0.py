class Solution:

    def encode(self, strs: List[str]) -> str:
        output = ""
        for s in strs:
            output += f"{len(s)}#{s}"
        return output
    
    def decode(self, s: str) -> List[str]:
        output = []
        counter = 0
        
        while counter < len(s):
            symbol_pos = counter           
            while s[symbol_pos] != "#":
                symbol_pos += 1
            length = int(s[counter:symbol_pos])
            
            start = symbol_pos + 1
            word = s[start:start+length]
            output.append(word)
            
            counter = start + length
        
        return output