import React from 'react';
import { shallow } from 'enzyme';
import { Text } from 'react-native';
import { expect } from 'chai';
import Nav from '../js/components/Nav';

describe('Nav', () => {
  it('should display correct title', () => {
    const wrapper = shallow(<Nav title="nav title"/>);
    expect(wrapper.find(Text).first().prop('children')).to.equal('nav title');
  });
});
