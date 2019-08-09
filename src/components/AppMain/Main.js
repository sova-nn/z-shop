import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './main.css';
import CatalogMenu from "./CatalogMenu/CatalogMenu";
import CatalogArea from "./CatalogArea/CatalogArea";

export default function Main() {
    return(
        <Container fluid={true} className='main-container'>
            <Row>
                <Col xs={2}>
                    <CatalogMenu/>
                </Col>
                <Col>
                    <CatalogArea/>
                </Col>
            </Row>

        </Container>
    );
}