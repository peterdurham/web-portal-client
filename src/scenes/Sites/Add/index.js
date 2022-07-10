import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ContainerStyles } from '../../../styles/Container';
import Card from '../../../components/Card';
import Button from '../../../components/Button';
import TextField from '../../../components/TextField';
import Select from '../../../components/Select';
import Table from '../../../components/Table';

const selectOptions = [
    { label: 'New Project', value: 'new' },
    { label: 'Planned', value: 'planned' },
    { label: 'In Progress', value: 'in-progress' },
    { label: 'Under Review', value: 'review' },
    { label: 'Site is Live', value: 'site-live' },
]

const AddSiteStyles = styled.div`
width: 680px;
margin: 0 auto;
padding: 24px;
h2 { border-bottom: 1px solid #e8ebed; padding-bottom: 10px; margin-bottom: 30px; }
`

const FormStyles = styled.form`
// & input, & select { margin-bottom: 20px; }
display:flex;
flex-direction: column;

& button {
    align-self: flex-start;
    margin-top: 30px;
}
`

const AddSite = () => {
    const navigate = useNavigate()
    const [state, setState] = useState({
        name: '',
        description: '',
        status: 'new',
        siteURL: '',
        codeRepositoryURL: '',
        domainHostingURL: '',
        siteHostingURL: '',
    })

    const handleChange = (field, e) => {
        setState({...state, [field]: e.target.value})
    }

    const tableData = [
        { label: 'Name', key: 'name', content: <TextField onChange={(e) => handleChange('name', e)} /> },
        { label: 'Description', key: 'description', content: <TextField onChange={(e) => handleChange('description', e)}/> },
        { label: 'Status', key: 'status', content: <Select options={selectOptions} onChange={(e) => setState({...state, status: e.target.value})} /> },
        { label: 'Site URL', key: 'siteURL', content: <TextField placeholder="https://" onChange={(e) => handleChange('siteURL', e)}/> },
        { label: 'Github URL', key: 'codeRepositoryURL', content: <TextField placeholder="https://github.com/username/repo" onChange={(e) => handleChange('codeRepositoryURL', e)} /> },
        { label: 'Domain Host', key: 'domainHostingURL', content: <TextField onChange={(e) => handleChange('domainHostingURL', e)} /> },
        { label: 'Web Host', key: 'siteHostingURL', content: <TextField onChange={(e) => handleChange('siteHostingURL', e)} /> },
    ]

    const handleSubmit = async (e) => {
        e.preventDefault();
        const siteData = {
            name: state.name,
            description: state.description,
            status: state.status,
            siteURL: state.siteURL,
            codeRepositoryURL: state.codeRepositoryURL,
            domainHostingURL: state.domainHostingURL,
            siteHostingURL: state.siteHostingURL,
        };

        try {
            const response = await axios.post("/api/sites", siteData);
            navigate("/sites")
            // setErrors({});
            // setMessage("");
            // fetchData();
        } catch (e) {
            // setErrors(e.response.data);
        }
    };

    return (
        <ContainerStyles>
            <Card>
                <AddSiteStyles>
                    <h2 style={{ marginBottom: '20px' }}>Add New Site</h2>
                    {/* <Link to="/sites">
                        <Button type="primary">arrow Back to Sites</Button>
                    </Link> */}
                    <FormStyles onSubmit={handleSubmit}>
                        <Table data={tableData} />
                        <Button type="primary">Submit</Button>
                    </FormStyles>
                </AddSiteStyles>
            </Card>
        </ContainerStyles>
    )
}

export default AddSite;