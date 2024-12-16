export default function CalculatedValues(props){
    const {calculatedValues} = props;

    return <div className="calculated-values">
        <ul>
            {calculatedValues && calculatedValues.map((value) => <li key={value.key}>For Index {value.key} | calculated {value.value}</li>)}
        </ul>
    </div>
}