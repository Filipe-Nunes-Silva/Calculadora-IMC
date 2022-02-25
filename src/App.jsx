import { useState } from 'react';
import './App.css';
import {Header} from './components/Header';
import {GridItem} from './components/GridItem';
import {levels,calculo} from './helpers/imc';
import leftArrowImg from './assets/left.png';

const App = ()=>{

  const [heightFild,setheightFild] = useState(0);
  const [weightFild,setweightFild] = useState(0);
  const [showItem,setShowItem] = useState(null);

  const btnCalcular = ()=>{
    if(heightFild && weightFild){

      
      if(calculo(heightFild,weightFild) !== null){
        setShowItem(calculo(heightFild,weightFild));
      }
      else{  
        alert('Você esta inserindo valores errados!');
        return;
      };

    }
    else{
      alert('Preencha os campos de peso e altura!');
    };
  };

  const btnVoltar = ()=>{
    for(let i in levels){
      delete levels[i].seuIcm;
    }
    setShowItem(null);
    setheightFild(0);
    setweightFild(0);
  };


  return (
    <div className='main'>

      <Header/>

      <div className="container">
        <div className="left-side">
          <h1>Calcule seu IMC</h1>
          <p>Imc é a sigla pelo Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa. </p>

          <input 
            type="number" 
            placeholder='Digite a sua altura ex: 1.5 (em métros)' 
            value={heightFild > 0 ? heightFild:''} 
            onChange={(e)=> setheightFild(parseFloat(e.target.value)) }
            disabled={showItem ? true : false}
          />

          <input 
            type="number" 
            placeholder='Digite seu peso ex: 75.3 (em Kg)' 
            value={weightFild > 0 ? weightFild:''} 
            onChange={(e)=> setweightFild(parseFloat(e.target.value)) }
            disabled={showItem ? true : false}
          />

          <button onClick={btnCalcular} disabled={showItem ? true : false}>Calcular</button>

        </div>

        <div className="rigth-side">

          {showItem === null &&
              <div className="grid">
                {
                  levels.map((item,index)=>{
                    return(
                      <GridItem key={index} item={item}/>
                    );
                  })
                }
            </div>
          }
          {showItem &&
          
            <div className="grid-big">
              <div className="seta" onClick={btnVoltar}>
                <img src={leftArrowImg} alt="Voltar"/>
              </div>
              <GridItem item={showItem}/>
            </div>
          }
          
        </div>
      </div>



    </div>
  );
};

export default App;
