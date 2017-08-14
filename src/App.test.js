import App from './app';

import { shallow } from 'enzyme';
import React from 'react';


describe('App', () => {
  test('The App Component exists', () => {
  	const component = shallow(<App/>);
    expect(component).toHaveLength(1);
  })
})