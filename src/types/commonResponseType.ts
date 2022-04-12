
/**
 * see https://expressjs.com/fr/api.html#res for furthr information
 */
// tslint:disable-next-line: no-namespace
export declare namespace Express {
    interface ResponseGet<T>{
        result: T | T[];
    }
    interface ResponsePost<T>{
        result: T;
    }
}
