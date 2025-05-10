
const Hero = () => {

    return (
        <div
            className="hero  min-h-[700px]"
            style={{
                backgroundImage:
                    "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }}
        ><div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome To Coffee House</h1>
                    <p className="mb-5 text-xl">
                        Always fresh, always Tim and hot,That Makes every day better.
                    </p>
                    <button className="btn btn-primary">Get Order</button>
                </div>
            </div>
        </div >
    );
};

export default Hero;