import axiosInstance from "./axiosInstance";

export const studentRegistration = async (formData) => {
  return axiosInstance.post("/student/registration", formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const studentLogin = (credentials) => {
  return axiosInstance.post("/student/login", credentials);
};

export const studentLogout = () => {
  return axiosInstance.get("/student/logout");
};
