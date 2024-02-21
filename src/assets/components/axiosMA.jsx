import axios from 'axios';
import MyResult from './DashBoard/MyResult';


const SERVER_URL = 'http://localhost:8080'; // Adjust the server URL as per your setup

export const login = async (em, pass) => {
  try {
    const response = await axios.post(`${SERVER_URL}/users/login?em=${em}&pass=${pass}`);
    return response
  } catch (error) {
    console.log('Error in logging', error);
    throw error;
  }
}

export const allDetails = async () => {
  try {
    const response = await axios.get(`${SERVER_URL}/admin/licenselist`);
    // console.log(response);
    return response;

  } catch (error) {
    console.log("Error in fetching details", error);
    throw error;
  }

}

export const allVehRegister = async () => {
  try {
    const response = await axios.get(`${SERVER_URL}/admin/vehiclereglist`);
    console.log(response);
    return response;

  } catch (error) {
    console.log("Error in fetching details", error);
    throw error;
  }

}


export async function addUserDetails(userDetails) {
  try {
    const response = await axios.post(`${SERVER_URL}/users/register`, userDetails);
    // console.log('User details added successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error adding user details:', error);
    throw error;
  }
};


export async function getUserDetails() {
  try {
    const response = await axios.get(`${SERVER_URL}/users/home/personalDetails/${sessionStorage.getItem("id")}`);
    console.log(response);
    return response;
  }
  catch (error) {
    console.log("Error in showing personal", error);
    throw error;
  }
}

export async function getAdminDetails() {
  try {
    const response = await axios.get(`${SERVER_URL}/admin/dashboard/personalDetails/${sessionStorage.getItem("id")}`)
    console.log(response.data)
    return response;
  }
  catch (error) {
    console.log("Error in showing personal", error);
    throw error;
  }
}
=======
export async function addPermanentAdd(permanentAdd) {
  try {
    const response = await axios.post(`${SERVER_URL}/address/permanent/${sessionStorage.getItem("id")}`, permanentAdd);
    // console.log('Permanent Address details added successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error adding Permanent Address details:', error);
    throw error;
  }
};


export async function addCorrespAdd(correspAdd) {
  try {
    const response = await axios.post(`${SERVER_URL}/address/corresponding/${sessionStorage.getItem("id")}`, correspAdd);
    // console.log('Corresponding Address details added successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error adding Corresponding Address details:', error);
    throw error;
  }
};


export async function applyForLearning(licenseDetails) {
  try {
    const response = await axios.post(`${SERVER_URL}/License/learning/${sessionStorage.getItem("id")}`, licenseDetails);
    console.log(response);
    return response.data;
  }
  catch (error) {
    console.log("Error in apply for learning", error);
    throw error;
  }
}

export async function applyForPermanent(licenseDetails) {
  try {
    const response = await axios.post(`${SERVER_URL}/License/permanent/${sessionStorage.getItem("id")}`, licenseDetails);
    console.log(response);
    return response.data;
  }
  catch (error) {
    console.log("Error in apply for Permanent", error);
    throw error;
  }
}

export async function approveLicense(licId) {
  try {
    const response = await axios.post(`${SERVER_URL}/admin/license/approve/${licId}`);
    // console.log(response);
    return response;
  } catch (error) {
    console.log(response);
    throw error;
  }
}

export async function rejectLicense(licId) {
  try {
    const response = await axios.post(`${SERVER_URL}/admin/license/reject/${licId}`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(response);
    throw error;
  }
}

export async function applyForExam() {
  try {
    const response = await axios.get(`${SERVER_URL}/exam/${sessionStorage.getItem("id")}`);
    console.log(response);
    return response;
  } catch (error) {
    console.log("Error in applying for exam ", error);
    throw error;
  }
}


export async function getExamQue() {
  try {
    const response = await axios.get(`${SERVER_URL}/exam/test`);
    console.log(response);
    return response;
  }
  catch (error) {
    console.error('Error adding vehicle details:', error);
    throw error;
  }
}


export async function addVehicledetails(vehicleDetails) {

  try {
    const response = await axios.post(`${SERVER_URL}/vehicalRegistration/vehReg/${sessionStorage.getItem("id")}`, vehicleDetails);
    console.log('Vehicle Details Added Successfully : ', response.data);
    return response.data;
  } catch (error) {
    console.error('Error adding vehicle details:', error);
    throw error;
  }

};

export async function setResultStatus(result) {
  try {
    console.log(result);
    const response = await axios.post(`${SERVER_URL}/exam/test/result/${sessionStorage.getItem("id")}/${result}`);
    console.log(response);
    return response;
  }
  catch (error) {
    console.error('Error adding vehicle details:', error);
    throw error;
  }
}

export async function getPermanentLicense() {
  try {
    const response = await axios.post(`${SERVER_URL}/License/licenseno/${sessionStorage.getItem('id')}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error adding vehicle details:', error);
    throw error;
  }
}

export async function addNewVehicledetails(vehicleDetails) {

  try {

    const response = await axios.post(`${SERVER_URL}/vehicalRegistration/renewReg/${sessionStorage.getItem("id")}`, vehicleDetails);
    console.log('Vehicle Details Added Successfully : ', response.data);
    return response.data;
  } catch (error) {
    console.error('Error adding vehicle details:', error);
    throw error;
  }

};


export async function LicenseRenew(licenseNo) {
  try {
    const response = await axios.post(`${SERVER_URL}/License/renewLicense/userId${sessionStorage.getItem("id")}`, licenseNo);
    console.log('Apply for License Renew  Successfully : ', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in Apply for renewing Licnese :', error);
    throw error;
  }
};    