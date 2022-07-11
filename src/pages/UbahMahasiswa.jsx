import React, { useState, useContext } from 'react'
import MahasiswaContext from '../context/MahasiswaProvider';
import { useNavigate, Link, useLocation } from 'react-router-dom';

const UbahMahasiswa = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { contact } = location.state
    const { dataMahasiswa, setDataMahasiswa } = useContext(MahasiswaContext);
    const [contacts] = useState(dataMahasiswa);
    const [dataContact, setDataContact] = useState(contact)
    const [editContactId, setEditContactId] = useState(dataContact.id);
    const [editFormData, setEditFormData] = useState(contact);
    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
        setDataContact(newFormData);
    };
    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        const editedContact = {
            id: editContactId,
            noPendaftaran: editFormData.noPendaftaran,
            programStudi: editFormData.programStudi,
            jenisKelamin: editFormData.jenisKelamin,
            tempatLahir: editFormData.tempatLahir,
            tanggalLahir: editFormData.tanggalLahir,
            agama: editFormData.agama,
            fullName: editFormData.fullName,
            address: editFormData.address,
            phoneNumber: editFormData.phoneNumber,
            email: editFormData.email
        };

        const newContacts = [...contacts];
        const index = contacts.findIndex((dataContact) => dataContact.id === editContactId);
        newContacts[index] = editedContact;

        setDataMahasiswa(newContacts);
        setEditContactId(null);
        navigate('/Tabel')
    };

    return (
        <div>
            <h2>Edit a Contact</h2>
            <form onSubmit={handleEditFormSubmit}>
                <table className='table-form-vertical'>
                    <tr>
                        <td>Full Name</td>
                        <td>
                            <input
                                className="form-control"
                                type="text"
                                name="fullName"
                                value={dataContact.fullName}
                                required="required"
                                placeholder="Enter a name..."
                                onChange={handleEditFormChange}
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
                                value={dataContact.address}
                                required="required"
                                placeholder="Enter an Address..."
                                onChange={handleEditFormChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Phone Number</td>
                        <td>
                            <input
                                className="form-control"
                                type="text"
                                name="honeNumber"
                                value={dataContact.phoneNumber}
                                required="required"
                                placeholder="Enter a Phone Number..."
                                onChange={handleEditFormChange}
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
                                value={dataContact.email}
                                required="required"
                                placeholder="Enter an Email..."
                                onChange={handleEditFormChange}
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
                                value={dataContact.noPendaftaran}
                                required="required"
                                placeholder="Enter an No. Pendaftaran..."
                                onChange={handleEditFormChange}
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
                                value={dataContact.tempatLahir}
                                required="required"
                                placeholder="Enter an Tempat Lahir..."
                                onChange={handleEditFormChange}
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
                                value={dataContact.tanggalLahir}
                                required="required"
                                placeholder="Enter an Tanggal Lahir..."
                                onChange={handleEditFormChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Agama</td>
                        <td>
                            <select name="agama" onChange={handleEditFormChange} value={dataContact.agama} className="form-control">
                                <option value="" selected hidden disabled  >Pilih Agama</option>
                                <option value="Kristen">Kristen</option>
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
                                {...(dataContact.jenisKelamin === 'Laki-Laki' ? { defaultChecked: 'checked' } : {})}
                                value="Laki-Laki"
                                onChange={handleEditFormChange}
                                required
                            />
                            <label for="label_laki">Laki-Laki</label>
                            &nbsp;
                            <input
                                type="radio"
                                id="label_perempuan"
                                name="jenisKelamin"
                                {...(dataContact.jenisKelamin === 'Perempuan' ? { defaultChecked: 'checked' } : {})}
                                value="Perempuan"
                                onChange={handleEditFormChange}
                                required
                            />
                            <label for="label_perempuan">Perempuan</label>
                        </td>
                    </tr>
                    <tr>
                        <td>Program Studi</td>
                        <td>
                            <select name="programStudi" onChange={handleEditFormChange} value={dataContact.programStudi} className="form-control">
                                <option value="" selected hidden disabled >Pilih Program Studi</option>
                                <option value="Tekom">Tekom</option>
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
                    <button style={{ marginLeft: '5px', marginRight: '5px' }} type="submit">Ubah</button>
                    <button style={{ marginLeft: '5px', marginRight: '5px' }} type="reset">Reset</button>
                </div>
            </form>

        </div>
    )
}

export default UbahMahasiswa