/**
 * jsdoc test for objects
 * @type {{id: number, firstName: string, lastName: string, age: number}}
 */
const personObj = {
    id: 1,
    firstName: 'Name',
    lastName: 'Last Name',
    age: 25
}

/**
 * jsdoc test for objects with optional type of params
 * @type {{id: number | string, firstName: string, lastName: string, age: number | string}}
 */
const personObjWithOptionalParams = {
    id: 1,
    firstName: 'Name',
    lastName: 'Last Name',
    age: "25"
}
