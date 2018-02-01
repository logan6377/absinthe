import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';


@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("intercepted request ... ");

        // Clone the request to add the new header. 
        //const authReq = req.clone({ headers: req.headers.set("x-api-user", "a91af8db-e4d4-42bb-b034-935cdd439670").set("x-api-key", "6c4a887a-d5b9-4a92-b919-74d6dd918e02")});
       // const authReq = req.clone({ headers: req.headers.set("Token", "$1$455.5K5.$8ox5WnINS7vmHsDtfk284/")});
       // const authReq = req.clone({ headers: req.headers.set("headerName", "headerValue")});

        //console.log("Sending request with new header now ...");

        //send the newly created request
        return next.handle(req)

        .catch((error, caught) => {
        //intercept the respons error and displace it to the console
        console.log("Error Occurred");
        console.log(error);
        //return the error to the method that called it
        return Observable.throw(error);
        }) as any;
    }
}