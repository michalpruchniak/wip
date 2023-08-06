const TesterSkills = ({ user, key }) => {
  return (
    <>
      <tr key={`skillheader-${key}`} style={{ backgroundColor: "#efefef" }}>
        <td colSpan={2} className="text-center">
          Systemy testujące
        </td>
        <td colSpan={2} className="text-center">
          Systemy raportowe
        </td>
        <td colSpan={2} className="text-center">
          Zna Selenium?
        </td>
      </tr>
      <tr key={`skills-${key}`}>
        <td colSpan={2} className="text-center">
          {user.profile.testing_systems}
        </td>
        <td colSpan={2} className="text-center">
          {user.profile.raporting_systems}
        </td>
        <td colSpan={2} className="text-center">
          {user.profile.selenium == 1 ? "Tak" : "Nie"}
        </td>
      </tr>
    </>
  );
};

export default TesterSkills;
