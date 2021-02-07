import React from "react";


/**
 * Homepage component
 */
const orderStatus = ({ paymentId }) => {
  return (
    <div className={"container text-center"}>
      <div className="flex flex-col items-center justify-center w-full h-screen text-center">
        <div className={'w-full lg:w-1/3 mx-auto'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className={"h-12 text-green-500 mx-auto mb-2"}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
    
    
            <p className={'font-bold'}>Bestelling voltooid! </p>

            <hr className={"my-4"} />

            <p >
              U ontvangt zo snel mogelijk van ons een bevestiging als de betaling is ontvangen, bij bezorging
              nemen wij contact met u op over het lever adres!
            </p>

            <a
                href="/"
              className={
                "block px-4 py-2 text-white bg-brown rounded-lg mt-4 duration-300 hover:bg-darkBrown"
              }
            >
              Ga terug naar de site
            </a>
          </div>
         
      </div>
    </div>
  );
};


export default orderStatus;
