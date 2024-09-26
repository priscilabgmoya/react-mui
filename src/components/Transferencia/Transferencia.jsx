/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import {
  Button,
  Grid,
  Box,
  Typography,
  ListItemButton,
  Checkbox,
  ListItemIcon,
  Autocomplete,
  TextField,
} from "@mui/material";
import { TablaBienes } from "./LIstTransferencia";
//import { btnDetalle,  inputGestionar } from "../../CSS/gestionar";
//import { useDataContext } from "../../Hooks/DataHooks";
import { useEffect } from "react";
//import { useGestionarContext } from "../../Hooks/GestionarHooks";
import { Tooltip } from "@mui/material";
import FiltrarBienes from "./FiltroBienes";
//import { valoresIniciales } from "../../Helpers/valoresIniciales";
//import { validacionNuevaTransferencia } from "../../Helpers/validaciones";
import RealizarTransferenciaModal from "./RealizarTransferenciaModal";
//import { useLoginContext } from "../../Hooks/LoginHooks";
import { useState } from "react";
//import { reducerTransferencias } from "../../Helpers/helps";
//import {  alertServicioTecnico } from "../../Helpers/alertas";
//import { msgError } from "../../CSS/Login";
function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

export default function Transferencia() {
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([]);
  const [right, setRight] = React.useState([]);
  const [isTransfer, setIsTransfer] = useState(false); 
  const [tipoTransferencias, setTipoTransferencia] = useState();
  const addTipoTransferencia = (value) => {
    if(value){
      setTipoTransferencia(value); 
    }else{
      setTipoTransferencia(null); 
    }
  };
 /* const { get_id } = useLoginContext();
  const {userId} = get_id(); 
  const {
    instanciaBien,
    instanciaOficina,
    createHookFormikGestionar,
    instanciaTransferencia,
  } = useGestionarContext();*/
  const rightChecked = intersection(checked, right);

  const [oficinaSelect, setOficinaSelect] = useState(null);
  const onSubmit = async (values, { resetForm }) => {
     
    setRight([]);
    resetForm();
    setOficinaSelect(null);
    setLeft([]);
    setIsTransfer(false); 
  // instanciaTransferencia.transferirBien(values,userId, userToken);
  };
  /*
  const formik = createHookFormikGestionar(
    valoresIniciales.transferencia,
    validacionNuevaTransferencia,
    onSubmit
  );
  useEffect(() => {
    if (typeTransferencia.includes(formik.values.tipoTransferenciaId)) {
       
      if(formik.values.tipoTransferenciaId === 3){
        let b= `${tipoTransferencias.descripcion}`.toLocaleUpperCase()
        const ofiBaja= oficinaDestino.find(o =>{return o.descripcion === b}); 
        formik.setFieldValue("oficinaDestino", ofiBaja?.id);

      }if(formik.values.tipoTransferenciaId === 4){
        alertServicioTecnico("Recuerde que los Bienes tienen que ser del Mismo Servicio Técnico")
        formik.setFieldValue("oficinaDestino", tipoTransferencias.id);
      }
    }
  }, [tipoTransferencias]);*/
  /*
  const { stateData, dispatch } = useDataContext();
  const {get_t,get_informatico} = useLoginContext(); 
  const {userInformatico} = get_informatico(); 
  const {userToken} = get_t(); 
  useEffect(() => {
    instanciaOficina.getAllValueNotFilter(dispatch,userToken);
  }, [stateData.isLoaded]);*/
  //const typeTransferencia = [3, 4];

  const leftChecked = intersection(checked, left);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const GuardarTransferencia = () => {
   /* const { transferencias } = reducerTransferencias(right);
    formik.values.transferencias = transferencias;*/
  };

  const columns = [
    {
      width: 70,
      renderCell: (params) => (
        <ListItemButton
          key={params.row.id}
          role="listitem"
          onClick={handleToggle(params.row)}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              p: 0,
            }}
          >
            <Checkbox
              sx={{ p: 0 }}
              checked={checked.indexOf(params.row) !== -1}
              tabIndex={-1}
              disableRipple
              inputProps={{
                "aria-labelledby": `transfer-list-item-${params.row.id}-label`,
              }}
            />
          </ListItemIcon>
        </ListItemButton>
      ),
    },
    {
      field: "id",
      headerName: "IdBien",
      width: 70,
    },
    {
      field: "descripcion",
      headerName: "Descripción",
      width: 250,
    },
    {
      field: "oficina",
      headerName: "Oficina Actual",
      width: 150,
      renderCell: (params) => (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {params?.row?.oficina?.descripcion}
        </Box>
      ),
    },
  ];
  const [oficinaDestino, setOficinaDestino] = useState(
    {},
  );
  const handleBusquedaCargadosId = async (e) => {
    let key = e.target.value;
    if (key) {
      let array = left.filter((bien) => {
        return `${bien.id}`.includes(key);
      });
      if (array.length === 0) {
        setOficinaSelect(null);
        //alertErrorBusqueda("IdBien no encontrado en la oficina seleccionada!")
        //const {data} = await instanciaBien.getBienes({id: parseInt(key)}, userToken,userInformatico); 
        //return setLeft([...data.data]);
      }
      return setLeft(array);
    } else {
      setLeft([]);
    }
  };
  const handleBusquedaCargadosDescripcion = async (e) => {
    let key = e.target.value;
    if (key) {
      let array = left.filter((bien) => {
        return `${bien.descripcion}`.includes(key.toLocaleUpperCase());
      });
      if (array.length === 0) {
        setOficinaSelect(null);
        //alertErrorBusqueda("IdBien no encontrado en la oficina seleccionada!")
       // const {data} = await instanciaBien.getBienes({descripcion: key}, userToken,userInformatico); 
        //return setLeft([...data.data]);
      }
      return setLeft(array);
    } else {
      setLeft([]);
    }
  };
  const handleOficina = async (value) => {
    if (value) {
      setIsTransfer(true); 
      setOficinaSelect(value);
      setOficinaDestino(
        //stateData.oficinas.data?.filter((oficina) => {
         // return oficina.id !== value.id;
        //})
      );
     // const {data} = await instanciaBien.getBienes({ultima_oficina: value.id}, userToken,userInformatico); 
      //return setLeft([...data.data]);
    } else {
      setOficinaSelect(null);
      setIsTransfer(false); 
      setLeft([]);
     // setOficinaDestino({...stateData.oficinas});
    }
  };

  return (
    <>
      <Box sx={{ display: "flex", width: "100%", flexDirection: "column" }}>
        <Typography
          variant="h3"
          sx={{ mb: 1, textAlign: "center" }}
          fontWeight="bold"
        >
          {" "}
          {"Transferir Bienes"}
        </Typography>
        <Grid
          container
          alignItems="start"
          justifyContent={"space-between"}
          sx={{ mt: 1 }}
          height={"100%"}
        >
          <Grid item xs={5}>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                sx={{ textAlign: "center" }}
                fontWeight="bold"
              >
                {" "}
                {"Oficina Origen"}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <FiltrarBienes
                handleBusquedaId={handleBusquedaCargadosId}
                handleChange={handleOficina}
                handleBusquedaDescripcion={handleBusquedaCargadosDescripcion}
                oficinaSelect={oficinaSelect}
              />
            </Grid>
            <TablaBienes
              handleChange={handleToggle}
              data={left}
              columns={columns}
              height={550}
            />
          </Grid>
          <Grid item xs={2} alignSelf={"center"}>
            <Grid container direction="column" alignItems="center">
              <Tooltip title="Transferir">
                <Button
        
                  size="small"
                  onClick={handleCheckedRight}
                  disabled={leftChecked.length === 0}
                  aria-label="move selected right"
                >
                  &gt;
                </Button>
              </Tooltip>
              <Tooltip title="Deshacer Tranferencia">
                <Button

                  size="small"
                  onClick={handleCheckedLeft}
                  disabled={rightChecked.length === 0}
                  aria-label="move selected left"
                >
                  &lt;
                </Button>
              </Tooltip>
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                sx={{ textAlign: "center" }}
                fontWeight="bold"
              >
                {" "}
                {"Oficina Destino"}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ mb: 1 }}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  name="oficinaId"
                  getOptionLabel={(option) => {
                    return `Nro. Oficina: ${option.numeroOficina} - Descripción: ${option.descripcion} - Edificio: ${option.edificio.id}`;
                  }}
                  options={oficinaDestino}
                
                  autoComplete="off"
          
                  renderInput={(params) => (
                    <TextField {...params} label={`Oficina Destino`}/>
                  )}
                  
                />
            
              </Box>
            </Grid>
            <TablaBienes
              handleChange={handleToggle}
              data={right}
              columns={columns}
              height={450}
            />
            <RealizarTransferenciaModal
             
              addTipoTransferencia={addTipoTransferencia}
              disabled={ !isTransfer }
            />
            <Box
              component={"form"}
              
              justifyContent="start"
              sx={{
                mt: 1,
                display: "flex",
                justifyContent: "end",
                alignItems: "end",
                width: "100%",
              }}
            >
              <Button
                variant="contained"
                color="success"
                size="medium"
                type="submit"
                disabled={right.length == 0}
                onClick={GuardarTransferencia}
              >
                {" "}
                Realizar Transferencia
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}