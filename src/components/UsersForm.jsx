import Header from './Header'
import Footer from './Footer'

const UsersForm = () => {
    return (
        <>
            <Header />

            <section className="text-black bg-red-100 body-font py-24">
                <div className="w-3/5 mx-auto px-0 md:px-12 lg:px-24 xl:px-32">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-1 text-black">Lista de usuarios</h1>
                    </div>
                    <div className="mb-4 flex justify-between">
                        <button className="text-black bg-red-100 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-lg">Eliminar Usuarios</button>
                        <button className="text-black bg-red-100 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-lg">Eliminar Inactivos</button>
                    </div>
                    <ul>

                        <li className="flex items-center justify-between bg-red-100 p-4 mb-2 rounded">
                            <div>
                                <span className="text-black">Nombre Usuario 1</span>
                                <br />
                                <span className="text-black">correo1@example.com</span>
                            </div>
                            <button className="text-black bg-red-100 border-0 py-1 px-2 focus:outline-none hover:bg-red-600 rounded">Eliminar</button>
                        </li>

                        <li className="flex items-center justify-between bg-red-200 p-4 mb-2 rounded">
                            <div>
                                <span className="text-black">Nombre Usuario 2</span>
                                <br />
                                <span className="text-black">correo2@example.com</span>
                            </div>
                            <button className="text-black bg-red-100 border-0 py-1 px-2 focus:outline-none hover:bg-red-600 rounded">Eliminar</button>
                        </li>
                    </ul>
                </div>
            </section>




            <Footer />
        </>
    )
}

export default UsersForm