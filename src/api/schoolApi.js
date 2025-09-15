import axiosInstance from "./axiosInstance";

export const schoolRegistration = (formData) => {
  return axiosInstance.post("/school/registration", formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const schoolLogin = (credentials) => {
  return axiosInstance.post("/school/login", credentials);
};

export const schoolLogout = () => {
  return axiosInstance.get("/school/logout");
};



