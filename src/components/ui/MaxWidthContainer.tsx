interface MaxWidthContainerProps {
  children: React.ReactNode;
}

const MaxWidthContainer: React.FC<MaxWidthContainerProps> = ({ children }) => {
  return (
    <div className='max-w-[1400px] mx-auto px-5 relative '>
      {children}
    </div>
  );
};

export default MaxWidthContainer;
