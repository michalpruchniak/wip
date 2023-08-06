export const useInitialUser = (reset) => {
  const initialUser = (user) => {
    if (user) {
      reset({
        name: user.profile?.name,
        lastname: user.profile?.lastname,
        email: user.profile?.email,
        description: user.profile?.description,
        job: String(user.profile?.job),
        testing_systems: user.profile?.testing_systems,
        raporting_systems: user.profile?.raporting_systems,
        selenium: user.profile?.selenium,
        ide: user.profile?.ide,
        programming_languages: user.profile?.programming_languages,
        mysql: user.profile?.mysql,
        methodology: user.profile?.methodology,
        scrum: user.profile?.scrum,
      });
    }
  };

  return initialUser;
};

export default useInitialUser;
