/**
 Created by Rodgers from Movertrip Company 
 Day: 11/04/2017
 **/

export function MakeLocalStorageService(localStorage?: any): LocalStorageInterface{
    return new LocalStorageService(localStorage || window.localStorage);    
}

export interface LocalStorageInterface {
    setData(key: string, data: any): any;
    getData(key: string): any;
    removeData(key: string): any;
}

export class LocalStorageService implements LocalStorageInterface{
    private localStorage: any;

    constructor (localStorage: any) {
        this.localStorage = localStorage;
    }

    public setData(key: string, data: any){
        return this.localStorage.setItem(key, data);
    }

    public getData(key: string){
        return this.localStorage.getItem(key);
    }

    public removeData(key: string){
        return this.localStorage.removeItem(key);
    }
}