class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {}
        const result = []
        for(const num of nums){
            if(!freq[num]){
                freq[num] = []
            }
             freq[num].push(num)
        }

        const sortedFreq = Object.values(freq).sort((a, b) => b.length - a.length)
        for(const i in sortedFreq){
            if(i >= k) break
            result.push(sortedFreq[i][0])
        }
        return result
    }
}
