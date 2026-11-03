class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {}
        for(const num of nums){
            if(!freq[num]){
                freq[num] = []
            }
             freq[num].push(num)
        }

        const sortedFreq = Object.values(freq).sort((a, b) => b.length - a.length)
        
        return sortedFreq.slice(0,k).map(arr => arr[0])
    }
}
