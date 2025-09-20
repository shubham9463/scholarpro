import React from 'react';
import { Play } from 'lucide-react';

export default function IITSponsorship() {
  const sponsors = [
    {
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=80&fit=crop",
      subtitle: "IIT GUWAHATI",
      logo: "TED",
      bgColor: "#e74c3c"
    },
    {
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=80&fit=crop",
      subtitle: "IIT INDORE",
      logo: "E-SUMMIT",
      bgColor: "#3498db"
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=80&fit=crop",
      subtitle: "IIM INDORE",
      logo: "TvsM",
      bgColor: "#ffffff",
      textColor: "#2c3e50"
    },
    {
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=200&h=80&fit=crop",
      subtitle: "IIT HYDERABAD",
      logo: "ZOZIMUS",
      bgColor: "#34495e"
    }
  ];

  const videoSections = [
    {
      title: "Our Organisation",
      thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop"
    },
    {
      title: "Corporate Office",
      thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop"
    },
    {
      title: "Best Principal Felicitation Ceremony",
      thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop"
    },
    {
      title: "Newspaper Coverage",
      thumbnail: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=250&fit=crop"
    }
  ];

  const stats = [
    { number: "42511+", label: "SCHOOLS" },
    { number: "10000000+", label: "STUDENTS" },
    { number: "20000+", label: "SCHOLORSHIP WINNERS" },
    { number: "50000+", label: "AWARDS WON" }
  ];

  return (
    <div style={{
      backgroundColor: '#ecf0f1',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      
      {/* Sponsorship Section */}
      <div style={{
        backgroundColor: 'white',
        padding: '60px 20px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Header */}
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#2c3e50',
            textAlign: 'center',
            margin: '0 0 50px 0'
          }}>
             SPONSORSHIP TO
          </h1>

          {/* Sponsor Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            marginBottom: '60px'
          }}>
            {sponsors.map((sponsor, index) => (
              <div key={index}>
                {/* Logo Card */}
                <div style={{
                  backgroundColor: sponsor.bgColor || '#3498db',
                  color: sponsor.textColor || 'white',
                  height: '120px',
                  borderRadius: '15px 15px 0 0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease',
                  backgroundImage: `url(${sponsor.image})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}>
                </div>
                
                {/* Info Card */}
                <div style={{
                  backgroundColor: '#3498db',
                  color: 'white',
                  padding: '20px',
                  borderRadius: '0 0 15px 15px',
                  textAlign: 'center',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    margin: '0 0 5px 0'
                  }}>
                    {sponsor.logo}
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    margin: 0,
                    opacity: '0.9'
                  }}>
                    {sponsor.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Video Sections */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '25px'
          }}>
            {videoSections.map((section, index) => (
              <div key={index} style={{
                position: 'relative',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
              }}>
                
                {/* Thumbnail */}
                <div style={{
                  height: '200px',
                  backgroundImage: `url(${section.thumbnail})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative'
                }}>
                  {/* Overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {/* Play Button */}
                    <div style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: 'rgba(231, 76, 60, 0.9)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease'
                    }}>
                      <Play size={24} color="white" fill="white" />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <div style={{
                  padding: '20px',
                  backgroundColor: 'white'
                }}>
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#2c3e50',
                    margin: 0,
                    textAlign: 'center'
                  }}>
                    {section.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div style={{
        backgroundColor: '#bdc3c7',
        padding: '60px 20px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px'
        }}>
          {stats.map((stat, index) => (
            <div key={index} style={{
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '3.5rem',
                fontWeight: '900',
                color: '#2c3e50',
                margin: '0 0 10px 0',
                lineHeight: '1'
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#34495e',
                letterSpacing: '1px'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}