import React, { Component } from 'react';

//import { Link } from 'react-router-dom';
class Result extends Component {
  render(){
    var e=this.props.e;var i=this.props.i;
    var s=this.props.s;var n=this.props.n;
    var t=this.props.t;var f=this.props.f;
    var j=this.props.j;var p=this.props.p;
    var result_cat = {
      'ESTP':'뱅갈',
      'ESTJ':'아나톨리안',
      'ESFP':'터키쉬앙고라',
      'ESFJ':'셀커크렉스',
      'ENFP':'싱가퓨라',
      'ENFJ':'발리니즈',
      'ENTJ':'샴',
      'ENTP':'놀숲',
      'ISTP':'러시안블루',
      'ISFP':'메이쿤',
      'INFP':'버만',
      'INTP':'터키쉬반',
      'INFJ':'아비니시안',
      'INTJ':'브리티시숏헤어',
      'ISTJ':'아메리카쇼트헤어',
      'ISFJ':'페르시안'
    }
    var result=[];
    if (e>i)result.push('E');
    else result.push('I');
    if (s>n)result.push('S');
    else result.push('N');
    if (t>f)result.push('T');
    else result.push('F');
    if (j>p)result.push('J');
    else result.push('P');
    result=result.join('');
    return (
      <div>
        <div className='result'>
          <p>결과:{result}</p>
          <p>{result_cat[result]}</p>
        </div>
        <button
         onClick={()=>window.location.reload(false)}
         className='retry_button'
         >한번 더하기</button>
      </div>
    );
  }  
}
class QnA extends Component {
  render(){
    var data=this.props.data;
    var num=this.props.num;
    if (num===13){
      return (
        <div>
          <Result
          e={this.props.E} i={this.props.I}
          s={this.props.S} n={this.props.N}
          t={this.props.T} f={this.props.F}
          j={this.props.J} p={this.props.P}></Result>
        </div>  
      );
    }
    else{
      var _q, _a1, _a2 =null;
      var tmp=data[num-1];
      _q=tmp.q;
      _a1=tmp.a1;
      _a2=tmp.a2;
      return (
          <div>
            <div className='qustion'>
            <p>질문: {this.props.num}/12</p>
            <p>{_q}</p></div>
            <div id={'grid'}>
            <button 
              onClick={function(e){
                e.preventDefault();
                this.props.onChangePage1(); //중요함!! 방법2
              }.bind(this)}
              className='button1'
            >{_a1}</button>

            <button 
              onClick={function(e){
                e.preventDefault();
                this.props.onChangePage2(); //중요함!! 방법2
              }.bind(this)}
              className='button2'
            >{_a2}</button>
            </div>
          </div>
        );
      }; 
    }
}
export default QnA;