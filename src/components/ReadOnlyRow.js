import React from "react";
import { Link } from "react-router-dom";

const ReadOnlyRow = ({ contact, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.noPendaftaran}</td>
      <td>{contact.programStudi}</td>
      <td>{contact.fullName}</td>
      <td>{contact.jenisKelamin}</td>
      <td>{contact.tempatLahir}</td>
      <td>{contact.tanggalLahir}</td>
      <td>{contact.agama}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <Link to="/UbahMahasiswa" state={{ contact: contact }} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <button type="button">Edit</button>
          </Link>
          <button type="button" onClick={() => handleDeleteClick(contact.id)}>
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
