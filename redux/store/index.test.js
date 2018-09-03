import createStore from './index';

describe('[Redux: createStore]', () => {
  it('should match snapshot', () => {
    expect(createStore()).toMatchSnapshot();
  });
});
