export const testDetailsCalculator = (originalValue, typedValue) => {
    const words = typedValue.split(' ').length;
    const characters = typedValue.length;
    const mistakes = typedValue.split('').reduce((acc, typedChar, index) => {
        return typedChar !== originalValue[index] ? acc+1 : acc 
    }, 0)

    return { words, characters, mistakes }
}