import _ from 'underscore';
import { writable } from 'svelte/store';

interface Grid<T> {
  [y: string]: { [x: string]: T };
}
export type Universe = Grid<boolean>;
type AliveCount = Grid<number>;

const initial = { 5: { 5: true } };

function bigBang(initialState: Universe = initial) {
  const { subscribe, set, update } = writable<Universe>(initialState);

  const nextGeneration = () => {
    update((u): Universe => {
      const newUniverse: Universe = {};
      const setAliveInNew = (x: number, y: number) => {
        if (newUniverse[y]) {
          newUniverse[y][x] = true;
        } else {
          newUniverse[y] = { [x]: true };
        }
      };

      const allDeadNeighbours: AliveCount = {};
      const incrementDeadNeighbourCount = (x: number, y: number) => {
        if (!allDeadNeighbours[y]) {
          allDeadNeighbours[y] = {
            [x]: 1,
          };
        } else if (!allDeadNeighbours[y][x]) {
          allDeadNeighbours[y][x] = 1;
        } else {
          allDeadNeighbours[y][x]++;
        }
      };

      const getNeighboursFromAlive = (x: number, y: number) => {
        let nbAliveNeighbours = 0;
        const deadNeighbours = [];

        if (u[y - 1]?.[x - 1]) {
          nbAliveNeighbours++;
        } else {
          deadNeighbours.push([x - 1, y - 1]);
        }

        if (u[y - 1]?.[x]) {
          nbAliveNeighbours++;
        } else {
          deadNeighbours.push([x, y - 1]);
        }

        if (u[y - 1]?.[x + 1]) {
          nbAliveNeighbours++;
        } else {
          deadNeighbours.push([x + 1, y - 1]);
        }

        if (u[y]?.[x - 1]) {
          nbAliveNeighbours++;
        } else {
          deadNeighbours.push([x - 1, y]);
        }

        if (u[y]?.[x + 1]) {
          nbAliveNeighbours++;
        } else {
          deadNeighbours.push([x + 1, y]);
        }

        if (u[y + 1]?.[x - 1]) {
          nbAliveNeighbours++;
        } else {
          deadNeighbours.push([x - 1, y + 1]);
        }

        if (u[y + 1]?.[x]) {
          nbAliveNeighbours++;
        } else {
          deadNeighbours.push([x, y + 1]);
        }

        if (u[y + 1]?.[x + 1]) {
          nbAliveNeighbours++;
        } else {
          deadNeighbours.push([x + 1, y + 1]);
        }

        return {
          nbAliveNeighbours,
          deadNeighbours,
        };
      };
      // process alive cells and keep count of the dead neighbours
      _.each(u, (row, _y) => {
        _.each(row, (_cell, _x) => {
          const x = parseInt(_x, 10);
          const y = parseInt(_y, 10);
          const { nbAliveNeighbours, deadNeighbours } = getNeighboursFromAlive(x, y);
          if (nbAliveNeighbours === 2 || nbAliveNeighbours === 3) {
            setAliveInNew(x, y);
          }
          _.each(deadNeighbours, (coords) => {
            incrementDeadNeighbourCount(coords[0], coords[1]);
          });
        });
      });

      // process all the deadNeighbours
      _.each(allDeadNeighbours, (row, y) => {
        _.each(row, (liveNeighboursCount, x) => {
          if (liveNeighboursCount === 3) {
            setAliveInNew(parseInt(x, 10), parseInt(y, 10));
          }
        });
      });

      return newUniverse;
    });
  };

  const toggle = (x: number, y: number) => {
    update((u) => {
      if (u[y] === undefined) {
        u[y] = { [x]: true };
      } else {
        if (u[y][x] === undefined) {
          u[y][x] = true;
        } else {
          delete u[y][x];
          if (_.isEmpty(u[y])) {
            delete u[y];
          }
        }
      }
      return u;
    });
  };

  return {
    subscribe,
    nextGeneration,
    reset: () => set({}),
    toggle,
  };
}

export const universe = bigBang();
