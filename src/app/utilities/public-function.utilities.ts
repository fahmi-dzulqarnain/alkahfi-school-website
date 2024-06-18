export function convertObjectToArray (object: any): any[] {
    return Object.keys(object).map(key => object[key])
}
