
interface CardProps {
    title: string;
    description: string;
    image? : string;
}

function Card({ title, description, image}: CardProps) {
    return (
        <div className="border-2 border-purple-600 p-8 rounded-lg bg-white shadow-lg">
            {image ? <img src={image} alt={title} className="w-32 h-32 rounded-full mx-auto mb-4" /> : null}
            {title ? <h3 className="text-3xl font-bold text-[#00008B] text-center mb-2">{title}</h3> : null}
            <p className="text-gray-600 text-center">
                {description}
            </p>
        </div>
    );
}

export default Card;