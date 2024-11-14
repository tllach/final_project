import {Main} from '../layout/Main';
import Section from '../components/Section';
import ResourceCard from '../components/ResourceCard';

const ResourcesPage = () => {
    return (
        <Main>
            <div className="min-h-screen bg-gray-100 p-6">
                <header className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-blue-900">Recursos para Mujeres Jóvenes en STEM</h1>
                    <p className="text-gray-700 max-w-xl mx-auto mt-4">
                        Explora diversos recursos para motivar y apoyar a las jóvenes en su camino hacia una carrera en STEM.
                    </p>
                </header>
                <main className="max-w-5xl mx-auto">
                    {/* Programas y Campamentos */}
                    <Section title="Programas y Campamentos de Verano">
                        <ResourceCard
                            title="Girls Who Code"
                            description="Ofrece programas gratuitos de verano y talleres para aprender a programar y desarrollar habilidades tecnológicas."
                            link="https://girlswhocode.com/"
                        />
                        <ResourceCard
                            title="Technovation"
                            description="Competencia internacional donde las jóvenes aprenden a programar y desarrollar aplicaciones."
                            link="https://technovationchallenge.org/"
                        />
                        <ResourceCard
                            title="Gobierno Colombiano"
                            description="Programa de 12 semanas de mentoria con mujeres destacadas."
                            link="https://technovationchallenge.org/"
                        />
                    </Section>

                    {/* Becas y Apoyo Financiero */}
                    <Section title="Becas y Apoyo Financiero">
                        <ResourceCard
                            title="Google Women Techmakers"
                            description="Programa que ofrece becas y apoyo para mujeres en tecnología."
                            link="https://www.womentechmakers.com/"
                        />
                        <ResourceCard
                            title="Becas del British Council"
                            description="Becas para mujeres en STEM para estudiar en el Reino Unido."
                            link="https://www.womentechmakers.com/"
                        />
                        <ResourceCard
                            title="Icetex"
                            description="Becas para mujeres en STEM para estudiar en el exterior."
                            link="https://web.icetex.gov.co/becas/becas-para-estudios-en-el-exterior/programas-especiales/programa-jovenes-talentos/areas-ciencias-tecnologia-ingenieria-y-matematicas-stem"
                        />
                    </Section>

                    {/* Mentoría y Redes de Apoyo */}
                    <Section title="Mentoría y Redes de Apoyo">
                        <ResourceCard
                            title="Million Women Mentors"
                            description="Conecta a jóvenes mujeres con mentoras en áreas STEM."
                            link="https://www.millionwomenmentors.com/"
                        />
                        <ResourceCard
                            title="Girls Can Hack"
                            description="Comunidad que busca inspirar y apoyar a mujeres jóvenes en ciberseguridad." 
                            link="https://www.girlscanhack.com/?gad_source=1&gclid=CjwKCAiA3Na5BhAZEiwAzrfagLhyMTRBF3RgftkgDwZGs9l4vcMC13jiJWpIQI_4wL2_wFUYRT-ZwRoCipoQAvD_BwE"
                        />
                        <ResourceCard
                            title="Geek Girls Latam"
                            description="Comunidad de mujeres en tecnología en Latinoamérica, con eventos, mentorías y cursos." 
                            link="https://steam.geekgirlslatam.org/"
                        />
                    </Section>
                </main>
            </div>
        </Main>
    );
};

export default ResourcesPage;
