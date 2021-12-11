import React from 'react';
import ReactDOM from 'react-dom';

//instancia del componente Gif Expert
import { GifExpertApp } from './GifExpertApp';

import './index.css';


ReactDOM.render(
    <GifExpertApp />,
  document.getElementById('root')
);


/* 
Configurar los siguientes puntos
1.Enzyme
2.Enzyme to json
3. Debe mostrar el componente correctamente 
    *shallow
    *wrapper
    *wrapper .toMatchSnapshot()
*/

