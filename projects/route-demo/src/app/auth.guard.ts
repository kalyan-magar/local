import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn =/*function*/ (route, state) => {
  console.log("hiiii"+route);
  console.log("hiiii"+state);
  return true;
};
