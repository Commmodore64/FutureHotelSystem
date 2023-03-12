import React from "react";
import { NavLink } from "react-router-dom";

function Restaurante() {
  return (
    <div class="text-gray-900 pt-12 pr-0 pb-14 pl-0 bg-white">
      <div
        class="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16
      max-w-7xl"
      >
        <div class="flex flex-col items-center sm:px-5 md:flex-row">
          <div class="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
            <div
              class="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
            md:space-y-5"
            >
              <div
                class="bg-green-500 flex items-center leading-none rounded-full text-gray-50 pt-1.5 pr-3 pb-1.5 pl-2
              uppercase inline-block"
              >
                <p class="inline">
                  <svg
                    class="w-3.5 h-3.5 mr-1"
                    fill="currentColor"
                    viewbox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
                  00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755
                  1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1
                  0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </p>
                <p class="inline text-xs font-medium">New</p>
              </div>
              <a class="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
                Comida asiatica !
              </a>
              <div class="pt-2 pr-0 pb-0 pl-0">
                <p class="text-sm font-medium inline"></p>
                <a class="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1 underline">
                  Disponible en nuestro restaurante
                </a>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <div class="block">
              <img
                src="https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg"
                class="object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full"
              />
            </div>
          </div>
        </div>
        <div class="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
          <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
            <img
              src="https://images.pexels.com/photos/884596/pexels-photo-884596.jpeg"
              class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"
            />
            <p
              class="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
            rounded-full uppercase inline-block"
            >
              FAST FOOD
            </p>
            <a class="text-lg font-bold sm:text-xl md:text-2xl">
              Nuestras mejores opciones para llevar
            </a>
            <p class="text-sm text-black">
              Con nuestro diverso menu, puedes llevar comida al mero estilo
              Japones para llevar !
            </p>
          </div>
          <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
            <img
              src="https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg"
              class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"
            />
            <p
              class="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
            rounded-full uppercase inline-block"
            >
              TRADICIONAL
            </p>
            <a class="text-lg font-bold sm:text-xl md:text-2xl">
              Comida tradiconal Japonesa
            </a>
            <p class="text-sm text-black">
              En nuestro menu encontraras comida Japonesa tradicional con el
              mejor sabor.
            </p>
          </div>
          <div class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
            <img
              src="https://images.unsplash.com/photo-1626197031507-c17099753214?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzR8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
              class="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"
            />
            <p
              class="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
            rounded-full uppercase inline-block"
            >
              POSTRES
            </p>
            <a class="text-lg font-bold sm:text-xl md:text-2xl">
              Los mas dulces postres
            </a>
            <p class="text-sm text-black">Con nuetros mejores dulces !</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-52">
        <NavLink
          to="/pdfFood"
          className="text-black px-3 py-2 rounded-md text-lg font-medium flex items-center"
        >
          <button className="btn btn-primary">Ticket</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Restaurante;
