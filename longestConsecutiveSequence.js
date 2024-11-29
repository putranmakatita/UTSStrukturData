function longestConsecutiveSequence(nums) {
    let longest = 0;
    let set = new Set(nums);
    for (let num of nums) {
        if (!set.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;
            while (set.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }
            longest = Math.max(longest, currentStreak);
        }
    }
    return longest;
}

// test
console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2]));
