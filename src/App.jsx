import React, { useState } from "react";
import "./App.css"; // Có thể giữ lại nếu bạn có style riêng

function App() {
  const glassesList = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "/public/img/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with a mother of pearl effect tip.",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "/public/img/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with a mother of pearl effect tip.",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "/public/img/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with a mother of pearl effect tip.",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "/public/img/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with a mother of pearl effect tip.",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "/public/img/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with a mother of pearl effect tip.",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "/public/img/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with a mother of pearl effect tip.",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "/public/img/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with a mother of pearl effect tip.",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "/public/img/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with a mother of pearl effect tip.",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "/public/img/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with a mother of pearl effect tip.",
    },
  ];

  const [selectedGlasses, setSelectedGlasses] = useState(null);

  return (
    <div className="bg-body">
      <h1 className="text-center mb-4 app-title">🕶 TRY GLASSES APP ONLINE</h1>
      <div className="container py-4">
        <div className="row justify-content-center align-items-start">
          {/* Người mẫu + kính */}
          <div className="col-md-4 position-relative text-center">
            <img
              src="/public/img/model.jpg"
              alt="model"
              className="img-fluid"
              style={{ height: "400px", objectFit: "cover" }}
            />
            {selectedGlasses && (
              <>
                <img
                  src={selectedGlasses.url}
                  alt="selected glasses"
                  className="position-absolute"
                  style={{
                    top: "100px",
                    left: "144px",
                    width: "150px",
                    opacity: 0.9,
                  }}
                />
                <div className="bg-infor p-2 text-start position-absolute">
                  <h5 className="mb-1">{selectedGlasses.name}</h5>
                  <p className="mb-0">${selectedGlasses.price}</p>
                  <small>{selectedGlasses.desc}</small>
                </div>
              </>
            )}
          </div>
          <div className="col-md-4 title-try">
            <div className="title-try-left">
              <i class="fas fa-circle-arrow-left me-2"></i>
              Thử kính cho người mẫu bên trái nhé!
            </div>
          </div>
          <div className="col-md-4 text-center">
            <img
              src="/public/img/model.jpg"
              alt="model"
              className="img-fluid"
              style={{ height: "400px", objectFit: "cover" }}
            />
          </div>

          {/* Danh sách kính */}
          <div className="col-md-12 mt-5 bg-item">
            <div className="row">
              {glassesList.map((item) => (
                <div className="col-4 mb-4" key={item.id}>
                  <button
                    className="btn-glasses w-100"
                    onClick={() => setSelectedGlasses(item)}
                  >
                    <img
                      src={item.url}
                      alt={item.name}
                      className="img-fluid"
                      style={{ maxHeight: "60px" }}
                    />
                    <div className="mt-2 small">{item.name}</div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
