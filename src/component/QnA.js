import React, { Component } from 'react';
import { Circle } from 'rc-progress';

class CopyClipboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = { copySuccess: '링크 복사' }
  }

  copyToClipboard = (e) => {
    this.textArea.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    this.setState({ copySuccess: '복사 완료!' });
  };

  render() {
    return (
      <div id="copy">
        <form>
          <textarea className="text_area"
            ref={(textarea) => this.textArea = textarea}
            value='https://catmaster.netlify.app/'
          />
        </form>
        {
         /* Logical shortcut for only displaying the 
            button if the copy command exists */
         document.queryCommandSupported('copy') &&
          <div>
            <button onClick={this.copyToClipboard}
                    className="copy_button"
            >{this.state.copySuccess}</button> 
          </div>
        }
      </div>
    );
  }

}
class Result extends Component {
  render(){
    var e=this.props.e;var i=this.props.i;
    var s=this.props.s;var n=this.props.n;
    var t=this.props.t;var f=this.props.f;
    var j=this.props.j;var p=this.props.p;
    var result_cat = {
      'ESTP':'뱅갈',
      'ESTJ':'아메리칸컬',
      'ESFP':'터키쉬앙고라',
      'ESFJ':'셀커크렉스',
      'ENFP':'싱가푸라',
      'ENFJ':'발리니즈',
      'ENTJ':'샴',
      'ENTP':'놀숲',
      'ISTP':'러시안블루',
      'ISFP':'메이쿤',
      'INFP':'버만',
      'INTP':'터키쉬반',
      'INFJ':'아비니시안',
      'INTJ':'브리티시숏헤어',
      'ISTJ':'아메리카숏헤어',
      'ISFJ':'페르시안'
    }
    var result_content = {
      'ESTP':['외로움을 잘 타는 당신! 당신은 밖에서 사람만나는 것을 좋아하지만 또 게을러서 나가기까진 엄청 귀찮아하고 있군요.표현을 아끼지 않고 어르신들께 사랑받는 타입이네요.',
              '또 스트레스도 잘 안받고 손재주도 좋은 사람이에요.',
               <br />,<br />,
              '이런 당신에겐 집사를 정말 좋아하는 뱅갈 애옹쓰를 추천할게요! 부드러운 단모종인 뱅갈은 집사를 잘따르고 친밀도가 높으며 집사가 위험에 처한다면 바로 공격성을 보이는 집사 껌딱지예요.',
              '그리고 집사에겐만 애교도 엄청 많답니다. 한 가지 주의해야 할 건 다른 야옹이한테 한눈팔면 안돼요. 우리 뱅갈이 바로 다른 야옹이한테 냥냥펀치를 날릴거에요!'],
      'ESTJ':['이것저것 배우는 것을 좋아하고 현실적이며 이성적인 당신!',
              '당신은 계획적이고 뭐든 확실한 걸 좋아하시는 분이시군요.', 
              '남에게 관심없고 오로지 자기자신에게 집중하시고 있네요.',
              <br />,<br />,
              '당신은 아메리칸컬 애옹쓰의 집사로 간택되셨습니다! 아메리칸컬은 활발하고 집사를 무척 좋아하고 관심이 많아서 당신에게 집중할거예요.', 
              '아주 튼튼하고 건강햔 애옹쓰랍니다!',
              '운동하는 것을 무척 좋아하는데 이 기회에 함께 운동을 배워서 계획적으로 함께해보는 건 어떨까요!'],
      'ESFP':['성격이 급한 당신! 우주최강 오지랖도 가지고 있고, 하고싶은거는 다하는 한 고집 하시는 분이시군요.',
              '혼자있으면 지루해서 계속 무엇을 하게 되고, 모임장소에서는 침묵이 흐르는 것을 가장 싫어하세요. 사교성이 좋아서 어디든 잘 끼는 인싸!',
              <br />,<br />,
              '이런 당신은 이미 터키쉬앙고라 애옹쓰의 집사입니다! 터키쉬앙고라는 고급져보이는 외모를 가진 날신한 장모종이예요.',
              '당신과 닮아 성격이 급하죠ㅎㅎ 영러하고 똑똑한데 정도 많아서 집사에게 충실한 옹쓰랍니다.',
              '활발하고 장난도 많아서 하루 종일 당신이 심심할 수 없도록 좋은 친구가 되어 줄 거예요!'],
      'ESFJ':['당신은 혼자 계획을 세우고 철저하게 지키는 타입이시네요. 책읽고 영화보는 것을 좋아하며 상담이나 고민을 잘 들어주는 다정하신 분이에요.',
              '주변 인물들을 잘 챙기는 배려왕!',
               <br />,<br />,
              '이런 당신에게는 셀커크렉스가 좋은 친구가 되어줄거예요. 셀커크렉스는 곱슬털이 매력적인 애옹쓰랍니다.',
              '당신처럼 다정하고 사교적라서 당신이 다른 사람의 고민을 들어주는 동안, 설커크렉스는 당신의 고민을 들어줄거예요!'],
      'ENFP':['정신산만하고 생각이 많은 당신! 당신은 즉흥적이고 열적적이며 호불호가 분명한 사람이예요.', 
              '그리고 인싸력과 관종력을 모두 겸비하고 있군요. 세상 모든 관심을 받고 싶어하고 있네요.',
              <br />,<br />,
              '당신에게는 싱가퓨라를 추천할게요. 산만한 당신과 다르게 조용하고 점잖으며 똑똑해서 훈련도 가능한 친구랍니다.',
              '그래서 정신없는 당신의 곁을 묵묵히 지켜줄거예요. 하지만 호기심이 많아서 장난도 잘치는 친구라 재미있는 시간을 함께 보낼 수 있답니다!',
              '또 집사에 대한 애정도 만땅이라 관종인 당신에게 딱이겠죠!?'],
      'ENFJ':['핵인싸가 되고 싶은 시끌벅쩍한 당신! 센스있고 눈치가 빨라서 상대방에게 잘 맞춰주고 또 많은 사람으로부터 신뢰를 받고 있네요.',
              '객관적이고 직관적이며 자기자신에 대해서 잘 알고있어요. 여가시간은 혼자 보내는 것도 좋아하군요.',
              <br />,<br />,
              '이런 당신은 발리니즈의 집사가 될 준비가 되어있어요. 발리니즈는 당신을 사교적이고 애교가 많은 애옹쓰랍니다.', 
              '공격적이지 않고 온순해서 당신처럼 다른 동물들과도 잘 지내요.',
              '똑똑하고 외향적이며 활발한 발리니즈는 이미 당신의 단짝!'],
      'ENTJ':['오직 세상의 중심은 나! 당신은 세상에 믿을 사람은 오직 나 하나 뿐이라고 생각하고있네요.', 
              '남에게 피해주거나 받는것을 싫어하고 남일에 관심도 없어요.',
              '감정적 공감도 안되서 친구들의 하소연엔 해결책만 찾아주네요.', 
              <br />,<br />,
              '이런 당신에게 딱 어울리는 샴 애옹쓰를 소개할게요. 우아하고 날씬하며 여왕고양이라는 별명을 가지고 있어요.', 
              '당신은 왕, 애옹쓰는 여왕하면 딱 좋겠네요.', 
              '소문난 수다쟁이면서 집사에게 적극적으로 애정표현을 하는 샴고양이는 불도저같은 당신과 너무 닮아있어요.'],
      'ENTP':['개썅마이웨이 이상주의자 당신!', 
              '독립심이 정말 강해서 혼자 어디든 잘 싸돌아다니고 혼밥, 혼술, 혼영, 혼쇼핑까지 마스터하셨군요.', 
              '자기합리화 끝왕판에 지금 당장 하고싶은거 다하면서 사는 멋쟁이군요. 정해진 틀에 갇히길 싫어하는 당신.', 
              '겉으로는 인싸지만 속으로는 아싸의 모습도 가지고 있네요. 외향적인데 혼자만의 시간도 꼭 필요해요.',
              <br />,<br />,
              '이런 당신에게는 노르웨이숲을 추천할게요.',
              '노르웨이숲 애옹쓰는 당신과 닮아 독립적이고 호기심이 많답니다.', 
              '똑똑해서 사람도 잘알아보고 튼튼해서 잘 아프지도 않아요. 그리고 엄청 활발해서 활동적인 놀이들을 좋아한답니다.', 
              '함께하면 소울메이트가 될 거예요.'],
      'ISTP':['만사가 귀찮은 당신! 당신은 자신이 제일 잘난줄 알고 있네요. 효율적인 것을 좋아하고 시끄러운건 좋아하지 않아요.', 
              '낯가림이 있는데 친해지만 말도많고 장난도 잘 치는 성격이시군요.',
              <br />,<br />,
              '당신과 똑닮은 애옹쓰는 러시안 블루예요! 러시안 블루도 낯가림이 심한 편이예요.',
              '하지만 마음을 열면 엄청 애교쟁이랍니다.', 
              '애정도 많아서 집사의 마음을 잘 위로하는 사랑둥이예요.', 
              '관종이라 관심 받고 싶지만 시끄러운건 싫어하는 당신에게 조용이 온사랑을 전해줄거예요!'],
      'ISFP':['모든 게 귀찮고 느긋한 당신. 감정기복이 심한데 공감능력은 대단하군요.', 
              '매사에 의욕이 없어서 모든 일을 미룰 수 있을 때까지 미루지만 한 번 집중하면 완벽하게 해내요.', 
              '완벽한 집순이고 혼자 놀기의 달인이네요.',
              <br />,<br />,
              '당신에겐 메이쿤 애옹쓰를 소개합니다.', 
              '메이쿤은 온화한 성격으로 독립적이면서 당신을 닮아 느긋하고 모든 일에 태평한 애옹쓰예요.', 
              '성격이 좋아서 다른 종들과도 잘 지낸다고 해요. 당신과 함께 낭낭하게 집에서 뒹굴뒹굴거리면 좋을 것 같네요.'],
      'INFP':['게으른 완벽주의자인 당신! 시작은 창대하나 정작 끝을 내는 법이 없어요.',
              '하지만 막상 하면 평균 이상으로 뭐든 잘 해내버리네요.', 
              '당신은 관종이지만 막상 관심 받으면 어쩔 줄 모르는 조용한 관종이예요. 혼자있는 건 좋은데 외로운건 또 싫어해요.', 
              '여러명이서 모이는 것 보다 한두명과 노는 것을 좋아하고, 호불호가 명확한 스타일이네요.',
              <br />,<br />,
              '당신의 주인님은 바로 버만 애옹쓰! 버만은 당신처럼 머리가 좋고 한 사람에게만 애착을 가진답니다.',
              '가족들의 관심을 차지하고 싶고 질투심도 나타내지만 조용한 성격이라 공격적이진 않아요.', 
              '또 부드럽고 매끄러운 중장모의 털을 가지고있는데, 잘 엉키지 않아 관리하기 쉬워서 게으른 당신이 모시기에 딱이예요.'],
      'INTP':['당신은 독립심이 강하고 자발적 아웃사이더입니다. 혼자있는게 편하고 행복하며 낯가림이 있네요.',
              '그리고 자기애가 엄청나군요! 무엇인가 한 번 시작하면 끝장을 보는 성격이네요.',
              '남에게 피해주는 것을 싫어하고 남에게 관심도 없어요.',
              <br />,<br />,
              '이런 당신에겐 하루종일 같이 놀수 있는 터키시반 애옹이를 추천할게요.', 
              '터키시반은 활발하지만 당신과 같이 독립심이 강하고 갇혀있는 상태를 매우 싫어해요.', 
              '충분한 공간에서 함께 지내고 싶어한답니다.', 
              '그리고 가장 특이한건 호숫가에서 살던 고양이라 물을 좋아하고 수영을 할 줄 안다고 해요.', 
              '목욕하면서 당신에게 피해주는일은 없겠군요.'],
      'INFJ':['생각이 너무 많은 당신! 감수성이 풍부하고 예술적으로 소질이 있어요. 눈치는 빠르지만 낯가림이 심하네요.', 
              '새로운 일을 시작하거나 새로운 만남을 부담스러워해요.', 
              '조용한 관종이긴하지만 친하고 마음 맞는 사람 단 둘이서 노는 것을 더 좋아하네요.', 
              <br />,<br />,
              '당신에겐 아비니시안 애옹쓰가 어울려요. 짧은 털에 우아하고, 날씬한 애옹쓰랍니다.', 
              '당신처럼 예민하고 섬세하면서 낯도 가리는 편이지만 마음을 열면 무한 애정!',
              '애교가 많고 집사를 잘 따르는 영리한 친구라서 집사가 부르면 하루종일 졸졸 따라다닌답니다.', 
              '마음 통하는 둘이 하루종일 함께하면 좋겠죠!'],
      'INTJ':['당신은 혼자있는 것을 좋아하고, 사람 많고 시끄러운 장소를 정말 싫어해요. 이기적이고 개인주의적이네요.', 
              '하지만 단체활동시 주도적인 역할을 많이 맡기도하네요. 당신은 계획적이며 감정에 휘둘리지 않고 젠틀한 사람이예요.', 
              '동물들에게 한 없이 친절하고 완벽주의자네요.',
              <br />,<br />,
              '당신와 소울메이트는 브리티시숏헤어! 우리 애옹쓰는 영국 신사처럼 다른 동물들에게 젠틀하다고 해요.', 
              '함께 평화롭게 잘지내고요. 인내심이 강한 완벽한 집고양이라서 잘 울지도 않고 조용하다고 하네요.', 
              '필요하다면 꼬리로 사람의 시선을 얻어낸대요.', 
              '얌전히 바닥에 누워노는 것을 좋아하는 브리티시숏헤어는 당신과 잘 어울려요.'],
      'ISTJ':['원리원칙적이고 계획적인 당신 즉흥적이거나 약속을 어기는 것을 정말 싫어하군요.',
              '독십심이 강해 누가 내일에 관여하는 게 싫고 혼자 일사천리로 해결해버리네요. 책임감도 아주 강한 사람이에요.',
              '한 번 시작하면 목표를 철저하게 끝내버리시군요.',
              <br />,<br />,
              '당신에게는 아메리카쇼트헤어 애옹쓰를 소개합니다! 당신처럼 독립심이 강하고 명랑한 애옹쓰에요.',
              '단모종에 쾌활하고 아주 건강한 친구랍니다.', 
              '혼자 잘놀기 때문에 장시간 놀아주지 않아도 되서 목표를 위해 열심히 달릴 당신과 잘 맞는 애옹쓰예요.',
              '차분하고 온순한 면모도 있답니다. 사교성도 좋아서 당신과 금방 좋은 친구가 될거예요.'],
      'ISFJ':['게으른 원칙주이자인 당신! 당신은 단체생활을 안 좋아하고 혼자 할 수 있는 일을 좋아하군요.', 
              '계획세우는 것을 좋아하고 메모하고 잘 기억해요. 사람들과 잘 어울리지만 혼자 노는 것도 좋아한답니다.', 
              '성격이 온화해서 남들이 하자고 하면 거의 다 해주군요. 또 외로움을 많이 타지만 많은 사람들이랑 있는건 싫어해요.',
              <br />,<br />,
              '당신에게는 페르시안 애옹쓰를 추천할게요. 페르시안은 당신과 닮아 온와하고 순종적이며 조용하고 얌전한 편이예요.',
              '혼자서도 엄청 잘노는 고양이랍니다.', 
              '집사의 무릎에 오래 머무는 것도 좋아해서 외로움 타는 당신에게 사랑둥이가 될 거예요.',
              '활동력이 좋지않아서 운동에 주의는 기울여 주셔야헤요.', 
              '계획력이 좋은 당신이 함께 해준다면 건강하게 서로에게 도움이 될 거예요.']
    }
    var result_img = {
      'ESTP':'img/뱅갈.png',
      'ESTJ':'img/아메리칸컬.png',
      'ESFP':'img/터키쉬앙고라.png',
      'ESFJ':'img/셀커크렉스.png',
      'ENFP':'img/싱가푸라.png',
      'ENFJ':'img/발리니즈.png',
      'ENTJ':'img/샴.png',
      'ENTP':'img/놀숲.png',
      'ISTP':'img/러시안블루.png',
      'ISFP':'img/메이쿤.png',
      'INFP':'img/버만.png',
      'INTP':'img/터키쉬반.png',
      'INFJ':'img/아비니시안.png',
      'INTJ':'img/브리티시숏헤어.png',
      'ISTJ':'img/아메리칸숏헤어.png',
      'ISFJ':'img/페르시안.png'
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
          <img className='result_img' src={result_img[result]} alt="이미지다운실패"/>
          <p>{result} ❤ {result_cat[result]}</p>
          <p className='result_text'>{result_content[result]}</p>
        </div>
        <CopyClipboard></CopyClipboard>
        <button
         onClick={()=>window.location.reload(false)}
         className='retry_button'
         >한번 더하기</button>
         
      </div>
    );
  }  
}
class Loading extends Component {
  constructor() {
    super();
    this.state = {
      percent: 0,
      color: '#ffd0a6',
    };
  }
  _function = (() => 
    setTimeout(() => {
      this.setState({
        percent: this.state.percent +40
      })
    }, 800)
  )()
  _function2 = (() => 
    setTimeout(() => {
      this.setState({
        percent: this.state.percent +59
      })
    }, 1500)
  )()
  _function3 = (() => 
    setTimeout(() => {
      this.setState({
        percent: this.state.percent +1
      })
    }, 1800)
  )()
  render() {
    const { percent, color } = this.state;
    const circleContainerStyle = {
      width: '250px',
      height: '250px',
      display: 'inline-block',
    };
    if(this.state.percent < 100){
      return (
        <div>
            
            <div style={circleContainerStyle} className="load">
              <h2>분석중...</h2>
              <Circle percent={percent} strokeWidth="6" strokeLinecap="round" strokeColor={color}></Circle>
            </div>
        </div>
      );
    }
    else {
      return(
        <div>
          <Result
            e={this.props.e} i={this.props.i}
            s={this.props.s} n={this.props.n}
            t={this.props.t} f={this.props.f}
            j={this.props.j} p={this.props.p}>
          </Result>
        </div>
      );
    } 
  }
  
}
class QnA extends Component {
  render(){
    var data=this.props.data;
    var num=this.props.num;
    if (num===13){
      return (
        <div><Loading 
        e={this.props.E} i={this.props.I}
        s={this.props.S} n={this.props.N}
        t={this.props.T} f={this.props.F}
        j={this.props.J} p={this.props.P}></Loading></div>
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