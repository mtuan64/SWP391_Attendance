import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { events } from "../data/data";
import { useNavigate } from "react-router-dom";

const localizer = momentLocalizer(moment);

export const MyCalendar = (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 700 }}
        defaultView="week"
        max={new Date("1999-01-01T18:00:00")}
        min={new Date("2999-01-01T07:00:00")}
        onSelectEvent={(event) => {navigate("/attendence/"+event.data.id)}}
      />
    </div>
  );
};

export const Lecture = () => {
  return (
    <>
      <div className="py-20">
        <MyCalendar />
      </div>
    </>
  );
};
