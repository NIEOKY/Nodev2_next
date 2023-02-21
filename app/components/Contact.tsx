import { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { MdLocationOn } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  };

  return (
    <div
      className="bg-gray-300 dark:bg-[#0C0C0C] p-4 flex flex-col items-center"
      id="contact"
    >
      <h1 className="text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white flex items-center justify-center mb-16 text-center">
        CONTACTO
      </h1>
      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold mb-4">Información de contacto</h2>
            <div className="flex items-center mb-4">
              <HiOutlineMail className="text-2xl mr-2" />
              <a
                href="mailto:info@tudominio.com"
                className="text-lg hover:underline"
              >
                nodev.contacto@gmail.com
              </a>
            </div>
            {/*             
            <div className="flex items-center mb-4">
              <MdLocationOn className="text-2xl mr-2" />
                <p className="text-lg">
                  Dirección de la empresa, Calle 123, Ciudad, País
                </p>
              
            </div> */}
            <div className="flex items-center mb-4">
              <FiPhone className="text-2xl mr-2" />
              <a href="tel:+123456789" className="text-lg hover:underline">
                +52 449 298 10 61
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Formulario de contacto</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-lg font-medium mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border rounded-lg bg-gray-200 dark:bg-gray-100 text-black "
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium mb-2"
                >
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border rounded-lg bg-gray-200 dark:bg-gray-100 text-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-lg font-medium mb-2 "
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-2 border rounded-lg bg-gray-200 dark:bg-gray-100 text-black"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
