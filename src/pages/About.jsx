import React, { useState, useEffect } from 'react';
import { 
  FaCode, FaReact, FaJs, FaHtml5, FaCss3Alt, FaGithub, FaLinkedin, FaEnvelope, 
  FaRocket, FaLightbulb, FaPalette, FaMobile, FaDesktop, FaServer, FaDatabase,
  FaAward, FaStar, FaHeart, FaEye, FaHandshake, FaUsers, FaGlobe, FaClock,
  FaUser, FaBriefcase, FaTrophy
} from "react-icons/fa";
import imgs from "../assets/dp.png";

export const About = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [animatedSkills, setAnimatedSkills] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedSkills(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: 'React.js', icon: <FaReact />, level: 95, color: '#61DAFB', category: 'Frontend' },
    { name: 'JavaScript', icon: <FaJs />, level: 90, color: '#F7DF1E', category: 'Programming' },
    { name: 'TypeScript', icon: <FaCode />, level: 90, color: '#3178C6', category: 'Programming' },
    { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: '#E34F26', category: 'Markup' },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 90, color: '#1572B6', category: 'Styling' },
    { name: 'Git & GitHub', icon: <FaGithub />, level: 85, color: '#181717', category: 'Version Control' },
    { name: 'Responsive Design', icon: <FaMobile />, level: 92, color: '#FF6B6B', category: 'UI/UX' },
    { name: 'Material UI', icon: <FaPalette />, level: 88, color: '#0081CB', category: 'UI Framework' }
  ];

  const experiences = [
    {
      title: 'React Js Developer',
      company: 'Outline Systems',
      period: '2024 - Present',
      description: 'Building modern web applications with React, Material UI, React Bootstrap and TypeScript',
      achievements: ['Led 5+ major projects', 'Mentored 8 junior developers', 'Improved performance by 40%'],
      color: '#FF6B6B'
    },
    {
      title: 'React Executive',
      company: 'Capanicus',
      period: '2021 - 2023',
      description: 'Creating responsive and accessible user interfaces for Mobile and web applications',
      achievements: ['Designed 15+ interfaces', 'Achieved 98% accessibility score', 'Reduced load time by 60%'],
      color: '#4ECDC4'
    },
    {
      title: 'Web Developer Intern',
      company: 'Brisk Logic',
      period: '2020 - 2021',
      description: 'Learn Javascript, HTML and CSS',
      achievements: ['Built 20+ websites', 'Client satisfaction 100%', 'Learned 5 new technologies'],
      color: '#45B7D1'
    }
  ];

  const achievements = [
    { icon: <FaAward />, number: '10+', text: 'Projects Completed', color: '#FFD93D' },
    { icon: <FaStar />, number: '90%', text: 'Client Satisfaction', color: '#FF6B6B' },
    { icon: <FaHeart />, number: '4+', text: 'Years Experience', color: '#4ECDC4' },
    // { icon: <FaEye />, number: '10K+', text: 'Code Reviews', color: '#A8E6CF' }
  ];

  const tabs = [
    { id: 'about', label: 'About Me', icon: <FaUser /> },
    { id: 'skills', label: 'Skills', icon: <FaCode /> },
    { id: 'experience', label: 'Experience', icon: <FaBriefcase /> },
    { id: 'achievements', label: 'Achievements', icon: <FaTrophy /> }
  ];

  return (
    <section className="section-about container" style={{ position: 'relative' }}>
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        zIndex: -1
      }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              background: `hsl(${Math.random() * 360}, 70%, 60%)`,
              borderRadius: '50%',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: Math.random() * 2 + 's'
            }}
          />
        ))}
      </div>

      <h2 className="container-title" style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        fontSize: '4rem',
        textAlign: 'center',
        marginBottom: '1rem'
      }}>
        Kartikesh Sharma
      </h2>
      
      <p style={{ 
        textAlign: 'center', 
        fontSize: '2rem', 
        color: '#4ECDC4',
        marginBottom: '3rem',
        fontWeight: '600'
      }}>
        Frontend Developer (React Js) & UI/UX Enthusiast
      </p>

      {/* Interactive Tabs */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '1rem', 
        marginBottom: '4rem',
        flexWrap: 'wrap'
      }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '1rem 2rem',
              border: 'none',
              borderRadius: '2rem',
              background: activeTab === tab.id 
                ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                : 'rgba(255, 255, 255, 0.1)',
              color: '#fff',
              fontSize: '1.6rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'about' && (
        <div className="about-content" style={{ marginBottom: '4rem' }}>
          <div className="grid grid-two-cols" style={{ gap: '4rem', alignItems: 'center' }}>
            <div className="about-text">
              <div style={{
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
                padding: '3rem',
                borderRadius: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)'
              }}>
                <h3 style={{ 
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: '2.8rem', 
                  marginBottom: '2rem',
                  fontWeight: '700'
                }}>
                  Creative Problem Solver
                </h3>
                <p style={{ 
                  color: '#fff', 
                  fontSize: '1.8rem', 
                  lineHeight: '1.8',
                  marginBottom: '2rem'
                }}>
                  Passionate Frontend Developer with expertise in creating modern, responsive, and user-friendly web applications. 
                  I specialize in React.js, JavaScript, and modern CSS frameworks to build scalable and maintainable code.
                </p>
                <p style={{ 
                  color: '#E0E0E0', 
                  fontSize: '1.6rem', 
                  lineHeight: '1.7',
                  marginBottom: '2rem'
                }}>
                  With a strong foundation in web technologies and a keen eye for design, I transform complex problems into 
                  simple, beautiful, and intuitive solutions. I'm always eager to learn new technologies and stay updated 
                  with the latest industry trends.
                </p>
                
                <div style={{ 
                  display: 'flex', 
                  gap: '2rem', 
                  marginTop: '2rem',
                  flexWrap: 'wrap'
                }}>
                  {[
                    { icon: <FaRocket />, text: 'Fast Development' },
                    { icon: <FaLightbulb />, text: 'Creative Solutions' },
                    { icon: <FaPalette />, text: 'Beautiful Design' },
                    { icon: <FaMobile />, text: 'Responsive' }
                  ].map((item, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#4ECDC4',
                      fontSize: '1.4rem',
                      fontWeight: '500'
                    }}>
                      {item.icon}
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="about-image" style={{ textAlign: 'center' }}>
              <div style={{
                position: 'relative',
                width: '350px',
                height: '350px',
                margin: '0 auto'
              }}>
                {/* Animated rings */}
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      width: `${300 + i * 50}px`,
                      height: `${300 + i * 50}px`,
                      border: `2px solid ${['#667eea', '#764ba2', '#4ECDC4'][i]}`,
                      borderRadius: '50%',
                      transform: 'translate(-50%, -50%)',
                      animation: `rotate ${8 + i * 2}s linear infinite`,
                      opacity: 0.3
                    }}
                  />
                ))}
                
                {/* Main avatar */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '280px',
                  height: '280px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #4ECDC4 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '8rem',
                  color: '#fff',
                  boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)',
                  animation: 'pulse 2s ease-in-out infinite'
                }}>
                  <img src={imgs} alt="dp" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'skills' && (
        <div style={{ marginBottom: '4rem' }}>
          <div className="gradient-cards">
            {skills.map((skill, index) => (
              <div className="card" key={index} style={{
                transform: animatedSkills ? 'translateY(0)' : 'translateY(50px)',
                opacity: animatedSkills ? 1 : 0,
                transition: `all 0.5s ease ${index * 0.1}s`
              }}>
                <div style={{ 
                  textAlign: 'center', 
                  padding: '3rem 2rem',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                  borderRadius: '2rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`
                  }} />
                  
                  <div style={{ 
                    fontSize: '5rem', 
                    color: skill.color, 
                    marginBottom: '1.5rem',
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                  }}>
                    {skill.icon}
                  </div>
                  
                  <h4 style={{ 
                    color: '#fff', 
                    fontSize: '2rem', 
                    marginBottom: '0.5rem',
                    fontWeight: '600'
                  }}>
                    {skill.name}
                  </h4>
                  
                  <p style={{ 
                    color: skill.color, 
                    fontSize: '1.4rem', 
                    marginBottom: '1.5rem',
                    fontWeight: '500'
                  }}>
                    {skill.category}
                  </p>
                  
                  <div style={{
                    width: '100%',
                    height: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    marginBottom: '1rem'
                  }}>
                    <div style={{
                      width: `${skill.level}%`,
                      height: '100%',
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                      borderRadius: '6px',
                      transition: 'width 1s ease',
                      boxShadow: `0 0 10px ${skill.color}40`
                    }} />
                  </div>
                  
                  <p style={{ 
                    color: skill.color, 
                    fontSize: '1.6rem', 
                    fontWeight: '700'
                  }}>
                    {skill.level}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'experience' && (
        <div>
          <div className="gradient-cards">
            {experiences.map((exp, index) => (
              <div className="card" key={index} style={{
                transform: `translateY(${index * 20}px)`,
                transition: 'all 0.3s ease'
              }}>
                <div style={{ 
                  padding: '3rem',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                  borderRadius: '2rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(90deg, ${exp.color}, ${exp.color}88)`
                  }} />
                  
                  <h4 style={{ 
                    color: exp.color, 
                    fontSize: '2.4rem', 
                    marginBottom: '1rem',
                    fontWeight: '700'
                  }}>
                    {exp.title}
                  </h4>
                  
                  <p style={{ 
                    color: '#fff', 
                    fontSize: '1.8rem', 
                    marginBottom: '0.5rem',
                    fontWeight: '600'
                  }}>
                    {exp.company}
                  </p>
                  
                  <p style={{ 
                    color: exp.color, 
                    fontSize: '1.6rem', 
                    marginBottom: '1.5rem',
                    fontStyle: 'italic',
                    fontWeight: '500'
                  }}>
                    <FaClock style={{ marginRight: '0.5rem' }} />
                    {exp.period}
                  </p>
                  
                  <p style={{ 
                    color: '#E0E0E0', 
                    fontSize: '1.6rem', 
                    lineHeight: '1.7',
                    marginBottom: '2rem'
                  }}>
                    {exp.description}
                  </p>
                  
                  <div>
                    <h5 style={{ 
                      color: exp.color, 
                      fontSize: '1.6rem', 
                      marginBottom: '1rem',
                      fontWeight: '600'
                    }}>
                      Key Achievements:
                    </h5>
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.8rem',
                        marginBottom: '0.8rem',
                        color: '#fff',
                        fontSize: '1.4rem'
                      }}>
                        <FaStar style={{ color: exp.color, fontSize: '1.2rem' }} />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
<br/>
<br/>
<br/>
      {activeTab === 'achievements' && (
        <div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}>
            {achievements.map((achievement, index) => (
              <div key={index} style={{
                textAlign: 'center',
                padding: '3rem 2rem',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                borderRadius: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-10px) scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
              }}
              >
                <div style={{
                  fontSize: '4rem',
                  color: achievement.color,
                  marginBottom: '1.5rem',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                }}>
                  {achievement.icon}
                </div>
                <h3 style={{ 
                  color: '#fff', 
                  fontSize: '3rem', 
                  marginBottom: '1rem',
                  fontWeight: '700'
                }}>
                  {achievement.number}
                </h3>
                <p style={{ 
                  color: achievement.color, 
                  fontSize: '1.6rem',
                  fontWeight: '600'
                }}>
                  {achievement.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contact Section */}
      <div style={{
        textAlign: 'center',
        padding: '3rem',
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
        borderRadius: '2rem',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)'
      }}>
        <h3 style={{ 
          color: '#fff', 
          fontSize: '2.4rem', 
          marginBottom: '2rem',
          fontWeight: '600'
        }}>
          Let's Connect!
        </h3>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '3rem',
          flexWrap: 'wrap'
        }}>
          {[
            { icon: <FaEnvelope />, text: 'kartikesh.sharma59@gmail.com', link:'https://gmail.com/' ,color: '#FF6B6B' },
            { icon: <FaLinkedin />, text: 'LinkedIn', color: '#0077B5' ,link:'https://www.linkedin.com/in/kartikesh-sharma/' ,},
            { icon: <FaGithub color="#fff" />, text: 'GitHub', color: '#fff' ,link:'https://github.com/Kartikesh-19/' ,},
            { icon: <FaGlobe />, text: 'Portfolio', color: '#4ECDC4' ,link:'https://explorexcountries.netlify.app/' ,}
          ].map((contact, index) => (
            <a
              key={index}
              href={contact?.link}
              target='_blank'
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem 2rem',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '2rem',
                color: contact.color,
                textDecoration: 'none',
                fontSize: '1.6rem',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px)';
                e.target.style.background = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              {contact.icon}
              {contact.text}
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.05); }
        }
      `}</style>
    </section>
  );
};