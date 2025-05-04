//fragment <></> : Fragment

const MyComponent = () => {
  // const thuan = "thuan";
  // const thuan = 25;
  // const thuan = true;
  // const thuan = undefined;
  // const thuan = null;

  // const thuan = [1, 2, 3, 4, 5]; // array
  const thuan = {
    name: "thuan",
    age: 18,
  };
  return (
    <>
      <div>
        <h2>{JSON.stringify(thuan)}</h2>
        <p className="child" style={{ color: "red" }}>
          This is a simple component.
        </p>
      </div>
    </>
  );
};

export default MyComponent; //xuat ra 1 bien
