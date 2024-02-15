import axios from 'axios';

const SERVER_URL = 'http://localhost:8080'; // Adjust the server URL as per your setup

export const login=async(em, pass)=> {
  try {
    const response = await axios.post(`${SERVER_URL}/users/login?em=${em}&pass=${pass}`);
    console.log(response)
    return response
  } catch (error) {
    console.log('Error in logging', error);
    throw error;
  }
}

export async function addUserDetails(userDetails) {
  try {
    const response = await axios.post(`${SERVER_URL}/users/register`, userDetails);
    console.log('User details added successfully:', response.data);
    // Handle the response as needed
    return response.data;
  } catch (error) {
    console.error('Error adding user details:', error);
    throw error;
  }
};

export async function addVehicledetails(vehicleDetails) {

  try {
    const response = await axios.post(`${SERVER_URL}/vehicleRegistration/vehReg/`, vehicleDetails);
    console.log('Vehicle Details Added Successfully : ', response.data);
    return response.data;
  } catch (error) {
    console.error('Error adding vehicle details:', error);
    throw error;
  }

};
