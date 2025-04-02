import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool as Tool, Paintbrush, DollarSign, Plus, Minus } from 'lucide-react';

const services = [
  {
    number: '01',
    icon: Search,
    title: 'Evaluación y compra',
    description: 'Realizamos un análisis exhaustivo del mercado inmobiliario para identificar propiedades con alto potencial de retorno. Evaluamos la ubicación, condición estructural y costos de renovación para asegurar una inversión inteligente.',
  },
  {
    number: '02',
    icon: Tool,
    title: 'Renovación integral',
    description: 'Nuestro equipo de expertos ejecuta renovaciones completas que incluyen mejoras estructurales, actualizaciones de sistemas y acabados modernos. Gestionamos todos los aspectos del proyecto, desde permisos hasta la construcción.',
  },
  {
    number: '03',
    icon: Paintbrush,
    title: 'Decoración y staging',
    description: 'Transformamos los espacios con diseño de interiores profesional y técnicas de staging que maximizan el atractivo visual. Creamos ambientes que conectan emocionalmente con potenciales compradores o inquilinos.',
  },
  {
    number: '04',
    icon: DollarSign,
    title: 'Venta y asesoramiento',
    description: 'Desarrollamos estrategias de marketing personalizadas y proporcionamos asesoramiento financiero completo. Nuestro objetivo es maximizar el valor de venta y asegurar transacciones exitosas en tiempo récord.',
  },
];

export const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <>
      <div className="h-px bg-gray-200 dark:bg-gray-800 w-full" />
      <section id="services" className="py-12 bg-white dark:bg-[#282a36]">
        <div className="container">
          <h2 className="text-3xl md:text-3xl font-bold mb-1 text-gray-700 dark:text-draculacyan">
            Nuestro Proceso
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            Guía paso a paso para maximizar tu inversión
          </p>

          <div className="flex flex-col md:flex-row gap-12">
            {/* Services Column - 60% */}
            <div className="w-full md:w-[60%] flex flex-col gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className={`rounded-3xl transition-all duration-300 cursor-pointer ${
                    expandedIndex === index
                      ? 'bg-primary shadow-[0_8px_0_0] shadow-primary/50'
                      : 'bg-gray-100 dark:bg-[#44475a] hover:bg-gray-200 dark:hover:bg-[#44475a]/80'
                  }`}
                  onClick={() => setExpandedIndex(index)}
                  initial={false}
                >
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className={`text-3xl font-bold ${
                          expandedIndex === index
                            ? 'text-[#282a36]'
                            : 'text-gray-900 dark:text-white'
                        }`}>
                          {service.number}
                        </span>
                        <h3 className={`text-2xl font-semibold ${
                          expandedIndex === index
                            ? 'text-[#282a36]'
                            : 'text-gray-900 dark:text-white'
                        }`}>
                          {service.title}
                        </h3>
                      </div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        expandedIndex === index
                          ? 'bg-[#282a36]'
                          : 'bg-gray-900 dark:bg-white'
                      }`}>
                        {expandedIndex === index ? (
                          <Minus className="w-4 h-4 text-primary" />
                        ) : (
                          <Plus className="w-4 h-4 text-gray-100 dark:text-[#44475a]" />
                        )}
                      </div>
                    </div>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="h-px bg-[#282a36] my-4"></div>
                        <p className="text-[#282a36] text-lg">
                          {service.description}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Illustration Column - 40% */}
            <div className="w-full md:w-[40%] pt-8">
              <svg
                viewBox="0 0 800 800"
                className="w-full h-auto"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Space Background */}
                <rect width="800" height="800" fill="#282a36"/>
                
                {/* Nebula */}
                <path
                  d="M100 300 Q400 100 700 400 T100 500"
                  fill="#bd93f9"
                  opacity="0.3"
                />
                <path
                  d="M200 200 Q500 300 600 600"
                  fill="#ff79c6"
                  opacity="0.2"
                />
                
                {/* Stars */}
                {[...Array(50)].map((_, i) => (
                  <circle
                    key={i}
                    cx={Math.random() * 800}
                    cy={Math.random() * 800}
                    r={Math.random() * 2 + 1}
                    fill="#f8f8f2"
                  />
                ))}
                
                {/* Astronaut */}
                <g transform="translate(350,300)">
                  {/* Suit */}
                  <path
                    d="M0 0 Q30 -20 60 0 Q80 30 60 60 Q30 80 0 60 Q-20 30 0 0Z"
                    fill="#8be9fd"
                  />
                  
                  {/* Helmet */}
                  <circle cx="30" cy="20" r="25" fill="#6272a4"/>
                  <circle cx="30" cy="20" r="20" fill="#f8f8f2"/>
                  
                  {/* Paint Brush */}
                  <path
                    d="M70 -10 L120 -60"
                    stroke="#50fa7b"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  
                  {/* Paint Strokes */}
                  <path
                    d="M110 -70 Q130 -90 150 -70 T190 -70"
                    stroke="#ff5555"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    d="M120 -80 Q140 -100 160 -80 T200 -80"
                    stroke="#f1fa8c"
                    strokeWidth="4"
                    fill="none"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <div className="h-px bg-gray-200 dark:bg-gray-800 w-full" />
    </>
  );
};