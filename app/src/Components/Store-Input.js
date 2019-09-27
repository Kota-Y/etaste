import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Select from "react-select";
import "../CSS/Store-Input.css";
  
const styleKeys = [{ key: "indicatorsContainer" }];
  
const styleFn = base => ({ ...base, border: "5px solid #bac6d" });

const times = [
  { value: "12:00", label: "12:00" },
  { value: "13:00", label: "13:00" },
  { value: "14:00", label: "14:00" },
  { value: "15:00", label: "15:00" },
  { value: "16:00", label: "16:00" }
];

class StoreInput extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      itemImage:'',
      s3url:'',
      itemName: '',
      amount:'',
      originalprice:'',
      saleprice:'',
      startTime:'',
      endTime:'',
      allergys:null,
      isSubmitButton:true,
      isSonotaButton:false,
      //以下アレルギー表示関係
      isEgg:false,
      isMilk:false,
      isWheat:false,
      isPeanuts:false,
      isShrimp:false,
      isCrab:false,
      isSoba:false,
      isAbalone:false,
      isSquid:false,
      isSalmon_roe:false,
      isOrange:false,
      isKiwi:false,
      isBeef:false,
      isWalnut:false,
      isSalmon:false,
      isMackerel:false,
      isSoy:false,
      isChicken:false,
      isPork:false,
      isMatsutake:false,
      isPeaches:false,
      isYam:false,
      isApple:false,
      isGelatin:false,
      isBanana:false,
      isSesame:false,
      isCashew_nut:false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleToStoreSyuppinPage = this.handleToStoreSyuppinPage.bind(this)
    
    this.handleChangedisable = this.handleChangedisable.bind(this)

    this.handleChangeFile = this.handleChangeFile.bind(this)
    this.handleChangeselectE = this.handleChangeselectE.bind(this)
    this.handleChangeselectS = this.handleChangeselectS.bind(this)
    this.handleChangeEgg = this.handleChangeEgg.bind(this)
    this.handleChangeMilk = this.handleChangeMilk.bind(this)
    this.handleChangeWheat = this.handleChangeWheat.bind(this)
    this.handleChangePeanuts = this.handleChangePeanuts.bind(this)
    this.handleChangeShrimp = this.handleChangeShrimp.bind(this)
    this.handleChangeCrab = this.handleChangeCrab.bind(this)
    this.handleChangeSoba = this.handleChangeSoba.bind(this)
    this.handleChangeAbalone = this.handleChangeAbalone.bind(this)
    this.handleChangeSquid = this.handleChangeSquid.bind(this)
    this.handleChangeSalmon_roe = this.handleChangeSalmon_roe.bind(this)
    this.handleChangeOrange = this.handleChangeOrange.bind(this)
    this.handleChangeKiwi = this.handleChangeKiwi.bind(this)
    this.handleChangeBeef = this.handleChangeBeef.bind(this)
    this.handleChangeWalnut = this.handleChangeWalnut.bind(this)
    this.handleChangeSalmon = this.handleChangeSalmon.bind(this)
    this.handleChangeMackerel = this.handleChangeMackerel.bind(this)
    this.handleChangeSoy = this.handleChangeSoy.bind(this)
    this.handleChangeChicken = this.handleChangeChicken.bind(this)
    this.handleChangePork = this.handleChangePork.bind(this)
    this.handleChangeMatsutake = this.handleChangeMatsutake.bind(this)
    this.handleChangePeaches = this.handleChangePeaches.bind(this)
    this.handleChangeYam = this.handleChangeYam.bind(this)
    this.handleChangeApple = this.handleChangeApple.bind(this)
    this.handleChangeGelatin = this.handleChangeGelatin.bind(this)
    this.handleChangeBanana = this.handleChangeBanana.bind(this)
    this.handleChangeSesame = this.handleChangeSesame.bind(this)
    this.handleChangeCashew_nut = this.handleChangeCashew_nut.bind(this)
  }

  

  handleToStoreSyuppinPage = () => {
    let kariAllergy=[]
    if(this.state.isEgg){
      kariAllergy.push({
        "id": 1,
        "name": "卵"
      });
    }
    if(this.state.isMilk){
      kariAllergy.push({
        "id": 2,
        "name": "乳"
      });
    }
    if(this.state.isWheat){
      kariAllergy.push({
        "id": 3,
        "name": "小麦"
      });
    }
    if(this.state.isPeanuts){
      kariAllergy.push({
        "id": 4,
        "name": "落花生"
      });
    }
    if(this.state.isShrimp){
      kariAllergy.push({
        "id": 5,
        "name": "えび"
      });
    }
    if(this.state.isCrab){
      kariAllergy.push({
        "id": 6,
        "name": "かに"
      });
    }
    if(this.state.isSoba){
      kariAllergy.push({
        "id": 7,
        "name": "そば"
      });
    }
    if(this.state.isAbalone){
      kariAllergy.push({
        "id": 8,
        "name": "あわび"
      });
    }
    if(this.state.isSquid){
      kariAllergy.push({
        "id": 9,
        "name": "いか"
      });
    }
    if(this.state.isSalmon_roe){
      kariAllergy.push({
        "id": 10,
        "name": "いくら"
      });
    }
    if(this.state.isOrange){
      kariAllergy.push({
        "id": 11,
        "name": "オレンジ"
      });
    }
    if(this.state.isKiwi){
      kariAllergy.push({
        "id": 12,
        "name": "キウイ"
      });
    }
    if(this.state.isBeef){
      kariAllergy.push({
        "id": 13,
        "name": "牛肉"
      });
    }
    if(this.state.isWalnut){
      kariAllergy.push({
        "id": 14,
        "name": "くるみ"
      });
    }
    if(this.state.isSalmon){
      kariAllergy.push({
        "id": 15,
        "name": "さけ"
      });
    }
    if(this.state.isMackerel){
      kariAllergy.push({
        "id": 16,
        "name": "さば"
      });
    }
    if(this.state.isSoy){
      kariAllergy.push({
        "id": 17,
        "name": "大豆"
      });
    }
    if(this.state.isChicken){
      kariAllergy.push({
        "id": 18,
        "name": "鶏肉"
      });
    }
    if(this.state.isPork){
      kariAllergy.push({
        "id": 19,
        "name": "豚肉"
      });
    }
    if(this.state.isMatsutake){
      kariAllergy.push({
        "id": 20,
        "name": "まつたけ"
      });
    }
    if(this.state.isPeaches){
      kariAllergy.push({
        "id": 21,
        "name": "もも"
      });
    }
    if(this.state.isYam){
      kariAllergy.push({
        "id": 22,
        "name": "やまいも"
      });
    }
    if(this.state.isApple){
      kariAllergy.push({
        "id": 23,
        "name": "りんご"
      });
    }
    if(this.state.isGelatin){
      kariAllergy.push({
        "id": 24,
        "name": "ゼラチン"
      });
    }
    if(this.state.isBanana){
      kariAllergy.push({
        "id": 25,
        "name": "バナナ"
      });
    }
    if(this.state.isSesame){
      kariAllergy.push({
        "id": 26,
        "name": "ごま"
      });
    }
    if(this.state.isCashew_nut){
      kariAllergy.push({
        "id": 27,
        "name": "カシューナッツ"
      });
    }
      this.props.history.push({
        pathname: "/store-syuppin",
        state:{
              s3url:'llllll',
              itemName: this.state.itemName,
              amount: this.state.amount,
              startTime: this.state.startTime,
              endTime: this.state.endTime,
              originalprice: this.state.originalprice,
              saleprice: this.state.saleprice,
              allergys:kariAllergy,
            }
      });
      console.log(kariAllergy);
      console.log(this.state.allergys);
    };

  handleChange(e){ //入力フォームにおいてそれぞれの要素のname属性に対応した変数にvalueを格納
    this.setState({
      [e.target.name]: e.target.value,
      isSubmitButton:!(this.state.itemName)
    })
  }
  handleChangeselectS = startTime => {
    this.setState({ startTime });
  };
  handleChangeselectE = endTime => {
    this.setState({ endTime });
  };

  handleChangeFile(e){
    var files = e.target.files;
    var createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;
    var image_url = files.length===0 ? "" : createObjectURL(files[0]);
    this.setState({itemImage: image_url});
  }
  
  handleChangedisable(e){//その他ボタンでのアレルギーの表示非表示切り替え
    this.setState({
      isSonotaButton:!(this.state.isSonotaButton)
    });   
  }

  //アレルギー原料の表示or非表示
  handleChangeEgg(e){
    this.setState({
      isEgg:!(this.state.isEgg)
    });
  }
  handleChangeMilk(e){
    this.setState({
      isMilk:!(this.state.isMilk)
    });
  }
  handleChangeWheat(e){
    this.setState({
      isWheat:!(this.state.isWheat)
    });
  }
  handleChangePeanuts(e){
    this.setState({
      isPeanuts:!(this.state.isPeanuts)
    });
  }
  handleChangeShrimp(e){
    this.setState({
      isShrimp:!(this.state.isShrimp)
    });
  }
  handleChangeCrab(e){
    this.setState({
      isCrab:!(this.state.isCrab)
    });
  }
  handleChangeSoba(e){
    this.setState({
      isSoba:!(this.state.isSoba)
    });
  }
  handleChangeAbalone(e){
    this.setState({
      isAbalone:!(this.state.isAbalone)
    });
  }
  handleChangeSquid(e){
    this.setState({
      isSquid:!(this.state.isSquid)
    });
  }
  handleChangeSalmon_roe(e){
    this.setState({
      isSalmon_roe:!(this.state.isSalmon_roe)
    });
  }
  handleChangeOrange(e){
    this.setState({
      isOrange:!(this.state.isOrange)
    });
  }
  handleChangeKiwi(e){
    this.setState({
      isKiwi:!(this.state.isKiwi)
    });
  }
  handleChangeBeef(e){
    this.setState({
      isBeef:!(this.state.isBeef)
    });
  }
  handleChangeWalnut(e){
    this.setState({
      isWalnut:!(this.state.isWalnut)
    });
  }
  handleChangeSalmon(e){
    this.setState({
      isSalmon:!(this.state.isSalmon)
    });
  }
  handleChangeMackerel(e){
    this.setState({
      isMackerel:!(this.state.isMackerel)
    });
  }
  handleChangeSoy(e){
    this.setState({
      isSoy:!(this.state.isSoy)
    });
  }
  handleChangeChicken(e){
    this.setState({
      isChicken:!(this.state.isChicken)
    });
  }
  handleChangePork(e){
    this.setState({
      isPork:!(this.state.isPork)
    });
  }
  handleChangeMatsutake(e){
    this.setState({
      isMatsutake:!(this.state.isMatsutake)
    });
  }
  handleChangePeaches(e){
    this.setState({
      isPeaches:!(this.state.isPeaches)
    });
  }
  handleChangeYam(e){
    this.setState({
      isYam:!(this.state.isYam)
    });
  }
  handleChangeApple(e){
    this.setState({
      isApple:!(this.state.isApple)
    });
  }
  handleChangeGelatin(e){
    this.setState({
      isGelatin:!(this.state.isGelatin)
    });
  }
  handleChangeBanana(e){
    this.setState({
      isBanana:!(this.state.isBanana)
    });
  }
  handleChangeSesame(e){
    this.setState({
      isSesame:!(this.state.isSesame)
    });
  }
  handleChangeCashew_nut(e){
    this.setState({
      isCashew_nut:!(this.state.isCashew_nut)
    });
  }

  render() { 
    //その他のアレルギーの表示or非表示
    let classSonota = 'sonotaAllergy';
    if (!this.state.isSonotaButton) {
      classSonota += ' disablesonota';
    }
    //アレルギー表示の画像path
    const Egg= './image/Egg.jpg';
    const Egggrey='./image/Egggrey.jpg';
    const Milk= './image/Milk.jpg';
    const Milkgrey='./image/Milkgrey.jpg';
    const Wheat= './image/Wheat.jpg';
    const Wheatgrey='./image/Wheatgrey.jpg';
    const Peanuts= './image/Peanuts.jpg';
    const Peanutsgrey='./image/Peanutsgrey.jpg';
    const Shrimp= './image/Shrimp.jpg';
    const Shrimpgrey='./image/Shrimpgrey.jpg';
    const Crab= './image/Crab.jpg';
    const Crabgrey='./image/Crabgrey.jpg';
    const Soba= './image/Soba.jpg';
    const Sobagrey='./image/Sobagrey.jpg';
    const Abalone= './image/Abalone.jpg';
    const Abalonegrey='./image/Abalonegrey.jpg'; 
    const Squid= './image/Squid.jpg';
    const Squidgrey='./image/Squidgrey.jpg';  
    const Salmon_roe= './image/Salmon_roe.jpg';
    const Salmon_roegrey='./image/Salmon_roegrey.jpg';    
    const Orange = './image/Orange.jpg';
    const Orangegrey='./image/Orangegrey.jpg';  
    const Kiwi = './image/Kiwi.jpg';
    const Kiwigrey='./image/Kiwigrey.jpg'; 
    const Beef = './image/Beef.jpg';
    const Beefgrey='./image/Beefgrey.jpg';
    const Walnut = './image/Walnut.jpg';
    const Walnutgrey='./image/Walnutgrey.jpg';
    const Salmon = './image/Salmon.jpg';
    const Salmongrey='./image/Salmongrey.jpg';
    const Mackerel = './image/Mackerel.jpg';
    const Mackerelgrey='./image/Mackerelgrey.jpg';
    const Soy = './image/Soy.jpg';
    const Soygrey='./image/Soygrey.jpg';
    const Chicken = './image/Chicken.jpg';
    const Chickengrey='./image/Chickengrey.jpg';
    const Pork = './image/Pork.jpg';
    const Porkgrey='./image/Porkgrey.jpg';
    const Matsutake = './image/Matsutake.jpg';
    const Matsutakegrey='./image/Matsutakegrey.jpg';
    const Peaches = './image/Peaches.jpg';
    const Peachesgrey='./image/Peachesgrey.jpg';
    const Yam = './image/Yam.jpg';
    const Yamgrey='./image/Yamgrey.jpg';
    const Apple = './image/Apple.jpg';
    const Applegrey='./image/Applegrey.jpg';
    const Gelatin = './image/Gelatin.jpg';
    const Gelatingrey='./image/Gelatingrey.jpg';
    const Sesame = './image/Sesame.jpg';
    const Sesamegrey='./image/Sesamegrey.jpg';
    const Banana = './image/Banana.jpg';
    const Bananagrey='./image/Bananagrey.jpg';
    const Cashew_nut = './image/Cashew_nut.jpg';
    const Cashew_nutgrey='./image/Cashew_nutgrey.jpg';
    
    

    const styleEgg = this.state.isEgg ? Egg : Egggrey;  
    const styleMilk = this.state.isMilk ? Milk : Milkgrey;  
    const styleWheat = this.state.isWheat ? Wheat : Wheatgrey;  
    const stylePeanuts = this.state.isPeanuts ? Peanuts : Peanutsgrey;  
    const styleShrimp = this.state.isShrimp ? Shrimp : Shrimpgrey;  
    const styleCrab = this.state.isCrab ? Crab : Crabgrey;  
    const styleSoba = this.state.isSoba ? Soba : Sobagrey;
    const styleAbalone = this.state.isAbalone ? Abalone : Abalonegrey;
    const styleSquid= this.state.isSquid ? Squid: Squidgrey;
    const styleSalmon_roe= this.state.isSalmon_roe ? Salmon_roe: Salmon_roegrey;
    const styleOrange = this.state.isOrange ? Orange: Orangegrey;
    const styleKiwi = this.state.isKiwi ? Kiwi: Kiwigrey;
    const styleBeef = this.state.isBeef ? Beef: Beefgrey;
    const styleWalnut = this.state.isWalnut ? Walnut: Walnutgrey;
    const styleSalmon= this.state.isSalmon ? Salmon: Salmongrey;
    const styleMackerel= this.state.isMackerel ? Mackerel: Mackerelgrey;
    const styleSoy= this.state.isSoy ? Soy: Soygrey;
    const styleChicken= this.state.isChicken ? Chicken: Chickengrey;
    const stylePork= this.state.isPork ? Pork: Porkgrey;
    const styleMatsutake= this.state.isMatsutake ? Matsutake: Matsutakegrey;
    const stylePeaches= this.state.isPeaches ? Peaches: Peachesgrey;
    const styleYam= this.state.isYam ? Yam: Yamgrey;
    const styleApple= this.state.isApple ? Apple: Applegrey;
    const styleGelatin= this.state.isGelatin ? Gelatin: Gelatingrey;
    const styleBanana= this.state.isBanana ? Banana: Bananagrey;
    const styleSesame= this.state.isSesame ? Sesame: Sesamegrey;
    const styleCashew_nut= this.state.isCashew_nut ? Cashew_nut: Cashew_nutgrey;
    

    return (
      <div>
      <h1>店舗側入力</h1>
        <div className="box-store-input">
          <div className='item-image'>
            <input type="file" ref="file" onChange={this.handleChangeFile} />
            <img className='item-imageflame' alt='' src={this.state.itemImage}/>
          </div>
          
          <div className="item-name">
            <input type='text' 
            className='storeinputinput'
            value={this.state.itemName}　
            name='itemName' 
            onChange={this.handleChange} 
            placeholder="商品名"/>
          </div>
          
          <div className="startTime">
            <Select
              className='timeselect'
              options={times}
              styles={{
                [styleKeys]: styleFn
              }}
              value={this.state.startTime}
              placeholder='受取開始時間'
              name='startTime'
              onChange={this.handleChangeselectS}
            />
          </div>

          <div className="endTime">
            <Select
              className='timeselect'
              options={times}
              styles={{
                [styleKeys]: styleFn
              }}
              placeholder='受取終了時間'
              value={this.state.endTime}
              name='endTime'
              onChange={this.handleChangeselectE}>
              </Select>
          </div>

          <div className="originalprice">
            <input 
            className='storeinputinput'
            value={this.state.originalprice}　
            name='originalprice' 
            onChange={this.handleChange} 
            placeholder="定価(半角数字)"/>
            <h4 className='en'>円</h4>
          </div>

          <div className="saleprice">
            <input
            className='storeinputinput'
            value={this.state.saleprice}　
            name='saleprice' 
            onChange={this.handleChange} 
            placeholder="販売価格(半角数字)"/>
            <h4 className='en'>円</h4>
          </div>

          <div className="amount">
            <input 
            className='storeinputinput'
            value={this.state.itemNumber}　
            name='amount' 
            onChange={this.handleChange} 
            placeholder="個数(半角数字)"/>
            <h4 className='ko'>個</h4>
          </div>

          <div className="allergies"> 
            <h3>アレルギー表示</h3>
            <div className='allergiecom'>
              <img className='Egg' src={styleEgg} onClick={this.handleChangeEgg}/>
              <img className='Milk' src={styleMilk} onClick={this.handleChangeMilk}/>
              <img className='Wheat' src={styleWheat} onClick={this.handleChangeWheat}/>
              <img className='Peanuts' src={stylePeanuts} onClick={this.handleChangePeanuts}/>
              <img className='Shrimp' src={styleShrimp} onClick={this.handleChangeShrimp}/>
              <img className='Crab' src={styleCrab} onClick={this.handleChangeCrab}/>
              <img className='Soba' src={styleSoba} onClick={this.handleChangeSoba}/>
            </div>
            <button onClick={this.handleChangedisable}>その他</button>
            <div className={classSonota}>
              <div className='allergiecom2'>
                <img className='Abalone' src={styleAbalone} onClick={this.handleChangeAbalone}/>
                <img className='Squid' src={styleSquid} onClick={this.handleChangeSquid}/>
                <img className='Salmon_roe' src={styleSalmon_roe} onClick={this.handleChangeSalmon_roe}/>
                <img className='Orange' src={styleOrange} onClick={this.handleChangeOrange}/>
                <img className='Kiwi' src={styleKiwi} onClick={this.handleChangeKiwi}/>
                <img className='Beef' src={styleBeef} onClick={this.handleChangeBeef}/>
                <img className='Walnut' src={styleWalnut} onClick={this.handleChangeWalnut
                }/>
              </div>
              <div className='allergiecom3'>
                <img className='Salmon' src={styleSalmon} onClick={this.handleChangeSalmon}/>
                <img className='Mackerel' src={styleMackerel} onClick={this.handleChangeMackerel}/>
                <img className='Soy' src={styleSoy} onClick={this.handleChangeSoy}/>
                <img className='Chicken' src={styleChicken} onClick={this.handleChangeChicken}/>
                <img className='Pork' src={stylePork} onClick={this.handleChangePork}/>
                <img className='Matsutake' src={styleMatsutake} onClick={this.handleChangeMatsutake}/>
                <img className='Peaches' src={stylePeaches} onClick={this.handleChangePeaches}/>
              </div>
              <div className='allergiecom4'>
                <img className='Yam' src={styleYam} onClick={this.handleChangeYam}/>
                <img className='Apple' src={styleApple} onClick={this.handleChangeApple}/>
                <img className='Gelatin' src={styleGelatin} onClick={this.handleChangeGelatin}/>
                <img className='Banana' src={styleBanana} onClick={this.handleChangeBanana}/>
                <img className='Sesame' src={styleSesame} onClick={this.handleChangeSesame}/>
                <img className='Cashew_nut' src={styleCashew_nut} onClick={this.handleChangeCashew_nut}/>
              </div>
            </div>
          </div>
          
          <button className='storesubmit' 
          onClick={ () =>{ 
            this.handleToStoreSyuppinPage();
            }} 
          disabled={this.state.isSubmitButton}>出品確認</button>
        </div>
      </div>
    );
  }
}

export default withRouter(StoreInput);