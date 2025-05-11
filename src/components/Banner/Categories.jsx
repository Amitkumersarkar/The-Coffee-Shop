import { Link } from "react-router-dom";

const Categories = ({ categories }) => {

    return (
        <div role="tablist" className="tabs tabs-lift justify-center font-extrabold gap-60">
            {
                categories.map(category =>
                    <Link key={category.category}
                        to={`/category/${category.category}`} className="tab">
                        {category.category}
                    </Link>)
            }
        </div>
    );
};

export default Categories;