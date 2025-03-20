import { useJadwal } from "../context/JadwalContext";
import { useState } from "react";

const KomponenJadwal = ({ jdwl }) => {
  const { hapusJadwal, editJadwal } = useJadwal();
  const [isEditing, setIsEditing] = useState(false);
  const [newTugas, setNewTugas] = useState(jdwl.tugas);

  const handleEdit = () => {
    if (isEditing && newTugas.trim() !== "") {
      editJadwal(jdwl.id, newTugas);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li>
      {isEditing ? (
        <input
          type="text"
          value={newTugas}
          onChange={(e) => setNewTugas(e.target.value)}
          onBlur={handleEdit} // Menyimpan ketika kehilangan fokus
        />
      ) : (
        <span>{jdwl.tugas}</span>
      )}
      <button className="edit" onClick={handleEdit}>
        {isEditing ? "Simpan" : "Edit"}
        </button>
      <button onClick={() => hapusJadwal(jdwl.id)}>Hapus</button>
    </li>
  );
};

export default KomponenJadwal;
