import netflix from '../img/netflix.png'
import spotify from '../img/spotify.png'
import disneyPlus from '../img/disneyPlus.png'
import hboMax from '../img/hboMax.png'
import apple from '../img/apple.png'

const images = {
    netflix,
    spotify,
    disneyPlus,
    hboMax,
    apple
};

const SingleItem = ({ price, type, id }) => {
    return (
        <div className="box mt-3 mr-5 ml-5 singleItem">
            <div className='fixed-grid has-5-cols m-2'>
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
                        <h3 className='has-text-weight-bold'> Precio: {price}</h3>
                    </div>
                    <div className="cell">
                        <a href="">Eliminar</a>
                    </div>
                    <div className="cell">
                        <a href="">Editar</a>
                    </div>
                </div>
            </div>
            <div className="imagenes">

            </div>

        </div>
    );
}

export default SingleItem;