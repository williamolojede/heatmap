// threshold means the most negative or positive transaction value
export const getTransactionLevel = (value: number, threshold: number) => {
    const absValue = Math.abs(value);
    const absThreshold = Math.abs(threshold);

    const oneThirdOfMax = (1 / 3) * absThreshold;
    const twoThirdOfMax = (2 / 3) * absThreshold;
    let level: number = 1;

    if(absValue <= oneThirdOfMax) {
        level = 1
    }
    if(absValue > oneThirdOfMax && absValue <= twoThirdOfMax) {
        level = 2
    }
    if(absValue > twoThirdOfMax && absValue <= absThreshold) {
        level = 3
    }

    return level;
}