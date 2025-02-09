interface Props {
  srcs: string[];
  alt?: string;
}

const Showcase = ({ srcs, alt }: Props) => {
  return (
    <div className="grid gap grid--1x2 showcase__container">
      {srcs.map((src, index) => (
        <img key={index} className="img showcase__img" src={src} alt={alt} />
      ))}
    </div>
  );
};

export default Showcase;
