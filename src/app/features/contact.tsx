export const Contact = () => {
  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-primary">
          Entre em Contato
        </h2>
        <form
          className="bg-white p-8 rounded-lg shadow-lg mx-auto max-w-lg"
          action="mailto:lumisestetica@gmail.com?subject=Contato%20pelo%20site"
          method="post"
          encType="text/plain"
        >
          <label htmlFor="name">Nome</label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            type="text"
            id="name"
            name="name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            type="email"
            id="email"
            name="email"
            required
          />

          <label htmlFor="message">Mensagem</label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
            id="message"
            name="message"
            required
          ></textarea>

          <button
            className=" px-10 py-2 bg-white rounded-md text-primary font-semibold border-primary border-2 hover:bg-primary hover:bg-gray-400 hover:text-white transition-colors duration-300"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};
