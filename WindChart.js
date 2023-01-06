function WindChart(props) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const data = days.map((day) => {
      return {
        day: day,
        maxWind: props.data
          .filter((d) => new Date(d.time).getDay() === days.indexOf(day))
          .reduce((max, d) => (d.wind > max ? d.wind : max), 0),
      };
    });
  
    return (
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="day" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Tooltip />
        <Bar dataKey="maxWind" fill="#8884d8" />
      </BarChart>
    );
  }
  