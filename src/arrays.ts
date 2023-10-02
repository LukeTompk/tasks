/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    }
    if (numbers.length === 1) {
        return [numbers[0], numbers[0]];
    }
    return [numbers[0], numbers[numbers.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripNums = numbers.map((number) => number * 3);
    return tripNums;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const intToStr = numbers.map((str) => {
        const intVal = parseInt(str, 10);
        return isNaN(intVal) ? 0 : intVal;
    });
    return intToStr;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const removed = amounts.map((str) => {
        const removeSign = str.split("$").join("");
        const valInt = parseInt(removeSign, 10);
        return isNaN(valInt) ? 0 : valInt;
    });
    return removed;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const newMessages = messages
        .filter((message) => !message.endsWith("?"))
        .map((message) =>
            message.endsWith("!") ? message.toUpperCase() : message
        );
    return newMessages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const wordsCount = words.filter((word) => word.length < 4).length;
    return wordsCount;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const valid = ["red", "blue", "green"];
    return colors.every((color) => valid.includes(color));
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) return "0=0";
    const strRep = addends.join("+");
    const sum = addends.reduce((temp, val) => temp + val, 0);
    return `${sum}=${strRep}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const sum = values
        .slice(0, values.findIndex((val) => val < 0) + 1 || values.length)
        .reduce((temp, num) => temp + (num > 0 ? num : 0), 0);

    if (values.every((val) => val >= 0)) {
        return [...values, sum];
    }
    const negIndex = values.findIndex((val) => val < 0);
    return [
        ...values.slice(0, negIndex + 1),
        sum,
        ...values.slice(negIndex + 1)
    ];
}
