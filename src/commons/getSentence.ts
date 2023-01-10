const getRandomFromArray = (arr: any) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

export const getSentence = () => {
    // const subjects = ["i", "you", "he", "she", "it", "we", "you", "they"];
    const subjects = ["i", "you", "he", "she", "it", "we", "you", "they"];

    const tenses = [
        'pastSimple',
        'pastSimpleNegation',
        'pastSimpleQuestion',
        // 'presentSimple',
        // 'presentSimpleNegation',
        // 'presentSimpleQuestion',
        'futureSimple',
        'futureSimpleNegation',
        'futureSimpleQuestion',
    ];

    const subject: any = getRandomFromArray(subjects)
    const tense: any = getRandomFromArray(tenses)
}