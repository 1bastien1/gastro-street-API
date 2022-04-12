declare global {
    namespace Express {
        interface Response {
            result: any;
            status: (httpCode: number) => Response;
            json: (json: any) => Response;
        }

        interface Request {
            params?: any;
            body: any;
        }
    }
}
export {}
