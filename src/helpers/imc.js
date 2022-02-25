
export const levels = [
    {titulo:'Magreza', cor:'#96A3AB', icone:'deslike', imc:[0, 18.5]},
    {titulo:'Normal', cor:'#0EAD69', icone:'like', imc:[18.6, 24.9]},
    {titulo:'Sobrepeso', cor:'#E2B039', icone:'deslike', imc:[25, 30]},
    {titulo:'Obsidade', cor:'#C3423F', icone:'deslike', imc:[30.1, 99]},
];

export const calculo = (altura,peso)=>{
    const imc = peso / (altura * altura);

    for(let i in levels){
        if(imc >= levels[i].imc[0] && imc <= levels[i].imc[1]){
            
            levels[i].seuIcm = imc.toFixed(2);
            return levels[i];
        }
    };

    return null;
};