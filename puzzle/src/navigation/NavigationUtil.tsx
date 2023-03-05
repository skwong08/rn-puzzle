import {createNavigationContainerRef} from '@react-navigation/native';

import {ALL_MOBILE_ROUTES, MobileRoutesParamsList} from './NavigationRouter';

export const navigationRef = createNavigationContainerRef<
  MobileRoutesParamsList
>();

export const navigate = <RouteName extends keyof MobileRoutesParamsList>(
  route: RouteName,
  params?: MobileRoutesParamsList[RouteName],
) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(route as never, params as never);
  }
};

export const goBack = () => {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
};

export {ALL_MOBILE_ROUTES};
