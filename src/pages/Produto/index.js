import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { api } from "../../services/api";

function Produto(){

    const [prodName, setProdName] = useState({});

    const { params } = useRouteMatch();

  useEffect(() => {
    const fetchData = async () => {
        var response = api.get(`/produtos/nome?nome=${params?.prodName?.nome}`)
      setProdName(response.data);
      console.log(params);
    }

    fetchData();
  }, [])

    return(
        <div>PAGINA PRODUTO</div>
    )
}

export default Produto