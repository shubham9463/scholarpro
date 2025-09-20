import React from 'react';

export default function Testimonial() {
  const testimonials = [
    {
      name: "Dr. Kiran Bedi",
      title: "FORMER LIEUTENANT GOVERNOR OF PUDUCHERRY",
      subtitle: "FIRST INDIAN FEMALE IPS OFFICER",
      quote: "Indian Talent Olympiad helps enhance students' ability to learn and excel in their academics.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Shri Dr. A.S. Kiran Kumar",
      title: "FORMER CHAIRMAN",
      subtitle: "INDIAN SPACE RESEARCH ORGANISATION (ISRO)",
      quote: "Indian Talent Olympiad is one of the dedicated Education platforms for students to gain knowledge and excel in academics.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Shri P.T. Usha",
      title: "ARJUNA AND PADMA SHREE RECIPIENT",
      subtitle: "THE ADVISORY COMMITTEE HEAD OF ITO",
      quote: "Indian Talent Olympiad is a good initiative. All should participate in the ITO exams as this will help in academics too.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Prof. Ajoy Kumar Ray",
      title: "FORMER DIRECTOR",
      subtitle: "INDIAN INSTITUTE OF TECHNOLOGY (IIT)",
      quote: "The Indian Talent Olympiad provides excellent opportunity for students to test their knowledge and skills in various subjects.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Dr. Raghunath Anant Mashelkar",
      title: "FORMER DIRECTOR GENERAL",
      subtitle: "COUNCIL OF SCIENTIFIC & INDUSTRIAL RESEARCH",
      quote: "Indian Talent Olympiad is doing commendable work in nurturing young talent and promoting excellence in education.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Padma Shri Arjun Singh",
      title: "FORMER EDUCATION MINISTER",
      subtitle: "GOVERNMENT OF INDIA",
      quote: "Such initiatives like Indian Talent Olympiad are essential for identifying and nurturing the brightest minds of our nation.",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=200&h=200&fit=crop&crop=face"
    }
  ];

  return (
    <div style={{
      backgroundColor: '#f1c40f',
      minHeight: '100vh',
      padding: '80px 20px',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '60px'
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: '700',
          color: '#2c3e50',
          margin: '0 0 20px 0',
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
        }}>
          Testimonial
        </h1>
        <p style={{
          fontSize: '1.3rem',
          color: '#34495e',
          margin: 0,
          fontWeight: '500'
        }}>
          See what the legends have to say.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '30px'
      }}>
        {testimonials.map((testimonial, index) => (
          <div key={index} style={{
            backgroundColor: 'white',
            borderRadius: '20px',
            padding: '40px 30px',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
          }}>
            
            {/* Decorative Element */}
            <div style={{
              position: 'absolute',
              top: '0',
              right: '0',
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, #f1c40f, #f39c12)',
              borderRadius: '0 20px 0 100px',
              opacity: '0.1'
            }}></div>

            {/* Profile Image */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '25px'
            }}>
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                backgroundImage: `url(${testimonial.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: '5px solid #f1c40f',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)'
              }}></div>
            </div>

            {/* Name */}
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#2c3e50',
              textAlign: 'center',
              margin: '0 0 10px 0',
              lineHeight: '1.3'
            }}>
              {testimonial.name}
            </h3>

            {/* Title */}
            <p style={{
              fontSize: '0.95rem',
              fontWeight: '600',
              color: '#e74c3c',
              textAlign: 'center',
              margin: '0 0 5px 0',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              {testimonial.title}
            </p>

            {/* Subtitle */}
            <p style={{
              fontSize: '0.9rem',
              fontWeight: '600',
              color: '#e74c3c',
              textAlign: 'center',
              margin: '0 0 25px 0',
              textTransform: 'uppercase',
              letterSpacing: '0.3px'
            }}>
              {testimonial.subtitle}
            </p>

            {/* Quote */}
            <div style={{
              position: 'relative'
            }}>
              <div style={{
                fontSize: '3rem',
                color: '#f1c40f',
                lineHeight: '1',
                position: 'absolute',
                top: '-15px',
                left: '-5px',
                fontFamily: 'serif'
              }}>
                "
              </div>
              <p style={{
                fontSize: '1.1rem',
                fontStyle: 'italic',
                color: '#2c3e50',
                lineHeight: '1.6',
                textAlign: 'center',
                margin: '10px 0 0 0',
                paddingLeft: '20px',
                paddingRight: '20px'
              }}>
                {testimonial.quote}
              </p>
              <div style={{
                fontSize: '3rem',
                color: '#f1c40f',
                lineHeight: '1',
                position: 'absolute',
                bottom: '-25px',
                right: '10px',
                fontFamily: 'serif',
                transform: 'rotate(180deg)'
              }}>
                "
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}