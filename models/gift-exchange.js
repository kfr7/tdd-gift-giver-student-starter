// MODEL
const { BadRequestError } = require("../utils/errors")

class GiftExchange {
    static async pairs(names) {
        if (!names)
        {
            throw new BadRequestError("Names value not given in request body.")
        }
        else if (names.length % 2 === 0 && names.length !==0 ) // this means the list is even
        {
            let tempNames1 = names.slice()
            let pairedNames = []

            tempNames1.sort(function () {return 0.5 - Math.random();})
            while (tempNames1.length)
            {
                console.log(tempNames1.length)
                let name1 = tempNames1.pop()
                tempNames1.sort(function () {return 0.5 - Math.random();})
                let name2 = tempNames1.pop()
                pairedNames.push([name1, name2])
            }
            console.log("Paired names:", pairedNames)
            return pairedNames
        }
        else
        {
            //should throw an error
            console.log("Should throw an error inside pairs method")
            throw new BadRequestError("Number of names must be even. Got odd.")
        }
    }

    static async traditional(names) {
        if (!names)
        {
            throw new BadRequestError("Names value not given in request body.")
        }
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
                console.log(name2)
                pairedNames.push(`${name1} is giving a gift to ${name2}`)
                name1 = name2
            }
            pairedNames.push(`${name2} is giving a gift to ${firstName}`)

            return pairedNames
        }
        else
        {
            //should throw an error
            console.log("Should throw an error inside pairs method")
            throw new BadRequestError("Number of names must be even. Got odd.")
        }
    }

    static async quiz() { 
        pass
    }

    static async quizResults() { 
        pass
    }
}

module.exports = GiftExchange