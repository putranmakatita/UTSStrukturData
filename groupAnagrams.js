function groupAnagrams(words) {
    const anagrams = {};
    for (const str of words) {
        const sortedStr = str.split('').sort().join('');
        if (!anagrams[sortedStr]) {
            anagrams[sortedStr] = [str];
        } else {
            anagrams[sortedStr].push(str);
        }
    }
    return Object.values(anagrams);
}

// test
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));