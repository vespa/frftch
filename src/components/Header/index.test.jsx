import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

jest.mock('./assets/Logo', () => () => (
  <div>
    mock
  </div>
));
describe('[Component: Header]', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Header> test </Header>,
    );
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
