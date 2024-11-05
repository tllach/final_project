import {Main} from '../layout/Main';
import Card from '../components/cards';

export  function SalonFama() {
    return (
        <Main>
            <div className="min-h-screen bg-gray-100 p-8">
            <section className="text-center mb-12">
                <h1 className="text-4xl font-bold text-black mb-4">Salón de la Fama</h1>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Detrás de cada gran avance en ciencia y tecnología, hay mujeres extraordinarias que rompieron barreras 
                y allanaron el camino para las futuras generaciones. En esta sección, exploramos la vida y legado de 
                mujeres referentes en STEM, destacando su impacto y cómo su legado inspira a nuevas generaciones a seguir sus pasos.
                </p>
            </section>
            <section>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <Card 
                        title = "Marie Curie"
                        description = "Física y química pionera en la investigación de la radioactividad."
                        image = "src\assets\rolemodels\mariecurie.jpeg"
                        hasBtn = {true}
                    />
                    <Card 
                        title = "Katherine Johnson"
                        description = "Matemática clave en la exploración espacial de la NASA."
                        image = "src\assets\rolemodels\katherinejohnson.jpeg"
                        hasBtn = {true}
                    />
                    <Card 
                        title = "Ada Lovelace"
                        description = "Primera programadora en la historia de la informática."
                        image = "src\assets\rolemodels\adalovelace.jpeg"
                        hasBtn = {true}
                    />
                    <div className="col-span-3 grid grid-flow-col gap-8 w-full px-56">
                        <Card 
                            title = "Sophie Germain"
                            description = "Matemática francesa conocida por su teoría de los números."
                            image = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEikdgkzQgWz9bgce0GEpWSX3SpMt4oQ9_CMuWyEMYvaHEhDbdeM_oydd7-TKgxqlXMsqZidYO2Aa8neq3wS8tqATN_vK-Yco62aRmwZBD9ajTagelP5wlNXgjCPKgldxdi-_RSRiNw1ff4/s1600/marie-sophie-germaine.jpg"
                            hasBtn = {true}
                        />
                        <Card 
                            title = "Lise Meitner"
                            description = "Científica austriaca que contribuyó a los descubrimientos del elemento protactinio y la fisión nuclear."
                            image = "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRBdXK2K4heHXBnt6QuxMQpLl5_TPd7Y_0boxqcArWc5HpYpxqqCY_O-OXwaZT9Bna613zlenNu_6iMOtc"
                            hasBtn = {true}
                        />
                    </div>
                </div>
            </section>
            </div>
        </Main>
    );
}