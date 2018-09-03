import React from 'react';
import { shallow } from 'enzyme';
import MainMenu from './index';

describe('[Component: MainMenu]', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <MainMenu options={['teste', 'teste2']} />,
    );
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
