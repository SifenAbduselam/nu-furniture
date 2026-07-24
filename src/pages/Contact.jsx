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
    { Icon: FaFacebookF, href:'#', label:'Facebook' },
    { Icon: FaInstagram, href:'#', label:'Instagram' },
    { Icon: FaTelegram, href:'#', label:'Telegram' },
    { Icon: FaTiktok, href:'#', label:'TikTok' },
  ];


  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async(e)=>{
    e.preventDefault();

    setLoading(true);
    setStatus('');

    try{

      const response = await fetch('/api/contact',{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
      });


      if(!response.ok){
        throw new Error("Failed");
      }


      setStatus(
        "Message sent successfully! We will contact you soon."
      );


      setFormData({
        name:'',
        phone:'',
        email:'',
        service:'Custom Furniture',
        message:''
      });


    }catch(error){

      setStatus(
        "Something went wrong. Please try again."
      );

    }finally{

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


<p className="max-w-2xl mx-auto text-brand-dark/70 text-lg">
Tell us about your dream furniture project and our team will help bring your ideas to life.
</p>


</div>

</section>




{/* CONTACT SECTION */}

<section className="py-24 bg-white">

<div className="max-w-7xl mx-auto px-6">


<div className="grid lg:grid-cols-2 gap-12 items-stretch">



{/* FORM */}

<AnimatedSection>

<div className="bg-brand-beige rounded-3xl p-8 md:p-10 shadow-xl h-full">


<h2 className="font-display text-3xl md:text-4xl font-bold text-brand-dark mb-8">
Send Us A Message
</h2>



<form 
onSubmit={handleSubmit}
className="space-y-5"
>


<div className="grid md:grid-cols-2 gap-5">


<input
name="name"
value={formData.name}
onChange={handleChange}
placeholder="Full Name"
required
className="rounded-xl px-5 py-4 border border-black/10 outline-none"
/>



<input
name="phone"
value={formData.phone}
onChange={handleChange}
placeholder="Phone Number"
required
className="rounded-xl px-5 py-4 border border-black/10 outline-none"
/>


</div>




<div className="grid md:grid-cols-2 gap-5">


<input
name="email"
value={formData.email}
onChange={handleChange}
placeholder="Email Address"
className="rounded-xl px-5 py-4 border border-black/10 outline-none"
/>



<select
name="service"
value={formData.service}
onChange={handleChange}
className="rounded-xl px-5 py-4 border border-black/10 outline-none"
>

<option>Custom Furniture</option>
<option>Sofa Design</option>
<option>Interior Design</option>
<option>Restoration</option>

</select>


</div>




<textarea
name="message"
value={formData.message}
onChange={handleChange}
placeholder="Tell us about your project..."
rows="6"
required
className="w-full rounded-xl px-5 py-4 border border-black/10 outline-none"
/>




<button
disabled={loading}
className="w-full bg-brand-orange text-white py-4 rounded-xl font-semibold hover:bg-brand-dark transition"
>

{loading ? "Sending..." : "Send Message"}

</button>



{
status &&
<p className="text-center text-sm">
{status}
</p>
}



</form>


</div>


</AnimatedSection>






{/* MAP */}

<AnimatedSection delay={0.2}>

<div className="h-full">


<div className="rounded-3xl overflow-hidden shadow-xl h-full min-h-[650px]">


<iframe
title="NU Furniture Location"
src="https://www.google.com/maps?q=Jimma,Ethiopia&output=embed"
width="100%"
height="100%"
loading="lazy"
className="border-0 min-h-[650px]"
/>


</div>


</div>


</AnimatedSection>



</div>





{/* CONTACT DETAILS BELOW */}

<div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">


{
info.map((item,index)=>(

<div
key={index}
className="bg-brand-beige rounded-2xl p-6 flex items-center gap-5"
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


))
}


</div>



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