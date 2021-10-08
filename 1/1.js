function draw(character, num) {
  let str = "";
  let space = num - 1;
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= space; j++) {
      str += " ";
    }

    for (let k = 0; k < i; k++) {
      str += character + " ";
    }

    str += "\n";
    space -= 1;
  }
  console.log(str);
}

draw("z",4 );
