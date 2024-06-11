

const Tags = ({ text }: { text: string}) => {
  return (
    <p className='px-4 py-1 border inline-block rounded-full text-[12px] opacity-60'>
      {text}
    </p>
  );
};

export default Tags;
