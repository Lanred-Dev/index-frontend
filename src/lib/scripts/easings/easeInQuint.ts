/**
 * https://easings.net/#easeInQuint
 *
 * @param x - The position on the curve. Must be a number between 0 and 1.
 * @returns number
 */
export default function easeInQuint(x: number): number {
    return x * x * x * x * x;
}
