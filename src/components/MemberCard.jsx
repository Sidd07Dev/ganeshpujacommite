const MemberCard = ({ image, name, role }) => {
    return (
      <div className="text-center">
        <img src={image} alt={name} className="mx-auto w-24 h-24 rounded-full mb-4" />
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm">{role}</p>
      </div>
    );
  };
  
  export default MemberCard;
  