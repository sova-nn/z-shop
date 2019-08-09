import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './product.css';
import img from '../../../../img/inst.png';

export default function Product() {
    return(
        <div>
            <Card className='product' bg="info" text="white">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Ключница</Card.Title>
                    <Card.Text>
                        Ключница вай хорошая, налетай!
                    </Card.Text>
                    <Button variant="secondary">Подробнее</Button>
                    <Button variant="primary">Купить</Button>
                </Card.Body>
            </Card>
        </div>
    );
}