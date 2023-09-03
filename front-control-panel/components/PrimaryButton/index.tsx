interface ButtonProps {
    text: string;
}

export function PrimaryButton({ text } : ButtonProps) {
    return (
        <button className="px-4 py-1 rounded text-white text-xl" style={{backgroundColor: "#F36246"}}>
            {text}
        </button>
        
    );
}