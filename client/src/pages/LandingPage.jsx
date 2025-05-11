import { Link } from "react-router-dom";
import CountUp from "react-countup";

const LandingPage = () => {
  return (
    <div className="text-[#D42E5D]">
      {/* Header - no background image */}
      <header className="bg-gradient-to-br from-pink-100 to-pink-200">
        <div className="navbar text-[#D42E5D]">
          <div className="navbar-start">
            <Link to="/">
              <img
                src="/logo3.png"
                alt="Logo"
                className="w-20 h-15 object-contain ml-5"
              />
            </Link>
          </div>
          <div className="navbar-end flex gap-5">
            <Link
              to="/auth"
              className="btn bg-white border-2 border-[#D42E5D] text-[#D42E5D] hover:bg-pink-100"
            >
              Signup
            </Link>
           <Link
              to="/auth"
              className="btn bg-white border-2 border-[#D42E5D] text-[#D42E5D] hover:bg-pink-100"
            >
              Login
            </Link>
          </div>
        </div>
      </header>

      {/* Hero section with background image */}
      <section
        className="hero min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/banner.jpg')" }}
      >
        <div className="bg-white/10 w-full h-full absolute top-0 left-0 z-0 backdrop-blur-sm"></div>
        <div className="hero-content flex-col lg:flex-row relative z-10">
          <div>
            <h1 className="text-7xl font-bold text-white drop-shadow-md">
              Find Your Soulmate
            </h1>
            <p className="py-6 text-white max-w-md drop-shadow-sm text-2xl">
              SoulMatch connects hearts. Discover meaningful connections and
              build lasting relationships.
            </p>
            <Link
              to="/auth"
              className="btn bg-white border-2 border-[#D42E5D] text-[#D42E5D] hover:bg-pink-100"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
      
<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12 text-[#D42E5D]">How It Works</h2>
    <div className="grid md:grid-cols-3 gap-8 text-center">
      {[
        { title: "1. Sign Up", desc: "Create a profile with your preferences." },
        { title: "2. Swipe", desc: "Discover people that match your vibe." },
        { title: "3. Chat", desc: "Connect and build meaningful relationships." }
      ].map((step, i) => (
        <div key={i} className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-[#D42E5D] mb-2">{step.title}</h3>
          <p className="text-gray-600">{step.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Rest of the page remains the same... */}
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#D42E5D]">
            Why Choose SoulMatch?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Verified Profiles", "Intelligent Matching", "Safe & Secure"].map(
              (title, idx) => (
                <div className="card bg-base-100 shadow-xl" key={idx}>
                  <div className="card-body">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p>
                      {title === "Verified Profiles"
                        ? "Every profile is verified for authenticity, so you can trust who you meet."
                        : title === "Intelligent Matching"
                        ? "We use smart algorithms to match you with compatible partners."
                        : "Your privacy and security are our top priorities."}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-[#D42E5D] mb-12">Our Impact</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        { end: 23000, label: "Active Users", suffix: "+" },
        { end: 14000, label: "Matches Made", suffix: "+" },
        { end: 96, label: "Satisfaction Rate", suffix: "%" },
      ].map((stat, i) => (
        <div key={i}>
          <h3 className="text-5xl font-bold text-[#D42E5D]">
            <CountUp end={stat.end} duration={2} suffix={stat.suffix} />
          </h3>
          <p className="text-gray-700 text-lg mt-2">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Stories Section */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#D42E5D] mb-12">
            Happy Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Zakia & Piash",
                img: "/piyash.jpg",
                text: "Thanks to SoulMatch, I met the love of my life!",
              },
              {
                name: "Faysal & Sadia",
                img: "/faysal.jpg",
                text: "Someone who truly understands me. Couldn't be happier!",
              },
              {
                name: "Shovon & Ayesha",
                img: "/shovon.jpeg",
                text: "The best platform out there! Real people, real connections.",
              },
            ].map((story, i) => (
              <div className="card bg-base-100 shadow-md" key={i}>
                <div className="card-body">
                  <img
                    src={story.img}
                    alt={story.name}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <p>{`"${story.text}"`}</p>
                  <div className="mt-4 font-semibold">- {story.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer p-10 bg-black text-white">
        <div>
          <h3 className="font-bold text-xl">SoulMatch</h3>
          <p>Connecting hearts since 2025</p>
        </div>
        <div>
          <span className="footer-title">Navigation</span>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Dashboard</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
