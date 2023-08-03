

function Jokes({ handleclicck, card, id }) {




    return (
        <div className=" shadow-xl w-16 h-6 md:w-60 md:h-40    bg-[#FFFFFF] text-center  m-3 rounded-md hover:border border-black capitalize text-white text-lg  cursor-pointer false md:p-3 ">
            <h1 onClick={() => (handleclicck(card))} key={id} className=" text-blue-900 font-bold capitalize text-sm md:text-2xl md:pt-6">{card}</h1>
            <p className="capitalize text-purple-800 text-sm lg:block md:block hidden">unlimited jokes on {card}</p>
        </div>

    )

}

export default Jokes
