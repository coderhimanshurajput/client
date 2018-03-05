import { Injectable } from '@angular/core';

@Injectable()

export class Debounce {

  	timeout = null;

    delay(search){ 

    clearTimeout(this.timeout);

	let promise = new Promise((resolve, reject) => {
    	this.timeout = setTimeout(() => {
	    	resolve(search)
    	}, 500);
	  });
  		return promise;    	
    }   

}