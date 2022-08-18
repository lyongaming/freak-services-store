import React from "react";
import { useFetch } from "../../../hooks";

export const Services = () => {

    const { data, error } = useFetch("http://localhost:8080/services");
    
    let services = data;
    services = services ? services : [];

    if(error) {
        alert(error);
    }

    return (
        <datalist id="services">
            {
                services.map(service => (
                    <option key={ service.service_id } value={ service.service_name } ></option>
                ))
            }
        </datalist>
    );
};
