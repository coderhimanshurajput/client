import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable()

export class QuestionResolve implements Resolve<any> {

    constructor(){}

    resolve(route:ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return 'this.inventoryService.getProductForm()';
    }
}