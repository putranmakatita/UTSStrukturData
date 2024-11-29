function sortRomanNumerals(romanNumerals) {
    const romanToInt = (roman) => {
        const values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
        let total = 0;

        for (let i = 0; i < roman.length; i++) {
            const current = values[roman[i]];
            const next = values[roman[i + 1]];

            if (next && current < next) {
                total -= current;
            } else {
                total += current;
            }
        }

        return total;
    };

    const binarySearch = (arr, value, start, end) => {
        while (start < end) {
            const mid = Math.floor((start + end) / 2);
            if (romanToInt(value) < romanToInt(arr[mid])) {
                end = mid;
            } else {
                start = mid + 1;
            }
        }
        return start;
    };

    for (let i = 1; i < romanNumerals.length; i++) {
        const current = romanNumerals[i];
        const pos = binarySearch(romanNumerals, current, 0, i);

        romanNumerals.splice(i, 1);
        romanNumerals.splice(pos, 0, current);
    }

    return romanNumerals;
}


// test
console.log(sortRomanNumerals(["X", "III", "IX", "IV", "V", "I", "VII", "II"]));


