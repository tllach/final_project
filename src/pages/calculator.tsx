import React, { useState } from 'react';
import { Main } from '../layout/Main';

const Calculator = () => {
  const [answers, setAnswers] = useState({
    question1_1: '',
    question1_2: '',
    question1_3: '',
    question2_1: '',
    question2_2: '',
    question2_3: '',
    question2_4: '',
    question3_1: '',
    question3_2: '',
    question3_3: '',
    question3_4: '',
  });

  const [result, setResult] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  };

  const calculateProbability = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(answers),
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data.probability);
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData.detail);
        alert('Error al calcular la probabilidad.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error conectando con el servidor.');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(answers).includes('')) {
      alert('Por favor, responde todas las preguntas.');
      return;
    }
    calculateProbability();
  };

  return (
    <Main>
      <div className="calculator mx-auto max-w-4xl p-8 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">STEM ENTRY PROBABILITY CALCULATOR</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Grupo 1: Acceso a la educación */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">1. ACCESO A LA EDUCACIÓN</h3>
            <div className="space-y-4">
              {[
                {
                  id: 'question1_1',
                  text: '1.1 ¿EN TU COLEGIO O COMUNIDAD EXISTEN INICIATIVAS O PROGRAMAS ENFOCADOS EN FOMENTAR LA PARTICIPACIÓN DE MUJERES EN ÁREAS RELACIONADAS CON STEM?',
                },
                {
                  id: 'question1_2',
                  text: '1.2 ¿EN TU COLEGIO SE IMPARTEN CLASES O TALLERES DE CIENCIAS, TECNOLOGÍA, INGENIERÍA O MATEMÁTICAS?',
                },
                {
                  id: 'question1_3',
                  text: '1.3 ¿TIENES ACCESO A RECURSOS EDUCATIVOS PARA APRENDER SOBRE STEM?',
                },
              ].map(({ id, text }) => (
                <div key={id}>
                  <p className="mb-2 font-medium">{text}</p>
                  <div className="flex gap-4">
                    {['SÍ', 'TAL VEZ', 'NO'].map((label, index) => (
                      <React.Fragment key={`${id}_${index}`}>
                        <input
                          type="radio"
                          id={`${id}_${label}`}
                          name={id}
                          value={index.toString()}
                          onChange={handleChange}
                          className="hidden peer"
                        />
                        <label
                          htmlFor={`${id}_${label}`}
                          className={`w-1/3 p-4 text-center rounded-lg cursor-pointer peer-checked:ring-2 ${
                            index === 0
                              ? 'bg-blue-500 text-white peer-checked:ring-blue-700 peer-checked:bg-blue-700'
                              : index === 1
                              ? 'bg-yellow-500 text-white peer-checked:ring-yellow-700 peer-checked:bg-yellow-700'
                              : 'bg-red-500 text-white peer-checked:ring-red-700 peer-checked:bg-red-700'
                          }`}
                        >
                          {label}
                        </label>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grupo 2: Motivación personal */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">2. MOTIVACIÓN PERSONAL</h3>
            <div className="space-y-4">
              {[
                {
                  id: 'question2_1',
                  text: '2.1 ¿TE SIENTES MOTIVADO/A A SEGUIR UNA CARRERA EN STEM?',
                },
                {
                  id: 'question2_2',
                  text: '2.2 ¿CONOCES A ALGUIEN QUE TE INSPIRE EN STEM?',
                },
                {
                  id: 'question2_3',
                  text: '2.3 ¿CONSIDERAS QUE LAS ÁREAS STEM SON IMPORTANTES PARA EL FUTURO?',
                },
                {
                  id: 'question2_4',
                  text: '2.4 ¿TE GUSTAN LAS MATERIAS RELACIONADAS CON STEM?',
                },
              ].map(({ id, text }) => (
                <div key={id}>
                  <p className="mb-2 font-medium">{text}</p>
                  <div className="flex gap-4">
                    {['SÍ', 'TAL VEZ', 'NO'].map((label, index) => (
                      <React.Fragment key={`${id}_${index}`}>
                        <input
                          type="radio"
                          id={`${id}_${label}`}
                          name={id}
                          value={index.toString()}
                          onChange={handleChange}
                          className="hidden peer"
                        />
                        <label
                          htmlFor={`${id}_${label}`}
                          className={`w-1/3 p-4 text-center rounded-lg cursor-pointer peer-checked:ring-2 ${
                            index === 0
                              ? 'bg-blue-500 text-white peer-checked:ring-blue-700 peer-checked:bg-blue-700'
                              : index === 1
                              ? 'bg-yellow-500 text-white peer-checked:ring-yellow-700 peer-checked:bg-yellow-700'
                              : 'bg-red-500 text-white peer-checked:ring-red-700 peer-checked:bg-red-700'
                          }`}
                        >
                          {label}
                        </label>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grupo 3: Apoyo familiar */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">3. APOYO FAMILIAR</h3>
            <div className="space-y-4">
              {[
                {
                  id: 'question3_1',
                  text: '3.1 ¿TU FAMILIA TE APOYA A PERSEGUIR INTERESES EN STEM?',
                },
                {
                  id: 'question3_2',
                  text: '3.2 ¿TIENES RECURSOS EN CASA PARA APRENDER SOBRE STEM?',
                },
                {
                  id: 'question3_3',
                  text: '3.3 ¿TU FAMILIA ESTÁ AL TANTO DE LAS ÁREAS STEM?',
                },
                {
                  id: 'question3_4',
                  text: '3.4 ¿CONSIDERAS QUE TUS PADRES/FAMILIARES TE IMPULSAN A APRENDER MÁS?',
                },
              ].map(({ id, text }) => (
                <div key={id}>
                  <p className="mb-2 font-medium">{text}</p>
                  <div className="flex gap-4">
                    {['SÍ', 'TAL VEZ', 'NO'].map((label, index) => (
                      <React.Fragment key={`${id}_${index}`}>
                        <input
                          type="radio"
                          id={`${id}_${label}`}
                          name={id}
                          value={index.toString()}
                          onChange={handleChange}
                          className="hidden peer"
                        />
                        <label
                          htmlFor={`${id}_${label}`}
                          className={`w-1/3 p-4 text-center rounded-lg cursor-pointer peer-checked:ring-2 ${
                            index === 0
                              ? 'bg-blue-500 text-white peer-checked:ring-blue-700 peer-checked:bg-blue-700'
                              : index === 1
                              ? 'bg-yellow-500 text-white peer-checked:ring-yellow-700 peer-checked:bg-yellow-700'
                              : 'bg-red-500 text-white peer-checked:ring-red-700 peer-checked:bg-red-700'
                          }`}
                        >
                          {label}
                        </label>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="block w-full py-3 mt-6 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
          >
          CALCULAR PROBABILIDAD
          </button>
        </form>

        {result !== null && (
          <div className="mt-8 p-4 bg-green-100 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-green-700">Resultado:</h3>
            <p className="text-lg font-medium text-green-800">
              {result >= 50
                ? "¡Probablemente ingreses a una carrera STEM!"
                : "No es probable que ingreses a una carrera STEM."}
            </p>
          </div>
        )}
      </div>
    </Main>
  );
};

export default Calculator;
