export default function ResultComponent({ displayValue } : { displayValue: number | string}) {
    return (
        <>
            <h2 className="text-yellow-400 font-bold text-2xl mt-35">{displayValue}</h2>
        </>
    );
};
