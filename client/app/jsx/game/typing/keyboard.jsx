import React from 'react';
import Key from './key';

class Keyboard extends React.Component {
  render (){
    return (
      <ul id="keyboard">
        <Key char1={'`'} char2={'~'} code={192} current={this.props.current} type="symbol"/>
        <Key char1={'1'} char2={'!'} code={49} current={this.props.current} type="symbol"/>
        <Key char1={'2'} char2={'@'} code={50} current={this.props.current} type="symbol"/>
        <Key char1={'3'} char2={'#'} code={51} current={this.props.current} type="symbol"/>
        <Key char1={'4'} char2={'$'} code={52} current={this.props.current} type="symbol"/>
        <Key char1={'5'} char2={'%'} code={53} current={this.props.current} type="symbol"/>
        <Key char1={'6'} char2={'^'} code={54} current={this.props.current} type="symbol"/>
        <Key char1={'7'} char2={'&'} code={55} current={this.props.current} type="symbol"/>
        <Key char1={'8'} char2={'*'} code={56} current={this.props.current} type="symbol"/>
        <Key char1={'9'} char2={'('} code={57} current={this.props.current} type="symbol"/>
        <Key char1={'0'} char2={')'} code={48} current={this.props.current} type="symbol"/>
        <Key char1={'-'} char2={'_'} code={189} current={this.props.current} type="symbol"/>
        <Key char1={'='} char2={'+'} code={187} current={this.props.current} type="symbol"/>
        <Key char1={'delete'} code={8} current={this.props.current} type="delete lastitem"/>
        <Key char1={'tab'} code={9} current={this.props.current} type="tab"/>            
        <Key char1={'q'} code={81} current={this.props.current} type="letter"/>
        <Key char1={'w'} code={87} current={this.props.current} type="letter"/>
        <Key char1={'e'} code={69} current={this.props.current} type="letter"/>
        <Key char1={'r'} code={82} current={this.props.current} type="letter"/>
        <Key char1={'t'} code={84} current={this.props.current} type="letter"/>
        <Key char1={'y'} code={89} current={this.props.current} type="letter"/>
        <Key char1={'u'} code={85} current={this.props.current} type="letter"/>
        <Key char1={'i'} code={73} current={this.props.current} type="letter"/>
        <Key char1={'o'} code={79} current={this.props.current} type="letter"/>
        <Key char1={'p'} code={80} current={this.props.current} type="letter"/>
        <Key char1={'['} char2={'{'} code={219} current={this.props.current} type="symbol"/>
        <Key char1={']'} char2={'}'} code={221} current={this.props.current} type="symbol"/>
        <Key char1={'\\'} char2={'|'} code={220} current={this.props.current} type="symbol lastitem"/>
        <Key char1={'caps lock'} code={20} current={this.props.current} type="capslock"/>
        <Key char1={'a'} code={65} current={this.props.current} type="letter"/>
        <Key char1={'s'} code={83} current={this.props.current} type="letter"/>
        <Key char1={'d'} code={68} current={this.props.current} type="letter"/>
        <Key char1={'f'} code={70} current={this.props.current} type="letter"/>
        <Key char1={'g'} code={71} current={this.props.current} type="letter"/>
        <Key char1={'h'} code={72} current={this.props.current} type="letter"/>
        <Key char1={'j'} code={74} current={this.props.current} type="letter"/>
        <Key char1={'k'} code={75} current={this.props.current} type="letter"/>
        <Key char1={'l'} code={76} current={this.props.current} type="letter"/>
        <Key char1={';'} char2={':'} code={186} current={this.props.current} type="symbol"/>
        <Key char1={"'"} char2={'"'} code={222} current={this.props.current} type="symbol"/>
        <Key char1={'return'} code={13} current={this.props.current} type="return lastitem"/>
        <Key char1={'shift'} code={0} current={this.props.current} type="left-shift"/>
        <Key char1={'z'} code={90} current={this.props.current} type="letter"/>
        <Key char1={'x'} code={88} current={this.props.current} type="letter"/>
        <Key char1={'c'} code={67} current={this.props.current} type="letter"/>
        <Key char1={'v'} code={86} current={this.props.current} type="letter"/>
        <Key char1={'b'} code={66} current={this.props.current} type="letter"/>
        <Key char1={'n'} code={78} current={this.props.current} type="letter"/>
        <Key char1={'m'} code={77} current={this.props.current} type="letter"/>
        <Key char1={','} char2={'<'} code={188} current={this.props.current} type="symbol"/>
        <Key char1={'.'} char2={'>'} code={190} current={this.props.current} type="symbol"/>
        <Key char1={'/'} char2={'?'} code={191} current={this.props.current} type="symbol"/>
        <Key char1={'shift'} code={16} current={this.props.current} type="right-shift lastitem"/>
        <Key char1={'space'} code={32} current={this.props.current} type="space lastitem"/>
      </ul>
    )
  }
}

export default Keyboard;
