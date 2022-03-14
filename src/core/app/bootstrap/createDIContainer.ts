import {Container} from 'inversify';

export const createDIContainer = (
  errorsContainer: Container,
  infrastructureContainer: Container,
  integrationContainer: Container,
  serviceContainer: Container,
  viewModelContainer: Container
): Container => {
  infrastructureContainer.parent = errorsContainer;
  integrationContainer.parent = infrastructureContainer;
  serviceContainer.parent = integrationContainer;
  viewModelContainer.parent = serviceContainer;
  return viewModelContainer;
};
