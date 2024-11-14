
interface CardProps {
    title: string;
    description: string;
    image? : string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
    return (
        <div className="text-center border-2 border-purple-600 p-8 rounded-lg bg-white shadow-lg hover:scale-105 transition duration-300 ease-in-out">
            {image ? <img src={image} alt={title} className="w-32 h-32 rounded-full mx-auto mb-4" /> : null}
            {title ? <h3 className="text-3xl font-bold text-[#00008B] mb-2">{title}</h3> : null}
            <p className="text-gray-600">
                {description}
            </p>
        </div>
    );
}

export default Card;