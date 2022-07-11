import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="address"
          value={editFormData.address}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phoneNumber"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <tr>
        <td>Jenis Kelamin</td>
        <td>
          <input
            type="radio"
            id="label_laki"
            name="jenis_Kelamin"
            value="Laki-Laki"
            onChange={handleEditFormChange}
            required
          />
          <label for="label_laki">Laki-Laki</label>
          &nbsp;
          <input
            type="radio"
            id="label_perempuan"
            name="jenis_Kelamin"
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
          <select>
            <option value="" selected hidden disabled >Pilih Program Studi</option>
            <option value="Tekom" name="programStudi" onChange={handleEditFormChange} >Tekom</option>
            <option value="Psikolog" name="programStudi" onChange={handleEditFormChange} >Psikolog</option>
          </select>
        </td>
      </tr>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
