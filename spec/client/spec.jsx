import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';
import Keyboard from '../../client/app/jsx/game/typing/keyboard'

describe('<Keyboard />', () => {

  it('renders 1 delete key', () => {
    const wrapper = render(<Keyboard />);
    expect(wrapper.find('.delete').length).to.equal(1);
  });

});
