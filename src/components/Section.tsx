import React from 'react';

interface SectionProps {
    title: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
    return (
        <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
        </section>
    );
};

export default Section;
