### Tutorial made in markdown format

test
test
test
test

```js
/**
 * Class to create a Programmer
 * @example
 * const newProgrammer = new Programmer({fullName: 'Jane Doe'}, 'C');
 * newProgrammer.getInformation();
 */
class Programmer {
    /**
     * @param {{fullName: string}} user User's Information
     * @param {string} language A programing Language
     *
     * @see https://docs.github.com/es/rest/overview/resources-in-the-rest-api
     * @todo Imlement the other methods
     */
    constructor(user, language) {
        this.fullName = user.fullName;
        this.language = language;
    }
    /**
     * Programmer information
     * @returns {void}
     */
    getInformation() {
        console.log(`User created: ${this.fullName} and the used langage is: ${this.language}`);
    }
}

/**
 * Know more in {@link Programmer}
 */
const newOne = new Programmer({ fullName: 'Jhon Doe' }, 'Python');
const programmerTwo = new Programmer({ fullName: 'Jane Doe' }, 'javascript');

newOne.getInformation();
programmerTwo.getInformation();


```
