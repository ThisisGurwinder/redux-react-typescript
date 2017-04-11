/**
 Created by Rodgers from Movertrip Company 
 Day: 11/04/2017
 **/

export function MakeLocalStorageService(): LocalStorageInterface{
    return new LocalStorageService();    
}

export interface LocalStorageInterface {
    setData(key: string, data: any): any;
    getData(key: string): any;
    removeData(key: string): any;
}

class LocalStorageService implements LocalStorageInterface{
    private localStorage: any;

    constructor () {
        this.localStorage = window.localStorage;
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