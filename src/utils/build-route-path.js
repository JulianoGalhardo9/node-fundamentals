// /user/:id
export function buildRoutePath(path) {
    //encontra um texto dentro de um texto muito maior.
    const routeParametersRegex = /:([a-zA-Z]+)/g;
    const pathWithParams = path.replaceAll(routeParametersRegex, "(?<$1>[a-z0-9\-_]+)");

    const pathRegex = new RegExp(`^${pathWithParams}`);

    return pathRegex;
}