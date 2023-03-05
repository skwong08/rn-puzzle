import {useService} from 'react-reservice';

import resultService from './service';

export const useResult = () => {
  return useService(resultService, state => state);
};

export {resultService};
