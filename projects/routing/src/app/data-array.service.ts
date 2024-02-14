import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'   //thorught out the application we can use it
})

// go and import in to the ngmodule 
export class DataArrayService {
 movies=["titanic","bhahubali","RRR"]
 message="hey bro i am services  and i am coming here to meet you"

  constructor() { }
}
