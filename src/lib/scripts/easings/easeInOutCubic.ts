/**
 * https://easings.net/#easeInOutCubic
 *
 * @param x - The position on the curve. Must be a number between 0 and 1.
 * @returns number
 */
export default function easeInOutCubic(x: number): number {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}
