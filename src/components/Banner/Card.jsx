
const Card = ({ coffee }) => {
    // console.log(coffee)
    const { name, image, category, orgin, type, rating, popularity } = coffee || {};
    return (
        <div>
            {name}
        </div>
    );
};

export default Card;