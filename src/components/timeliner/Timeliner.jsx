import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import { Box, List, ListItem, ListItemText } from "@mui/material";
const task = [
  {
    id: 1,
    tarea: "Completar informe",
    prioridad: "Alta",
    completada: false,
    nroOrden: 3,
  },
  {
    id: 2,
    tarea: "Enviar correo electrónico",
    prioridad: "Media",
    completada: true,
    nroOrden: 3,
  },
  {
    id: 3,
    tarea: "Preparar presentación",
    prioridad: "Alta",
    completada: false,
    nroOrden: 3,
  },
  {
    id: 4,
    tarea: "Reunión con equipo",
    prioridad: "Baja",
    completada: false,
    nroOrden: 3,
  },
  {
    id: 5,
    tarea: "Completar informe",
    prioridad: "Alta",
    completada: false,
    nroOrden: 3,
  },
  {
    id: 6,
    tarea: "Enviar correo electrónico",
    prioridad: "Media",
    completada: true,
    nroOrden: 3,
  },
  {
    id: 7,
    tarea: "Preparar presentación",
    prioridad: "Alta",
    completada: false,
    nroOrden: 3,
  },
  {
    id: 8,
    tarea: "Reunión con equipo",
    prioridad: "Baja",
    completada: false,
    nroOrden: 3,
  },
  {
    id: 9,
    tarea: "Completar informe",
    prioridad: "Alta",
    completada: false,
    nroOrden: 3,
  },
  {
    id: 10,
    tarea: "Enviar correo electrónico",
    prioridad: "Media",
    completada: true,
    nroOrden: 3,
  },
  {
    id: 11,
    tarea: "Preparar presentación",
    prioridad: "Alta",
    completada: false,
    nroOrden: 3,
  },
  {
    id: 12,
    tarea: "Reunión con equipo",
    prioridad: "Baja",
    completada: false,
    nroOrden: 3,
  },
];
const data = [
  {
    id: 1,
    textSecondary: "oficina 1",
    content: task,
  },
  {
    id: 2,
    textSecondary: "oficina 2",
    content: task,
  },
  {
    id: 3,
    textSecondary: "oficina 3",
    content: task,
  },
];
export default function LineaDeTiempo() {
  return (
    <Box sx={{ height: 700, overflowY: "auto", width: "100%" }}>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        {data.map((d, index) => {
          return (
            <TimelineItem key={index}>
              <TimelineOppositeContent>
                {d.textSecondary}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Box
                  sx={{
                    height: 300,
                    overflowY: "auto",
                    width: "100%",
                    border: 1,
                    borderColor: "black",
                  }}
                >
                  <List>
                    {d.content.map((task, index) => {
                      return (
                        <ListItem key={index}>
                          <ListItemText sx={{ fontSize: 13 }}>
                            Tarea: {task.tarea}
                          </ListItemText>
                          <ListItemText sx={{ fontSize: 13 }}>
                            Prioridad: {task.prioridad}
                          </ListItemText>
                          <ListItemText sx={{ fontSize: 13 }}>
                            Completada : {task.completada ? "SI" : "NO"}
                          </ListItemText>
                          <ListItemText>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Box
                                component={"button"}
                                onClick={() => {
                                  console.log(
                                    "Aca modificamos la oficina",
                                    task.id
                                  );
                                }}
                              >
                                cambiar oficina
                              </Box>
                              <Box
                                component={"button"}
                                onClick={() => {
                                  console.log("Aca taremos el pdf", task.id);
                                }}
                              >
                                {"PDF"}
                              </Box>
                            </Box>
                          </ListItemText>
                        </ListItem>
                      );
                    })}
                  </List>
                </Box>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </Box>
  );
}
