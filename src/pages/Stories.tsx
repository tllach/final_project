import {Main} from '../layout/Main';
import Card from '../components/cards';

export  function Stories() {
    return (
        <Main>
            <div className="min-h-screen bg-gray-100 p-8">
            <section className="text-center mb-12">
                <h1 className="text-4xl font-bold text-purple-700 mb-4">Historias Inspiradoras</h1>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Detrás de cada gran avance en ciencia y tecnología, hay mujeres extraordinarias que rompieron barreras 
                y allanaron el camino para las futuras generaciones. En esta sección, exploramos la vida y legado de 
                mujeres referentes en STEM, destacando su impacto y cómo su legado inspira a nuevas generaciones a seguir sus pasos.
                </p>
            </section>
        
            {/* Sección 2: Línea de tiempo con mujeres referentes en STEM */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Línea de Tiempo</h2>
                <div className="relative border-l-2 border-green-600 ml-6">
                <div className="mb-8 ml-6">
                    <div className="absolute -left-3 w-6 h-6 bg-green-600 rounded-full"></div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-purple-600">Marie Curie</h3>
                    <span className="block text-sm text-gray-600 mb-2">1867 - 1934</span>
                    <p className="text-gray-700">
                        Pionera en el campo de la radioactividad, Marie Curie fue la primera mujer en ganar un premio Nobel
                        y la única persona en recibir dos premios Nobel en distintas ciencias.
                    </p>
                    </div>
                </div>
                <div className="mb-8 ml-6">
                    <div className="absolute -left-3 w-6 h-6 bg-green-600 rounded-full"></div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-purple-600">Katherine Johnson</h3>
                    <span className="block text-sm text-gray-600 mb-2">1918 - 2020</span>
                    <p className="text-gray-700">
                        Matemática y física que realizó cálculos cruciales para las misiones de la NASA, incluyendo la primera misión tripulada a la luna.
                    </p>
                    </div>
                </div>
                <div className="mb-8 ml-6">
                    <div className="absolute -left-3 w-6 h-6 bg-green-600 rounded-full"></div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-purple-600">Ada Lovelace</h3>
                    <span className="block text-sm text-gray-600 mb-2">1815 - 1852</span>
                    <p className="text-gray-700">
                        Considerada la primera programadora de la historia, Ada Lovelace fue pionera en el campo de la informática y la programación.
                    </p>
                    </div>
                </div>
                </div>
            </section>
            {/* Sección 3: Salón de la Fama */}
            <section>
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Salón de la Fama</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <Card 
                        title = "Marie Curie"
                        description = "Física y química pionera en la investigación de la radioactividad."
                        image = "src\assets\rolemodels\mariecurie.jpeg"
                    />
                    <Card 
                        title = "Katherine Johnson"
                        description = "Matemática clave en la exploración espacial de la NASA."
                        image = "src\assets\rolemodels\katherinejohnson.jpeg"
                    />
                    <Card 
                        title = "Ada Lovelace"
                        description = "Primera programadora en la historia de la informática."
                        image = "src\assets\rolemodels\adalovelace.jpeg"
                    />
                </div>
            </section>
            </div>
        </Main>
    );
}