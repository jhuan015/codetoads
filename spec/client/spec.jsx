import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Keyboard from '../../client/app/jsx/game/typing/keyboard';
import Key from '../../client/app/jsx/game/typing/key';
import Frag from '../../client/app/jsx/game/typing/fragment';
import Typing from '../../client/app/jsx/game/typing/typing';

describe('<Keyboard />', () => {
  const wrapper = render(<Keyboard />);

  it('renders 54 keys', () => {
    expect(wrapper.find('#keyboard').children()).to.have.length(54);
  });

  it('renders 1 delete key', () => {
    expect(wrapper.find('.delete').length).to.equal(1);
  });

  it('renders 1 tab key', () => {
    expect(wrapper.find('.tab').length).to.equal(1);
  });

  it('renders 1 caps lock key', () => {
    expect(wrapper.find('.capslock').length).to.equal(1);
  });

  it('renders 1 caps lock key', () => {
    expect(wrapper.find('.capslock').length).to.equal(1);
  });

  it('renders 1 return key', () => {
    expect(wrapper.find('.return').length).to.equal(1);
  });

  it('renders 1 space key', () => {
    expect(wrapper.find('.space').length).to.equal(1);
  });

  it('renders 26 letters key', () => {
    expect(wrapper.find('.letter').length).to.equal(26);
  });

});

describe('<Key />', () => {
  var wrapper = render(<Key />);
  var sWrapper = shallow(<Key />);

  it('renders 1 list item', () => {
    expect(wrapper.find('li').length).to.equal(1);
  });

  it('calls componentWillReceiveProps', () => {
    var spy = sinon.spy(Key.prototype, 'componentWillReceiveProps');
    var wrapper = shallow(<Key foo="bar" />);
    expect(spy.calledOnce).to.equal(false);
    wrapper.setProps({ foo: 'foo' });
    expect(spy.calledOnce).to.equal(true);
    Key.prototype.componentWillReceiveProps.restore();
  });

  it('has inactive state by default', () => {
    expect(sWrapper.find('.active')).to.have.length(0);
    sWrapper.setState({ active: true });
    expect(sWrapper.find('.active')).to.have.length(1);
  });

  //use this wrapper for next two tests
  var wrapper = shallow(<Key char1='a' char2='b' code={65} current={0} />);
  it('will render one or two characters', () => {
    expect(wrapper.text()).to.contain("a");
    expect(wrapper.text()).to.contain("b");
  });

  it('will change to an active state if keycode is correct', () => {
    var spy = sinon.spy(Key.prototype, 'componentWillReceiveProps');
    expect(spy.calledOnce).to.equal(false);
    expect(wrapper.find('.active')).to.have.length(0);
    wrapper.setProps({current: 80});
    expect(wrapper.find('.active')).to.have.length(0);
    wrapper.setProps({current: 65});
    expect(wrapper.find('.active')).to.have.length(1);
    Key.prototype.componentWillReceiveProps.restore();
  });
});

describe('<Frag />', () => {
  const wrapper = render(<Frag expression={"Hello world!".split("")} term={"Hey dude".split('')} />);

  it('renders all letters in an expression', () => {
    expect(wrapper.text()).to.contain('Hello world!');
    expect(wrapper.find('#expression').children()).to.have.length(12);
  });

  it('has fragment-letter-green class if correct', () => {
    expect(wrapper.text()).to.contain('Hello world!');
    expect(wrapper.find('.fragment-letter-green')).to.have.length(2);
  });

  it('has fragment-letter class if not correct', () => {
    expect(wrapper.text()).to.contain('Hello world!');
    expect(wrapper.find('.fragment-letter')).to.have.length(10);
  });
});

describe('<Typing />', () => {
  const wrapper = render(<Typing expression='Hello world!' />);

  it('renders a fragment', () => {
    expect(wrapper.text()).to.contain('Hello world!');
    expect(wrapper.find('#expression')).to.have.length(1);
  });

  it('renders a keyboard', () => {
    expect(wrapper.find('#keyboard')).to.have.length(1);
  });

  it('has a place for user input', () => {
    expect(wrapper.find('#write')).to.have.length(1);
  });

});
