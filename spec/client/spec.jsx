import jsdom from 'jsdom';
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;
global.document = doc;
global.window = win;

import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';
import Keyboard from '../../client/app/jsx/game/typing/keyboard';
import Key from '../../client/app/jsx/game/typing/key';
import sinon from 'sinon';


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
