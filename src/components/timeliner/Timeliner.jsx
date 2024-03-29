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
import { data } from "../../helpers/data";

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
