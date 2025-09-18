import axios from "axios";
/**
 * fetch 함수를 이용하여 데이터 가져오기
 */
export const fetchData = async(url) => {
    const response = await fetch(url);
    const jsonData = await response.json();
    
    return jsonData;
}



/**
 * axios 함수를 이용하여 데이터 가져오기
 */
export const axiosData = async(url) => {
    const response = await axios(url);
    
    return response.data;
}

