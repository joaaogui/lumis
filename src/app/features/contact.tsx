export const Contact = () => {
  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-primary">
          Entre em Contato
        </h2>
        <form className="bg-white p-8 rounded-lg shadow-lg mx-auto max-w-lg">
          <label
            htmlFor="name"
            className="block text-left mb-4 text-lg font-semibold"
          >
            Nome
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            required
          />
          <label
            htmlFor="email"
            className="block text-left mb-4 text-lg font-semibold"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            required
          />
          <label
            htmlFor="message"
            className="block text-left mb-4 text-lg font-semibold"
          >
            Mensagem
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-primary text-white py-2 px-6 rounded-lg font-semibold text-lg"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
};
