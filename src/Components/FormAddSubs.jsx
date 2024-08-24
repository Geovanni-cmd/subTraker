import { useState } from "react";

const FormAddSubs = ({ setType, setPrice, type, price, setSubs, subs }) => {
    const [error, setError] = useState(false)

    const handleSubs = e => {
        e.preventDefault();
        if (price === "" || Number(price) < 0 || type === "") {
            setError(true);
            return
        }
        setError(false)
        const data = {
            type: type,
            price: price,
            id: Date.now()
        }

        setSubs([...subs, data])
        setType("")
        setPrice("")

        /*console.log(type)
        console.log(price)*/
    }

    return (
        <div className="FormAddSubs">
            <div className="Caja box m-2">
                <h2 className="is-size-5 has-text-weight-bold">Agregar Subcripciones</h2>
                <p className="is-size-5 mt-2 has-text-weight-bold" >Servicios</p>
                <form onSubmit={handleSubs} className="field mt-2" >

                    <div className="select is-primary is-rounded">
                        <select onChange={e => setType(e.target.value)} value={type}>
                            <option value=""> -- Elegir -- </option>
                            <option value="netflix">Netflix</option>
                            <option value="disneyPlus">Disney Plus</option>
                            <option value="hboMax">HBO Max</option>
                            <option value="spotify">Spotify</option>
                            <option value="apple">Apple tx</option>
                        </select>
                    </div>

                    <p className="is-size-5 has-text-weight-bold">Cantidad</p>

                    <input className="input is-primary is-rounded mt-2" type="number" placeholder="$20" onChange={e => setPrice(e.target.value)} value={price} />

                    <input className="button mt-2" type="submit" value="Agregar" />

                </form>
                {error ? <p className="error">Campos invalidos</p> : null}

            </div>

        </div>
    );
}

export default FormAddSubs;