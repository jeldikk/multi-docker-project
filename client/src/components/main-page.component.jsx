import React, {useEffect, useState} from 'react'
import axios from 'axios'
import SeenIndexes from './seen-indexes.component';
import CalculatedValues from './calculated-values.component';

export default function MainPageComponent(){
    const [values, setValues] = useState({});
    const [seenIndexes, setSeenIndexes] = useState([]);
    const [index, setIndex] = useState('');

    async function fetchValues(){
        const values = await axios.get('/api/values/current');
        return values.data;
    };

    async function fetchIndexes(){
        const seenIndexes = await axios.get("/api/values/all");
        return seenIndexes.data
    }

    async function onInputChange(event){
        const index = event.target.value;
        console.log({index})
        setIndex(index);
    }

    async function onFormSubmit(event){
        event.preventDefault();

        await axios.post('/api/values', {
            index: index
        })
    }

    useEffect(() => {

        async function aggregateData(){
            const values = await fetchValues();
            // setValues(values)
            const indexes = await fetchIndexes();
            // setSeenIndexes(indexes)
            return {values, indexes}
        };

        aggregateData()
        .then((data) => {
            setValues(data.values);
            setSeenIndexes(data.indexes)
        });

    }, [])

    return <div className='main-page-component'>
        <form onSubmit={onFormSubmit}>
            <label>Enter your index : </label>
            <input value={index} onChange={onInputChange}/>
            <button type='submit'>Submit</button>
        </form>

        <h3>Index I have seen :</h3>
        <SeenIndexes seenIndexes={seenIndexes} />
        <h3>Calculated Values: </h3>
        <CalculatedValues calcualtedValues={values} />
    </div>
}