interface FooterProps {
    text: string;
}

export function Footer({ text } : FooterProps) {
    return (
        <footer className="px-6 py-2 rounded text-white text-xl" style={{backgroundColor: "#F36246"}}>
            {text}
        </footer>
    );
}