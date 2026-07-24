import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';
import { FaFacebookF, FaInstagram, FaTelegram, FaTiktok } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Custom Furniture',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);


  const info = [
    { 
      icon: <HiLocationMarker />, 
      label: 'Visit Us', 
      value: 'Jimma, Ethiopia' 
    },
    { 
      icon: <HiPhone />, 
      label: 'Call Us', 
      value: '+251 968 944 894',
      link: 'tel:+251968944894'
    },
    { 
      icon: <HiMail />, 
      label: 'Email Us', 
      value: 'nufurther@gmail.com',
      link: 'mailto:nufurther@gmail.com'
    },
  ];


  const socials = [
    { Icon: FaFacebookF, href: '#', label: 'Facebook' },
    { Icon: FaInstagram, href: '#', label: 'Instagram' },
    { Icon: FaTelegram, href: '#', label: 'Telegram' },
    { Icon: FaTiktok, href: '#', label: 'TikTok' },
  ];


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus('');

    try {

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(formData)
      });


      if(!response.ok){
        throw new Error('Failed');
      }


      setStatus('Message sent successfully! We will contact you soon.');

      setFormData({
        name:'',
        phone:'',
        email:'',
        service:'Custom Furniture',
        message:''
      });


    } catch(error){

      setStatus(
        'Something went wrong. Please try again.'
      );

    } finally {

      setLoading(false);

    }

  };


  return (
    <>

      {/* HERO */}
      <section className="relative pt-40 pb-24 bg-brand-beige">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <motion.p
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            className="text-brand-orange uppercase tracking-[0.3em] text-xs mb-4 font-medium"
          >
            Get In Touch
          </motion.p>


          <motion.h1
            initial={{opacity:0,y:30}}
            animate={{opacity:1,y:0}}
            transition={{delay:.1}}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-brand-dark mb-6"
          >
            Let's Create <span className="italic text-brand-orange">Together</span>
          </motion.h1>


          <motion.p
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:.3}}
            className="max-w-2xl mx-auto text-brand-dark/70 text-lg"
          >
            Tell us about your dream furniture project and our team will help
            bring your ideas to life.
          </motion.p>

        </div>

      </section>



      {/* CONTACT AREA */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">


          {/* FORM */}

          <AnimatedSection>

            <div className="bg-brand-beige rounded-3xl p-8 md:p-10 shadow-xl">

              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-dark mb-8">
                Send Us A Message
              </h2>


              <form onSubmit={handleSubmit} className="space-y-5">


                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full rounded-xl px-5 py-4 outline-none border border-black/10"
                />


                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full rounded-xl px-5 py-4 outline-none border border-black/10"
                />


                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full rounded-xl px-5 py-4 outline-none border border-black/10"
                />


                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-xl px-5 py-4 outline-none border border-black/10"
                >

                  <option>Custom Furniture</option>
                  <option>Sofa Design</option>
                  <option>Interior Design</option>
                  <option>Restoration</option>

                </select>



                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows="5"
                  required
                  className="w-full rounded-xl px-5 py-4 outline-none border border-black/10"
                />


                <button
                  disabled={loading}
                  className="w-full bg-brand-orange text-white py-4 rounded-xl font-semibold hover:bg-brand-dark transition"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>


                {
                  status &&
                  <p className="text-center text-sm mt-4">
                    {status}
                  </p>
                }


              </form>


            </div>


          </AnimatedSection>





          {/* INFO + MAP */}

          <AnimatedSection delay={0.2}>

            <div>

              <h2 className="font-display text-4xl font-bold text-brand-dark mb-8">
                Visit Our Workshop
              </h2>



              <div className="grid gap-5">

              {info.map((item,index)=>(

                <div
                  key={index}
                  className="flex items-center gap-5 bg-brand-beige p-5 rounded-2xl"
                >

                  <div className="w-14 h-14 rounded-full bg-brand-orange text-white flex items-center justify-center text-xl">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-xs uppercase text-brand-dark/50">
                      {item.label}
                    </p>

                    <p className="font-semibold text-brand-dark">
                      {item.value}
                    </p>

                  </div>


                </div>

              ))}

              </div>




              {/* GOOGLE MAP */}

              <div className="mt-10 rounded-3xl overflow-hidden shadow-xl">

                <iframe
                  title="NU Furniture Location"
                  src="https://www.google.com/maps?q=Jimma,Ethiopia&output=embed"
                  width="100%"
                  height="350"
                  loading="lazy"
                  className="border-0"
                />

              </div>


            </div>


          </AnimatedSection>


        </div>

      </section>




      {/* SOCIAL */}

      <section className="pb-24 bg-white">

        <div className="flex justify-center gap-4">

        {
          socials.map((s,i)=>(

            <a
              key={i}
              href={s.href}
              className="w-12 h-12 rounded-full bg-brand-dark text-white flex items-center justify-center hover:bg-brand-orange transition"
            >
              <s.Icon/>
            </a>

          ))
        }

        </div>

      </section>


    </>
  );
}