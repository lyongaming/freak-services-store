import React from "react";
import { useFetch } from "../../../hooks";

export const Services = () => {

    let { data: services, error } = useFetch("http://localhost:8080/services");

    if(error) {
        alert(error);
    }

    services = services ? services : [];

    return (
        <datalist id="services">
            {
                services.map(service => (
                    <option value={ service.service_name } ></option>
                ))
            }
        </datalist>
    );
};
