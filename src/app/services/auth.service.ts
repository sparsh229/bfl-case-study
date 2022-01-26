import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AdminService } from './admin.service';
import { DatastoreService } from './datastore.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  constructor(private datastore:DatastoreService,private adminservice:AdminService) { }
  canActivate(): boolean {
    if (this.datastore.currentUser === null&&this.adminservice.isAdmin===false) return false;
    else return true;
  }

  
}
