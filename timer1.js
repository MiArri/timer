const args = process.argv.slice(2);
args.sort();

for (const argument of args) {
  if (argument < 0 || isNaN(argument)) {
    continue;
  }

  setTimeout(() => {
    process.stdout.write('\x07');
  }, argument * 1000);
}
