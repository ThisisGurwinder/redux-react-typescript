import {urlAPI} from './Config';
import {MakeFetchService, FetchInterface, FetchService} from '../services/FetchService';

export function MakeFilmGateway(fetchService?: FetchInterface, url?: any): FilmInterface{
    return new FilmGateway(fetchService || MakeFetchService(), url || urlAPI);
}

export interface FilmInterface {

}


class FilmGateway implements FilmInterface {
    private fetchService: FetchInterface;
    private url: any;

    constructor (fetchService: FetchInterface, url: any) {
        this.fetchService = fetchService;
        this.url = url;
    }

    
}