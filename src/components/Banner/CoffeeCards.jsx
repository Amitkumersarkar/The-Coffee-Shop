import { useParams } from "react-router-dom";

const CoffeeCards = () => {
    const { category } = useParams()
    console.log(category)
    return (
        <div>
            coffee cards...{category}
        </div>
    );
};

export default CoffeeCards;