
const Popupprd = ({ Poprd,closePop }) => {

    return (
      <>
        {Poprd && <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 " >
          <div className="w-[800px] h-auto bg-white flex rounded-lg shadow-lg p-10 relative">
            <div className="w-[50%]">
              <img src={Poprd?.img} alt={Poprd?.name} width="90%" />
            </div>
            <div className="w-[50%] px-7.5">
              <h5 className="font-bold">{Poprd?.name}</h5>
              <p>{Poprd?.price}</p>
              <p>{Poprd?.shortdes}</p>
              <button className="bg-black text-gray-300">View Detail</button>
            </div>
            <button
              className="absolute top-2 right-2 text-xl text-gray-500 hover:text-black"
              onClick={()=>closePop()}
            >
              ✕
            </button>
          </div>
        </div>}
      </>
    );
  };
  
  export default Popupprd;