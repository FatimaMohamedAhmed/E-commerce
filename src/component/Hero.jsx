function Hero (){
    return <div className=" sm:h-[400px] h-[250px] sm:px-20 px-10 mt-5 sm:flex flex-col sm:flex-row justify-between">
        <div className="sm:mt-20 mt-0 sm:w-[580px] w-[300px]">
         <h1 className="font-bold text-2xl sm:text-3xl sm:text-5xl"> Best place for shopping in your Area</h1>
        <p className="mt-8 text-1xl mr-[50px] sm:mr-0 sm:text-2xl">We got you everything that you need. visist us anaywhere and anytime </p>
        <button className="bg-primaryColor mt-5 px-10 py-3 text-2xl sm:text-3xl text-white rounded">Explore </button>
        </div>
        <img className="rounded-xl mt-16" src="https://inglesensagunto.es/wp-content/uploads/2016/01/shopping-academia-de-ingls.jpg?w=1024" />
    </div>
}
export default Hero