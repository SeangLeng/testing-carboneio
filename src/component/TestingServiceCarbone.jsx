import React, { useState } from 'react'
import carboneSDK from "carbone-sdk-js";

export default function TestingServiceCarbone() {
    // SDK constructor, the access token have to be passed as an argument to carboneRenderSDK

    const [template, setTemplate] = useState(null);

    const [data, setData] = useState({
        name: 'seangleng'
    });

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        setTemplate(formData);
    }
    const handlevalueChange = (e) => {
        setData(e.target.value);
    }

    const handleRender = () => {
        const _carboneService = carboneSDK("test_eyJhbGciOiJFUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI4MTEyNzY2NjI1Nzk5NTMyNDciLCJhdWQiOiJjYXJib25lIiwiZXhwIjoyMzY4NDI4MDg0LCJkYXRhIjp7InR5cGUiOiJ0ZXN0In19.AUj2rCBJgOZuvqAa_iRbdDQK9DK_1PW13XQpj93trW2K9mgt0T4IyI7ZxAP1J-ddJu6NnhT1FxXEFOuB8BmsVVxrAcc_BL-HJoMTgJMe-6uc9nxp6eWpbmpwNcYoRZxw9doQVx-7E8ySNZ7AzT0kqbfaUDU2IOAW0D3uoEVeG3zSGrk7");
        _carboneService.render(template, data).then(({ content, name }) => {
            name == "testing"
            content == "Testing file"
        });

    }


    return (
        <>
            <input type='text' onChange={handlevalueChange} />
            <input type='file' name='templates-update' onChange={handleFileUpload} />
            <button onClick={handleRender} >Render</button>
        </>
    );
}
