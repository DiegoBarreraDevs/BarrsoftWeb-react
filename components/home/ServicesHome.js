import Button from '../buttoms/Button';
import ServicesCard from '../cards/ServicesCard';

export default function ServicesHome({
  number,
  img,
  title,
  description,
  number2,
  img2,
  title2,
  description2,
  number3,
  img3,
  title3,
  description3,
  alt,
  alt2,
  alt3

}) {
  return (
    <section className="servicesSection" id="services">
      <div className="servicesCardContainer">
        <div className="divServicesCard1">
          <ServicesCard
            number={number}
            img={img}
            title={title}
            description={description}
            alt={alt}
          />
        </div>
        <div className="divServicesCard2">
          <ServicesCard
            number={number2}
            img={img2}
            title={title2}
            description={description2}
            alt={alt2}
          />
        </div>
        <div className="divServicesCard3">
          <ServicesCard
            number={number3}
            img={img3}
            title={title3}
            description={description3}
            alt={alt3}
          />
        </div>
      </div>
    </section>
  );
}
