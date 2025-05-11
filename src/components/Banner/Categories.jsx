import { Link } from "react-router-dom";

const Categories = ({ categories }) => {

    return (
        <div role="tablist" className="tabs tabs-lift justify-center">
            {
                categories.map(category => <Link key={category.category} to="/cards" className="tab">
                    {category.category}
                </Link>)
            }
        </div>
    );
};

export default Categories;