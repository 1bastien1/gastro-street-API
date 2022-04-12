// tslint:disable-next-line: no-namespace
export declare namespace Express {
    interface RequestGet {
        params: {
            id: number,
        };
    }
    interface RequestPost<T> extends RequestGet {
        body: T;
    }
}
