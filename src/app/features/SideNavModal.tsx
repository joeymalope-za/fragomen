import React, { useState } from "react";
import Select from "../components/Select";
import Search from "../components/Search";
import DateRangePicker from "../components/DateRangePicker";
import { locations as data } from "../mock/locations";
import { useFormik } from "formik";

export default function SideNavPopup(): JSX.Element {
  const [locations, setLocations] = useState<Array<string>>(data);

  const formik = useFormik({
    initialValues: {
      origin: locations[0],
      destination: locations[1],
      travel: locations[3],
      dateRange: {
        departureDate: new Date(),
        arrivalDate: new Date(),
      },
      departureDate: new Date(),
      arrivalDate: new Date(),
    },
    onSubmit: () => {},
  });

  return (
    <div className="w-[30vw] max-w-[454px] min-w-[454px] h-full shadow-sm p-8 bg-[#22323F] flex flex-col gap-4">
      <h1 className="font-[600] text-2xl ">Create Itinerary</h1>
      <Select
        label="Travel Origin"
        dataSource={locations}
        value={formik.values.origin}
        onChange={formik.handleChange("origin")}
      />
      <Select
        label="Travel Destination"
        dataSource={locations}
        value={formik.values.destination}
        onChange={formik.handleChange("destination")}
      />
      <Select
        label="Purpose of Travel"
        dataSource={locations}
        value={formik.values.travel}
        onChange={formik.handleChange("travel")}
      />
      <DateRangePicker
        value={formik.values.dateRange}
        onChange={(newValue) => formik.setFieldValue("dateRange", newValue)}
      />
      <Search label="Add Travel" dataSource={locations} />
    </div>
  );
}
