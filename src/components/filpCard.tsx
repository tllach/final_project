
interface CardProps {
    title: string;
    description: string;
    image? : string;
    infoPerson: string;
}


const FlipCardComponent: React.FC<CardProps> = ({ title, description, image, infoPerson }) => {
    return (
        <div className="group size-96 [perspective:1000px] text-center">
            <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Cara frontal */}
                <div className="absolute inset-0 [backface-visibility:hidden] flex flex-col items-center justify-center border-2 border-purple-600 p-6 rounded-lg bg-white shadow-lg">
                    {image && <img src={image} alt={title} className="size-40 rounded-full mb-4"/>}
                    <h3 className="text-4xl font-bold text-[#00008B] mb-2">{title}</h3>
                    <p className="text-lg lg:text-gray-600">{description}</p>
                </div>
                {/* Cara trasera */}
                <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center text-center border-2 border-purple-600 p-6 rounded-lg bg-white text-black shadow-lg">
                    <p className="text-lg">{infoPerson}</p>
                </div>
            </div>
        </div>
    );
};

export default FlipCardComponent;

