// /user/:id
export function buildRoutePath(path) {
    //encontra um texto dentro de um texto muito maior.
    const routeParametersRegex = /:([a-zA-Z]+)/g;

    console.log(Array.from(path.matchAll(routeParametersRegex)));
}