import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {

    return (
        <div role="tablist" className="tabs tabs-lift justify-center font-extrabold gap-60">
            {
                categories.map(category =>
                    <NavLink key={category.category}
                        to={`/category/${category.category}`} className={({ isActive }) => `tab ${isActive ? 'tab-Active' : ''}`}>
                        {category.category}
                    </NavLink>)
            }
        </div>
    );
};

export default Categories;