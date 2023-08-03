import { useState, useEffect } from "react";
import axios from "axios";
import {baseURL} from "../../constants/urls";

const useFetch = (endpoint) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${baseURL}${endpoint}`);
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint]);

    return { data, loading };
};

export default useFetch;
