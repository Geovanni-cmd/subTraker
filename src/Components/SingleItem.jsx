import netflix from '../img/netflix.png'
import spotify from '../img/spotify.png'
import disneyPlus from '../img/disneyPlus.png'
import hboMax from '../img/hboMax.png'
import apple from '../img/apple.png'
import { moneyFormat } from '../Helpers'

const images = {
    netflix,
    spotify,
    disneyPlus,
    hboMax,
    apple
};

const SingleItem = ({ price, type, id, eliminarItem, editItem}) => {
    const HandleDelete =(e) =>{
        e.preventDefault();
        const answer = window.confirm('Borrar Suscripccion a '+ type)
        if(answer){
            eliminarItem(id);
        }
        
    }
    const HandleEdit = e =>{
        e.preventDefault();
        editItem(id);
        
    }


    return (
        <div className="box mt-3 mr-5 ml-5 singleItem">
            <div className='fixed-grid has-5-cols m-1'>
                <div className='grid'>
                    <div className='cell'>
                        <figure className='image' style={{ width: '100px' }}>
                            {images[type] ? (
                                <img src={images[type]} alt={`Imagen ${type}`} />
                            ) : (
                                <p>Imagen no encontrada</p>
                            )}
                        </figure>
                    </div>
                    <div className='cell'>
                        <h3 >Tipo: {type}</h3>
                    </div>
                    <div className="cell">
                        <h3 className='has-text-weight-bold'> Precio: {moneyFormat(Number(price))}</h3>
                    </div>
                    <div className="cell">
                        <a href="" onClick={HandleDelete}>Eliminar</a>
                    </div>
                    <div className="cell">
                        <a href="" onClick={HandleEdit}>Editar</a>
                    </div>
                </div>
            </div>
            <div className="imagenes">

            </div>

        </div>
    );
}

export default SingleItem;