import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TextField, CircularProgress } from "@mui/material";
import { Delete, Edit, Save, Cancel } from "@mui/icons-material";
import { getPatients, updatePatient, deletePatient } from "../api/patientApi";

const PatientTable = () => {

    const [patients, setPatients] = useState([]);
    const [editId, setEditId] = useState(null);
    const [editData, setEditData] = useState({});
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      fetchPatients();
    }, []);

    const fetchPatients = async () => {
        try {
          setLoading(true);
          const response = await getPatients();
          setPatients(response.data);
        } catch (error) {
          console.error("Failed to fetch patients", error);
        } finally {
          setLoading(false);
        }
      };

      const handleEdit = (patient) => {
        setEditId(patient.id);
        setEditData({ ...patient });
      };

      const handleCancel = () => {
        setEditId(null);
        setEditData({});
      };

      const handleSave = async () => {
        try {
          await updatePatient(editId, editData);
          setPatients((prev) =>
            prev.map((p) => (p.id === editId ? editData : p))
          );
          handleCancel();
        } catch (error) {
          console.error("Failed to update patient", error);
        }
      };

      const handleDelete = async (id) => {
        try {
          await deletePatient(id);
          setPatients((prev) => prev.filter((p) => p.id !== id));
        } catch (error) {
          console.error("Failed to delete patient", error);
        }
      };

      const handleChange = (e) => {
        setEditData({ ...editData, [e.target.name]: e.target.value });
      };

      const renderCell = (patient, field) =>
      editId === patient.id ? (
        <TextField
          size="small"
          name={field}
          value={editData[field] || ""}
          onChange={handleChange}
        />
      ) : (
        patient[field]
      );

      if (loading) {
        return <CircularProgress />;
      }

      

}