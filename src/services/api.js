import axios from 'axios';

const API_BASE_URL = '/api';

const headers = {
  Authorization: JSON.stringify({
    "Client Login ID": "CiMSO.dev",
    "Client Password": "CiMSO.dev",
    "hg_pass": "nGXUF1i^57I^ao^o",
  }),
  'Content-Type': 'application/json',
};

export const getUnitTypeInfoRequest = async () => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/unit_type_info_request`, 
      { hg_code: "demo", payload: {} },
       { headers });
    return response.data.payload["Unit Types"];
  } catch (error) {
    throw new Error("Failed to fetch unit types");
  }
};


export const getBookingUnitsRequest = async () => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/get_booking_units_request`,
      { hg_code: "demo", payload: {} },
      { headers }
    );
    return response.data.payload["Booking Units"];
  } catch (error) {
    console.error("Error fetching booking units:", error);
    throw new Error("Failed to fetch booking units");
  }
};

export const getUnitTypeImage = async (objectUniqueId) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/binary_object_request`,
      { hg_code: "demo", payload: { "Object Unique ID": objectUniqueId } },
      { headers }
    );
    return response.data.payload; 
  } catch (error) {
    console.error("Error fetching unit type image:", error);
    throw new Error("Failed to fetch unit type image");
  }
};



