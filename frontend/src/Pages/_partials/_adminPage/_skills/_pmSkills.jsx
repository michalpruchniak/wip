const PMSkills = ({ user, key }) => {
  return (
    <>
      <tr key={`skillheader-${key}`} style={{ backgroundColor: "#efefef" }}>
        <td colSpan={2} className="text-center">
          Metodologie prowadzenia projektów
        </td>
        <td colSpan={2} className="text-center">
          Systemy raportowe
        </td>
        <td colSpan={2} className="text-center">
          Zna Scrum?
        </td>
      </tr>
      <tr key={`skills-${key}`}>
        <td colSpan={2} className="text-center">
          {user.profile.methodology}
        </td>
        <td colSpan={2} className="text-center">
          {user.profile.raporting_systems}
        </td>
        <td colSpan={2} className="text-center">
          {user.profile.scrum == 1 ? "Tak" : "Nie"}
        </td>
      </tr>
    </>
  );
};

export default PMSkills;
