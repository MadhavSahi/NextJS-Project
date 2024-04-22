"use client"

type Props = {};

const SubmitButton = (props: Props) => {
  return (
    <>
      <button
        onClick={(e) => {
          console.log("hiii");
        }}
        type="button"
        className="mt-10 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      >
        Sign in
      </button>
    </>
  );
};

export default SubmitButton;
