import { useState } from "react";

export default function StudentProfile() {
  const [showMore, setShowMore] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [studentData, setStudentData] = useState({
    name: "Rahul Kumar",
    location: "Patna, Bihar, India",
    school: "Delhi Public School - Patna",
    grade: "Class 10th",
    olympiads: 5,
    certificates: 12,
    rank: 3,
    profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
    subjects: [
      { name: "Math", grade: "A+" },
      { name: "Science", grade: "A" },
      { name: "English", grade: "A" },
      { name: "Social Studies", grade: "A" },
      { name: "Computer", grade: "A+" },
    ],
  });

  const [formData, setFormData] = useState({ ...studentData });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profileImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setStudentData({ ...formData });
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  const handleCancel = () => {
    setFormData({ ...studentData });
    setIsEditing(false);
  };

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "1rem" }}>
      {/* Profile Card */}
      <div
        style={{
          position: "relative",
          backgroundColor: "#fff",
          borderRadius: "1.5rem",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          padding: "2rem",
          paddingTop: "5rem",
        }}
      >
        {/* Profile Image */}
        <div
          style={{
            position: "absolute",
            top: "-5rem",
            left: "50%",
            transform: "translateX(-50%)",
            width: "10rem",
            height: "10rem",
            borderRadius: "50%",
            overflow: "hidden",
            border: "0.5rem solid #fff",
            boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
          }}
        >
          <img
            src={isEditing ? formData.profileImage : studentData.profileImage}
            alt={studentData.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          {isEditing && (
            <label
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <span style={{ color: "#fff", fontSize: "2rem" }}>📷</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
            </label>
          )}
        </div>

        {/* Edit Buttons */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "2rem" }}>
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#ec4899",
                fontWeight: 500,
                cursor: "pointer",
                border: "none",
                background: "none",
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>✏️</span> Edit Profile
            </button>
          ) : (
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button
                onClick={handleCancel}
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#d1d5db",
                  color: "#374151",
                  borderRadius: "0.5rem",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#ec4899",
                  color: "#fff",
                  borderRadius: "0.5rem",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Save
              </button>
            </div>
          )}
        </div>

        {/* Basic Info */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          {isEditing ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px", margin: "0 auto" }}>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Name"
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #d1d5db",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              />
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="Location"
                style={{ width: "100%", padding: "0.5rem", borderRadius: "0.5rem", border: "1px solid #d1d5db", textAlign: "center" }}
              />
              <input
                type="text"
                value={formData.grade}
                onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                placeholder="Class/Grade"
                style={{ width: "100%", padding: "0.5rem", borderRadius: "0.5rem", border: "1px solid #d1d5db", textAlign: "center" }}
              />
              <input
                type="text"
                value={formData.school}
                onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                placeholder="School Name"
                style={{ width: "100%", padding: "0.5rem", borderRadius: "0.5rem", border: "1px solid #d1d5db", textAlign: "center" }}
              />
            </div>
          ) : (
            <>
              <h1 style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#1f2937" }}>{studentData.name}</h1>
              <p style={{ color: "#6b7280" }}>{studentData.location}</p>
              <p style={{ color: "#4b5563" }}>{studentData.grade} | {studentData.school}</p>
            </>
          )}
        </div>

        {/* Stats */}
        <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "2rem" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{studentData.olympiads}</p>
            <p style={{ color: "#6b7280" }}>Olympiads</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{studentData.certificates}</p>
            <p style={{ color: "#6b7280" }}>Certificates</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{studentData.rank}</p>
            <p style={{ color: "#6b7280" }}>State Rank</p>
          </div>
        </div>

        {/* Show More */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
          <button
            onClick={() => setShowMore(!showMore)}
            style={{
              padding: "0.5rem 2rem",
              borderRadius: "9999px",
              backgroundColor: "#ec4899",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>

        {/* Additional Info: Subjects */}
        {showMore && (
          <div>
            <h3 style={{ fontWeight: "bold", marginBottom: "1rem" }}>Subjects & Grades</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              {studentData.subjects.map((sub, index) => (
                <div
                  key={index}
                  style={{
                    flex: "1 1 calc(33% - 1rem)",
                    backgroundColor: "#f3f4f6",
                    padding: "0.5rem",
                    borderRadius: "0.5rem",
                    textAlign: "center",
                  }}
                >
                  <p style={{ fontWeight: "bold" }}>{sub.name}</p>
                  <p>{sub.grade}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
