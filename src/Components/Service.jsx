// eslint-disable-next-line react/prop-types
function ServiceItem({ imageSrc, title, description }) {
  return (
    <div className="item px-10 w-72">
      <img src={imageSrc} />
      <div className="text-center">
        <h1 className="text-xl font-bold">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}


export default function Service() {
  return (
    <div className="">
      <div className="text-center">
        <h1 className="text-red-600 font-bold">
          WHAT WE SERVE
        </h1>
        <h2 className="text-4xl font-bold">
          Your Favourite Food<br />
          Delivery Partner
        </h2>
      </div>
      <div className="flex justify-center">
        <ServiceItem
          imageSrc="images\Service image\service-1[1].png"
          title="Easy To Order"
          description="You only need a few steps in ordering food"
        />
        <ServiceItem
          imageSrc="images\Service image\service-2[1].png"
          title="Fastest Delivery"
          description="Delivery that is always ontime even faster"
        />
        <ServiceItem
          imageSrc="images\Service image\service-3[2].png"
          title="Best Quality"
          description="Not only fast for us quality is also number one"
        />
      </div>
    </div>
  )
}
