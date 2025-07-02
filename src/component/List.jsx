export const List = () => {
  const x = [
    { namee: "xyz1", classs: "gtp" },
    { namee: "xyz2", classs: "gtp" },
    { namee: "xyz3", classs: "gtp" },
    { namee: "xyz4", classs: "gtp" },
  ];
  //   2 input fields? name class

  return (
    <>
      <ul>
        <>
          {x.map((a) => (
            <li>{a.classs}</li>
          ))}
        </>
        <hr />
        {/* <li>{x[1]}</li>
        <li>{x[2]}</li>
        <li>{x[0]}</li>
        <li>{x[3]}</li>
        <li>{x[4]}</li>
        <li>{x[5]}</li>
        <li>{x[6]}</li>
        <li>{x[7]}</li>
        <h1>List {x}</h1> */}
      </ul>
    </>
  );
};
