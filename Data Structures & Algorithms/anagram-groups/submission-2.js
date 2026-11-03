class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
     const wordsGroup = {};

     for (const word of strs) {
      const sortedWord = word.split('').sort().join('');
    
      if (!wordsGroup[sortedWord]) {
        wordsGroup[sortedWord] = []
      } 
        wordsGroup[sortedWord].push(word)
      
    }

    return Object.values(wordsGroup);
}
}