import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer,TableHead,TableRow,Paper,IconButton,TextField, Button } from "@mui/material";
import { Delete, Edit, Save, Cancel } from "@mui/icons-material";
import { patients as mocksData } from "../mocks/patients";

const PatientTable = () => {

    const [patients, setPatients] = useState([]);
    const [editId, setEditId] = useState(null);
    const [editData, setEditData] = useState({});

    useEffect(() => {
        fetchPatients();
      }, []);

      const fetchPatients = () => {
        setPatients(mocksData);
      };

      const handleDelete = (id) => {
        setPatients(patients.filter((p) => p.id !== id));
      };

      const handleEdit = (patient) => {
        setEditId(patient.id);
        setEditData({ ...patient });
      };

      const handleCancel = () => {
        setEditId(null);
        setEditData({});
      };

      const handleSave = () => {
        setPatients(
          patients.map((p) => (p.id === editId ? { ...editData } : p))
        );
        setEditId(null);
        setEditData({});
      };

      const handleChange = (e) => {
        setEditData({ ...editData, [e.target.name]: e.target.value });
      };

}