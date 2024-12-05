const Details = [
  {
    title: "OUR VISION",
    content:
      "Let’s Grow Together – by creating strategic partnerships with breeders, suppliers, distributors and farmers, we want to be amongst the leading distributors of Quality Seeds for Africa.",
  },
  {
    title: "OUR MISSION",
    content:
      "Our mission is to provide high quality seeds and services to improve the profitability and livelihoods of farmers, promote sustainable farming and contribute to Food Security in Africa.",
  },
  {
    title: "OUR VALUES",
    content:
      "R – Respect & Reliability O – Optimist & Originality Y – Yearning to Innovate, Learn and Transfer Knowledge A – Agility & Assurance L – Loyalty & Leadership",
  },
];
const Vision = () => {
  return (
    <>
      <div className="bg-red-600 h-[500px] px-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {Details.map((item) => (
            <div key={item.title} className="w-96 h-[450px] bg-white mt-6 p-8">
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="mt-10">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Vision;
