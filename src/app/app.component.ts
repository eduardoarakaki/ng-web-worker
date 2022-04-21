import { Component } from '@angular/core';

declare var require: any;
const isPrime = require('prime-number');
const primeNumberList = require('prime-number/list');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-web-worker';

  runWorker() {
    const worker = new Worker(new URL('./app.worker', import.meta.url));
    worker.onmessage = ({ data }) => {
      console.log('From Web Worker:', data);
    };
    worker.postMessage({});
  }
  runThread() {
    const arePrimeList = primeNumberList.map((prime: any) => {
      return isPrime(prime);
    });
    console.log('From Javascript Thread', arePrimeList);
  }
}

