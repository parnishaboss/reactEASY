import React from 'react';
import './App.css';
import Accordion from './Components/Accordion/Accordion';
import {Rating} from './Components/Rating/Rating';

function  App() {
    return (
        <div>
            {/*<PageTitle title={'This is App Title'}/>*/}
            {/*<PageTitle title={'My friends'}/>*/}
            {/*Article 1*/}
            <Rating value ={0}/>
            <Rating value ={1}/>
            <Rating value ={2}/>
            <Rating value ={3}/>
            <Rating value ={4}/>
            <Rating value ={5}/>
            {/*<Accordion titleValue={'Меню 1'} collapsed={true}/>*/}
            {/*<Accordion titleValue={'Меню 2'} collapsed={false}/>*/}
            {/*Article 2*/}
        </div>
    );
}
type PageTitlePropsType = {
    title: string
}
function PageTitle (props:PageTitlePropsType) {
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
}

export default App;
