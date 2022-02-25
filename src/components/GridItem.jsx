import '../App.css';
import likeImg from '../assets/like.png';
import deslikeImg from '../assets/deslike.png';

export const GridItem = ({item})=>{
    
    return (
        <div className='grid-main' style={{backgroundColor:item.cor}}>
            <div className="grid-icone">
                <img src={item.icone === 'like'? likeImg:deslikeImg}/>
            </div>
            <div className="grid-titulo">
                {item.titulo}
            </div>

            {item.seuIcm && 
                <div className='seu-imc'>Seu IMC é de {item.seuIcm} kg/m²</div>
            }

            <div className="grid-info">
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    );
}; 