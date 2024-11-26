import {Main} from '../layout/Main';
import AboutSection from '../components/AboutSection';
import ProfileCard from '../components/ProfileCard';

const AboutPage = () => {
    return (
        <Main>
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center">
                    <AboutSection 
                    title="¿Por qué creamos esta página?"
                    content={
                        <p className="text-left">
                            Esta página fue creada como complemento de un proyecto de investigación cuyo objetivo es cerrar la brecha de género en áreas STEM. Nuestro propósito es ofrecer recursos y visibilidad a más jóvenes mujeres interesadas en estas áreas.
                        </p>
                        }
                    />
                </div>
                <AboutSection 
                    title="Sobre Nosotras"
                    content={
                        <div className="space-y-4">
                            <ProfileCard 
                                name="Tabata Llach Bruges"
                                description="Estudiante de ingeniería de sistemas apasionada por la tecnología y la educación. Creo que la tecnología es una herramienta poderosa para el cambio social y la igualdad de género. Me motiva crear espacios seguros y accesibles para que más mujeres se interesen en STEM."
                                image="src\assets\tabata.jpg"
                            />
                            <ProfileCard 
                                name="Maria Valentina Páez Romero"
                                description="Estudiante de ingeniería de sistemas de último semestre. Tenemos que demostrarle a la sociedad que STEM también es un lugar para mujeres."
                                image="src\assets\maria valentina.jpg"
                            />
                        </div>
                    }
                />
                <AboutSection 
                    title="Agradecimientos"
                    content={
                        <p>
                            Queremos expresar nuestro agradecimiento a todas las personas que brindaron apoyo durante este proyecto, nuestros amigos y familia,
                            en especial al profesor Wilson Nieto por su asesoría y constante apoyo.
                        </p>
                    }
                />
            </div>
        </div>
        </Main>
    );
};

export default AboutPage;
