import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Youtube, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const contactLinks = [
    {
      icon: Mail,
      name: 'Gmail',
      url: 'mailto:yohannisthebest@gmail.com',
      description: 'Drop me an email'
    },
    {
      icon: Youtube,
      name: 'YouTube',
      url: 'https://youtube.com/@v4plexe',
      description: 'Check out my content'
    },
    {
      icon: MessageCircle,
      name: 'Discord',
      url: 'https://discord.com/users/996797720754933824',
      description: "Let's chat on Discord"
    },
  ];

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-mono">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto font-mono">
            Ready to collaborate? Reach out through any of these channels
          </p>
        </motion.div>

        <div className="flex justify-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-8 bg-black/30 backdrop-blur-md border border-blue-500 rounded-2xl hover:bg-black/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
                  borderColor: "rgba(59, 130, 246, 0.8)"
                }}
              >
                <div className="p-4 bg-blue-500/20 rounded-2xl mb-4 group-hover:bg-blue-500/30 transition-all duration-300">
                  <link.icon className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-mono">
                  {link.name}
                </h3>
                <p className="text-white/60 text-center font-mono text-sm">
                  {link.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;