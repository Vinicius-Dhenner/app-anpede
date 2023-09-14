import { EquipamentoDTO } from './../../models/EquipamentoDTO';
import { API_CONFIG } from './../../config/api.config';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class EquipamentoService {

    constructor(public http: HttpClient){

    }

    findAll() : Observable<EquipamentoDTO>{
        return this.http.get<EquipamentoDTO>(`${API_CONFIG.baseURl}/equipamentos`);
    }

}