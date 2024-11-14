import React from 'react';

interface ResourceCardProps {
    title: string;
    description: string;
    link?: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, link }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-700">{title}</h3>
            <p className="text-gray-700 mt-2">{description}</p>
            {link && (
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-purple-600 mt-4 inline-block">
                    Aprende más →
                </a>
            )}
        </div>
    );
};

export default ResourceCard;
