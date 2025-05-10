import Heading from "../Banner/Heading";
import Hero from "../Banner/Hero";

const Home = () => {

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
        </div>
    );
};

export default Home;