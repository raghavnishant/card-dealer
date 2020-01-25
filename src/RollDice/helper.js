let counts = ["one", "two", "three", "four", "five", "six"];

function random() {
  return counts[Math.floor(Math.random() * counts.length)];
}

export { random };
