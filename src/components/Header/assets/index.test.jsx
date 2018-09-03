import React from 'react';
import { shallow } from 'enzyme';
import Logo from './Logo';

describe('[Component: Logo]', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Logo />,
    );
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
