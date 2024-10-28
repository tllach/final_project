import Card from '../../components/cards'

function Facts() {
    return (
        <section className="py-12 px-10 bg-[#f7eefa]">
                <h1 className="text-5xl font-bold text-gray-800 text-center mb-8">¿Sabias que?</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-10">
                    <Card
                        title="Carreras"
                        description="Solo el 30% de las mujeres eligen carreras relacionadas con STEM."
                    />
                    <Card
                        title="En investigación"
                        description="Solo el 14% de los investigadores en ciencias son mujeres en Latinoamérica."
                    />
                    <Card
                        title="En el aula"
                        description="De cada 5 estudiantes en tecnología, solo 2 son mujeres."
                    />
                    <Card
                        title="Educacion superior"
                        description="Solo el 4,6% de los estudiantes en maestrías y el 0,2% en doctorados son mujeres."
                    />
                    <Card
                        title="Enseñanza"
                        description="Solo el 17% de los profesores de ciencias son mujeres."
                    />
                    <Card
                        title="En la industria"
                        description="Solo el 20% de los puestos en la industria tecnológica son ocupados por mujeres."
                    />
                </div>
            </section>
    )
}

export default Facts