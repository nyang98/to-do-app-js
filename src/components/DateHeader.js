const DateHeader = () => {

  const today = new Date();
  const fullDate = today.toDateString();

  const words = fullDate.split(' ');

  const dow = words[0];
  const month = words[1];
  const day = words[2];
  const year = words[3];

  return (
    <div className="timeHeader">
        <div className="timeHeader_date">
          <div className="timeHeader_date_day">
            {day}
          </div>
          <div>
            <div>
              {month}
            </div>
            <div>
              {year}
            </div>
          </div>
        </div>
      <div className="timeHeader_day">
        <h1>{dow}</h1>
      </div>
    </div>
  )
}

export default DateHeader;