/**
 * Returns the RGB value of a hex code.
 *
 * @param hex - The hex code.
 * @returns number[]
 */
export default function toRGB(hex: string): number[] {
    const r: number = parseInt(hex.slice(1, 3), 16);
    const g: number = parseInt(hex.slice(3, 5), 16);
    const b: number = parseInt(hex.slice(5, 7), 16);

    return [r, g, b];
}
