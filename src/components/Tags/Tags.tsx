interface iTags {
  text?: string;
  className?: string;
}

const Tags: React.FC<iTags> = ({ text, className }) => {
  return (
    <p
      className={`px-4 py-1 border inline-block rounded-full text-[12px] opacity-60 ${className}`}
    >
      {text}
    </p>
  );
};

export default Tags;
