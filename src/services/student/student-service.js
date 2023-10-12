import axios from "axios";
import { serviceUtils } from "../../utils/service-utils";
import { toast } from "react-hot-toast";

export const addStudentService = (data) => {
    const apiUrl = serviceUtils.getApiUrl();

    axios.post(`http://localhost:9000/senetude-api-v1/users`, data)
    .then(response => {
    
        const { status, message } = response.data;

        if(status === 200)
            toast.success("L'étudiant a été créé avec succés !");
        else
            toast.error(message);

    })
    .catch(error => {
        if(error.response.status === 500)
            toast.error("Une erreur est survenue lors de la création de l'étudiant.");
        
        console.error(error);
    })
}
