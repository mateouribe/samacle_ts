type Props = {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  required?: boolean;
  textarea?: boolean;
};

const Input = ({
  label,
  type,
  placeholder,
  name,
  required = false,
  textarea = false,
}: Props) => {
  return (
    <label className="flex flex-col justify-between gap-10 md:flex-row">
      <span className="text-sm text-black uppercase cursor-none">
        ({label})
      </span>
      {textarea ? (
        <textarea
          name={name}
          className="w-full md:w-[80%] border-[0.1px] border-lightGray bg-lightGray text-gray placeholder:text-sm placeholder:text-gray px-20 py-10 min-h-[200px] max-h-[300px] md:max-h-[500px] overflow-scroll focus-visible:outline-none focus-visible:border-main focus-visible:border-[1px]"
          placeholder={placeholder}
          required={required}
        />
      ) : (
        <input
          type={type}
          name={name}
          className="w-full md:w-[80%] border-[0.1px] border-lightGray bg-lightGray text-gray placeholder:text-sm placeholder:text-gray px-20 py-10 focus-visible:outline-none focus-visible:border-main focus-visible:border-[1px]"
          placeholder={placeholder}
          required={required}
        />
      )}
    </label>
  );
};

export default Input;
