import * as React from 'react';
import { Loading } from '../01-elements/loading';

interface IWithLoadingProps {
    loading: boolean;
}

export const withLoadingIndicator = <P extends object>(
    Component: React.ComponentType<P>
): React.FC<P & IWithLoadingProps> => ({ loading, ...props }: IWithLoadingProps) =>
    loading ? <Loading /> : <Component {...props as P} />;
