import React from "react";
import Layout from "./../Template/Layout";

const Home = () => {
  const qrCodeURL = "http://localhost:5173/Product"; 

  return (
    <Layout>
      {/* ส่วนหัวของหน้า */}
      <div className="text-center mt-10">
        <h1 className="text-5xl font-bold text-[#2E8B57] mb-6">
        Fluke & James Bistro
        </h1>
        <p className="text-lg text-gray-700">
        Scan the QR code to order a meal set.
        </p>
      </div>

      {/* ส่วนแสดง QR Code */}
      <div className="flex flex-col items-center mt-10">
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
            qrCodeURL
          )}`}
          alt="QR Code"
          className="w-48 h-48 shadow-lg rounded-xl"
        />
        {/* ส่วนแสดลิงค์ */}
        {/* <p className="mt-4 text-gray-600">  
          Or visit directly:{" "}
          <a
            href={qrCodeURL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2E8B57] underline hover:text-[#3CB371]"
          >
            {qrCodeURL}
          </a>
        </p> */}
      </div>

      {/* ปุ่มไปยังหน้าเมนู */}
      <div className="text-center mt-10">
        <a
          href={qrCodeURL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#2E8B57] hover:bg-[#3CB371] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
        >
          Go to Menu
        </a>
      </div>
    </Layout>
  );
};

export default Home;
