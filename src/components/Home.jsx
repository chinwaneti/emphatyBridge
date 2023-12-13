import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { FaArrowRight } from 'react-icons/fa'
import frame from "../components/images/Frame 13.png"
import heart from "../components/images/HandHeart.png"
import apple from "../components/images/apple.png"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react'

export default function Home() {

    const containerControls = useAnimation();
  const fadeInUpControls = useAnimation();
  const [containerRef, containerInView] = useInView({
    triggerOnce: true,
  });
  const [fadeInUpRef, fadeInUpInView] = useInView({
    triggerOnce: true,
  });
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  useEffect(() => {
    if (containerInView) {
      containerControls.start({ opacity: 1 });
    }
  }, [containerControls, containerInView]);

  useEffect(() => {
    if (fadeInUpInView) {
      fadeInUpControls.start({ y: 0, opacity: 1 });
    }
  }, [fadeInUpControls, fadeInUpInView]);


  return (
    <div>
    <motion.div
    ref={fadeInUpRef}
        animate={fadeInUpControls}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 1 }}
  >
    <Header />
    <div className="relative">
    <motion.img
          src="https://media.istockphoto.com/id/697960308/photo/joyful-nice-man-speaking-with-his-colleague-on-the-phone.jpg?s=612x612&w=0&k=20&c=zWyYqS16uedF3e2zvGkq4W2IEUk6qdHxQPvHHltmNmI="
          alt="doctor pics"
          className="w-full h-[100vh]"
        />

      <motion.div
        className="absolute bg-purple-500 w-[38%] rounded-lg p-10 ml-20 text-white top-[20%] left-10"
        ref={containerRef}
          animate={containerControls}
          initial={{ opacity: 2 }}
          variants={containerVariants}
          transition={{ duration: 1 }}
      >
        <h1 className="font-bold text-4xl p-5">
          Access Health Care With Ease
        </h1>
        <motion.div className="my-5"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        >
          Get the healthcare you need, when you need it. Whether its urgent
          care or specialist appointments. <br /> Empathy Bridge proves the
          healthcare system at your fingertips.
        </motion.div>
        <div className="flex space-x-8 rounded-lg">
          <motion.button className="border py-1 px-10 flex items-center space-x-5 text-purple-500 rounded-lg bg-white"
          
            
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          
          >
            <p>Get Started</p> <span>
              <FaArrowRight />
            </span>
          </motion.button>
          <motion.button className="border py-1 px-10 rounded-lg"
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.9 }}
          >Learn More</motion.button>
        </div>
      </motion.div>
        </div>
        <motion.div
        className="flex items-center justify-between px-40 h-[20vh]"
        ref={fadeInUpRef}
        animate={fadeInUpControls}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 1 }}
      >
            <img src="https://s3-alpha-sig.figma.com/img/549a/0b51/8cbca64596ef3e3c020b94a57b320880?Expires=1703462400&Signature=fYRM~f9u0JPuJyfsUKRg2ePLI6Qi4PnwJLS1h3990T7axvKhlruJkytVuKrhL2YRVga07ykVAfqJcpgjUbk4qf-u47YbvofKr7M7zBjqomxawqqNF5ARERRYKgZzpjITVPf90ROg-S5WvzqCHqtGvq5AUkElrBHrp-a4fC82MAGos219LUY0PN9LgNBz9BAy0LSXna7mz7dL5nRg4sLYJWFPiEz9Y0bh49dOKB1UVmQYsakkTjSXJSJ5x0CtcwTCPr6OWxg1Su1XHRYNJujOtAleqsVw1zKrBSKMD0FEBzpPDmkfPpmSUGM-YQaxibUpneSuBVuhk4WpSqJh6uqxNg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="unicef logo"  className='h-10 w-20'/>
            <img src="https://s3-alpha-sig.figma.com/img/e86f/392b/8b272f8312a1dcb22a8799b299c55016?Expires=1703462400&Signature=ly~BmvXDuyf1ATNgYtpc~2I4qnGXNQcaMiOYUUYHBumfBQlqKGGzA6N6NdqD6ZzQNw9OwZDk0wm1klDglPsIst-k4X14s82pdQdq9QQKtC1jyiw3QIYGLvtHsv4ByBjBHg02~25a0jsnxikNGmxLbHAuZ5n2QHoBTuVFsgC-gRuqUPpZOr~bb~D1d6aiieLxluvC680h7hV2iWzVzVaR0ia7PUPO988BQUge3ZOj3YR7y1Os1Ds5lxdyIDvxNfGMWqEXpwytghp2kSLIwSu8jtw~OXEBpUUEB0rECCSLb2nuNLp4BZ3E7PnPy~aIjAaEYxYG2wLtXIclNblMVhIe6w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="red cross"  className='h-10 w-10'/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/World_Health_Organization_Logo.svg/375px-World_Health_Organization_Logo.svg.png" alt="who" className='w-20 h-10'/>
            <img src="https://s3-alpha-sig.figma.com/img/e86f/392b/8b272f8312a1dcb22a8799b299c55016?Expires=1703462400&Signature=ly~BmvXDuyf1ATNgYtpc~2I4qnGXNQcaMiOYUUYHBumfBQlqKGGzA6N6NdqD6ZzQNw9OwZDk0wm1klDglPsIst-k4X14s82pdQdq9QQKtC1jyiw3QIYGLvtHsv4ByBjBHg02~25a0jsnxikNGmxLbHAuZ5n2QHoBTuVFsgC-gRuqUPpZOr~bb~D1d6aiieLxluvC680h7hV2iWzVzVaR0ia7PUPO988BQUge3ZOj3YR7y1Os1Ds5lxdyIDvxNfGMWqEXpwytghp2kSLIwSu8jtw~OXEBpUUEB0rECCSLb2nuNLp4BZ3E7PnPy~aIjAaEYxYG2wLtXIclNblMVhIe6w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="WHO logo"  className='h-10 w-10'/>

            <img src="https://s3-alpha-sig.figma.com/img/549a/0b51/8cbca64596ef3e3c020b94a57b320880?Expires=1703462400&Signature=fYRM~f9u0JPuJyfsUKRg2ePLI6Qi4PnwJLS1h3990T7axvKhlruJkytVuKrhL2YRVga07ykVAfqJcpgjUbk4qf-u47YbvofKr7M7zBjqomxawqqNF5ARERRYKgZzpjITVPf90ROg-S5WvzqCHqtGvq5AUkElrBHrp-a4fC82MAGos219LUY0PN9LgNBz9BAy0LSXna7mz7dL5nRg4sLYJWFPiEz9Y0bh49dOKB1UVmQYsakkTjSXJSJ5x0CtcwTCPr6OWxg1Su1XHRYNJujOtAleqsVw1zKrBSKMD0FEBzpPDmkfPpmSUGM-YQaxibUpneSuBVuhk4WpSqJh6uqxNg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="unicef logo"  className='h-10 w-20'/>

            <img src="https://s3-alpha-sig.figma.com/img/e86f/392b/8b272f8312a1dcb22a8799b299c55016?Expires=1703462400&Signature=ly~BmvXDuyf1ATNgYtpc~2I4qnGXNQcaMiOYUUYHBumfBQlqKGGzA6N6NdqD6ZzQNw9OwZDk0wm1klDglPsIst-k4X14s82pdQdq9QQKtC1jyiw3QIYGLvtHsv4ByBjBHg02~25a0jsnxikNGmxLbHAuZ5n2QHoBTuVFsgC-gRuqUPpZOr~bb~D1d6aiieLxluvC680h7hV2iWzVzVaR0ia7PUPO988BQUge3ZOj3YR7y1Os1Ds5lxdyIDvxNfGMWqEXpwytghp2kSLIwSu8jtw~OXEBpUUEB0rECCSLb2nuNLp4BZ3E7PnPy~aIjAaEYxYG2wLtXIclNblMVhIe6w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="red cross"  className='h-10 w-10'/>
        </motion.div>
        <motion.div className='px-40 py-20'
          initial={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
            <img src={frame} alt="no limit" />
        </motion.div>
        <div className='flex px-28'>
            <div >
            <img src="https://s3-alpha-sig.figma.com/img/0273/322f/9659da5132bc1805f9579229f5965554?Expires=1703462400&Signature=UmBjXwq~MYSfkuaEaTyuWemhiQpHp~stG1BtAarCPjOYxklFH8QNXeDz1kdS2SulJDCLeLz4qdg2Nt-af~GXfcxy3VgMmeO9Atkgr0xdDbpJDJndiPGDjyDU65zWKQJD1uUn~xKiPUYOsw1rHQu4iAu-8tnUcRZJRoFVqLh7AVJ8uqU4jbi2iuLvx4dDUM7ycjFb8bf8wp7OcYKQpdWboifA6-c8wX8Ji1WN5T-MGsuQiibczMDmA3aFTFJNT~ACGFgHoKP0ITgY91Gi8HcnAkZRJFLGjx2CtkYwQ4vK8kfDqVCWSU~cznzmS968sQc5AtWS1EV99S0zqCsdU1G95w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="nurse" 
            className='w-[45vw] rounded-lg'
            /></div>
             <motion.div
        className="w-[45vw] bg-[#EEFFF5] rounded-lg p-10 ml-5"
        ref={containerRef}
          animate={containerControls}
          initial={{ opacity: 1 }}
          transition={{ duration: 1 }}
      >
                
                <p className='my-10 rounded-2xl bg-[#B9E8CC] p-3'><img src={heart} alt="heart" /></p>
                    <p className='font-bold text-[#4e8865]'>SPEEDY HEALTH CARE</p>
                    <h2 className='font-bold text-3xl text-[#4e8865] my-5'>Timely Access To Health Care</h2>
                    <p className='font-bold text-[#4e8865]'>Imagine ditching the endless waiting rooms. what if you could have your own health buddy , always there to guide and answer your health related questions? meet EmphatyBridge AI-powered healthcare.</p>
            </motion.div>
        </div>
        <div className=' w-[81vw] my-5 h-[50vh] ml-28 rounded-lg bg-cover relative 'style={{backgroundImage: 'url("https://media.istockphoto.com/id/1298726321/photo/doctor-hand-giving-injection-to-young-patient-shoulder.jpg?s=612x612&w=0&k=20&c=Ka_a5s2AN8R_eWYgMU-ZMVHUVTx4CrKo9P6PqgnmmcU=")'}}>
            <div className='absolute text-gray-500 top-20 left-20'>
                <p className='font-bold my-4 text-4xl w-[65%]'>Your AI Medical Health Care</p>
                <p className='w-[81%] font-bold text-xl '>24hours standby professional doctors for your daily needs. 
                    Get started today.
                </p>
            </div>
        </div>
        <motion.div
        className="w-[81vw] mt-5 bg-purple-100 my-5 h-[50vh] ml-28 rounded-lg bg-cover relative"
    
        ref={containerRef}
          animate={containerControls}
          initial={{ opacity: 0 }}
          transition={{ duration: 2 }}
      >

    <div className=' absolute top-1/2 right-[20%] transform translate-x-1/2 -translate-y-1/2 bg-purple-100'>
        <img src="https://s3-alpha-sig.figma.com/img/e6d5/17c1/46b56a0a4b293236768ba65d3d16b262?Expires=1703462400&Signature=C4mlAoyDEeuGc0Iid1DXB24cIePTwpgBhCwCU7hLdlPlNJU4jTBRhUlmsXBDgEERzqRfMh77EActhQpYqhYQflz3DhV~HsSwfLmjNphO8bmUj2Lc94-29kmhgzZiTLto1HVO5bRz3XnxQXJXckuYgWBmo~ZjDKzdVaFjsSsRQdp-OH9P1H6bhNHdZP16MEn7yBjzAMS3VODqH14IviRbjQMZllQd8LS7JgliVBTvwa34nmSumMwSKmu7NefY15j9uT2Xpr54A-85l~shrihYV1n4OEceStip4aXA4HYlBSiDm3aERfSus~ckTaeC7ecD-0fG6Q9BhkygWZTnClAbSQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="laughing boy" className='rounded-lg w-[219.0985px] h-[250.6475px]' style={{ flexShrink: "0" }} />
    </div>
    <div className=''>
    <p className='font-bold text-4xl w-[35%] px-10 p-5 pt-14  text-purple-600'>Best practice to healthy living</p>
    <p className='text-purple-600 w-[60%] px-10 '>Maintaining good health boils down to simple habits: eat a balanced diet with fruits and veggies, stay active for at least 150 minutes weekly, ensure 7-9 hours of quality sleep, manage stress through mindfulness, keep well-hydrated, and nurture social connections. These small, consistent steps pave the way for a healthier and more vibrant life.</p>
</div>
</motion.div>
<div >
        <p className='text-center mt-24 font-bold'>Get the app</p>
    <div className='flex px-32 mt-7 mb-10 ml-[28%] space-x-10'>
        <div><img src={apple} alt="apple" className='w-32'/></div>
        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS9jU2zmoVrMi9HSeXXxriO5IiNJLsVwd-iQ&usqp=CAU" alt="google play" className='h-[38px] w-32'/></div>
    </div></div>

        <div className=''>
            <Footer />
        </div>
        </motion.div></div>
  )
}
