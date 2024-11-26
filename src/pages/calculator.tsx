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
      <div className="mx-auto max-w-4xl p-10 bg-white">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-blue-800 mt-3">Calculadora de probabilidad para entrar en una carrera STEM</h2>
        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Grupo 1: Acceso a la educación */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-700">1. Acceso a la educación</h3>
            <div className="space-y-6">
              {[
                {
                  id: 'question1_1',
                  text: '1.1 ¿En tu colegio o comunidad existen iniciativas o programas enfocados en fomentar la participación de mujeres en áreas relacionadas con stem?',
                },
                {
                  id: 'question1_2',
                  text: '1.2 ¿En tu colegio se imparten clases o talleres de ciencias, tecnología, ingeniería o matemáticas?',
                },
                {
                  id: 'question1_3',
                  text: '1.3 ¿Tienes acceso a recursos educativos para aprender sobre stem?',
                },
              ].map(({ id, text }) => (
                <div key={id}>
                  <p className="mb-3 text-lg font-medium text-gray-700">{text}</p>
                  <div className="flex gap-4">
                    {['Sí', 'Tal Vez', 'No'].map((label, index) => (
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
                          className={`w-1/3 p-4 text-center rounded-lg cursor-pointer peer-checked:ring-4 peer-checked:ring-offset-2 ${
                            index === 0
                              ? 'bg-blue-500 text-white peer-checked:ring-blue-400'
                              : index === 1
                              ? 'bg-yellow-400 text-white peer-checked:ring-yellow-300'
                              : 'bg-red-500 text-white peer-checked:ring-red-400'
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
            <h3 className="text-2xl font-bold mb-6 text-blue-700">2. Motivación personal</h3>
            <div className="space-y-6">
              {[
                {
                  id: 'question2_1',
                  text: '2.1 ¿Te sientes motivado/a a seguir una carrera en stem?',
                },
                {
                  id: 'question2_2',
                  text: '2.2 ¿Conoces a alguien que te inspire en stem?',
                },
                {
                  id: 'question2_3',
                  text: '2.3 ¿Consideras que las áreas stem son importantes para el futuro?',
                },
                {
                  id: 'question2_4',
                  text: '2.4 ¿Te gustan las materias relacionadas con stem?',
                },
              ].map(({ id, text }) => (
                <div key={id}>
                  <p className="mb-3 text-lg font-medium text-gray-700">{text}</p>
                  <div className="flex gap-4">
                    {['Sí', 'Tal Vez', 'No'].map((label, index) => (
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
                          className={`w-1/3 p-4 text-center rounded-lg cursor-pointer peer-checked:ring-4 peer-checked:ring-offset-2 ${
                            index === 0
                              ? 'bg-blue-500 text-white peer-checked:ring-blue-400'
                              : index === 1
                              ? 'bg-yellow-400 text-white peer-checked:ring-yellow-300'
                              : 'bg-red-500 text-white peer-checked:ring-red-400'
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
            <h3 className="text-2xl font-bold mb-6 text-blue-700">3. Apoyo familiar</h3>
            <div className="space-y-6">
              {[
                {
                  id: 'question3_1',
                  text: '3.1 ¿Tu familia te apoya a perseguir intereses en stem?',
                },
                {
                  id: 'question3_2',
                  text: '3.2 ¿Tienes recursos en casa para aprender sobre stem?',
                },
                {
                  id: 'question3_3',
                  text: '3.3 ¿Tu familia está al tanto de las áreas stem?',
                },
                {
                  id: 'question3_4',
                  text: '3.4 ¿Consideras que tus padres/familiares te impulsan a aprender más?',
                },
              ].map(({ id, text }) => (
                <div key={id}>
                  <p className="mb-3 text-lg font-medium text-gray-700">{text}</p>
                  <div className="flex gap-4">
                    {['Sí', 'Tal Vez', 'No'].map((label, index) => (
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
                          className={`w-1/3 p-4 text-center rounded-lg cursor-pointer peer-checked:ring-4 peer-checked:ring-offset-2 ${
                            index === 0
                              ? 'bg-blue-500 text-white peer-checked:ring-blue-400'
                              : index === 1
                              ? 'bg-yellow-400 text-white peer-checked:ring-yellow-300'
                              : 'bg-red-500 text-white peer-checked:ring-red-400'
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
            className="block w-full py-4 mt-10 text-xl font-bold text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800"
          >
            Calcular probabilidad
          </button>
        </form>

        {result !== null && (
          <div className="mt-12 p-6 bg-green-100 rounded-lg text-center shadow-md">
            <h3 className="text-2xl font-bold text-green-700">Resultado:</h3>
            <p className="mt-4 text-lg font-medium text-green-800">
              {result >= 50
                ? '¡Probablemente ingreses a una carrera STEM!'
                : 'No es probable que ingreses a una carrera STEM.'}
            </p>
          </div>
        )}
      </div>
    </Main>
  );
};

export default Calculator;
