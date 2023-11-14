import { SomeComponentWrapper } from './SomeComponent.styles';
import type { SomeComponentProps } from './SomeComponent.types';
import type { FC } from 'react';

const SomeComponent: FC<SomeComponentProps> = () => {
  return (
    <SomeComponentWrapper>SomeComponent created via plop</SomeComponentWrapper>
  );
};

export default SomeComponent;

