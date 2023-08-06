const DeveloperSkills = ({ user, key }) => {
  return (
    <>
      <tr key={`skillheader-${key}`} style={{ backgroundColor: "#efefef" }}>
        <td colSpan={2} className="text-center">
          Śrowisko IDE
        </td>
        <td colSpan={2} className="text-center">
          Języki programowania
        </td>
        <td colSpan={2} className="text-center">
          Zna MySQL
        </td>
      </tr>
      <tr key={`skills-${key}`}>
        <td colSpan={2} className="text-center">
          {user.profile.ide}
        </td>
        <td colSpan={2} className="text-center">
          {user.profile.programming_languages}
        </td>
        <td colSpan={2} className="text-center">
          {user.profile.mysql == 1 ? "Tak" : "Nie"}
        </td>
      </tr>
    </>
  );
};

export default DeveloperSkills;
