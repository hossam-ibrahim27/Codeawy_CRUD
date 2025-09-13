/**
 * 
 * @param {string} txt - The input string to slice.
 * @param {number} [limit=50] - The maximum length before truncation (default: 50).
 * @returns {string} A truncated string if longer than the limit.
 */

export const ParagraphSlice = (txt: string, limit: number = 50): string => {
    if (txt.length >= limit) {
        return `${txt.slice(0, limit)}.....`
    }
    return txt;
}