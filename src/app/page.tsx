export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <header className="bg-dark-pink text-white py-12">
        <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Beauty Bliss Clinic</h1>
            <p className="text-lg mb-8">Enhancing Your Natural Beauty with Professional Care</p>
            <a href="#contact" className="bg-white text-dark-pink py-2 px-4 rounded-lg font-semibold">Book an Appointment</a>
        </div>
      </header>

      <section id="services" className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-dark-pink">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Facial Treatments</h3>
              <p>Revitalize your skin with our luxurious facial treatments designed to nourish and refresh your complexion.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Body Contouring</h3>
              <p>Achieve your desired body shape with our advanced body contouring solutions that sculpt and tone.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Hair Removal</h3>
              <p>Experience smooth and hair-free skin with our safe and effective hair removal treatments.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-dark-pink text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
          <div className="flex flex-col md:flex-row justify-around">
            <div className="bg-white text-dark-pink p-6 rounded-lg shadow-lg mb-6 md:mb-0 md:w-1/3">
              <p>The facial treatment was amazing! My skin has never felt so fresh and smooth.</p>
              <p className="mt-4 font-semibold">- Sarah L.</p>
            </div>
            <div className="bg-white text-dark-pink p-6 rounded-lg shadow-lg mb-6 md:mb-0 md:w-1/3">
              <p>I am thrilled with the results of my body contouring. The staff were so professional and caring.</p>
              <p className="mt-4 font-semibold">- Jessica T.</p>
            </div>
            <div className="bg-white text-dark-pink p-6 rounded-lg shadow-lg md:w-1/3">
              <p>Excellent service for hair removal. I felt comfortable and the results are fantastic.</p>
              <p className="mt-4 font-semibold">- Emily R.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-dark-pink">Get in Touch</h2>
          <form className="bg-white p-8 rounded-lg shadow-lg mx-auto max-w-lg">
            <label htmlFor="name" className="block text-left mb-4">Name</label>
            <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-lg mb-4" required />
            <label htmlFor="email" className="block text-left mb-4">Email</label>
            <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-lg mb-4" required />
            <label htmlFor="message" className="block text-left mb-4">Message</label>
            <textarea id="message" rows={4} className="w-full p-3 border border-gray-300 rounded-lg mb-4" required></textarea>
            <button type="submit" className="bg-dark-pink text-white py-2 px-4 rounded-lg font-semibold">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="bg-dark-pink text-white py-6 text-center">
        <p>&copy; 2024 Beauty Bliss Clinic. All rights reserved.</p>
      </footer>
    </main>
  )
}
