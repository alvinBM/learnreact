import BestSale from "./BestSale";



const products = [
    {
        id: 1,
        name: "Biscuit",
        prix: 190,
        isBestSale: true
    },
    {
        id: 2,
        name: "Huille",
        prix: 450,
        isBestSale: true
    },
    {
        id: 3,
        name: "Pain",
        prix: 430,
        isBestSale: false
    }
];



function ShoppingList() {
    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h5>{product.name}</h5>
                    <span>{product.prix} $</span>
                    <BestSale isBestSale={product.isBestSale} />
                    <button onClick={() => supprimerElement(product.id)}>Supprimer</button>
                </div>
            ))}
        </div>
    )
}


function supprimerElement(id){
    alert("Supprimer : " + id)
}

export default ShoppingList