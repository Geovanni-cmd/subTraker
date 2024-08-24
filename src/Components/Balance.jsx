const Balance = ({ count }) => {
    return (
        <div className="balance">
            <div className=" box has-text-left m-2 is-size-5  is-rounded has-background-in0fo-dark">
                <h3 className=" has-text-weight-bold">Presupuesto: {count}</h3>
                <h3 className=" has-text-weight-bold mt-3">Disponible: {count}</h3>
                <h3 className=" has-text-weight-bold mt-3">Gastado: {count}</h3>
            </div>
        </div>
    );
}

export default Balance;