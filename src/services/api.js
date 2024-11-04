import axios from 'axios';

const API_BASE_URL = 'https://demo.ix.cimsoweb.com';

const headers = {
  Authorization: JSON.stringify({
    "Client Login ID": "CiMSO.dev",
    "Client Password": "CiMSO.dev",
    "hg_pass": "nGXUF1i^57I^ao^o",
  }),
  'Content-Type': 'application/json',
};

export const getUnitTypes = async () => {
  const response = await axios.post(
    `${API_BASE_URL}/unit_type_info_request`,
    { hg_code: "demo", payload: {} },
    { headers }
  );
  return response.data.payload["Unit Types"];
};

export const getBookingUnits = async () => {
  const response = await axios.post(
    `${API_BASE_URL}/get_booking_units_request`,
    { hg_code: "demo", payload: {} },
    { headers }
  );
  return response.data.payload["Booking Units"];
};
