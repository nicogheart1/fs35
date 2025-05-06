const Card = ({ text, onClick }) => {
  return (
    <div className="relative size-48 bg-yellow-500 md:bg-red-500 lg:bg-green-500 rounded-2xl shadow-lg p-4">
      <h4 className="text-left text-sky-100 md:text-white lg:text-black text-2xl font-extralight">
        {text}
      </h4>

      <button onClick={onClick}>Vai al prodotto</button>

      <span className="absolute size-2 bg-pink-500 bottom-4 right-4 rounded-full" />
    </div>
  );
};

export default Card;
