const chars = ['/', '-' , '\\', '|'];

const printSpinner = function(str, times, count = 0) {
  if (!times) return;
  setTimeout(() => {
    process.stdout.write(`\r${str[count % chars.length]}   `);
    printSpinner(str, times - 1, count + 1);
  }, 200);
};

printSpinner(chars, 8);