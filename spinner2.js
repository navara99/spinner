const spinner = (initialDelay) => {
  const symbolsArr = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
  let delay;

  symbolsArr.forEach((symbol, i) => {
    delay = i === 0 ? initialDelay : delay + 200;

    setTimeout(() => {
      process.stdout.write(`\r${symbol}  `);
    }, delay);

  });
};

spinner(2000);

