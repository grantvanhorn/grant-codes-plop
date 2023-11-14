import { InMemoryCache } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import type { MockedResponse } from '@apollo/client/testing';
import type { ReactNode } from 'react';
import { RenderOptions, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { AppStore, RootState, setupStore } from './redux/store';
import type { PropsWithChildren, ReactElement } from 'react';
import { PreloadedState } from '@reduxjs/toolkit';

const cache = new InMemoryCache({
  // ...configuration options...
});

interface RenderWrapperOptions {
  preloadedState?: object;
  mocks?: Array<MockedResponse>;
}

export interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

const renderWithProviders = (
  ui: ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  }

  return {
    store,
    ...render(ui, {
      wrapper: Wrapper,
      ...renderOptions,
    }),
  };
}

export const renderWrapper = (
  children: ReactNode,
  options: RenderWrapperOptions = {
    preloadedState: {},
    mocks: [],
  }
) => {
  return renderWithProviders(
    <MockedProvider mocks={options.mocks} cache={cache}>
      {children}
    </MockedProvider>,
    {
      preloadedState: options.preloadedState,
    }
  );
};
