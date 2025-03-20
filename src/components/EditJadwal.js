import { useState } from "react";
import { useJadwal } from "../context/JadwalContext";

const EditJadwal = ({ jdwl, selesaiEdit }) => {
  const { jadwal, setJadwal } = useJadwal();
  const [tugasBaru, setTugasBaru] = useState(jdwl.tugas);

  const handleEdit = (e) => {
    e.preventDefault();
    if (!tugasBaru.trim()) return;
    setJadwal(
      jadwal.map((item) =>
        item.id === jdwl.id ? { ...item, tugas: tugasBaru.trim() } : item
      )
    );
    selesaiEdit();
  };

  return (
    <form onSubmit={handleEdit}>
      <input
        type="text"
        value={tugasBaru}
        onChange={(e) => setTugasBaru(e.target.value)}
      />
      <button type="submit">Simpan</button>
      <button type="button" onClick={selesaiEdit}>Batal</button>
    </form>
  );
};

export default EditJadwal;
