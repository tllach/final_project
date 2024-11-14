import {Main} from '../layout/Main';
import FlipCardComponent from '../components/filpCard';

export  function SalonFama() {
    return (
        <Main>
            <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
                <section className="text-center mb-12">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">Salón de la Fama</h1>
                    <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
                        Detrás de cada gran avance en ciencia y tecnología, hay mujeres extraordinarias que rompieron barreras 
                        y allanaron el camino para las futuras generaciones. En esta sección, exploramos la vida y legado de 
                        mujeres referentes en STEM, destacando su impacto y cómo su legado inspira a nuevas generaciones a seguir sus pasos.
                    </p>
                </section> 
            <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
                    <FlipCardComponent 
                        title = "Marie Curie"
                        description = "Física y química pionera en la investigación de la radioactividad."
                        image = "src\assets\rolemodels\mariecurie.jpeg"
                        infoPerson= 'Fue la primera persona en ganar dos Premios Nobel en distintas ciencias (Física y Química) por sus investigaciones en radiactividad y descubrimiento de elementos como el radio y el polonio.'
                    />
                    <FlipCardComponent 
                        title = "Katherine Johnson"
                        description = "Matemática clave en la exploración espacial de la NASA."
                        image = "src\assets\rolemodels\katherinejohnson.jpeg"
                        infoPerson= 'Sus cálculos de trayectoria espacial fueron fundamentales para el éxito de misiones de la NASA, incluyendo el primer vuelo a la Luna. Fue reconocida oficialmente mucho tiempo después.'
                    />
                    <FlipCardComponent 
                        title = "Ada Lovelace"
                        description = "Primera programadora en la historia de la informática."
                        image = "src\assets\rolemodels\adalovelace.jpeg"
                        infoPerson= 'Fue pionera en la programación al desarrollar el primer algoritmo para la máquina analítica de Charles Babbage, adelantándose a su tiempo.'
                    />
                    <div className="col-span-3 grid grid-flow-col gap-8 w-full px-56 ">
                        <FlipCardComponent 
                            title = "Sophie Germain"
                            description = "Matemática pionera en teoría de números y elasticidad."
                            image = "src\assets\rolemodels\marie_sophie_germaine.jpg"
                            infoPerson= 'A pesar de las barreras de género, Germain hizo contribuciones significativas a la teoría de números, especialmente con su trabajo sobre los números primos de Germain, y a la teoría de la elasticidad, que es fundamental para la ingeniería.'
                        />
                        <FlipCardComponent 
                            title = "Lise Meitner"
                            description = "Científica austriaca que contribuyó a los descubrimientos del elemento protactinio y la fisión nuclear."
                            image = "src\assets\rolemodels\lise_meitner.jpeg"
                            infoPerson= 'Colaboró con Otto Hahn en el descubrimiento de la fisión nuclear, aunque su contribución no fue reconocida en el Premio Nobel que recibió Hahn. Su trabajo fue crucial para la comprensión de la energía atómica, aunque Meitner se negó a participar en el desarrollo de armas nucleares.'
                        />
                    </div>
                    <FlipCardComponent 
                        title = "Rosalind Franklin"
                        description = "Biofísica, descubridora de la estructura del ADN."
                        image = "src\assets\rolemodels\Rosalind_Franklin.jpg"
                        infoPerson= 'Sus fotografías de difracción de rayos X fueron fundamentales para descubrir la estructura de doble hélice del ADN, aunque su aporte fue reconocido póstumamente.'
                    />
                    <FlipCardComponent 
                        title = "Hedy Lamarr"
                        description = "Inventora de la tecnología de salto de frecuencias."
                        image = "src\assets\rolemodels\hedylamar.webp"
                        infoPerson= 'Famosa actriz e ingeniosa inventora, desarrolló una tecnología de comunicación para torpedos que se convirtió en la base de tecnologías inalámbricas modernas, como el WiFi y el Bluetooth.'
                    />
                    <FlipCardComponent 
                        title = "Dorothy Vaughan"
                        description = "Programadora y supervisora de computación en la NASA."
                        image = "src\assets\rolemodels\dorothy.webp"
                        infoPerson= 'Dirigió a un equipo de mujeres afroamericanas en la NASA, y se convirtió en una de las primeras expertas en programación en FORTRAN, contribuyendo al éxito de múltiples misiones espaciales.'
                    />
                    <div className="col-span-3 grid grid-flow-col gap-8 w-full px-56 ">
                        <FlipCardComponent 
                            title = "Grace Hopper"
                            description = "Pionera en programación y desarrollo de lenguajes de programación."
                            image = "src\assets\rolemodels\Grace-Murray.webp"
                            infoPerson= 'Creó el primer compilador de programación y ayudó a desarrollar COBOL, uno de los primeros lenguajes de alto nivel. Su trabajo facilitó el uso de las computadoras en industrias y el gobierno.'
                        />
                        <FlipCardComponent 
                            title = "Chien-Shiung Wu"
                            description = 'Física experimental, conocida como la "Madame Curie China."'
                            image = "src\assets\rolemodels\chien-shiung.jpg"
                            infoPerson= 'Su experimento en física nuclear ayudó a refutar la ley de paridad en la física, abriendo nuevas direcciones en la teoría cuántica. Su contribución fue fundamental para el Premio Nobel en Física de sus colegas.'
                        />
                    </div>
                </div>
            </section>
            </div>
        </Main>
    );
}