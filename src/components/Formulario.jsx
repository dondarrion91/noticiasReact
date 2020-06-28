import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Formulario = ({guardarCategoria}) => {

    const OPCIONES = [
        { value: 'general',label:'General' },
        { value: 'business',label:'Negocios' },
        { value: 'entertainment',label:'Entretenimiento' },
        { value: 'health',label:'Salud' },
        { value: 'science',label:'Ciencia' },
        { value: 'sports',label:'Deportes' },
        { value: 'technology',label:'Tecnología' },
    ] 

    // useSelect
    const [categoria,SelectNoticias] = useSelect('science',OPCIONES);

      // submit al form,
  const buscarNoticias = e => {
    e.preventDefault();

    guardarCategoria(categoria);
  }


    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra noticias por Categoria</h2>

                    <SelectNoticias/>

                    <div className={`${styles['btn-block']} input-field col s-12`}>
                        <input 
                            type="submit"
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}

Formulario.protoType = {
    guardarCategoria: PropTypes.func.isRequired
}
 
export default Formulario;