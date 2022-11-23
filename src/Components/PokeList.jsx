import React from 'react';
import Card from './Card';
import "./PokeList.css"
const PokeList = () => {
    return (
        <div className='row'>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    );
};

export default PokeList;