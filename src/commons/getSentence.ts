import { firstPersonAffirmativeFutureSimple } from "../lib/firstPersonAffirmativeFutureSimple";
import { firstPersonAffirmativePastSimnple } from "../lib/firstPersonAffirmativePastSimple";
import { firstPersonNegativeFutureSimple } from "../lib/firstPersonNegativeFutureSimple";
import { firstPersonNegativePastSimple } from "../lib/firstPersonNegativePastSimple";
import { firstPersonQuestionFutureSimple } from "../lib/firstPersonQuestionFutureSimple";
import { firstPersonQuestionPastSimple } from "../lib/firstPersonQuestionPastSimple";
import { secondPersonQuestionFutureSimple } from "../lib/secondPersonQuestionFutureSimple";
import { thirdPersonAffirmativeFutureSimple } from "../lib/thirdPersonAffirmativeFutureSimple";
import { thirdPersonAffirmativePastSimple } from "../lib/thirdPersonAffirmativePastSimple";
import { thirdPersonNegativeFutureSimple } from "../lib/thirdPersonNegativeFutureSimple";
import { thirdPersonNegativePastSimple } from "../lib/thirdPersonNegativePastSimple";
import { thirdPersonQuestionFutureSimple } from "../lib/thirdPersonQuestionFutureSimple";
import { thirdPersonQuestionPastSimple } from "../lib/thirdPersonQuestionPastSimple";

const getRandomFromArray = (arr: any) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

export const getSentence = () => {
    const tenses = [
        'firstPersonAffirmatePastSimple',
        'thirdPersonAffirmatePastSimple',
        'firstPersonNegativePastSimple',
        'thirdPersonNegativePastSimple',
        'firstPersonQuestionPastSimple',
        'thirdPersonQuestionPastSimple',
        //
        'firstPersonAffirmateFutureSimple',
        'thirdPersonAffirmateFutureimple',
        'firstPersonNegativeFutureSimple',
        'thirdPersonNegativeFutureSimple',
        'firstPersonQuestionFutureSimple',
        'thirdPersonQuestionFutureSimple',
        'secondPersonQuestionFutureSimple',
    ];
    const tense: any = getRandomFromArray(tenses)

    switch(tense) {
        case "firstPersonAffirmatePastSimple":
            return getRandomFromArray(firstPersonAffirmativePastSimnple)
        case "thirdPersonAffirmatePastSimple":
            return getRandomFromArray(thirdPersonAffirmativePastSimple)
        case "firstPersonNegativePastSimple":
            return getRandomFromArray(firstPersonNegativePastSimple)
        case "thirdPersonNegativePastSimple":
            return getRandomFromArray(thirdPersonNegativePastSimple)
        case "firstPersonQuestionPastSimple":
            return getRandomFromArray(firstPersonQuestionPastSimple)
        case "thirdPersonQuestionPastSimple":
            return getRandomFromArray(thirdPersonQuestionPastSimple)
        case "firstPersonAffirmateFutureSimple":
            return getRandomFromArray(firstPersonAffirmativeFutureSimple)
        case "thirdPersonAffirmateFutureimple":
            return getRandomFromArray(thirdPersonAffirmativeFutureSimple)
        case "firstPersonNegativeFutureSimple":
            return getRandomFromArray(firstPersonNegativeFutureSimple)
        case "thirdPersonNegativeFutureSimple":
            return getRandomFromArray(thirdPersonNegativeFutureSimple)
        case "firstPersonQuestionFutureSimple":
            return getRandomFromArray(firstPersonQuestionFutureSimple)
        case "secondPersonQuestionFutureSimple":
            return getRandomFromArray(secondPersonQuestionFutureSimple)
        case "thirdPersonQuestionFutureSimple":
            return getRandomFromArray(thirdPersonQuestionFutureSimple)
    }
}