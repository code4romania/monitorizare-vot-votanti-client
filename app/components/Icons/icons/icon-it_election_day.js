import React from 'react';

function IconItElectionDay(props) {
  const createdAtDate = new Date(props.createdAt);
  let day = createdAtDate.getDate().toString();
  let month = (createdAtDate.getMonth() + 1).toString();

  if (day.length === 1) day = '0' + day;
  if (month.length === 1) month = '0' + month;

  return (
    <svg version="1.1" id="icon-it_election_day" x="0px" y="0px" viewBox="0 0 502 502">
      <g>
        <path d="M498.292,10c0-5.522-4.477-10-10-10H13.708c-5.523,0-10,4.478-10,10v482c0,5.522,4.477,10,10,10h474.585c5.523,0,10-4.478,10-10V10H498.292z M478.293,482h-0.001H23.708V101.569h454.585V482z M478.293,81.569H23.708V20h454.585V81.569z" />
        <text x="130" y="280" fontSize="210" fontWeight="600" fontStyle="normal" fill="rgb(95, 40, 141)">{day}</text>
        <text x="130" y="450" fontSize="210" fontWeight="700" fontStyle="normal" fill="rgb(95, 40, 141)">{month}</text>
        <path d="M51,68h189c5.523,0,10-4.478,10-10s-4.477-10-10-10H51c-5.523,0-10,4.478-10,10S45.476,68,51,68z" />
        <path d="M278,68h27c5.523,0,10-4.478,10-10s-4.477-10-10-10h-27c-5.523,0-10,4.478-10,10S272.477,68,278,68z" />
      </g>
    </svg>
  );
}

IconItElectionDay.propTypes = {
  createdAt: React.PropTypes.string,
};

export default IconItElectionDay;
