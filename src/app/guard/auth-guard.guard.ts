import { CanActivateFn, Router } from '@angular/router';
import { AuthSService } from '../auth-s.service';
import { inject } from '@angular/core';
import Swal from 'sweetalert2';

export const authGuardGuard: CanActivateFn = (route, state) => {
const authstatus=inject(AuthSService)
const router = inject(Router)

if(authstatus.islogged()){
  return true
}else{
  Swal.fire("Pleazse login again!")
  router.navigateByUrl("")
  return false
}

};
