readFile("./bruh/first.txt", "utf8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  } 
  console.log(res);
});
// console.log(readFile('./bruh/bruh1/test.txt', 'utf8'));
// writeFile(`${ __dirname }/result.txt`, 'asdassad');
