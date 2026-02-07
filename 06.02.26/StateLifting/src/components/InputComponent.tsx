export default function InputComponent({ setValue }: {setValue: (value: number) => void}) {
    return (
        <input 
            className="bg-amber-600"
            type="number" 
            placeholder="0"
            onChange={(event) => setValue(parseInt(event.target.value) || 0)}
        />
  );
}
