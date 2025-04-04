import { getInTouch } from "../../editable-stuff/config";

const GetInTouch = () => {
  const { heading, message, email } = getInTouch;

  return (
    <>
      <div className="py-8 ">
        <h2 className="text-4xl font-bold pb-3 text-center text-gray-800">
          {heading}
        </h2>
        <p className="text-lg text-center pb-3 text-gray-600">
          {message}{" "}
          <a
            className="text-blue-600 underline hover:text-blue-800 transition"
            href={`mailto:${email}`}
          >
            {email}
          </a>
          .
        </p>
        <div className="flex justify-center">
          <a
            href={`mailto:${email}`}
            className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
