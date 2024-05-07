export const Auth = () => {
  return (
    //main
    <div className="">
      <div>Alredy have an accoutn login</div>
      {/* form */}
      <div>
        <div>
          <label htmlFor="name"></label>
          <input type="text" placeholder="enter name here" />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input type="text" placeholder="enter email here" />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input type="password" placeholder="enter password here" />
        </div>
      </div>
      <div>
        <button>signup</button>
      </div>
    </div>
  );
};
