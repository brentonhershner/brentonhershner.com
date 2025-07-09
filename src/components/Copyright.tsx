const Copyright = () => {
  return (
    <p className="text-sm text-center">
      {"Copyright © "}
      <a 
        className="text-inherit hover:underline" 
        href="https://brentonhershner.com/"
      >
        brentonhershner.com
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </p>
  );
};

export default Copyright;
