function sumDigitss(number) {
    console.log(
            number
              .toString()
              .split("")
              .map(Number)
              .reduce((a, b) => a + b, 0)
          );
        }
sumDigitss(222)