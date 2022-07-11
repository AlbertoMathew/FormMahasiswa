import React, { useState, Fragment, useContext } from "react";
import "../App.css";
import ReadOnlyRow from "../components/ReadOnlyRow";
import { Link } from "react-router-dom";
import MahasiswaContext from '../context/MahasiswaProvider';

const Tabel = () => {
    const { dataMahasiswa, setDataMahasiswa } = useContext(MahasiswaContext);
    const [contacts, setContacts] = useState(dataMahasiswa);

    const handleDeleteClick = (contactId) => {
        const newContacts = [...dataMahasiswa];

        const index = dataMahasiswa.findIndex((contact) => contact.id === contactId);

        newContacts.splice(index, 1);

        setDataMahasiswa(newContacts);
        setContacts(newContacts);
    };

    return (
        <div className="app-container">
            <table>
                <thead>
                    <tr>
                        <th>No Pendaftaran</th>
                        <th>Program Studi</th>
                        <th>Name</th>
                        <th>Jenis Kelamin</th>
                        <th>Tempat Lahir </th>
                        <th>Tanggal Lahir</th>
                        <th>Agama</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Email</th>

                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <Fragment>
                            <ReadOnlyRow
                                contact={contact}
                                handleDeleteClick={handleDeleteClick}
                            />
                        </Fragment>
                    ))}
                </tbody>
            </table>
            <Link to="/TambahMahasiswa">
                <button type="button" className="tambah-mahasiswa-button">Tambah Mahasiswa</button>
            </Link>
        </div>
    );
}


export default Tabel