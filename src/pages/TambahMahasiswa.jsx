import React, { useState, useContext } from 'react'
import { nanoid } from "nanoid";
import MahasiswaContext from '../context/MahasiswaProvider';
import { useNavigate, Link } from 'react-router-dom';

const TambahMahasiswa = () => {
    const navigate = useNavigate()
    const { dataMahasiswa, setDataMahasiswa } = useContext(MahasiswaContext);
    const [contacts] = useState(dataMahasiswa);
    const [addFormData, setAddFormData] = useState({
        noPendaftaran: '',
        programStudi: '',
        jenisKelamin: '',
        tempatLahir: '',
        tanggalLahir: '',
        agama: '',
        fullName: '',
        address: '',
        phoneNumber: '',
        email: ''
    });
    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };
    const handleAddFormSubmit = (event) => {
        event.preventDefault();
        const newContact = {
            id: nanoid(),
            noPendaftaran: addFormData.noPendaftaran,
            programStudi: addFormData.programStudi,
            jenisKelamin: addFormData.jenisKelamin,
            tempatLahir: addFormData.tempatLahir,
            tanggalLahir: addFormData.tanggalLahir,
            agama: addFormData.agama,
            fullName: addFormData.fullName,
            address: addFormData.address,
            phoneNumber: addFormData.phoneNumber,
            email: addFormData.email
        };

        const newContacts = [...contacts, newContact];
        setDataMahasiswa(newContacts);
        navigate('/Tabel')
    };

    return (
        <div>
            <h2>Add a Contact</h2>
            <form onSubmit={handleAddFormSubmit}>
                <table>
                    <tr>
                        <td>Full Name</td>
                        <td>
                            <input
                                className="form-control"
                                type="text"
                                name="fullName"
                                required="required"
                                placeholder="Enter a name..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>Address</td>
                        <td>
                            <input
                                className="form-control"
                                type="text"
                                name="address"
                                required="required"
                                placeholder="Enter an Address..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Phone Number</td>
                        <td>
                            <input
                                className="form-control"
                                type="text"
                                name="phoneNumber"
                                required="required"
                                placeholder="Enter a Phone Number..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>
                            <input
                                className="form-control"
                                type="email"
                                name="email"
                                required="required"
                                placeholder="Enter an Email..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>No.Pendaftaran</td>
                        <td>
                            <input
                                className="form-control"
                                type="text"
                                name="noPendaftaran"
                                required="required"
                                placeholder="Enter an No. Pendaftaran..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Tempat Lahir</td>
                        <td>
                            <input
                                className="form-control"
                                type="text"
                                name="tempatLahir"
                                required="required"
                                placeholder="Enter an Tempat Lahir..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Tanggal Lahir</td>
                        <td>
                            <input
                                className="form-control"
                                type="date"
                                name="tanggalLahir"
                                required="required"
                                placeholder="Enter an Tanggal Lahir..."
                                onChange={handleAddFormChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Agama</td>
                        <td>
                            <select name="agama" onChange={handleAddFormChange} className="form-control">
                                <option value="" selected hidden disabled  >Pilih Agama</option>
                                <option value="Kristen" >Kristen</option>
                                <option value="Islam">Islam</option>
                                <option value="Buddha">Buddha</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Jenis Kelamin</td>
                        <td>
                            <input
                                type="radio"
                                id="label_laki"
                                name="jenisKelamin"
                                value="Laki-Laki"
                                onChange={handleAddFormChange}
                                required
                            />
                            <label for="label_laki">Laki-Laki</label>
                            &nbsp;
                            <input
                                type="radio"
                                id="label_perempuan"
                                name="jenisKelamin"
                                value="Perempuan"
                                onChange={handleAddFormChange}
                                required
                            />
                            <label for="label_perempuan">Perempuan</label>
                        </td>
                    </tr>
                    <tr>
                        <td>Program Studi</td>
                        <td>
                            <select name="programStudi" onChange={handleAddFormChange} className="form-control">
                                <option value="" selected hidden disabled >Pilih Program Studi</option>
                                <option value="Tekom" >Tekom</option>
                                <option value="Psikolog">Psikolog</option>
                            </select>
                        </td>
                    </tr>
                </table>
                <div style={{
                    display: 'block',
                    margin: '0 auto',
                    textAlign: 'center'
                }}>

                    <Link to="/Tabel">
                        <button type="button">Back</button>
                    </Link>
                    <button style={{ marginLeft: '5px', marginRight: '5px' }} type="submit">Daftarkan</button>
                    <button style={{ marginLeft: '5px', marginRight: '5px' }} type="reset">Reset</button>
                </div>
            </form>

        </div>
    )
}

export default TambahMahasiswa