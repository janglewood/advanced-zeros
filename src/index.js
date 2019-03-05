module.exports = function getZerosCount(number, base) {

    function getPrimeNumbers(base) {
      let primes = [];
      for(let i = 2; i <= base; i++) {
        while(base % i === 0) {
          primes.push(base / (base / i));
          base /= i;
        }
      }
      return primes;
    };

    function getUniquePrimes(arr) {
        let uniquePrimes = {};
        for(let i = 0; i < arr.length; i++) {
            uniquePrimes[arr[i]] ? uniquePrimes[arr[i]]++ : uniquePrimes[arr[i]] = 1;
        }
        return uniquePrimes;
    };

    let unique = getUniquePrimes(getPrimeNumbers(base));

    Object.keys(unique).forEach(function(item) {
        let reducer = 0;
        for(let i = 1; Math.pow(item, i) <= number; i++) {
            reducer += Math.floor(number /  Math.pow(item, i));
        }
        if(unique[item] > 1) {
            unique[item] = Math.floor(reducer / unique[item]);
        } else {
            unique[item] = reducer;
        }
    });

    return Math.min.apply(Math, Object.values(unique));
  }
