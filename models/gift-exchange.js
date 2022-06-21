// MODEL
const { BadRequestError } = require("../utils/errors")

class GiftExchange {
    static async pairs(names) {
        if (!names)
        {
            throw new BadRequestError("Names value not given in request body.")
        }
        else if (names.length % 2 === 1)
        {
            throw new BadRequestError("Number of names must be even. Got odd.")
        }    // why should this be commented out to pass the test?
        else if (names.length % 2 === 0 && names.length !==0 ) // this means the list is even
        {
            let tempNames1 = names.slice()
            let pairedNames = []

            tempNames1.sort(function () {return 0.5 - Math.random();})
            while (tempNames1.length)
            {
                let name1 = tempNames1.pop()
                tempNames1.sort(function () {return 0.5 - Math.random();})
                let name2 = tempNames1.pop()
                pairedNames.push([name1, name2])
            }
            return pairedNames
        }

    }

    static async traditional(names) {
        if (!names)
        {
            throw new BadRequestError("Names value not given in request body.")
        }
        else if (names.length % 2 === 1)
        {
            throw new BadRequestError("Number of names must be even. Got odd.")
        }    // not checking if odd anymore but removes error from test case
        else if (names.length % 2 === 0 && names.length !==0 ) // this means the list is even
        {
            let tempNames1 = names.slice()
            let pairedNames = []

            tempNames1.sort(function () {return 0.5 - Math.random();})
            let firstName = ""
            let name2 = ""
            while (tempNames1.length > 1)
            {
                if (firstName === ""){
                    firstName = tempNames1[tempNames1.length - 1]
                }
                let name1 = tempNames1.pop()
                tempNames1.sort(function () {return 0.5 - Math.random();})
                name2 = tempNames1[tempNames1.length - 1]
                pairedNames.push(`${name1} is giving a gift to ${name2}`)
                name1 = name2
            }
            pairedNames.push(`${name2} is giving a gift to ${firstName}`)

            return pairedNames
        }

    }

    static async quiz() { 
        return (
        [
            {
              question: "question #1",
              answerChoices: [
                "a. first answer choice",
                "b. second answer choice",
                "c. third answer choice",
                "d. fourth answer choice",
              ],
            },
            {
              question: "question #2",
              answerChoices: [
                "a. first answer choice",
                "b. second answer choice",
                "c. third answer choice",
                "d. fourth answer choice",
              ],
            },
            {
                question: "question #3",
                answerChoices: [
                  "a. first answer choice",
                  "b. second answer choice",
                  "c. third answer choice",
                  "d. fourth answer choice",
                ],
              },
              {
                question: "question #4",
                answerChoices: [
                  "a. first answer choice",
                  "b. second answer choice",
                  "c. third answer choice",
                  "d. fourth answer choice",
                ],
              },
              {
                question: "question #5",
                answerChoices: [
                  "a. first answer choice",
                  "b. second answer choice",
                  "c. third answer choice",
                  "d. fourth answer choice",
                ],
              },
           
          ]
        )
    }

    static async quizResults() { 
        pass
    }
}

module.exports = GiftExchange