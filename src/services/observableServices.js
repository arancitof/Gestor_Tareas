import { Observable, Subscriber } from 'rxjs';

export const getNumbers = new Observable( subscriber => {
    //Emitir valores
    subscriber.next(1); //Emite 1
    subscriber.next(2);
    subscriber.next(3);
    setTimeout ( () => {
        subscriber.next(4);
        subscriber.complete(); //Finally
    },1000);

})