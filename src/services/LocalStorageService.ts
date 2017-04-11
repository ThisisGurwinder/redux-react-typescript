/**
 Created by Rodgers from Movertrip Company 
 Day: 11/04/2017
 **/

export function MakeLocalStorageService(){
    return new LocalStorageService();    
}

interface LocalStorageInterface {
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
        this.localStorage.setItem(key, data);
    }

    public getData(key: string){
        this.localStorage.getItem(key);
    }

    public removeData(key: string){
        this.localStorage.removeItem(key);
    }
}