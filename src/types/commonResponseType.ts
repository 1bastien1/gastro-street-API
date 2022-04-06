/**
 * common response interface used to declare all common fn on every response
 */
interface CommonResponse {
    status: (httpCode: number) => CommonResponse;
    json: (rawData: any) => CommonResponse;
}


/**
 * see https://expressjs.com/fr/api.html#res for furthr information
 */
// tslint:disable-next-line: no-namespace
export declare namespace Express {
    interface ResponseGet<T> extends CommonResponse {
        result: T | T[];
    }
    interface ResponsePost<T> extends CommonResponse {
        result: T;
    }
}
