const Card1 = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 bg-[#C2EFD4] p-6">
      {[
        {
          img: "https://i.pinimg.com/736x/45/a4/fa/45a4fa8bf3c7726fa87ecb661787b1b5.jpg",
          price: "$48.99",
        },
        {
          img: "https://i.pinimg.com/1200x/30/bd/2f/30bd2fd26f94df860f94bfd3d32535af.jpg",
          price: "$48.99",
        },
        {
          img: "https://i.pinimg.com/736x/65/e5/e1/65e5e1f76d02833e7764e0fe059addba.jpg",
          price: "$39.00",
        },
        {
          img: "https://i.pinimg.com/1200x/d1/ff/fb/d1fffb51206a6aac5a379623c07e0288.jpg",
          price: "$42.99",
        },
        {
          img: "https://i.pinimg.com/1200x/b1/1f/0a/b11f0acbda6f189529cc6b537aca67fe.jpg",
          price: "$32.99",
        },
        {
          img: "https://i.pinimg.com/736x/f4/12/f9/f412f9d01b2e002bf1acd596fc97a8f1.jpg",
          price: "$32.99",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="relative flex flex-col rounded-2xl bg-white max-w-xs w-full shadow-2xl toggle "
        >
          <div className="relative overflow-hidden rounded-2xl bg-transparent shadow-2xl toggle">
            <img
              src={item.img}
              alt={`item-${index}`}
              className="w-[95%] rounded-2xl mx-auto mt-4 h-[400px] object-cover"
            />
          </div>
          <div className="p-6">
            <h4 className="text-2xl font-semibold text-blue-gray-900">
              <h1>salom</h1>
              Lorem ipsum dolor sit amet consectetur
            </h4>
            <p className="mt-3 text-xl text-gray-700">{item.price} | 5.0 ★</p>
          </div>
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center space-x-3">
              <img
                alt="user1"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956"
                className="h-9 w-9 rounded-full border-2 border-white object-cover"
              />
              <img
                alt="user2"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d"
                className="h-9 w-9 rounded-full border-2 border-white object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card1;
