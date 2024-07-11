interface MaxWidthContainerProps {
    children?: React.ReactNode;
    className?: string;
    id?: string;
}

const MaxWidthContainer: React.FC<MaxWidthContainerProps> = ({
    children,
    className,
    id,
}) => {
    return (
        <div
            id={id}
            className={`max-w-[1400px] mx-auto px-4 relative ${className} `}
        >
            {children}
        </div>
    );
};

export default MaxWidthContainer;
