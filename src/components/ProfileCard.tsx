import React from 'react';

interface ProfileCardProps {
    name: string;
    description: string;
    image: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, description, image }) => {
    return (
        <div className="flex items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-6">
            <img 
                src={image} 
                alt={`Foto de ${name}`} 
                className="size-44 rounded-full object-cover mr-6" 
            />
            <div>
                <h3 className="text-xl font-semibold text-blue-800">{name}</h3>
                <p className="text-gray-600 mt-2">{description}</p>
            </div>
        </div>
    );
};

export default ProfileCard;
