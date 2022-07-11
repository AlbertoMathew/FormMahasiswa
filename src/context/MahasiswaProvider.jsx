import { createContext, useState } from 'react'
import data from "../mock-data.json";

const MahasiswaContext = createContext({})
export const MahasiswaProvider = ({ children }) => {
    const [dataMahasiswa, setDataMahasiswa] = useState(data)

    return (
        <MahasiswaContext.Provider value={{ dataMahasiswa, setDataMahasiswa }}>
            {children}
        </MahasiswaContext.Provider>
    )
}

export default MahasiswaContext