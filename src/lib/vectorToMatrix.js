export default function vectorToMatrix(arr, col = 4, row = 5) {
  const matrix = [];
  for (let i = 0; i < row; i++) {
    matrix[i] = [];
    for (let j = 0; j < col; j++) {
      matrix[i][j] = arr[j + (i * 4)];
    }
  }

  return matrix;
}
