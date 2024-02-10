import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { getCookiesByName } from "../utils/formsUtils.js"
import Header from './Header.jsx'
import Footer from './Footer.jsx'

const NewProductsForm = () => {
    const formRef = useRef(null)
    const navigate = useNavigate()

    const handleSumbit = async (e) => {
        e.preventDefault()
        const datForm = new FormData(formRef.current) //Tranformo un HTML en un objet iterator
        const data = Object.fromEntries(datForm)
        const token = getCookiesByName('jwtCookie')
        console.log(token)
        const response = await fetch('https://back-end-n8q1.onrender.com/api/products', {
            method: 'POST',
            headers: {
                'Authorization': `${token}`,
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        if (response.status == 200) {
            const datos = await response.json()
            console.log(datos)
        } else {
            const datos = await response.json()
            console.log(datos)
        }
    }

    return (
        <>
            <Header />



            <section className="text-black bg-red-100 body-font py-24">
                <div className="container px-1 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-1 text-black">Agregar nuevo producto al inventario</h1>
                    </div>
                    <div className="max-w-md mx-auto">
                        <div className="mb-4">
                            <label htmlFor="product-name" className="block text-sm text-black">Nombre</label>
                            <input type="text" id="product-name" name="product-name" className="w-full bg-red-100 bg-opacity-50 rounded border border-red-50 focus:border-red-400
                            focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="product-description" className="block text-sm text-black">Descripción</label>
                            <input type="text" id="product-description" name="product-description" className="w-full bg-black bg-opacity-50 rounded border border-red-100 focus:border-red-50 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="product-category" className="block text-sm text-black">Categoría</label>
                            <input type="text" id="product-category" name="product-category" className="w-full bg-red-100 bg-opacity-50 rounded border border-reed-50 focus:border-red-200 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="product-code" className="block text-sm text-black">Código</label>
                            <input type="text" id="product-code" name="product-code" className="w-full bg-red-100 bg-opacity-50 rounded border border-red-50 focus:border-red-300 focus:bg-transparent focus:ring-2 focus:ring-red-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="product-price" className="block text-sm text-black">Precio</label>
                            <input type="text" id="product-price" name="product-price" className="w-full bg-red-100 bg-opacity-50 rounded border border-red-50 focus:border-red-200 focus:bg-transparent focus:ring-2 focus:ring-red-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="product-stock" className="block text-sm text-black">Stock</label>
                            <input type="number" id="product-stock" name="product-stock" className="w-full bg-red-100 bg-opacity-50 rounded border border-red-100 focus:border-red-500 focus:bg-transparent focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="product-image" className="block text-sm text-black">Imagen</label>
                            <input type="file" id="product-image" name="product-image" className="w-full bg-red-100 bg-opacity-50 rounded border border-red-300 focus:border-red-500 focus:bg-transparent focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="mb-4 text-center py-2">
                            <button className="text-black bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Agregar Producto</button>
                        </div>
                    </div>
                </div>
            </section>



            <Footer />
        </>
    )
}

export default NewProductsForm