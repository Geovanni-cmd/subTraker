import { useEffect, useState } from "react";
import { moneyFormat } from "../Helpers";
const Balance = ({ count, subs, spent, setSpent}) => {
    const updateBalance = () => {
        const spent = subs.reduce((total, item) => Number(item.price) + total, 0);
        setSpent(spent);
    }

    useEffect(() => {
        updateBalance();
    }, [subs]);

    return (
        <div className="balance">
            <div className=" box has-text-left m-2 is-size-5  is-rounded has-background-in0fo-dark">
                <h3 className=" has-text-weight-bold">Presupuesto: {moneyFormat(count)}</h3>
                <h3 className=" has-text-weight-bold mt-3">Disponible: {moneyFormat(count - spent)}</h3>
                <h3 className=" has-text-weight-bold mt-3">Gastado: {moneyFormat(spent)}</h3>
            </div>
        </div>
    );
}

export default Balance;