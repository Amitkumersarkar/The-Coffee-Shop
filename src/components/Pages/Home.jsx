import { useLoaderData } from "react-router-dom";
import Heading from "../Banner/Heading";
import Hero from "../Banner/Hero";
import Categories from "../Banner/Categories";

const Home = () => {
    const categories = useLoaderData()
    console.log(categories);
    return (
        <div>
            {/* banner */}
            <Hero></Hero>
            {/* heading */}
            <Heading
                title={'Brows Coffees By Category'}
                subtitle={"Choose Your Desired Coffee Category to Browse Through Specific Coffees That Fit In Your Taste."}>
            </Heading>
            {/* categories tab */}
            <Categories categories={categories}></Categories>
        </div>
    );
};

export default Home;