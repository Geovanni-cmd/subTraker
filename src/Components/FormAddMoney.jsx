import { useState } from "react";

export const FormAddMoney = ({setCount, setIsValid}) => {
    const [input, setInput] = useState("");
    const [error, setError] = useState(false);

    const handleForm = e => {
        e.preventDefault();
        if(input == "" ||Number(input) < 0){
            setError (true)
            return ;
        }
        setError(false)
        setCount(Number(input))
        setIsValid(true)
    }

    return (
        <div className="custom-form">
            <form onSubmit={handleForm}>
                <div className="field m-2">
                    <div className="Botones">
                        <p className=" is-size-4 has-text-weight-bold m-2">Agregar Presupuesto</p>
                        <input className="input is-rounded m-2" type="number" placeholder="$300" onChange={e => setInput(e.target.value)}/>
                        <input className=" button is-link m-2" type="submit" value="Agregar" />
                    </div>
                </div>

            </form>
            {error ? 
                <p className="error has-text-danger has-text-weight-bold ">
                    Presupuesto invalido
                </p>
                : 
                null
            }
            
        </div>
    );
}

export default FormAddMoney;