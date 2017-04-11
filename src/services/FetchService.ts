/**
 Created by Rodgers from Movertrip Company 
 Day: 11/04/2017
 **/

export function MakeFetchService(): FetchInterface{
    return new FetchService();    
}

interface FetchInterface {
    sendRequest(method: string, url: string, data?: any): any;
}

export class FetchService implements FetchInterface{
    private headers: any;
    
    constructor () {
        this.headers = new Headers();
        var token = window.localStorage.getItem('auth-token');
        var keyToken = window.localStorage.getItem('key-token');
        this.headers.append("Content-Type", "application/json");
        if(token){
            this.headers.append(keyToken, token);
        };
    }

    public sendRequest(method: string, url: string, data?: any){
        var bodyData = data ? JSON.stringify(data) : null;
        var init = {
            method: method,
            headers: this.headers,
            cache: 'default',
            body: bodyData
        };
        return fetch(url, init).then(function(response){
            console.log(response);
            if(response.status == 200){
                return response.json();
            };
        }).catch(function(err){
            console.log(`Request to api ${url} have `,err);
        })
    };
}