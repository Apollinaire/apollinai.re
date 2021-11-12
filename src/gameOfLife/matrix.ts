// old version

export default null;

// import _ from 'underscore';

// class Matrix {
//   constructor(initialValue, { height, width }: {height: number, width: number}) {
//     if (!(height > 0) || !(width > 0)) {
//       throw Error('height and width must be greater than 0');
//     }
//     this.matrix = initialValue;
//     this.height = height;
//     this.width = width;
//     this.coordinatesFromIndex = this.coordinatesFromIndex.bind(this);
//     this.indexFromCoordinates = this.indexFromCoordinates.bind(this);
//     this.getCell = this.getCell.bind(this);
//     this.countAliveNeighbours = this.countAliveNeighbours.bind(this);
//     this.nextCellState = this.nextCellState.bind(this);
//     this.nextGeneration = this.nextGeneration.bind(this);
//     this.toggle = this.toggle.bind(this);
//   }

//   coordinatesFromIndex(index) {
//     const x = index % this.width;
//     const y = (index - x) / this.width;
//     return { x, y };
//   }

//   indexFromCoordinates(x, y) {
//     return x >= 0 && x < this.width && y >= 0 && y < this.height ? x + y * this.width : -1;
//   }

//   getCell(x, y) {
//     // get cell by index
//     if (y === undefined) {
//       return this.matrix[x];
//     }
//     // get cell by coordinates
//     return this.matrix[this.indexFromCoordinates(x, y)];
//   }

//   countAliveNeighbours(xOrIndex, yOrUndef) {
//     let x, y;
//     if (yOrUndef === undefined) {
//       const coordinates = this.coordinatesFromIndex(xOrIndex);
//       x = coordinates.x;
//       y = coordinates.y;
//     } else {
//       x = xOrIndex;
//       y = yOrUndef;
//     }
//     const neighbours = [
//       this.getCell(x - 1, y - 1),
//       this.getCell(x - 1, y),
//       this.getCell(x - 1, y + 1),
//       this.getCell(x, y - 1),
//       this.getCell(x, y + 1),
//       this.getCell(x + 1, y - 1),
//       this.getCell(x + 1, y),
//       this.getCell(x + 1, y + 1),
//     ];
//     return _.reduce(neighbours, (acc, cur) => (cur ? 1 + acc : acc), 0);
//   }

//   nextCellState(alive, nbAliveNeighbours) {
//     return (alive && nbAliveNeighbours === 2) || nbAliveNeighbours === 3;
//   }

//   nextGeneration() {
//     const newValue = _.map(this.matrix, (cell, index) => {
//       const nbAliveNeighbours = this.countAliveNeighbours(index);
//       return this.nextCellState(cell, nbAliveNeighbours);
//     });
//     return new Matrix(newValue, { height: this.height, width: this.width });
//   }

//   toggle(x, y) {
//     const index = this.indexFromCoordinates(x, y);
//     this.matrix[index] = !this.matrix[index];
//   }
// }

// export default Matrix;
