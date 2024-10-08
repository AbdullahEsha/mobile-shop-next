import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";
import { useRouter } from "next/navigation";

const products = [
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    image: "/images/product-img-1.png",
  },
  {
    _id: 2,
    name: "Product 2",
    price: 200,
    image: "/images/product-img-2.png",
  },
  {
    _id: 3,
    name: "Product 3",
    price: 300,
    image: "/images/product-img-3.png",
  },
  {
    _id: 4,
    name: "Product 4",
    price: 400,
    image: "/images/product-img-1.png",
  },
  {
    _id: 5,
    name: "Product 5",
    price: 500,
    image: "/images/product-img-2.png",
  },
  {
    _id: 6,
    name: "Product 6",
    price: 600,
    image: "/images/product-img-3.png",
  },
];

// import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import ProductSlider from "@/components/ProductSlider";
import toast from "react-hot-toast";
import SwiperSlider from "@/components/SwiperSlider";
import axios from "axios";
import { Button, Select, SelectItem } from "@nextui-org/react";

const Home = () => {
  const router = useRouter();

  // use api to get all cuntries and map them to select options, from https://restcountries.com/v3.1/all api
  // const [countries, setCountries] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    model: "iphone-14",
    color: "",
    storage: "",
    nationality: "",
    dob: "",
  });

  // console.log("order details", orderDetails);

  const countryList = [
    "Bangladesh",
    "India",
    "Pakistan",
    "Philippines",
    "Nepal",
    "Saudi Arabia",
    "Afghanistan",
    "Egypt",
    "Ghana",
    "Granada",
    "France",
    "Ehiopia",
    "Indonesia",
    "Iran",
    "Kenya",
    "Lebanon",
    "Morocco",
    "Palestine",
    "Yemen",
    "Uganda",
    "Sri Lanka",
    "Syria",
  ];

  const handleSubmit = () => {
    if (
      orderDetails.color &&
      orderDetails.model &&
      orderDetails.storage &&
      orderDetails.nationality &&
      orderDetails.dob
    ) {
      router.push({
        pathname: "/user-info",
        query: { ...orderDetails },
      });
    } else {
      toast.error("Please select all the options");
    }
  };

  return (
    <>
      <SwiperSlider />
      <div className="flex flex-col lg:flex-row gap-5 m-auto max-w-[1400px] px-7">
        <div className="flex-1 lg:w-1/2 mt-3">
          {/* e-commerce product view using SwiperSlide */}
          <ProductSlider products={products} />
        </div>
        <div className="flex-1 flex flex-col gap-3 lg:gap-5 lg:mt-5 items-start lg:items-start">
          <div className="w-full mb-2">
            <h4 className="font-semibold text-teal-800 text-center lg:text-start mb-2 lg:mb-4">
              Apple iPhones
            </h4>
            <h3 className="text-[#333] mb-0 transition ease-in delay-200 text-center lg:text-start">
              {orderDetails.model === "iphone-14"
                ? "iPhone 14"
                : orderDetails.model === "iphone-14-pro-max"
                ? "iPhone 14 Pro Max"
                : orderDetails.model === "iphone-15"
                ? "iphone 15"
                : "iphone 15 Pro Max"}
            </h3>
          </div>
          {/* <hr /> */}
          <div className="flex items-start gap-2">
            <p className="w-28">Model:</p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() =>
                  setOrderDetails({ ...orderDetails, model: "iphone-14" })
                }
                className={`px-5 py-2 border-[1px] font-[400] ${
                  orderDetails.model === "iphone-14"
                    ? "bg-teal-700 text-white hover:text-white"
                    : "border-gray-400"
                } hover:text-teal-800 transition-all duration-500 ease-in-out`}
              >
                iPhone 14
              </button>
              <button
                onClick={() =>
                  setOrderDetails({
                    ...orderDetails,
                    model: "iphone-14-pro-max",
                  })
                }
                className={`px-5 py-2 border-[1px] font-[400] ${
                  orderDetails.model === "iphone-14-pro-max"
                    ? "bg-teal-700 text-white hover:text-white"
                    : "border-gray-400"
                } hover:text-teal-800 transition-all duration-500 ease-in-out`}
              >
                iPhone 14 Pro Max
              </button>
              <button
                onClick={() =>
                  setOrderDetails({
                    ...orderDetails,
                    model: "iphone-15",
                  })
                }
                className={`px-5 py-2 border-[1px] font-[400] ${
                  orderDetails.model === "iphone-15"
                    ? "bg-teal-700 text-white hover:text-white"
                    : "border-gray-400"
                } hover:text-teal-800 transition-all duration-500 ease-in-out`}
              >
                iPhone 15
              </button>
              <button
                onClick={() =>
                  setOrderDetails({
                    ...orderDetails,
                    model: "iphone-15-pro-max",
                  })
                }
                className={`px-5 py-2 border-[1px] font-[400] ${
                  orderDetails.model === "iphone-15-pro-max"
                    ? "bg-teal-700 text-white hover:text-white"
                    : "border-gray-400"
                } hover:text-teal-800 transition-all duration-500 ease-in-out`}
              >
                iPhone 15 Pro Max
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <p className="lg:w-28">Color: </p>
            <button
              onClick={() =>
                setOrderDetails({ ...orderDetails, color: "#301934" })
              }
              className="h-12 w-12 rounded-full bg-[#301934] flex justify-center items-center"
            >
              <GiCheckMark
                size={20}
                color={`${
                  orderDetails.color === "#301934" ? "#fff" : "#301934"
                }`}
                className="transition ease-in delay-200"
              />
            </button>
            <button
              onClick={() =>
                setOrderDetails({ ...orderDetails, color: "#215E7C" })
              }
              className="h-12 w-12 rounded-full bg-[#215E7C] flex justify-center items-center"
            >
              <GiCheckMark
                size={20}
                color={`${
                  orderDetails.color === "#215E7C" ? "#fff" : "#215E7C"
                }`}
                className="transition ease-in delay-200"
              />
            </button>
            <button
              onClick={() =>
                setOrderDetails({ ...orderDetails, color: "#A50011" })
              }
              className="h-12 w-12 rounded-full bg-[#A50011] flex justify-center items-center"
            >
              <GiCheckMark
                size={20}
                color={`${
                  orderDetails.color === "#A50011" ? "#fff" : "#A50011"
                }`}
                className="transition ease-in delay-200"
              />
            </button>
            <button
              onClick={() =>
                setOrderDetails({ ...orderDetails, color: "#F9E5C9" })
              }
              className="h-12 w-12 rounded-full bg-[#F9E5C9] flex justify-center items-center"
            >
              <GiCheckMark
                size={20}
                color={`${
                  orderDetails.color === "#F9E5C9" ? "#fff" : "#F9E5C9"
                }`}
                className="transition ease-in delay-200"
              />
            </button>
            <button
              onClick={() =>
                setOrderDetails({ ...orderDetails, color: "#5C5B57" })
              }
              className="h-12 w-12 rounded-full bg-[#5C5B57] flex justify-center items-center"
            >
              <GiCheckMark
                size={20}
                color={`${
                  orderDetails.color === "#5C5B57" ? "#fff" : "#5C5B57"
                }`}
                className="transition ease-in delay-200"
              />
            </button>
          </div>
          <div className="flex gap-2 items-start">
            <p className="lg:w-28">Storage: </p>
            <div className="flex items-center flex-wrap gap-2">
              <button
                onClick={() =>
                  setOrderDetails({
                    ...orderDetails,
                    storage: "128GB",
                  })
                }
                className={`px-5 py-2 border-[1px] font-[400] ${
                  orderDetails.storage === "128GB"
                    ? "bg-teal-700 text-white hover:text-white"
                    : "border-gray-400"
                } hover:text-teal-800 transition-all duration-500 ease-in-out`}
              >
                128GB
              </button>
              <button
                onClick={() =>
                  setOrderDetails({
                    ...orderDetails,
                    storage: "256GB",
                  })
                }
                className={`px-5 py-2 border-[1px] font-[400] ${
                  orderDetails.storage === "256GB"
                    ? "bg-teal-700 text-white hover:text-white"
                    : "border-gray-400"
                } hover:text-teal-800 transition-all duration-500 ease-in-out`}
              >
                256GB
              </button>
              <button
                onClick={() =>
                  setOrderDetails({
                    ...orderDetails,
                    storage: "512GB",
                  })
                }
                className={`px-5 py-2 border-[1px] font-[400] ${
                  orderDetails.storage === "512GB"
                    ? "bg-teal-700 text-white hover:text-white"
                    : "border-gray-400"
                } hover:text-teal-800 transition-all duration-500 ease-in-out`}
              >
                512GB
              </button>
            </div>
          </div>
          <div className="flex gap-2 items-center w-full lg:w-auto">
            {/* date of birth */}
            <p className="w-[6.5rem] lg:w-28">Date Of Birth:</p>
            <input
              type="date"
              onChange={(event) =>
                setOrderDetails({
                  ...orderDetails,
                  dob: event.target.value,
                })
              }
              value={orderDetails.dob}
              className="px-5 py-3 flex-1 border-[1px] font-[400] border-gray-400 hover:border-teal-800 hover:text-teal-800 ease-linear delay-200 transition focus:outline-none"
            />
          </div>
          <div className="flex gap-2 items-center w-full lg:w-auto">
            <p className="w-24 lg:w-28">Nationality:</p>
            <select
              onChange={(event) =>
                setOrderDetails({
                  ...orderDetails,
                  nationality: event.target.value,
                })
              }
              value={orderDetails.nationality}
              className="px-5 py-3 border-[1px] flex-1 font-[400] border-gray-400 hover:border-teal-800 hover:text-teal-800"
            >
              <option value="" disabled>
                Select Country
              </option>

              {countryList.map((data) => (
                <option key={data} value={data}>
                  {data}
                </option>
              ))}
            </select>
          </div>
          <Button
            color="primary"
            onClick={handleSubmit}
            className={`text-white h-12 bg-[#0D9488] w-full lg:w-3/4`}
          >
            NEXT <FaArrowRightLong size={16} />
          </Button>
        </div>
      </div>
      <div className="h-20 bg-teal-400 mt-5"></div>
    </>
  );
};

export default Home;
