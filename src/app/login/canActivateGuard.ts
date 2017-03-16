import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import { Observable } from "rxjs/Rx";

export class ActivateGuard implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean{
        return confirm("Are you sure?");
    }
}


