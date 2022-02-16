const arguments = process.argv.slice(2);
arguments.sort();
for (const argument of arguments){
  setTimeout(() => {
    process.stdout.write('\x07');
  }, argument * 1000);
}
