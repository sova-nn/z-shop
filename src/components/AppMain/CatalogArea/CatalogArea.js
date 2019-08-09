import React from 'react';
import './catalog-area.css';
import { Container, Col, Row } from 'react-bootstrap';
import Product from "./Product/Product";

export default function CatalogArea() {
    return(
        <div className='catalog-area'>
            <Container>
                <Row>
                    <Col>
                        <Product/>
                    </Col>
                    <Col>
                        <Product/>
                    </Col>
                    <Col>
                        <Product/>
                    </Col>
                    <Col>
                        <Product/>
                    </Col>
                    <Col>
                        <Product/>
                    </Col>
                    <Col>
                        <Product/>
                    </Col>
                    <Col>
                        <Product/>
                    </Col>
                    <Col>
                        <Product/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}