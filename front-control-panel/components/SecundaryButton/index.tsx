interface ButtonProps {
    text: string;
}

export function SecundaryButton({ text } : ButtonProps) {
    return (
        <button className="px-4 py-1 rounded text-base" style={{color: "#F36246", backgroundColor: "white", border: "1px #F36246 solid"}}>
            {text}
        </button>
        
    );
}