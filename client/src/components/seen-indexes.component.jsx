export default function SeenIndexes(props){
    const {seenIndexes} = props;
    return <div className="seen-indexes">
        {seenIndexes && seenIndexes.map((val, idx) => <span key={idx}>{val + ', '}</span>)}
    </div>
}