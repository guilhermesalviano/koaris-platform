interface ButtonProps {
    text: string;
}

export function PrimaryButton({ text } : ButtonProps) {
    return (
        <button className="px-6 py-2 rounded text-white text-xl" style={{backgroundColor: "#F36246"}}>
            {text}
        </button>
        
    );
}