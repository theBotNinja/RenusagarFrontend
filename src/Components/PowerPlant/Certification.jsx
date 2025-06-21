import React, { useContext } from 'react'
import ShowCase from '../UiElements/ShowCase';
import { motion } from 'framer-motion';
import { Theme } from '../../Context/Theme';

const certificates =[
    {number:"9000",title:"ISO"},
    {number:"18000",title:"OHSAS"},
    {number:"14000",title:"ISO"},
    {number:"50001",title:"ISO"},
]

export default function Certification() {
    const [isDark,changetheme] = useContext(Theme)
  return (
    <section
      className={` px-6 py-16 ${
        isDark ? "bg-neutral-900 text-white" : "bg-neutral-100 text-black"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-5xl font-bold mb-4">
          Certifications
        </h2>
        <p
          className={`${
            isDark ? "text-gray-300" : "text-gray-600"
          } max-w-3xl mx-auto`}
        >
          of Renusagar Power Division
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {certificates.map((cerfi, idx) => {
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.03, duration: 0.3 }}
              className={`${
                isDark
                  ? "bg-neutral-900 text-white hover:bg-neutral-800"
                  : "bg-neutral-100 text-black hover:bg-neutral-300"
              } rounded-2xl flex items-center justify-center p-5 hover:shadow-lg transition-all`}
            >
              <ShowCase title={cerfi.title} number={cerfi.number}></ShowCase>
            </motion.div>
          );
        })}
      </div>
    </section>
  )
}
