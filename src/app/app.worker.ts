/// <reference lib="webworker" />

declare var require: any;
const isPrime = require('prime-number')
const primeNumberList = require('prime-number/list')

addEventListener('message', ({ data }) => {
  const arePrimeList = primeNumberList.map((prime: any) => {
      return isPrime(prime);
  });
  postMessage(arePrimeList);
});
