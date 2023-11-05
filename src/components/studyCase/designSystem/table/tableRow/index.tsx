type Props = {
  heading: string;
  desktop: string;
  mobile: string;
  index: number;
};

const TableRow = ({ heading, desktop, mobile, index }: Props) => {
  return (
    <div
      className="grid grid-cols-4 border-b-[1px] border-gray pb-5"
      key={index}
    >
      <div className="flex justify-start col-span-2 pl-10">
        <div className="w-[25%] flex flex-col gap-[-5px] items-center ">
          <span className="text-text text-white uppercase leading-[80%]">
            {heading.split(" ")[0]}
          </span>
          <span className="uppercase text-xsm text-gray">
            ({heading.split(" ")[1]})
          </span>
        </div>
      </div>
      <div className="col-span-1 ">
        <span className="text-center uppercase text-xsm text-gray ">
          {desktop}
        </span>
      </div>
      <div className="col-span-1">
        <span className="text-center uppercase text-xsm text-gray ">
          {mobile}
        </span>
      </div>
    </div>
  );
};

export default TableRow;
