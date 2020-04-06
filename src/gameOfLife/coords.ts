import _ from 'underscore';

export type Coordinates = [number, number];
export type Cells = Coordinates[];

/**
 * The game of life, using the coordinates of the living cells only.
 * This allows having an infinite grid.
 *
 * @class AliveCells
 */
class AliveCells {
  private cells: Cells;
  constructor(initialCoordinates: Cells) {
    if (!_.isArray(initialCoordinates)) throw new Error('initialCoordinates must be an array');
    this.cells = initialCoordinates;
  }
  
}

export default AliveCells;
