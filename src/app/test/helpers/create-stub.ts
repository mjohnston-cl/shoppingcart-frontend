import * as sinon from 'sinon';

export function createStub<T>(klass: new(...args: any[]) => T): T {
    return (sinon.createStubInstance(klass) as any) as T;
}
