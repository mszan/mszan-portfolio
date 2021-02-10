/**
 * Returns random block rotation deg.
 * @param min           Minimum random value.
 * @param max           Maximum random value.
 */
export function getRandomBlockRotation(min, max) {
    return (Math.floor(
        Math.random() * (Math.floor(max) - Math.ceil(min))
        ) + Math.ceil(min))
        * (Math.random() < 0.5 ? -1 : 1); // <- get random boolean
}