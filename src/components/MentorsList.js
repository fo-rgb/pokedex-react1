function MentorsList() {
  const mentors = ["Ali", "Sub", "Loic", "Anthony", "Lucy", "Mozart"];
  return (
    <ul>
      {mentors.map((name, index) => (
        <li>
          {index}
          {name}
        </li>
      ))}
    </ul>
  );
}
export default MentorsList;
