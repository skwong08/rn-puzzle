import {useService} from 'react-reservice';

import puzzleService from './service';

export const usePuzzle = () => {
  return useService(puzzleService, state => state);
};

export {puzzleService};
