import Links from "./Links/Links";

const Title = () => {
  return (
    <div
      className="wordsAndPhoto flex flex-1 flex-row flex-wrap relative items-center align-middle justify-center"
    >
      {/* <ProfilePhoto /> */}
      <div
        className="wordsAndLinks relative flex flex-col items-center justify-center"
      >
        <div className="text-6xl text-center">
          Brenton Hershner
        </div>
        <p className="text-lg text-muted-foreground text-center">
          Software Engineer | BS in Mechanical Engineering | MBA
        </p>
        <div
          className="w-1/2 max-w-[600px] flex flex-row justify-around items-center"
        >
          <Links />
        </div>
      </div>
    </div>
  );
};

export default Title;
