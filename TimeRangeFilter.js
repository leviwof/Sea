function TimeRangeFilter(props) {
    const [range, setRange] = useState({
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    });
  
    const handleSelect = (r) => setRange(r);
  
    return (
      <div>
        <DateRangePicker ranges={[range]} onChange={handleSelect} />
        <button onClick={() => props.onFilter(range)}>Filter</button>
      </div>
    );
  }
  