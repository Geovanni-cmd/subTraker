import SingleItem from "./SingleItem";

const DisplayItems = ({subs}) => {
    return ( 
        <>
            <div>
                <h2 className="is-size-4 has-text-weight-bold">Suscripciones</h2>
                {
                    subs.map(item=>(
                        <SingleItem 
                            key={item.id}
                            id={item.id} 
                            price={item.price}
                            type={item.type}
                        />
                    ))
                }
            </div>
        </>
     );
}
 
export default DisplayItems;