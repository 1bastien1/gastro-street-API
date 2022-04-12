declare global {
    namespace Express {
        interface Response {
            result: any;
            status: (httpCode: number) => Response;
            json: (response: any) => Response;
        }

        interface Request {
            params?: any;
            body: any;
        }
    }
}
export {}
