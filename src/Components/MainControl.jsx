import { useState } from "react";
import Balance from "./Balance";
import FormAddSubs from "./FormAddSubs";
import DisplayItems from "./DisplayItems";

const MainControl = ({ count }) => {
    const [subs, setSubs] = useState([])
    const [type, setType] = useState("")
    const [price, setPrice] = useState("")
    return (
        <>
            <div className='fixed-grid is-justify-content-center'>
                <div className='grid'>
                    <div className='cell'>
                        <Balance count={count} />
                    </div>
                    <div className='cell'>
                        <FormAddSubs
                            setType={setType}
                            setPrice={setPrice}
                            type={type}
                            price={price}
                            setSubs={setSubs}
                            subs={subs}
                        />
                    </div>
                </div>
            </div>
            <DisplayItems subs={subs} />
        </>
    );
}

export default MainControl;