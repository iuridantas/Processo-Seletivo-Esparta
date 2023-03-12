function solution(A) {
  let result = 0;
  for (let i = 0; i < A.length; i++) {
    result = result ^ A[i];
  }
  return result;
}

const A = [9, 3, 9, 3, 9, 7, 9];
console.log(solution(A));
