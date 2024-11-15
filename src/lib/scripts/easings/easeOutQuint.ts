/**
 * https://easings.net/#easeOutQuint
 *
 * @param x - The position on the curve. Must be a number between 0 and 1.
 * @returns number
 */
export default function easeOutQuint(x: number): number {
    return 1 - Math.pow(1 - x, 5);
}
