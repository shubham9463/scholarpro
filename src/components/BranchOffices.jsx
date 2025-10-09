import React from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';

export default function BranchOffices() {
  const offices = [
    {
      title: "Corporate Head Office, Mumbai",
      subtitle: "Located at Kailas Corporate Lounge",
      address: "No. 1005, 10th Floor, Veer Savarkar Marg, Powai Vikholi Link Road, Vikhroli(W), Mumbai - 400079",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=300&fit=crop"
    },
    {
      title: "Branch Office, Pune",
      subtitle: "Located at K Square",
      address: "104, K Square Building, Pan Card Club Road, Baner, Pune, Maharashtra - 411045",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop"
    },
    {
      title: "Backend Office, WTC Bangalore",
      subtitle: "Located at Regus Co-works",
      address: "Unit No 2201A, 22nd Floor, World Trade Center WTC Bangalore, Brigade Malleswaram West, Bengaluru, Karnataka - 560055",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop"
    },
    {
      title: "Backend Office, Hyderabad",
      subtitle: "Located at Regus Co-works",
      address: "Level 2, iLabs Centre, Oval Building, Madhapur, Hyderabad, Telangana - 500081",
      image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      padding: '60px 20px',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '60px'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          color: '#2d3748',
          margin: '0 0 20px 0'
        }}>
          Our Branch Offices Across India
        </h1>
        <div style={{
          width: '80px',
          height: '4px',
          backgroundColor: '#f6d55c',
          margin: '0 auto',
          borderRadius: '2px'
        }}></div>
      </div>

      {/* Office Cards Grid */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '30px',
        marginBottom: '80px'
      }}>
        {offices.map((office, index) => (
          <div key={index} style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
          }}>
            {/* Image */}
            <div style={{
              height: '240px',
              backgroundImage: `url(${office.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.3))'
              }}></div>
            </div>

            {/* Content */}
            <div style={{
              padding: '30px'
            }}>
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: '700',
                color: '#2d3748',
                margin: '0 0 8px 0',
                lineHeight: '1.3'
              }}>
                {office.title}
              </h3>
              
              <h4 style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#4a90e2',
                margin: '0 0 16px 0',
                fontStyle: 'italic'
              }}>
                {office.subtitle}
              </h4>

              <p style={{
                fontSize: '0.95rem',
                color: '#4a5568',
                lineHeight: '1.6',
                margin: 0
              }}>
                {office.address}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer with Logo and WhatsApp */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        {/* Company Logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            backgroundColor: '#2563eb',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.2rem'
          }}>
            BC
          </div>
          <div>
            <div style={{
              fontSize: '1.1rem',
              fontWeight: '700',
              color: '#2d3748'
            }}>
              Branch Connect
            </div>
            <div style={{
              fontSize: '0.9rem',
              color: '#718096'
            }}>
              Connecting India
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '15px'
        }}>
          {/* WhatsApp Button */}
          <div style={{
            width: '60px',
            height: '60px',
            backgroundColor: '#25d366',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 8px 20px rgba(37, 211, 102, 0.3)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = '0 12px 25px rgba(37, 211, 102, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(37, 211, 102, 0.3)';
          }}>
            <MessageCircle size={28} color="white" />
          </div>

          
        </div>
      </div>
    </div>
  );
}

