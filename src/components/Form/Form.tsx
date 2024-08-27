import Image from "next/image";

export function Form() {
    return (
        <div className="px-3">

            <div className="py-4 px-3 rounded-lg shadow-light">
                <div className="flex-gap-4">
                    <Image src="/assets/comercial.png" alt="Vendedor" width={100} height={100} className="border-2 rounded-full border-orange-400" />
                    <div>
                        <p>Oscar Gallego</p>
                        <p className="text-orange-400 font-semibold">Asesor Comercial</p>
                    </div>
                </div>

                <div className="my-5">
                    <div>
                        <label className="text-sm text-orange-500">Nombre</label>
                        <div className="mt-2">
                            <input type="text" name="name"
                                className="w-full rounded-md border-0 py-1.5 text-orange-400 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-orange-500 focus:ring-0 focus:ring-inset text-sm" />
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <label className="text-sm text-orange-500">
                        Teléfono
                    </label>
                    <div>
                        <input
                            id="phone"
                            name="phone"
                            type="phone"
                            autoComplete="phone"
                            className="w-full rounded-md border-0 py-1.5 text-orange-400 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-orange-500 focus:ring-0 focus:ring-inset text-sm"
                        />
                    </div>
                </div>
                <div className="mt-2">
                    <label className="text-sm text-orange-500">
                        Descripción
                    </label>
                    <div className="mt-2">
                        <textarea
                            name="description"
                            rows={3}
                            className="w-full rounded-md border-0 py-1.5 text-orange-400 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-orange-500 focus:ring-0 focus:ring-inset text-sm"
                            defaultValue={''}
                       />
                    </div>
                </div>
                <div className="flex justify-between gap-5 my-4">
                    <button className="bg-orange-400 px-4 py-2 text-white rounded-lg text-sm">Enviar</button>
                    <button className="border-[1px] border-orange-400 text-orange-300 px-2 py-2 rounded-lg text-sm">Llamar</button>
                </div>
            </div>
        </div>
    )
}
