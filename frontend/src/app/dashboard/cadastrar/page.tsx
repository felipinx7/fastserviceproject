import { api } from "@/services/api";
import { useState } from "react";

const Cadastrar = () => {
  //State for storage data Inputs
  const [formData, setFormData] = useState<{
    name: string;
    price: string;
    photo: File | null;
    orderId: 1;
  }>({
    name: "",
    price: "",
    photo: null,
    orderId: 1,
  });

  //Creating Fuction of update
  const updateInfoForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files, type } = e.target;

    if (name === "photo" && files && files[0]) {
      setFormData((prev) => ({ ...prev, photo: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData) {
      alert("Preencha todos os dados");
    }

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Você precisa está logado para cadastrar um produto!");
      }
      const response = await api.post("/products/create-products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Produto Cadastrado com sucesso!");

      setFormData({
        name: "",
        price: "",
        photo: null,
        orderId: 1,
      });
    } catch (error) {
      console.log(error);
      alert("Não foi possivel cadastrar seu produto!");
    }
  };
  return (
    <div className="bg-white overflow-y-auto w-[100%] p-6 h-[92vh] max-md:h-[100vh] rounded-2xl shadow-2xl flex flex-col gap-4">
      <h1 className="font-bold text-4xl">Cadastrar Prato</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-start gap-4">
          <label htmlFor="Name Product">Nome do Prato: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={updateInfoForm}
            className="w-[80%] max-md:w-full border-1 p-3 rounded-[5.97px] border-[#DDD]"
          />
        </div>
        <div className="flex flex-col items-start mt-6 gap-4">
          <label htmlFor="Price">Preço do Produto</label>
          <input
            type="number"
            name="price"
            onChange={updateInfoForm}
            value={formData.price}
            className="w-[80%] max-md:w-full border-1 p-3 rounded-[5.97px] border-[#DDD]"
          />
        </div>
        <div className="flex flex-col items-start mt-6 gap-4">
          <label htmlFor="Photo Product">Foto do Prato</label>
          {/* Part of Send Photo Input */}
          <div className="flex justify-center w-[80%] max-md:w-full items-center">
            <div className="w-full h-[30vh]">
              <label
                htmlFor="file"
                className="flex flex-col justify-center items-center w-[100%] h-[100%] border-2 border-dashed border-gray-300 text-center p-2 text-gray-700 cursor-pointer"
              >
                <span>
                  <svg
                    xmlSpace="preserve"
                    viewBox="0 0 184.69 184.69"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                    width="60px"
                    height="60px"
                  >
                    <g>
                      <g>
                        <g>
                          <path
                            d="M149.968,50.186c-8.017-14.308-23.796-22.515-40.717-19.813
      				C102.609,16.43,88.713,7.576,73.087,7.576c-22.117,0-40.112,17.994-40.112,40.115c0,0.913,0.036,1.854,0.118,2.834
      				C14.004,54.875,0,72.11,0,91.959c0,23.456,19.082,42.535,42.538,42.535h33.623v-7.025H42.538
      				c-19.583,0-35.509-15.929-35.509-35.509c0-17.526,13.084-32.621,30.442-35.105c0.931-0.132,1.768-0.633,2.326-1.392
      				c0.555-0.755,0.795-1.704,0.644-2.63c-0.297-1.904-0.447-3.582-0.447-5.139c0-18.249,14.852-33.094,33.094-33.094
      				c13.703,0,25.789,8.26,30.803,21.04c0.63,1.621,2.351,2.534,4.058,2.14c15.425-3.568,29.919,3.883,36.604,17.168
      				c0.508,1.027,1.503,1.736,2.641,1.897c17.368,2.473,30.481,17.569,30.481,35.112c0,19.58-15.937,35.509-35.52,35.509H97.391
      				v7.025h44.761c23.459,0,42.538-19.079,42.538-42.535C184.69,71.545,169.884,53.901,149.968,50.186z"
                            fill="#010002"
                          />
                        </g>
                        <g>
                          <path
                            d="M108.586,90.201c1.406-1.403,1.406-3.672,0-5.075L88.541,65.078
      				c-0.701-0.698-1.614-1.045-2.534-1.045l-0.064,0.011c-0.018,0-0.036-0.011-0.054-0.011c-0.931,0-1.85,0.361-2.534,1.045
      				L63.31,85.127c-1.403,1.403-1.403,3.672,0,5.075c1.403,1.406,3.672,1.406,5.075,0L82.296,76.29v97.227
      				c0,1.99,1.603,3.597,3.593,3.597c1.979,0,3.59-1.607,3.59-3.597V76.165l14.033,14.036
      				C104.91,91.608,107.183,91.608,108.586,90.201z"
                            fill="#010002"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
                <p className="mt-2"></p>
                Clique aqui e adicione a foto do Prato
              </label>
              <input
                className="hidden w-[80%]"
                name="photo"
                id="file"
                onChange={updateInfoForm}
                type="file"
              />
            </div>
          </div>
        </div>
        <div className="w-[80%] max-md:w-full items-center justify-center">
          <button
            type="submit"
            className="bg-[#fba900] w-full p-2 text-white text-2xl font-bold mt-3 rounded-[5.97px]"
          >
            Cadastrar Prato
          </button>
        </div>
      </form>
    </div>
  );
};

export default Cadastrar;
