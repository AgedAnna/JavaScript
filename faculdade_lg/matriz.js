function isMagicSquare(matrix) {
    // Verifique se a matriz é quadrada.
    const n = matrix.length;
    if (n === 0) return false;
    for (let i = 0; i < n; i++) {
      if (matrix[i].length !== n) return false;
    }
  
    // Calcule a soma mágica (soma de qualquer linha, coluna ou diagonal).
    const magicSum = (n * (n * n + 1)) / 2;
  
    // Verifique as somas de linhas e colunas.
    for (let i = 0; i < n; i++) {
      let rowSum = 0;
      let colSum = 0;
      for (let j = 0; j < n; j++) {
        rowSum += matrix[i][j];
        colSum += matrix[j][i];
      }
      if (rowSum !== magicSum || colSum !== magicSum) {
        return false;
      }
    }
  
    // Verifique a soma da diagonal principal.
    let diagSum = 0;
    for (let i = 0; i < n; i++) {
      diagSum += matrix[i][i];
    }
    if (diagSum !== magicSum) {
      return false;
    }
  
    // Verifique a soma da diagonal secundária.
    let secDiagSum = 0;
    for (let i = 0; i < n; i++) {
      secDiagSum += matrix[i][n - i - 1];
    }
    if (secDiagSum !== magicSum) {
      return false;
    }
  
    return true; // A matriz é um Quadrado Mágico.
  }
  
  // Exemplo de uso:
  const matriz = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
  ];
  
  const isMagic = isMagicSquare(matriz);
  console.log(isMagic); // Deve retornar true
  