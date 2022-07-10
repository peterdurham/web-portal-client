import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import styled from 'styled-components'
import { ContainerStyles } from '../../../styles/Container';
import Card from '../../../components/Card';
import Table from '../../../components/Table';
import Button from '../../../components/Button';
import Chip from '../../../components/Chip';
import TextField from '../../../components/TextField';
import Select from '../../../components/Select';

const SiteDetailsStyles = styled.div`
padding: 24px;
width: 680px;
margin: 0 auto;

h2 { border-bottom: 1px solid #e8ebed; padding-bottom: 10px; margin-bottom: 30px; }
button { margin-top: 40px; margin-right: 16px; }
`

const SiteDetails = () => {
    const { id } = useParams()
    const [site, setSite] = useState({ data: {}, isLoaded: false });
    const [isEditing, setIsEditing] = useState(false);

    const [state, setState] = useState({
        name: '',
        description: '',
        status: '',
        siteURL: '',
        codeRepositoryURL: '',
        domainHostingURL: '',
        siteHostingURL: '',
    })

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, []);

    const fetchData = async () => {
        const response = await axios.get(`/api/sites/${id}`);
        setSite({ data: response.data, isLoaded: true });
        const {
            name,
            description,
            status,
            siteURL,
            codeRepositoryURL,
            domainHostingURL,
            siteHostingURL
        } = response.data
        setState({
            ...state,
            name,
            description,
            status,
            siteURL,
            codeRepositoryURL,
            domainHostingURL,
            siteHostingURL
        })
    }

    const handleChange = (field, e) => {
        setState({ ...state, [field]: e.target.value })
    }

    const handleSubmit = (e) => {
        console.log('handleSubmit called')
    }

    if (!site.isLoaded) return <div></div>


    const viewTableData = [
        { label: 'Name:', key: 'name', content: <div>{site.data.name}</div> },
        { label: 'Description:', key: 'description', content: <div>{site.data.description}</div> },
        { label: 'Status:', key: 'status', content: <Chip text="In Progress" type="warn" /> },
        { label: 'Site URL:', key: 'siteURL', content: <div>{site.data.siteURL}</div> },
        { label: 'Github URL:', key: 'codeRepositoryURL', content: <div>{site.data.codeRepositoryURL}</div> },
        { label: 'Domain Host:', key: 'domainHostingURL', content: <div>{site.data.domainHostingURL}</div> },
        { label: 'Web Host:', key: 'siteHostingURL', content: <div>{site.data.siteHostingURL}</div> },
    ]

    const selectOptions = [
        { label: 'New Project', value: 'new' },
        { label: 'Planned', value: 'planned' },
        { label: 'In Progress', value: 'in-progress' },
        { label: 'Under Review', value: 'review' },
        { label: 'Site is Live', value: 'site-live' },
    ]

    const editTableData = [
        { label: 'Name', key: 'name', content: <TextField value={state.name} onChange={(e) => handleChange('name', e)} /> },
        { label: 'Description', key: 'description', content: <TextField value={state.description} onChange={(e) => handleChange('description', e)} /> },
        { label: 'Status', key: 'status', content: <Select options={selectOptions} onChange={(e) => setState({ ...state, status: e.target.value })} /> },
        { label: 'Site URL', key: 'siteURL', content: <TextField placeholder="https://" value={state.siteURL} onChange={(e) => handleChange('siteURL', e)} /> },
        { label: 'Github URL', key: 'codeRepositoryURL', content: <TextField value={state.codeRepositoryURL} placeholder="https://github.com/username/repo" onChange={(e) => handleChange('codeRepositoryURL', e)} /> },
        { label: 'Domain Host', key: 'domainHostingURL', content: <TextField value={state.domainHostingURL} onChange={(e) => handleChange('domainHostingURL', e)} /> },
        { label: 'Web Host', key: 'siteHostingURL', content: <TextField value={state.siteHostingURL} onChange={(e) => handleChange('siteHostingURL', e)} /> },
    ]

    return (
        <ContainerStyles>
            <Card>
                <SiteDetailsStyles>
                    <h2>Site Details</h2>
                    <Table data={isEditing ? editTableData : viewTableData} />
                    {isEditing && <Button type="primary" onClick={handleSubmit}>Submit Changes</Button>}
                    <Button onClick={() => setIsEditing(!isEditing)}>
                        {isEditing ? 'Cancel' : 'Edit'}
                    </Button>
                </SiteDetailsStyles>
            </Card>
        </ContainerStyles>
    )
}

export default SiteDetails;