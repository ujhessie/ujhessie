interface MaxWidthContainerProps {
    children?: React.ReactNode;
    className?: string;
}

const MaxWidthContainer: React.FC<MaxWidthContainerProps> = ({
    children,
    className,
}) => {
    
    return (
        <div className={`max-w-[1400px] mx-auto px-4 relative ${className} `}>
            {children}
        </div>
    );
};

export default MaxWidthContainer;
