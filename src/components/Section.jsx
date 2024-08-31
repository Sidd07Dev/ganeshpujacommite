const Section = ({ id, title, children, bgColor }) => {
    return (
      <section id={id} className={`${bgColor} py-8`}>
        <div className="container mx-auto">
          <h2 className="text-center text-2xl font-bold mb-8">{title}</h2>
          {children}
        </div>
      </section>
    );
  };
  
  export default Section;
  