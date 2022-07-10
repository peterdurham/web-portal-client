import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { ContainerStyles } from '../../styles/Container';
import Card from '../../components/Card';
import Button from '../../components/Button';

const Sites = () => {
    const [sites, setSites] = useState({ data: [], isLoaded: false });

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, []);

    async function fetchData() {
        const response = await axios.get("/api/sites");
        setSites({ data: response.data, isLoaded: true });
    }

    if (!sites.isLoaded) return <div></div>

    return (
        <ContainerStyles>
            <Card>
                <SitesHeaderStyles>
                    <h1>Sites</h1>
                    <Link to="/sites/new">
                        <Button type="primary">Add Site</Button>
                    </Link>
                </SitesHeaderStyles>
                <SitesListStyles>
                    {sites.data.map((site) => <Link to={`/site/${site._id}`} key={site._id}><div className="site" >
                        <div className="site-image"></div>
                        <div className="site-title">
                            <h3>{site.name}</h3>
                            <span className="text-light">{site.siteURL}</span>
                        </div>
                        <div className="site-owner">
                            <p className="text-dark">Owned by: {site.user}</p>
                            <span className="text-light">Status: {site.status}</span>
                        </div>
                        <div className="site-arrow">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>
                        </div>

                    </div></Link>)}
                </SitesListStyles>
            </Card>
        </ContainerStyles>
    )
}

const SitesHeaderStyles = styled.header`
display flex;
justify-content: space-between;
align-items: center;
height: 88px;
padding: 0 24px;
`

const SitesListStyles = styled.div`
& a { text-decoration: none; }
& .site:nth-child(even) { background: #fbfbfb; }

& .site { 
    padding: 0 24px;
    height: 88px;
    display: flex;
    align-items: center;
    width: 100%;
    cursor: pointer;

    &-image { width: 10%; height: 60px; background: lightgrey; border-radius: 6px; }
    &-title {
        width: 40%;
        padding-left: 24px;
    }
    &-owner {
        width: 40%;
    }
    &-arrow {
        width: 10%;
        text-align: right;

        & svg {
            font-size: 20px;
            color: #676C6F;
        }
    }

    &:hover { background-color: #f8f8f8; }
    &:hover svg { color: #34383C; }
}
`

export default Sites;