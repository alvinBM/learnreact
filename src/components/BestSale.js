function BestSale(props) {
    const { isBestSale } = props;
    
    return (
        <div>
            {isBestSale ? <span>🔥</span> : <span>👎</span>}
        </div>
    )
}
    
export default BestSale