function parse(input: string): string[] {
  return input.trim().split("\n");
}

const digits = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};
/*
xtwone3four
   i
 j

 xtwone3fourx
        i
           j
*/
export function replace(input: string): number {
  let output: [number, number] = [] as any;

  loop: for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < i; j++) {
      if (input.slice(j, i) in digits) {
        output.push(digits[input.slice(j, i)]);
        break loop;
      }
    }

    if (!Number.isNaN(+input[i])) {
      output.push(+input[i]);
      break;
    }
  }

  loop: for (let i = input.length - 1; i >= 0; i--) {
    for (let j = input.length; j > i; j--) {
      if (input.slice(i, j) in digits) {
        output.push(digits[input.slice(i, j)]);
        break loop;
      }
    }

    if (!Number.isNaN(+input[i])) {
      output.push(+input[i]);
      break;
    }
  }

  return +output.join("");
}

export function findCalibration(row: string): number {
  let left: null | string = null,
    right: null | string = null;

  for (const curr of row) {
    if (Number.isNaN(+curr)) continue;
    if (!left) left = curr;
    else right = curr;
  }

  return right ? parseInt(left + right) : parseInt(left! + left);
}

export function day1_pt1(input) {
  const rows = parse(input);
  return rows.reduce((acc, curr) => acc + findCalibration(curr), 0);
}

export function day1_pt2(input) {
  const rows = parse(input).map(replace);
  return rows.reduce((acc, curr) => acc + curr, 0);
}
