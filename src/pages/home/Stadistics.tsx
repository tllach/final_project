import { Main } from '../../layout/Main';

export function Statistics() {
  const stats = [
    {
      image: 'src/assets/stat1.png',
      title: 'El 20% de las niñas se ven afectadas a escoger carreras STEM solo por ser mujeres',
      description: 'Profesores y familia les transmiten a las nuevas generaciones una idea errónea del rol de la mujer en nuestra sociedad.',
    },
    {
      image: 'src/assets/stat2.png',
      title: '25% de las niñas no tienen el apoyo de sus padres para ingresar a este tipo de carreras',
      description: 'La percepción familiar es importante para tomar la desición de ingresar a STEM.',
    },
    {
      image: 'src/assets/stat3.png',
      title: 'Solo el 25% de las encuestadas les gustaría ingresar a STEM',
      description: 'El porcentaje de niñas o mujeres que ingresan a STEM es relativamente bajo en comparación con otras carreras universitarias.',
    },
  ];

  return (
    <Main>
      <div className="min-h-screen py-16 px-8 bg-gray-100">
        <h2 className="text-4xl font-extrabold text-center text-[#00008B] mb-12">NUESTRAS ESTADÍSTICAS</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={stat.image}
                alt={stat.title}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-[#00008B] mb-2">{stat.title}</h3>
              <p className="text-gray-700">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
}

export default Statistics;
