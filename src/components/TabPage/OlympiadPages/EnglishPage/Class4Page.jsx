import React from 'react';

const Class4Page = () => {
  const containerMargin = { marginLeft: '10rem', marginRight: '10rem' };
  const buttonStyle = {
    backgroundColor: 'transparent',
    color: '#007bff',
    border: '2px solid #007bff',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '999px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
  };
  const buttonHoverStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    boxShadow: '0 6px 12px rgba(0, 123, 255, 0.4)',
  };

  return (
    <div
      style={{
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
        margin: 0,
        padding: 0,
        lineHeight: 1.4,
        backgroundColor: 'white',
      }}
    >
      {/* Header */}
      <div style={{ backgroundColor: '#ffdd57', padding: '20px 60px', display: 'flex', alignItems: 'center' }}>
        <div>
          <h1 style={containerMargin}>English International Olympiad Class 4</h1>
          <p style={{ fontSize: 16, fontWeight: 600, color: '#333', textAlign: 'justify', ...containerMargin }}>
            Students of class 4 have a prior knowledge of English subject that is
            gained from their lower classes. With conceptual growth, students add
            to their existing knowledge, and with conceptual change, students
            correct misconceptions or errors in existing knowledge...
          </p>
        </div>
      </div>

      {/* Syllabus */}
      <div style={{ padding: '0px 60px', background: '#ffffff', textAlign: 'justify', fontWeight: 500, ...containerMargin }}>
        <h1>Preparation Material for English Olympiad Class 4</h1>
        <h2>English Olympiad Syllabus Class 4</h2>
        <p>
          The syllabus for class 4 English Olympiad is mapped to the ICSE, CBSE,
          and State boards. They build up on the same concepts that are taught in
          the previous classes...
        </p>
        <p>
          The exercises that are part of class 4 English Olympiads aim to provide
          maximum practice to all participants...
        </p>
        <ul style={{ fontSize: 18, color: '#333', marginTop: 15, listStyleType: 'none' }}>
          <li>Chapter 1: Word Power</li>
          <li>Chapter 2: Synonyms and Antonyms</li>
          <li>Chapter 3: Nouns and Pronouns</li>
          <li>Chapter 4: Verbs and Tenses</li>
          <li>Chapter 5: Adverbs and Adjectives</li>
          <li>Chapter 6: Prepositions and Conjunctions</li>
          <li>Chapter 7: Punctuations and Contractions</li>
          <li>Chapter 8: Question Formation</li>
          <li>Chapter 9: Sentence Formation</li>
          <li>Chapter 10: Composition</li>
          <li>Chapter 11: Comprehension</li>
          <li>Chapter 12: Express Yourself</li>
          <li>Chapter 13: Punctuations and Contractions</li>
          <li>Chapter 14: Logical Reasoning</li>
        </ul>
      </div>

      {/* Book Section */}
      <div style={{ backgroundColor: '#ffdd57', padding: '20px 100px', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {[
          {
            title: 'English Olympiad Workbook',
            img: 'https://d21jfbz7ftz185.cloudfront.net/uploads/files/EIO-English-Olympiad-Workbook-Class-4.webp',
          },
          {
            title: 'English Olympiad PYQ',
            img: 'https://d21jfbz7ftz185.cloudfront.net/uploads/files/EIO%20English%20Olympiad%20Previous%20Year%20Question%20Paper%20Class%204.webp',
          },
        ].map((item, index) => (
          <div key={index} style={{ textAlign: 'center', margin: '0 20px' }}>
            <h2>{item.title}</h2>
            <img
              src={item.img}
              alt={item.title}
              style={{
                maxWidth: '280px',
                height: 'auto',
                display: 'block',
                margin: '10px auto',
                boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.5)',
              }}
            />
            <button
              style={buttonStyle}
              onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyle)}
              onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
            >
              BUY NOW
            </button>
          </div>
        ))}
      </div>

      {/* Annual Olympiad Section */}
      <div style={{ padding: '0px 60px', background: '#ffffff', textAlign: 'justify', fontWeight: 500, ...containerMargin }}>
        <h1>Class 4 English Annual Olympiad and Monthly Olympiad</h1>
        <h2>English Annual Olympiad Class 4</h2>
        <p>
          To participate in the annual Olympiads, individual students apart from
          school registrations are welcome...
        </p>
        <p>
          The online tests teach students to maintain their calm during the exam...
        </p>
      </div>

      {/* Register Button */}
      <div style={{ backgroundColor: '#ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button
          style={buttonStyle}
          onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyle)}
          onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
        >
          Register now
        </button>
      </div>

      {/* Monthly Olympiad Section */}
      <div style={{ padding: '0px 60px', background: '#ffffff', textAlign: 'justify', fontWeight: 500, ...containerMargin }}>
        <h2>English Monthly Olympiads Class 4</h2>
        <p>
          The monthly tests for students of class 4 are conducted by Minds Marathon...
        </p>
        <p>
          Apart from English students can also participate in the power pack exams...
        </p>
        <p>
          The monthly online tests make use of statistics to determine one’s progress...
        </p>
      </div>
    </div>
  );
};

export default Class4Page;
