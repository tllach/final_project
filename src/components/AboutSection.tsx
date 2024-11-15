import React from 'react';

interface AboutSectionProps {
    title: string;
    content: React.ReactNode;
}

const AboutSection: React.FC<AboutSectionProps> = ({ title, content }) => {
    return (
        <section className="mt-12">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">{title}</h2>
            <div className="text-gray-700">{content}</div>
        </section>
    );
};

export default AboutSection;
