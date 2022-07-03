import React from 'react'
import { Link } from 'react-router-dom'
import { ContainerStyles } from '../../styles/Container';
import Card from '../../components/Card';
import Button from '../../components/Button';

const Sites = () => {
    return (
        <ContainerStyles>
            <Card>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h1>Sites</h1>
                    <Link to="/sites/new">
                        <Button type="primary">Add Site</Button>
                    </Link>
                </div>
            </Card>
        </ContainerStyles>
    )
}

export default Sites;