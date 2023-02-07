interface ValueProps {
    value: Number;
    handleValue: (e: any) => void;
    handleEnterPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default ValueProps;