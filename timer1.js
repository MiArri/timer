const arguments = process.argv.slice(2);
arguments.sort();
if (arguments === [] || arguments === NaN) {
  return;
} else {
  for (const argument of arguments){
    if (argument < 0) {
      return
    } else {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, argument * 1000);
    }
  }
};
